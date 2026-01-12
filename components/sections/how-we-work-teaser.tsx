
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HowWeWorkTeaserProps {
  data: any;
  language: string;
}

export default function HowWeWorkTeaser({ data, language }: HowWeWorkTeaserProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const content = data?.content?.[language] || data?.content?.en || {};
  const { h2, body, steps, cta } = content;

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {h2}
          </h2>
          <p className="text-lg text-gray-600">
            {body}
          </p>
        </motion.div>

        {/* Steps */}
        {steps && steps?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {steps?.map?.((step: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="text-3xl font-bold text-blue-600 mb-3">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-700 font-medium leading-snug">
                    {step}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        {cta?.text && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href={cta?.url || '/how-we-work'}>
                {cta?.text}
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
