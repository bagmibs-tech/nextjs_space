
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FounderSnapshotProps {
  data: any;
  language: string;
}

export default function FounderSnapshot({ data, language }: FounderSnapshotProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const content = data?.content?.[language] || data?.content?.en || {};
  const { h2, body, cta } = content;

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-navy-dark">
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
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {h2}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {body}
            </p>
            {cta?.text && (
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
              >
                <Link href={cta?.url || '/about'}>
                  {cta?.text}
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
