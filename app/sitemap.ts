import type { MetadataRoute } from 'next';

const BASE = 'https://human-aize.com';
const PATHS = [
  '', '/about', '/services', '/how-we-work', '/blog', '/contact', '/assessment', '/case-studies',
  '/case-studies/automotive-quality-assurance', '/case-studies/banking-invoice-automation',
  '/case-studies/energy-predictive-maintenance', '/case-studies/healthcare-document-automation',
  '/resources', '/resources/ai-roi-playbook',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({ url: `${BASE}${p}`, lastModified: new Date(), changeFrequency: 'weekly', priority: p ? 0.7 : 1 }));
}
