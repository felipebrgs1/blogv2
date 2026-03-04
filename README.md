# Astro Blog (The Lab)

Quick README to maintain this project.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Output is generated in `dist/` (ready for Cloudflare Pages).

## Where to update LinkedIn and GitHub

Edit:

- `src/config/site.ts`

Example:

```ts
export const siteConfig = {
	name: "The Lab",
	social: {
		github: "https://github.com/your-user",
		linkedin: "https://www.linkedin.com/in/your-user/",
	},
} as const;
```

## Where to update Category and Tags (typed)

Edit:

- `src/config/post-taxonomy.ts`

This file defines the allowed options for:

- `category`
- `tags`

The schema that validates this is in:

- `src/content.config.ts`

If you use a category/tag outside the list, build will fail.

## How to create a post

Create a `.md` file in:

- `src/content/post/`

Example `src/content/post/my-first-post.md`:

```md
---
title: "My first post"
description: "Short post summary."
date: 2026-03-04
author: "Your Name"
category: "Research"
tags: ["AI Safety", "Astro"]
draft: false
coverImage: "./images/my-first-post.png"
---

Post content in Markdown.
```

## Notes

- `readingTime` is automatic, based on word count.
- `siteConfig.url` in `src/config/site.ts` must be your production URL (used by canonical and sitemap).
- Cloudflare preview URLs (for example `master.<project>.pages.dev`) may return `x-robots-tag: noindex`.
  Run Lighthouse SEO on the production URL (`https://blog-4z4.pages.dev`) instead.
- Home page: `/`
- Posts list: `/post`
- Single post: `/post/[slug]`
