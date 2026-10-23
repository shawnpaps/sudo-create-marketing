import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    projectType: z.string(),
    featured: z.boolean().default(false),
    order: z.number().int().nonnegative(),
    cover: z.string(),
    coverAlt: z.string(),
    liveURL: z.string().url(),
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
