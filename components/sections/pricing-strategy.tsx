'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, TrendingUp, RefreshCw } from 'lucide-react';

interface PricingStrategyProps {
  data?: any;
  language: string;
}

export default function PricingStrategy({ data, language }: PricingStrategyProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const content = data?.content?.[language] || data?.content?.en || {};
  const { h2, subtitle, models, cta_box } = content;

  const iconMap: any = {
    'Strategic Consulting': DollarSign,
    'Agile MVP': TrendingUp,
    'Scale & Optimize': RefreshCw,
    'Strategische Beratung': DollarSign,
    'Agiles MVP': TrendingUp,
    'Skalieren & Optimieren': RefreshCw,
    'استشارات استراتيجية': DollarSign,
    'MVP رشيق': TrendingUp,
    'التوسع والتحسين': RefreshCw,
  };

  return (
    <section id="pricing" ref={ref} className="py-20 bg-gradient-to-b from-navy-dark to-[#0a0e1a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {h2 || 'We deliver & charge for Outcomes'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {subtitle || 'Think value, speed & scale - "Not mindless hours"'}
          </p>
        </motion.div>

        {/* Pricing Models */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {(models || [
            {
              title: 'Strategic Consulting',
              description: 'Fixed Fee/ Retainer',
            },
            {
              title: 'Agile MVP',
              description: 'Milestone-Based',
            },
            {
              title: 'Scale & Optimize',
              description: 'Monthly Retainer',
            },
          ]).map((model: any, index: number) => {
            const Icon = iconMap[model.title] || DollarSign;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#0f1620] border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {model.title}
                  </h3>
                  <p className="text-lg text-cyan-400 font-medium">
                    {model.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0ea5e9] via-[#1e3a5f] to-[#c0c0c0] border-2 border-cyan-400 text-center shadow-lg shadow-cyan-500/20">
            <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              {cta_box || 'We orient around our clients. Simply talk to us ☺'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
