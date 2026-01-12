
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/language-context';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HumanAIze – AI-Business Orchestrator for DACH & UAE | 90-Day ROI',
  description: 'HumanAIze helps DACH and UAE enterprises turn AI and digital transformation into measurable ROI in 90 days. Strategy, execution, and ROI-as-a-Service with human-first, compliant approach.',
  keywords: ['AI business orchestrator', 'AI consulting DACH', 'AI consulting UAE', 'AI consulting Germany', 'AI consulting Middle East', 'digital transformation partner', 'Industry 4.0 ROI', 'cloud and SAP modernization', 'enterprise AI strategy', 'AI implementation', 'machine learning consulting', 'data strategy consulting', 'AI ROI', 'digital transformation UAE', 'KI Beratung Deutschland'],
  authors: [{ name: 'HumanAIze', url: 'https://human-aize.com' }],
  creator: 'HumanAIze',
  publisher: 'HumanAIze',
  metadataBase: new URL('https://humanaize-website-final.abacusai.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'de': '/de',
      'ar': '/ar',
    },
  },
  openGraph: {
    title: 'HumanAIze – AI-Business Orchestrator for DACH & UAE',
    description: 'Turn AI investments into measurable ROI in 90 days. Strategy, execution, and ROI-as-a-Service for DACH and UAE enterprises.',
    url: 'https://humanaize-website-final.abacusai.app',
    siteName: 'HumanAIze',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HumanAIze - AI-Business Orchestration',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HumanAIze – AI-Business Orchestrator for DACH & UAE',
    description: 'Turn AI investments into measurable ROI in 90 days. Strategy, execution, and ROI-as-a-Service.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
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
