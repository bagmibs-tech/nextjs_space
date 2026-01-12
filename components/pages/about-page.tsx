
'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { getPageContent } from '@/lib/content';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const { language } = useLanguage();
  const [pageData, setPageData] = useState<any>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const data = getPageContent('about', language);
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
  const aboutIntro = sections?.find?.((s: any) => s?.section_id === 'about_intro');
  const brandPillars = sections?.find?.((s: any) => s?.section_id === 'brand_pillars');
  const founderStory = sections?.find?.((s: any) => s?.section_id === 'founder_story');

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-orange-50">
      {/* About Intro */}
      {aboutIntro && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {aboutIntro?.content?.[language]?.h1 || aboutIntro?.content?.en?.h1}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {aboutIntro?.content?.[language]?.body || aboutIntro?.content?.en?.body}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Brand Pillars */}
      {brandPillars && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              {brandPillars?.content?.[language]?.h2 || brandPillars?.content?.en?.h2}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(brandPillars?.content?.[language]?.pillars || brandPillars?.content?.en?.pillars)?.map?.((pillar: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {pillar?.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {pillar?.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Founder Story */}
      {founderStory && (
        <section id="founder" className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Profile Picture */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-cyan-500/20">
                  <Image
                    src="/founder-profile.jpg"
                    alt="Bagmi Sahoo - Founder of HumanAIze"
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </motion.div>

              {/* Right - Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {founderStory?.content?.[language]?.h2 || founderStory?.content?.en?.h2}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                  {founderStory?.content?.[language]?.body || founderStory?.content?.en?.body}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
