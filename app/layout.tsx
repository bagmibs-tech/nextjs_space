
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/language-context';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { JsonLd } from '@/components/site/ui';
import { SITE_URL, OG_IMAGE } from '@/lib/site';

const inter = Inter({ subsets: ['latin'] });

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HumanAIze FZE LLC',
  url: SITE_URL,
  email: 'connect@human-aize.com',
  logo: `${SITE_URL}/logo.png`,
  founder: { '@type': 'Person', name: 'Bagmi Sahoo' },
  areaServed: ['DACH', 'UAE'],
};

// Sitewide defaults. Every page sets its own canonical/og:url/twitter via pageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'HumanAIze | AI Transformation for DACH & UAE Enterprises — ROI in 90 Days',
  description: 'HumanAIze is the AI transformation firm for DACH and UAE enterprises that ties its engagement to defined outcomes — not hours billed, not frameworks delivered, not strategies approved.',
  authors: [{ name: 'HumanAIze', url: SITE_URL }],
  creator: 'HumanAIze',
  publisher: 'HumanAIze',
  openGraph: { siteName: 'HumanAIze', locale: 'en_US', type: 'website', images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'HumanAIze' }] },
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <JsonLd data={ORGANIZATION_JSON_LD} />
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
