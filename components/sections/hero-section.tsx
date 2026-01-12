
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  data: any;
  language: string;
}

export default function HeroSection({ data, language }: HeroSectionProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const content = data?.content?.[language] || data?.content?.en || {};
  const { h1, subheading, highlights, cta_primary, cta_secondary } = content;

  // Split h1 into parts to apply gradient to key words
  const renderH1 = () => {
    if (!h1) return null;
    // Find words that should be highlighted with gradient (typically key phrases)
    const parts = h1.split(/\b(Value-First AI|Value-First|AI|KI|الذكاء الاصطناعي)\b/gi);
    return (
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
        {parts?.map((part: string, index: number) => {
          const isHighlight = /^(Value-First AI|Value-First|AI|KI|الذكاء الاصطناعي)$/i.test(part);
          return isHighlight ? (
            <span key={index} className="text-gradient">
              {part}
            </span>
          ) : (
            <span key={index} className="text-gray-200">
              {part}
            </span>
          );
        })}
      </h1>
    );
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-[#1e3a5f] via-[#152842] to-[#0f1729]"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {renderH1()}
          </motion.div>
          
          {/* Subheading - now brief */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
          >
            {subheading}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            {cta_primary?.text && (
              <Link href={cta_primary?.url || '/contact'}>
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all">
                  {cta_primary?.text}
                </Button>
              </Link>
            )}
            {cta_secondary?.text && (
              <Link href={cta_secondary?.url || '/resources'}>
                <Button 
                  size="lg" 
                  className="bg-transparent border-2 border-cyan-500/50 text-white hover:text-white hover:bg-cyan-500/10 hover:border-cyan-400 font-semibold px-10 py-6 text-lg rounded-full transition-all"
                  style={{ color: 'white' }}
                >
                  {cta_secondary?.text}
                </Button>
              </Link>
            )}
          </motion.div>

          {/* Highlights - moved below CTAs */}
          {highlights && highlights?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-sm md:text-base text-gray-400/90 max-w-4xl mx-auto pt-6"
            >
              {highlights?.join(' • ')}
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
