import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string(),
    category: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    altText: z.string(),
    image: z.string(),
    h1: z.string(),
    summary: z.string(),
    schema: z.string()
  })
});

export const collections = {
  blog,
};