
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Globe2 } from 'lucide-react';

interface TrustStripProps {
  data: any;
  language: string;
}

export default function TrustStrip({ data, language }: TrustStripProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const content = data?.content?.[language] || data?.content?.en || {};
  const { regions, sectors, trusted_by_label, clients } = content;

  return (
    <section ref={ref} className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Regions & Sectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Globe2 className="text-blue-600 flex-shrink-0 mt-1" size={20} />
              <p className="text-sm text-gray-700">{regions}</p>
            </div>
            <div className="flex items-start gap-3">
              <Building2 className="text-orange-600 flex-shrink-0 mt-1" size={20} />
              <p className="text-sm text-gray-700">{sectors}</p>
            </div>
          </div>

          {/* Trusted By */}
          {clients && clients?.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                {trusted_by_label}
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
                {clients?.map?.((client: string, index: number) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="text-sm font-medium text-gray-600"
                  >
                    {client}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
