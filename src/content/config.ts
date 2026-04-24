import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        year: z.string(),
        role: z.string().optional(),
        stack: z.array(z.string()),
        repo: z.string().url().optional(),
        playStore: z.string().url().optional(),
        coverImage: z.string().optional(),
        heroImage: z.string().optional(),
        gallery: z.array(z.string()).optional(),
        status: z.string().optional()
    })
});

const experiments = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        platforms: z.array(z.string()),
        chrome: z.string().url(),
        edge: z.string().url(),
        firefox: z.string().url(),
        images: z.array(z.string()).min(1)
    })
});

export const collections = {
    projects,
    experiments
};