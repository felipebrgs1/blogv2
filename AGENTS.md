# AGENTS.md

Project guidelines for coding agents working in this repository.

## Stack

- Framework: Astro 5
- Styling: Tailwind CSS 4 (`@import "tailwindcss"`)
- Build output: static (`dist/`)
- Deploy target: Cloudflare Pages

## Run and Validate

- Install: `npm install`
- Dev: `npm run dev`
- Build check (required before finishing work): `npm run build`

## Project Structure

- Pages:
  - `src/pages/index.astro` (home)
  - `src/pages/post/index.astro` (posts list)
  - `src/pages/post/[slug].astro` (single post)
- Base layout: `src/layouts/BaseLayout.astro`
- Global styles: `src/global.css`
- Content schema: `src/content.config.ts`
- Posts: `src/content/post/<slug>/index.md`
- Post images: `src/content/post/<slug>/images/*`
- Site config (name + social links): `src/config/site.ts`
- Typed taxonomy: `src/config/post-taxonomy.ts`
- Reading time utility: `src/utils/reading-time.ts`

## Content Rules

sempre usar astro:assets para imagens
exemplo:
sempre no formato webp

```
import { Image } from 'astro:assets';
<Image src={vinextBuildClient} alt="Comparativo de build e client-side entre Next.js e Vinext" />
```

- Each post must live in its own folder: `src/content/post/<slug>/`.
- The Markdown entry file for each post is `index.md`.
- Keep post-specific images in `src/content/post/<slug>/images/`.
- `category` and `tags` are validated by the typed lists in `src/config/post-taxonomy.ts`.
- Do not add categories/tags directly in posts unless they already exist in taxonomy.
- `readingTime` is automatic (word-count based). Do not add `readingTime` manually in frontmatter.

## Theme and UI Notes

- Dark mode uses class-based variant in Tailwind v4 via:
  - `@custom-variant dark (&:where(.dark, .dark *));`
- Theme toggle is handled in `BaseLayout.astro` and persisted in `localStorage`.
- Single post hero image has scroll parallax + opacity fade logic in `src/pages/post/[slug].astro`.

## Editing Guidelines

- Keep changes minimal and consistent with existing style.
- Prefer updating existing files over creating parallel alternatives.
- If changing schema/taxonomy, ensure all posts still pass validation.
- If adding new behavior, keep it compatible with static build and Cloudflare Pages.

## Final Check

Before completing a task:

1. Run `npm run build`.
2. Confirm no schema/type errors.
3. Confirm new routes/content are generated in build output.
