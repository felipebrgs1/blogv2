const DEFAULT_WORDS_PER_MINUTE = 200;

const stripMarkdown = (content: string): string =>
	content
		.replace(/```[\s\S]*?```/g, " ")
		.replace(/`[^`]*`/g, " ")
		.replace(/!\[[^\]]*]\([^)]+\)/g, " ")
		.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
		.replace(/[#>*_~]/g, " ")
		.replace(/\s+/g, " ")
		.trim();

export const countWords = (content: string): number => {
	const normalized = stripMarkdown(content);
	if (!normalized) {
		return 0;
	}

	return normalized.split(" ").length;
};

export const calculateReadingTime = (
	content: string | undefined | null,
	wordsPerMinute = DEFAULT_WORDS_PER_MINUTE,
): string => {
	const words = countWords(content ?? "");
	const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
	return `${minutes} min read`;
};
