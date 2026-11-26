import { gaId, metaId } from "./analytics-config";
import { getService, projectTypes, type ServiceCategory } from "./conversion";

type EventName =
  | "discovery_call_clicked"
  | "contact_page_viewed"
  | "project_inquiry_started"
  | "project_inquiry_submitted"
  | "project_inquiry_failed"
  | "service_viewed"
  | "case_study_viewed"
  | "related_project_clicked"
  | "live_project_clicked";

interface EventContext {
  placement?: string;
  service?: ServiceCategory;
  project?: string;
  classification?: string;
  relatedProject?: string;
}

interface Preferences {
  analytics: boolean;
  marketing: boolean;
}

const preferenceKey = "sudo-privacy-preferences";
const campaignKey = "sudo-campaign";
const discoveryKey = "sudo-discovery-entry";
const campaignFields = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;
type Campaign = Partial<Record<(typeof campaignFields)[number] | "referral_origin", string>>;
const pathPattern = /^\/(?:work(?:\/[a-z0-9-]+)?|services|about|contact|thanks)?\/?$/;
const sourcePattern = /^[a-z0-9][a-z0-9_-]{0,79}$/i;

type VendorCommand = (...args: unknown[]) => void;
type Pixel = VendorCommand & {
  callMethod?: VendorCommand;
  queue: unknown[][];
  loaded: boolean;
  version: string;
  push?: VendorCommand;
};
const vendors = window as Window & {
  dataLayer?: IArguments[];
  gtag?: VendorCommand;
  fbq?: Pixel;
  _fbq?: Pixel;
};

// Storage may be unavailable in private browsing or embedded previews.
function read<T>(storage: "localStorage" | "sessionStorage", key: string): T | undefined {
  try {
    const raw = window[storage].getItem(key);
    return raw ? JSON.parse(raw) as T : undefined;
  } catch {
    return undefined;
  }
}

function write(storage: "localStorage" | "sessionStorage", key: string, value?: object) {
  try {
    if (value) window[storage].setItem(key, JSON.stringify(value));
    else window[storage].removeItem(key);
  } catch {
    // Tracking is optional when the browser restricts storage.
  }
}

function cleanPath(path: string) {
  return pathPattern.test(path) ? path.replace(/\/$/, "") || "/" : undefined;
}

function getReferrer() {
  try {
    const url = new URL(document.referrer);
    return ["http:", "https:"].includes(url.protocol) ? url : undefined;
  } catch {
    return undefined;
  }
}

const query = new URLSearchParams(location.search);
const route = cleanPath(location.pathname) ?? "/";
const referrer = getReferrer();
const originRoute = referrer?.origin === location.origin && referrer.pathname !== "/" ? cleanPath(referrer.pathname) : undefined;
const referralOrigin = referrer && referrer.origin !== location.origin ? referrer.origin : undefined;
const serviceFromQuery = getService(query.get("service"));
const preference = read<Preferences>("localStorage", preferenceKey);
let consent: Preferences = { analytics: preference?.analytics === true, marketing: preference?.marketing === true };
let googleLoaded = false;
let contactViewSent = false;

const entry = route === "/contact" && consent.analytics
  ? read<EventContext & { route: string; time: number }>("sessionStorage", discoveryKey)
  : undefined;
if (entry) write("sessionStorage", discoveryKey);
const contactEntry = entry && referrer?.origin === location.origin && (!originRoute || entry.route === originRoute) && entry.service === serviceFromQuery && Date.now() - entry.time < 120_000
  ? entry : undefined;

function getCampaign(): Campaign {
  const stored = read<Campaign>("sessionStorage", campaignKey);
  const campaign: Campaign = {};
  for (const key of campaignFields) {
    const value = stored?.[key] ?? query.get(key);
    if (typeof value === "string" && sourcePattern.test(value) && !/\d{7}/.test(value)) campaign[key] = value;
  }
  const source = stored?.referral_origin ?? referralOrigin;
  if (typeof source === "string" && /^https?:\/\/[a-z0-9.-]+(?::\d+)?$/i.test(source)) {
    campaign.referral_origin = source;
  }
  if (Object.keys(campaign).length) write("sessionStorage", campaignKey, campaign);
  return campaign;
}

function loadScript(src: string) {
  const script = document.createElement("script");
  script.async = true;
  script.referrerPolicy = "no-referrer";
  script.src = src;
  document.head.append(script);
}

function initializeGoogle() {
  if (!googleLoaded) {
    googleLoaded = true;
    vendors.dataLayer ??= [];
    vendors.gtag ??= function () { vendors.dataLayer?.push(arguments); };
    vendors.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    vendors.gtag("js", new Date());
    vendors.gtag("config", gaId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_location: new URL(route, location.origin).href,
      page_referrer: originRoute ? new URL(originRoute, location.origin).href : referralOrigin ?? "",
    });
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`);
  }
}

function metaLead() {
  // Pixel reads the surrounding URL and referrer itself. Skip it when those
  // surfaces contain values this site cannot account for.
  if (location.hash || [...query].some(([key, value]) => {
    if (key === "service") return !getService(value);
    if (key === "project_type") return !projectTypes.some((type) => type.value === value);
    return true;
  })) return;
  if (referrer && (referrer.search || referrer.hash || (!originRoute && referrer.pathname !== "/"))) return;

  if (!vendors.fbq) {
    const pixel: Pixel = Object.assign(
      (...args: unknown[]) => pixel.callMethod ? pixel.callMethod(...args) : pixel.queue.push(args),
      { queue: [] as unknown[][], loaded: true, version: "2.0" },
    );
    pixel.push = pixel;
    vendors.fbq = vendors._fbq = pixel;
    pixel("set", "autoConfig", false, metaId);
    pixel("consent", "grant");
    pixel("init", metaId);
    loadScript("https://connect.facebook.net/en_US/fbevents.js");
  }
  vendors.fbq("trackSingle", metaId, "Lead");
}

export function track(event: EventName, context: EventContext = {}) {
  const details = {
    route,
    origin_route: contactEntry?.route ?? originRoute,
    cta_placement: context.placement ?? contactEntry?.placement,
    service_category: context.service ?? serviceFromQuery,
    project_id: context.project ?? contactEntry?.project,
    project_classification: context.classification ?? contactEntry?.classification,
    related_project_id: context.relatedProject,
    ...(gaId && consent.analytics ? getCampaign() : {}),
  };

  document.dispatchEvent(new CustomEvent("sudo:conversion", { detail: { event, ...details } }));
  if (gaId && consent.analytics) {
    initializeGoogle();
    vendors.gtag?.("event", event === "project_inquiry_submitted" ? "generate_lead" : event, details);
  }
  if (metaId && consent.marketing && event === "project_inquiry_submitted") metaLead();
}

function contactView() {
  if (route === "/contact" && !contactViewSent) {
    contactViewSent = true;
    track("contact_page_viewed");
  }
}

export function initializeTracking() {
  if (gaId && consent.analytics) {
    getCampaign();
    initializeGoogle();
  }

  const preferences = document.querySelector<HTMLFormElement>("[data-tracking-preferences] form");
  if (preferences) {
    const analytics = preferences.querySelector<HTMLInputElement>('[name="analytics"]');
    const marketing = preferences.querySelector<HTMLInputElement>('[name="marketing"]');
    if (analytics) analytics.checked = consent.analytics;
    if (marketing) marketing.checked = consent.marketing;
    preferences.addEventListener("submit", (event) => {
      event.preventDefault();
      consent = { analytics: analytics?.checked === true, marketing: marketing?.checked === true };
      write("localStorage", preferenceKey, consent);
      if (consent.analytics) getCampaign();
      else {
        write("sessionStorage", campaignKey);
        write("sessionStorage", discoveryKey);
      }
      // Stop the active tags immediately if a visitor changes their mind.
      (vendors as unknown as Record<string, unknown>)[`ga-disable-${gaId}`] = !consent.analytics;
      if (googleLoaded) vendors.gtag?.("consent", "update", { analytics_storage: consent.analytics ? "granted" : "denied" });
      else if (gaId && consent.analytics) initializeGoogle();
      vendors.fbq?.("consent", consent.marketing ? "grant" : "revoke");
      const status = preferences.querySelector("[data-preferences-status]");
      if (status) status.textContent = "Preferences saved.";
    });
  }

  contactView();
  const project = document.body.dataset.caseStudy;
  const classification = document.body.dataset.caseClassification;
  const caseService = getService(document.body.dataset.caseService ?? null);
  if (project) track("case_study_viewed", { project, classification, service: caseService });

  const onInteraction = (event: MouseEvent) => {
    if (event.type === "auxclick" && event.button !== 1) return;
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest<HTMLAnchorElement>("a[data-discovery-call], a[data-live-project], a[data-related-project]");
    if (!link) return;
    const service = getService(link.dataset.service ?? null);
    if ("discoveryCall" in link.dataset) {
      const context = { service, placement: link.dataset.placement, project: link.dataset.project, classification: link.dataset.project ? classification : undefined };
      if (gaId && consent.analytics) write("sessionStorage", discoveryKey, { ...context, route, time: Date.now() });
      track("discovery_call_clicked", context);
    } else if (link.dataset.relatedProject) {
      track("related_project_clicked", {
        service: caseService,
        project,
        classification,
        relatedProject: link.dataset.relatedProject,
        placement: "related-projects",
      });
    } else {
      track("live_project_clicked", { service, project: link.dataset.liveProject, classification, placement: link.dataset.placement });
    }
  };
  document.addEventListener("click", onInteraction);
  document.addEventListener("auxclick", onInteraction);

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const service = getService(entry.target.closest<HTMLElement>("[data-service-view]")?.dataset.serviceView ?? null);
      if (service) track("service_viewed", { service });
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-service-view] h2").forEach((heading) => observer.observe(heading));
}
