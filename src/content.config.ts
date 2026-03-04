import { defineCollection, z } from "astro:content";
import { POST_CATEGORIES, POST_TAGS } from "./config/post-taxonomy";

const post = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			updatedAt: z.coerce.date().optional(),
			author: z.string().default("Felipe"),
			category: z.enum(POST_CATEGORIES).default("Research"),
			tags: z.array(z.enum(POST_TAGS)).default([]),
			draft: z.boolean().default(false),
			coverImage: image().optional(),
		}),
});

export const collections = { post };
