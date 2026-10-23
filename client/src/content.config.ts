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

export const collections = { projects };
