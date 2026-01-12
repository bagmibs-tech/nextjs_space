
'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { getPageContent } from '@/lib/content';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from '@/components/sections/hero-section';
import TrustStrip from '@/components/sections/trust-strip';
import AboutSnapshot from '@/components/sections/about-snapshot';
import ServicesOverview from '@/components/sections/services-overview';
import HowWeWorkTeaser from '@/components/sections/how-we-work-teaser';
import PricingStrategy from '@/components/sections/pricing-strategy';
import CaseStudiesHighlight from '@/components/sections/case-studies-highlight';
import FounderSnapshot from '@/components/sections/founder-snapshot';
import Manifesto from '@/components/sections/manifesto';
import TrustedBy from '@/components/sections/trusted-by';
import IndustriesServed from '@/components/sections/industries-served';
import FinalCTA from '@/components/sections/final-cta';
import NewsletterSignup from '@/components/newsletter-signup';

export default function HomePage() {
  const { language } = useLanguage();
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    const data = getPageContent('homepage', language);
    setPageData(data);
  }, [language]);

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  const sections = pageData?.sections || [];
  
  const getSection = (id: string) => sections?.find?.((s: any) => s?.section_id === id);

  return (
    <div className="w-full">
      <HeroSection data={getSection('hero')} language={language} />
      <TrustStrip data={getSection('trust_strip')} language={language} />
      <AboutSnapshot data={getSection('about_snapshot')} language={language} />
      <ServicesOverview data={getSection('services_overview')} language={language} />
      <HowWeWorkTeaser data={getSection('how_we_work_teaser')} language={language} />
      <PricingStrategy data={getSection('pricing_strategy')} language={language} />
      <CaseStudiesHighlight data={getSection('case_studies_highlight')} language={language} />
      <FounderSnapshot data={getSection('founder_snapshot')} language={language} />
      <Manifesto language={language} />
      <NewsletterSignup language={language} />
      <FinalCTA data={getSection('final_cta')} language={language} />
      <TrustedBy language={language} />
      <IndustriesServed language={language} />
    </div>
  );
}
