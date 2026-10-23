import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const PATHS = [
  '', '/services', '/how-we-work', '/pricing', '/about', '/faq', '/blog', '/contact',
  '/blog/dach-ai-acceleration', '/blog/uae-ai-leadership', '/blog/dach-uae-cross-learning',
  '/case-studies', '/case-studies/automotive-quality-assurance', '/case-studies/banking-invoice-automation',
  '/case-studies/energy-predictive-maintenance', '/case-studies/healthcare-document-automation',
  '/resources', '/resources/ai-roi-playbook', '/assessment',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({ url: `${SITE_URL}${p}`, lastModified: new Date(), changeFrequency: 'weekly', priority: p ? 0.7 : 1 }));
}
