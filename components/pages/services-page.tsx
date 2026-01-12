
'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { getPageContent } from '@/lib/content';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  const { language } = useLanguage();
  const [pageData, setPageData] = useState<any>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const data = getPageContent('services', language);
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
  const digitalSection = sections?.find?.((s: any) => s?.section_id === 'digital_transformation');
  const aiSection = sections?.find?.((s: any) => s?.section_id === 'ai_strategy');
  const eaSection = sections?.find?.((s: any) => s?.section_id === 'enterprise_architecture');

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

      {/* Digital Transformation */}
      {digitalSection && (
        <ServiceSection
          section={digitalSection}
          language={language}
          bgColor="bg-white"
        />
      )}

      {/* AI Strategy */}
      {aiSection && (
        <ServiceSection
          section={aiSection}
          language={language}
          bgColor="bg-gradient-to-br from-blue-50 to-white"
        />
      )}

      {/* Enterprise Architecture */}
      {eaSection && (
        <ServiceSection
          section={eaSection}
          language={language}
          bgColor="bg-white"
        />
      )}
    </div>
  );
}

function ServiceSection({ section, language, bgColor }: any) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const content = section?.content?.[language] || section?.content?.en || {};

  return (
    <section ref={ref} id={section?.anchor} className={`py-20 ${bgColor}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-12"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content?.h2}
            </h2>
            <p className="text-lg text-gray-600">
              {content?.description}
            </p>
          </div>

          {/* Sub-services or Capabilities */}
          {(content?.sub_services || content?.capabilities) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(content?.sub_services || content?.capabilities)?.map?.((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item?.title}
                  </h3>
                  <ul className="space-y-2">
                    {item?.details?.map?.((detail: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {/* Outcomes or Offerings */}
          {(content?.outcomes || content?.offerings) && (
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {content?.outcomes ? (language === 'de' ? 'Ergebnisse' : language === 'ar' ? 'النتائج' : 'Outcomes') : (language === 'de' ? 'Angebote' : language === 'ar' ? 'العروض' : 'Offerings')}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(content?.outcomes || content?.offerings)?.map?.((item: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-900 font-medium">
                      {typeof item === 'string' ? item : item?.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Typical KPIs */}
          {content?.typical_kpis && (
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {language === 'de' ? 'Typische KPIs' : language === 'ar' ? 'مؤشرات الأداء الرئيسية النموذجية' : 'Typical KPIs'}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content?.typical_kpis?.map?.((kpi: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-900 font-medium">{kpi}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
