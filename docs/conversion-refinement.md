# Conversion and release notes

## Site and content

The website stays on Astro’s static build with Tailwind v4 and Markdown content collections. The shared layout, navigation, homepage, services, work index, case studies, About, Contact, and the legacy Thanks page use the refreshed brand. The existing `/works` redirect remains in place. The canonical host and sitemap use `www.sudocreate.studio`, the host to which the live apex domain redirects.

| Changed area | Files and routes |
| --- | --- |
| Routes | `/`, `/services/`, `/work/`, `/work/h2o-pros/`, `/work/tourpass/`, `/work/adventures-md/`, `/work/keystone-yoga/`, `/work/boardstate/`, `/about/`, `/contact/`, `/thanks/` |
| Shared templates | `BaseLayout`, `Navigation`, `CustomerReferences`, `ProjectGrid` |
| Reusable components | `DiscoveryCall`, `InquirySection`, `ServiceOverview`, `FrequentlyAsked`, `ClientQuote`, `FounderPortrait`, `ProjectImage`, `TrackingPreferences` |
| Shared logic | `conversion.ts`, `services.ts`, `inquiry.ts`, `analytics.ts`, `analytics-config.ts` |
| Content and discovery | Project Markdown frontmatter, Astro collection schema, canonical metadata, sitemap, and robots |

The homepage leads with website and application development, then introduces client proof, service outcomes, alternating client website and studio application projects, Shawn’s approach and process, his story, reviews, FAQs, and the inquiry CTA. The Services page carries the detailed capabilities and related work. All three existing reviews remain available. The work index also includes Keystone Yoga, with its existing client review and a redesign-specific inquiry link. Decorative labels were removed from the public templates. Project classifications, service names, implementation details, process sequence, and form labels remain functional.

`DiscoveryCall.astro` reads its label and destination from `src/lib/conversion.ts`. The CTA, inquiry section, FAQ, quote, service overview, and project grid can be reused for dedicated campaign pages. Existing service anchors and the `service` query parameter are preserved. `project_type` also accepts an approved value such as `website-redesign` or `mvp`. Set service and project context on new CTAs where appropriate.

## Inquiry form

The form posts to the same FormSubmit destination and keeps the email field and notification subject. The enhanced path uses the provider’s AJAX endpoint and requires both a successful HTTP response and an explicit success value before showing the inline receipt. A honeypot supplements the existing CAPTCHA configuration. Native email and required-field validation run before submission. The form blocks additional sends while a request is in progress, retains entered details if confirmation fails, and focuses the receipt heading after success. With JavaScript disabled, the browser uses the original FormSubmit POST and the provider’s confirmation page. Direct visits to `/thanks/` show a link to Contact. [FormSubmit form documentation](https://formsubmit.co/documentation) · [FormSubmit AJAX documentation](https://formsubmit.co/ajax-documentation)

A network timeout is ambiguous. The provider may have accepted an inquiry even when the browser receives no confirmation. The client guard prevents duplicate in-flight requests. A later retry is a separate request. Delivery to the inbox is controlled by FormSubmit.

| Build-time environment variable | Purpose |
| --- | --- |
| `PUBLIC_FORMSUBMIT_ID` | Optional 32-character FormSubmit destination ID for an approved test inbox or another configured destination. The existing destination is the default. |
| `PUBLIC_GA4_MEASUREMENT_ID` | Optional GA4 web-stream measurement ID beginning with `G-`. |
| `PUBLIC_META_PIXEL_ID` | Optional numeric Meta Pixel ID. |

Set values in the environment for the relevant Astro build. Development can use `client/.env.local`. These IDs are public configuration. Delivery to different inboxes depends on which FormSubmit destination was activated.

## Analytics

The site emits a `sudo:conversion` DOM event for each interaction below. External vendor calls require configured IDs and a saved opt-in to the corresponding measurement category under Privacy preferences in the footer. Preferences can be changed there. The analytics module uses the allowed campaign keys and origin-only external referrer when available. GA4 attribution is retained in tab session storage after opt-in. CTA context follows the navigation to Contact when the browser provides a same-origin referrer and matching session context.

| Internal event | Trigger | Vendor mapping |
| --- | --- | --- |
| `discovery_call_clicked` | A tracked navigation, homepage, service, case study, About, or footer CTA is clicked | GA4 custom event |
| `contact_page_viewed` | The Contact page initializes | GA4 custom event |
| `project_inquiry_started` | First edit to the inquiry form | GA4 custom event |
| `project_inquiry_failed` | A submission attempt receives a rejection or fails to receive confirmation | GA4 custom event |
| `project_inquiry_submitted` | A valid form receives a success response from FormSubmit | GA4 `generate_lead`, Meta `Lead` |
| `service_viewed` | A service detail heading comes into view | GA4 custom event |
| `case_study_viewed` | A case study initializes | GA4 custom event |
| `live_project_clicked` | A case study’s live website or application link is clicked | GA4 custom event |
| `related_project_clicked` | A related case study link is clicked | GA4 custom event |

Available context includes route, originating route, placement, service category, project identifier, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and external referral origin. Campaign names must use plain campaign slugs with letters, digits, underscores, or hyphens. Keep customer identifiers and personal information out of campaign names and URLs. Only FormSubmit receives inquiry field values. GA4 receives a page location without the query or fragment. Meta’s script can read the page URL and referrer, so the site skips the Pixel on submissions with unexpected query parameters, fragments, or a detailed referrer. Use a main site page as a campaign entry point when measuring with Meta.

For release, enter the approved IDs for the intended environment. In GA4, disable enhanced form measurement and automatic user-provided data collection for the stream, register any reporting dimensions you need, and verify `generate_lead` in DebugView. Mark `generate_lead` as the inquiry key event. In Meta Events Manager, keep automatic advanced matching and automatic event discovery disabled, then verify `Lead` with an approved test. Review the site’s public privacy disclosure and consent setup for the intended audiences before enabling either vendor.

## Media and founder review

- Both logo variants were available. The original black and orange script is used on paper, with the reversed version in the footer.
- Updated `favicon.svg`, `favicon.ico`, and `og-image.svg`. Added `og-image.jpg` for shared social previews. Added `project-covers/keystone-yoga.svg`. Recolored the studio-created illustrations `project-covers/h2o-pros.svg`, `adventures-md.svg`, and `boardstate.svg`. Added `headshot-{640,1280}.webp` and `project-covers/tourpass-{720,1440}.webp` for responsive delivery. The source logos, photograph, and Tourpass screenshot remain as supplied.
- The later [case study enhancement](case-study-enhancement.md) added public screenshots for Your Friendly H2O Pros, Tourpass, Adventures MD, and Boardstate. See its evidence list for restricted or missing captures.
- Confirm the FAQ wording for scoped timing, remote collaboration, and ongoing support. Confirm the optional budget ranges and the existing H2O reviewer attribution before release. The review quote and attribution use the collection’s existing wording.
- Use real project screenshots in future case-study updates after approval. Measure Core Web Vitals after a production release with sufficient traffic.

## Verification

- The Astro production build generated 12 routes. Astro Check found zero errors, warnings, or hints across 28 files. The repo supplied no standalone lint, type-check, or unit-test script. `git diff --check` passed.
- During the conversion refresh, Chromium exercised ten rendered routes at each requested width. It also checked primary CTA destinations and visibility, the legacy redirect, canonical metadata, sitemap rules, keyboard skip and FAQ controls, and reduced motion. The four external portfolio URLs resolved with HTTP 200.
- Axe reported no WCAG 2.2 AA rule violations on the sampled 390px and 1440px pages or in the tested inquiry and consent states. Measured foreground contrast was 6.51:1 for black on orange, 6.82:1 for deep orange on paper, and 13.98:1 for paper on charcoal.
- Browser mocks covered validation, server rejection, retry, duplicate clicks in flight, success, no-JavaScript form fallback, service preselection, first-touch campaign attribution, vendor opt-in and revocation, and one lead per confirmed inquiry. Personal form data went only to the mocked FormSubmit request.

Production email delivery and receipt, provider activation or quotas, and vendor account reporting require an approved test destination or real account access. Local tests intercept FormSubmit and analytics endpoints. Review the production inbox and vendor test views before enabling ads or treating reports as a lead source. Production deployment is pending approval.
