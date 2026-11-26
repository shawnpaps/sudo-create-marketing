import { track } from "./analytics";
import { discoveryCall, getService, projectTypes, serviceProjectTypes } from "./conversion";

export function initializeInquiry() {
  const form = document.querySelector<HTMLFormElement>("[data-inquiry]");
  const success = document.querySelector<HTMLElement>("[data-inquiry-success]");
  const heading = success?.querySelector("h2");
  const projectType = form?.querySelector<HTMLSelectElement>('[name="project_type"]');
  const button = form?.querySelector<HTMLButtonElement>('button[type="submit"]');
  const error = form?.querySelector<HTMLElement>("[data-form-error]");
  const status = form?.querySelector<HTMLElement>("[data-form-status]");
  if (!form || !success || !heading || !projectType || !button || !error || !status) return;

  const query = new URLSearchParams(location.search);
  const selectedType = projectTypes.find(({ value }) => value === query.get("project_type"));
  const selectedService = getService(query.get("service"));
  if (!projectType.value) {
    projectType.value = selectedType?.value ?? (selectedService ? serviceProjectTypes[selectedService] : "");
  }

  const context = () => {
    const option = projectTypes.find(({ value }) => value === projectType.value);
    return { service: option && "service" in option ? option.service : undefined };
  };

  form.addEventListener("input", () => track("project_inquiry_started", context()), { once: true });
  let pending = false;
  let submitted = false;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (pending || submitted || !form.reportValidity()) return;

    const data = new FormData(form);
    if (data.get("_honey")) {
      error.textContent = "Please reload the page and try again, or send your inquiry by email.";
      return;
    }
    const projectOption = projectTypes.find(({ value }) => value === data.get("project_type"));
    if (!projectOption) return;
    data.set("project_type", projectOption.label);

    error.textContent = "";
    status.textContent = "Sending your project inquiry.";
    pending = true;
    button.disabled = true;
    button.textContent = "Sending…";
    form.setAttribute("aria-busy", "true");

    let accepted = false;
    try {
      const endpoint = new URL(form.action);
      endpoint.pathname = `/ajax${endpoint.pathname}`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
        credentials: "omit",
        signal: AbortSignal.timeout(15_000),
      });
      if (response.ok) {
        const result = await response.json();
        accepted = result.success === true || result.success === "true";
      }
    } catch {
      // A missing confirmation is handled the same way as a provider rejection.
    } finally {
      pending = false;
      form.removeAttribute("aria-busy");
      status.textContent = "";
    }

    if (!accepted) {
      button.disabled = false;
      button.textContent = discoveryCall.label;
      error.textContent = "I couldn’t confirm your inquiry went through. Your details are still here. Try again or email hello@sudocreate.studio.";
      track("project_inquiry_failed", context());
      return;
    }

    const submittedContext = context();
    submitted = true;
    form.reset();
    form.hidden = true;
    success.hidden = false;
    heading.focus();
    track("project_inquiry_submitted", submittedContext);
  });
}
