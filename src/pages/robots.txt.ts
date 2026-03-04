import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

const siteUrl = siteConfig.url.replace(/\/$/, '');

export const GET: APIRoute = () => {
	const robots = [
		'User-agent: *',
		'Allow: /',
		'',
		`Sitemap: ${siteUrl}/sitemap.xml`,
		'',
	].join('\n');

	return new Response(robots, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
