import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { projectTypes } from "./lib/conversion";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    classification: z.string(),
    service: z.enum(["websites", "apps", "commerce"]).optional(),
    summary: z.string(),
    headline: z.string().optional(),
    projectName: z.string().optional(),
    introduction: z.array(z.string()).optional(),
    industry: z.string().optional(),
    services: z.array(z.string()).default([]),
    seo: z.object({ title: z.string(), description: z.string() }).optional(),
    conversion: z.object({ heading: z.string(), copy: z.string() }).optional(),
    heroLayout: z.enum(["split", "wide"]).default("split"),
    outcome: z.array(z.string()).optional(),
    results: z.array(z.object({
      value: z.string(),
      label: z.string(),
      context: z.string(),
    })).optional(),
    related: z.array(z.string()).default([]),
    gallery: z.array(z.object({
      src: z.string(),
      width: z.number().int().positive(),
      height: z.number().int().positive(),
      alt: z.string(),
      caption: z.string(),
    })).default([]),
    inquiryType: z.enum(projectTypes.map(({ value }) => value)).optional(),
    testimonial: z.string().optional(),
    projectType: z.string(),
    featured: z.boolean().default(false),
    order: z.number().int().nonnegative(),
    cover: z.string(),
    coverSmall: z.string().optional(),
    coverWidth: z.number().int().positive().optional(),
    coverHeight: z.number().int().positive().optional(),
    socialImage: z.string().optional(),
    coverAlt: z.string(),
    liveURL: z.url(),
    applicationURL: z.url().optional(),
    stack: z.array(z.string()).default([]),
  }),
});

const testimonials = defineCollection({
  loader: glob({ base: "./src/content/testimonials", pattern: "**/*.md" }),
  schema: z.object({
    displayName: z.string(),
    company: z.string().nullable().default(null),
    role: z.string().nullable().default(null),
    rating: z.number().int().min(1).max(5),
    source: z.string().optional(),
    featured: z.boolean().default(false),
    sortOrder: z.number().int().nonnegative(),
  }),
});

export const collections = { projects, testimonials };
