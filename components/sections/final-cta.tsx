
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  data: any;
  language: string;
}

export default function FinalCTA({ data, language }: FinalCTAProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const content = data?.content?.[language] || data?.content?.en || {};
  const { h2, cta_primary, cta_secondary } = content;

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-[#1e3a5f] to-[#0f1729]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {h2}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {cta_primary?.text && (
              <Link href={cta_primary?.url || '/contact'}>
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-8 py-6 text-base rounded-full shadow-xl hover:shadow-2xl transition-all">
                  {cta_primary?.text}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            )}
            {cta_secondary?.text && (
              <Link href={cta_secondary?.url || '/resources/ai-roi-playbook'}>
                <Button size="lg" variant="outline" className="border-2 border-cyan-500 !text-cyan-400 hover:!text-cyan-300 hover:bg-cyan-500/10 font-medium px-8 py-6 text-base rounded-full">
                  {cta_secondary?.text}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
