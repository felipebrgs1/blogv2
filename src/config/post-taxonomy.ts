export const POST_CATEGORIES = ["Research", "Systems", "Design", "Analysis"] as const;

export const POST_TAGS = ["Code", "Frontend", "Backend", "UI", "UX", "AI"] as const;

export type PostCategory = (typeof POST_CATEGORIES)[number];
export type PostTag = (typeof POST_TAGS)[number];
