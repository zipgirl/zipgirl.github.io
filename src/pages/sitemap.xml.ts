import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://zipgirl.github.io');
  const staticPaths = ['', 'about/', 'projects/', 'blog/'];
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const urls = [
    ...staticPaths.map(path => new URL(path, base).href),
    ...posts.map(post => new URL(`blog/${post.id}/`, base).href),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};