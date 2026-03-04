export const POST_CATEGORIES = [
	"Research",
	"Systems",
	"Design",
	"Essay",
] as const;

export const POST_TAGS = [
	"AI Safety",
	"Alignment",
	"Astro",
	"Cloudflare",
	"Jamstack",
	"UI",
	"Dark Mode",
] as const;

export type PostCategory = (typeof POST_CATEGORIES)[number];
export type PostTag = (typeof POST_TAGS)[number];
