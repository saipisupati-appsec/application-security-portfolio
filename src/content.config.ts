import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    pid: z.number().int().positive(),
    title: z.string(),
    title_de: z.string().optional(),
    description: z.string(),
    description_de: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z
      .enum([
        "application-security",
        "software-engineering",
        "supply-chain",
        "cloud-security",
      ])
      .default("application-security"),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .default([]),
    image: z.string().optional(),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    date: z.coerce.date(),
    slug: z.string().optional(),
    ready: z.boolean().default(true),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };