export const discoveryCall = {
  label: "Request a discovery call",
  path: "/contact",
};

export const serviceProjectTypes = {
  websites: "new-website",
  apps: "custom-application",
  commerce: "ecommerce",
} as const;

export type ServiceCategory = keyof typeof serviceProjectTypes;

export const projectTypes = [
  { value: "new-website", label: "New website", service: "websites" },
  { value: "website-redesign", label: "Website redesign", service: "websites" },
  { value: "custom-application", label: "Custom application", service: "apps" },
  { value: "mvp", label: "MVP or digital product", service: "apps" },
  { value: "ecommerce", label: "E-commerce website", service: "commerce" },
  { value: "other", label: "Something else" },
] as const;

export type ProjectType = (typeof projectTypes)[number]["value"];

export function getService(value: string | null): ServiceCategory | undefined {
  return value === "websites" || value === "apps" || value === "commerce" ? value : undefined;
}
