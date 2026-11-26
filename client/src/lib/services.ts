import type { ServiceCategory } from "./conversion";

interface Service {
  id: ServiceCategory;
  name: string;
  headline: string;
  summary: string;
  capabilities: string[];
  projects: { id: string; name: string }[];
}

export const services: Service[] = [
  {
    id: "websites",
    name: "Website design and development",
    headline: "Websites that turn interest into action.",
    summary: "Give people a clear reason to choose your business. We build fast, distinctive websites that explain what you do, earn trust, and make the next step easy.",
    capabilities: ["Custom websites and redesigns", "Lead-generation sites and campaign landing pages", "Content management and migration", "Responsive design and development", "Performance, accessibility, and technical SEO"],
    projects: [{ id: "h2o-pros", name: "Your Friendly H2O Pros" }, { id: "keystone-yoga", name: "Keystone Yoga" }, { id: "adventures-md", name: "Adventures MD" }],
  },
  {
    id: "apps",
    name: "Custom application development",
    headline: "Turn your idea into something people can use.",
    summary: "From a first product release to a tool that makes your business run better, we build maintainable software around the way people actually work.",
    capabilities: ["Product strategy and prototyping", "MVPs and full-stack web applications", "Internal tools and customer portals", "Subscription software and ongoing product development"],
    projects: [{ id: "tourpass", name: "Tourpass" }, { id: "boardstate", name: "Boardstate" }],
  },
  {
    id: "commerce",
    name: "E-commerce development",
    headline: "Make it easier for customers to buy.",
    summary: "Build a storefront that feels like your brand, helps people find the right products, and gives them a straightforward path to checkout.",
    capabilities: ["Shopify and custom storefronts", "Product discovery and collection systems", "Checkout experience and store integrations", "Responsive design and performance"],
    projects: [],
  },
];
