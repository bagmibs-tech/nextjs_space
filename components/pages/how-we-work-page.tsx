
'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { getPageContent } from '@/lib/content';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HowWeWorkPage() {
  const { language } = useLanguage();
  const [pageData, setPageData] = useState<any>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const data = getPageContent('how_we_work', language);
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
  const introSection = sections?.find?.((s: any) => s?.section_id === 'intro');
  const frameworkSection = sections?.find?.((s: any) => s?.section_id === 'five_step_framework');

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-orange-50">
      {/* Intro */}
      {introSection && (
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
                {introSection?.content?.[language]?.h1 || introSection?.content?.en?.h1}
              </h1>
              <p className="text-lg text-gray-600">
                {introSection?.content?.[language]?.body || introSection?.content?.en?.body}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Framework */}
      {frameworkSection && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              {frameworkSection?.content?.[language]?.h2 || frameworkSection?.content?.en?.h2}
            </motion.h2>

            <div className="space-y-12">
              {(frameworkSection?.content?.[language]?.steps || frameworkSection?.content?.en?.steps)?.map?.((step: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Number */}
                  <div className={`lg:col-span-2 ${index % 2 === 0 ? '' : 'lg:col-start-11'}`}>
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-3xl font-bold shadow-lg mx-auto">
                      {step?.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-10 ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 shadow-md">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step?.title}
                      </h3>
                      
                      {step?.problem && (
                        <div className="mb-4">
                          <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                            {language === 'de' ? 'Problem' : language === 'ar' ? 'المشكلة' : 'Problem'}
                          </span>
                          <p className="text-gray-700 mt-1">{step?.problem}</p>
                        </div>
                      )}
                      
                      {step?.approach && (
                        <div className="mb-4">
                          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                            {language === 'de' ? 'Ansatz' : language === 'ar' ? 'النهج' : 'Approach'}
                          </span>
                          <p className="text-gray-700 mt-1">{step?.approach}</p>
                        </div>
                      )}
                      
                      {step?.value && (
                        <div>
                          <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                            {language === 'de' ? 'Wert' : language === 'ar' ? 'القيمة' : 'Value'}
                          </span>
                          <p className="text-gray-700 mt-1">{step?.value}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
