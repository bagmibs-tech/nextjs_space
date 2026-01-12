'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { Users2, Gem, Shield } from 'lucide-react';

interface AboutSnapshotProps {
  data: any;
  language: string;
}

export default function AboutSnapshot({ data, language }: AboutSnapshotProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const content = data?.content?.[language] || data?.content?.en || {};
  const { h2, body, metrics, pillars } = content;

  // Icons for brand pillars matching reference site
  const pillarIcons = [Users2, Gem, Shield];

  // Split h2 to add gradient to "We Are" or similar phrases
  const renderH2 = () => {
    if (!h2) return null;
    const parts = h2.split(/(\b(?:We Are|Wir Sind|نحن)\b)/gi);
    return (
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        {parts?.map((part: string, index: number) => {
          const isHighlight = /^(We Are|Wir Sind|نحن)$/i.test(part);
          return isHighlight ? (
            <span key={index} className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {part}
            </span>
          ) : (
            <span key={index} className="text-white">
              {part}
            </span>
          );
        })}
      </h2>
    );
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-navy-dark via-background to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {renderH2()}
          <p className="text-base md:text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {body}
          </p>
        </motion.div>

        {/* Brand Pillars - Exact style from reference site */}
        {pillars && pillars?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {pillars.map((pillar: any, idx: number) => {
              const Icon = pillarIcons[idx] || Shield;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#1a2332] hover:bg-[#1f2937] transition-all duration-300 group"
                >
                  {/* Cyan Icon */}
                  <div className="mb-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Metrics Grid - Dark Navy Cards */}
        {metrics && metrics?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {metrics?.map?.((metric: any, index: number) => (
              <MetricCard
                key={index}
                value={metric?.value}
                label={metric?.label}
                delay={index * 0.1 + 0.4}
                inView={inView}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function MetricCard({ value, label, delay, inView }: any) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);

      // Extract numeric value for animation
      const numericMatch = value?.match?.(/\d+/);
      if (numericMatch) {
        const targetValue = parseInt(numericMatch[0]);
        const duration = 2000;
        const steps = 60;
        const increment = targetValue / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            setCount(targetValue);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }
  }, [inView, value, hasAnimated]);

  const displayValue =
    value?.includes?.('+') || value?.includes?.('%') || value?.includes?.('Days')
      ? value
      : count > 0
      ? value?.replace?.(/\d+/, count.toString())
      : value;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#0f1729] hover:shadow-2xl transition-all group overflow-hidden"
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative z-10 text-center space-y-3">
        {/* Icon placeholder */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-cyan-500"></div>
          </div>
        </div>

        <div className="text-3xl md:text-4xl font-bold text-white">{displayValue}</div>
        <div className="text-sm text-gray-300 font-medium">{label}</div>
      </div>
    </motion.div>
  );
}
