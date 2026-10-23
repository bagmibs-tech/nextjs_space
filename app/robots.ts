import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const AI_AND_SEARCH_BOTS = ['GPTBot', 'PerplexityBot', 'ClaudeBot', 'Google-Extended', 'Googlebot', 'Bingbot', 'DuckDuckBot', 'Applebot'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_AND_SEARCH_BOTS.map((userAgent) => ({ userAgent, allow: '/', disallow: ['/api/'] })),
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
