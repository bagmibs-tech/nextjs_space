import type { Metadata } from 'next';

export const SITE_URL = 'https://human-aize.com';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const PRIMARY_CTA = 'Book your AI Readiness Diagnostic';
export const CTA_SUPPORT =
  '30 minutes with a senior HumanAIze advisor. No pitch. No deck. We will tell you exactly where your AI investment is leaking value — whether you engage us or not.';
export const FOOTER_TAGLINE = 'AI transformation for enterprises that need a number to change — not a deck to approve.';

export const NAV_ITEMS = [
  { id: 'home', url: '/', label: { en: 'Home', de: 'Startseite', ar: 'الرئيسية' } },
  { id: 'services', url: '/services', label: { en: 'Services', de: 'Leistungen', ar: 'الخدمات' } },
  { id: 'how_we_work', url: '/how-we-work', label: { en: 'How we work', de: 'So arbeiten wir', ar: 'كيف نعمل' } },
  { id: 'pricing', url: '/pricing', label: { en: 'Pricing', de: 'Preismodell', ar: 'التسعير' } },
  { id: 'about', url: '/about', label: { en: 'About', de: 'Über uns', ar: 'من نحن' } },
  { id: 'insights', url: '/blog', label: { en: 'Insights', de: 'Insights', ar: 'رؤى' } },
  { id: 'contact', url: '/contact', label: { en: 'Book a diagnostic', de: 'Diagnose buchen', ar: 'احجز التشخيص' } },
] as const;

/** Per-page metadata: canonical, og:url, og:image and twitter tags all on human-aize.com. */
export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'HumanAIze',
      type: 'website',
      locale: 'en_US',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE] },
  };
}
