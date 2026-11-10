import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const releaseSchema = z.object({
  title: z.string(),
  kind: z.enum(["desktop", "service", "tool"]),
  version: z.string(),
  status: z.enum(["alpha", "beta", "stable"]),
  tagline: z.string(),
  repo: z.string(),
  download: z.string(),
  features: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    )
    .optional(),
  changelog: z
    .array(
      z.object({
        version: z.string(),
        date: z.string(),
        summary: z.string(),
      })
    )
    .optional(),
  installTabs: z
    .array(
      z.object({
        label: z.string(),
        code: z.string(),
      })
    )
    .optional(),
});

const releases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/releases" }),
  schema: releaseSchema,
});

const releases_id = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/releases_id" }),
  schema: releaseSchema,
});

export const collections = {
  releases,
  releases_id,
};

