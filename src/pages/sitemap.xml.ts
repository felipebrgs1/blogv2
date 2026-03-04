import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

type SitemapEntry = {
	loc: string;
	lastmod: string;
	changefreq: 'daily' | 'weekly' | 'monthly';
	priority: string;
};

const siteUrl = siteConfig.url.replace(/\/$/, '');

const toAbsoluteUrl = (path: string): string => `${siteUrl}${path}`;

const toDateOnly = (date: Date): string => date.toISOString().split('T')[0];

const renderUrlNode = (entry: SitemapEntry): string => `
  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`;

export const GET: APIRoute = async () => {
	const posts = (await getCollection('post', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.date.getTime() - a.data.date.getTime(),
	);

	const latestPostDate = posts[0]?.data.updatedAt ?? posts[0]?.data.date ?? new Date();
	const homeLastmod = toDateOnly(latestPostDate);

	const staticEntries: SitemapEntry[] = [
		{
			loc: toAbsoluteUrl('/'),
			lastmod: homeLastmod,
			changefreq: 'daily',
			priority: '1.0',
		},
		{
			loc: toAbsoluteUrl('/post'),
			lastmod: homeLastmod,
			changefreq: 'daily',
			priority: '0.9',
		},
	];

	const postEntries: SitemapEntry[] = posts.map((post) => ({
		loc: toAbsoluteUrl(`/post/${post.slug}`),
		lastmod: toDateOnly(post.data.updatedAt ?? post.data.date),
		changefreq: 'weekly',
		priority: '0.8',
	}));

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...postEntries].map(renderUrlNode).join('\n')}
</urlset>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};
