
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesOverviewProps {
  data: any;
  language: string;
}

export default function ServicesOverview({ data, language }: ServicesOverviewProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const content = data?.content?.[language] || data?.content?.en || {};
  const { h2, subheading, cards } = content;

  // Split h2 to add gradient to "Services" or similar
  const renderH2 = () => {
    if (!h2) return null;
    const parts = h2.split(/\b(Services|Dienstleistungen|خدمات)\b/gi);
    return (
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
        {parts?.map((part: string, index: number) => {
          const isHighlight = /^(Services|Dienstleistungen|خدمات)$/i.test(part);
          return isHighlight ? (
            <span key={index} className="text-gradient-purple">
              {part}
            </span>
          ) : (
            <span key={index} className="text-navy">
              {part}
            </span>
          );
        })}
      </h2>
    );
  };

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {renderH2()}
          {subheading && (
            <p className="text-base md:text-lg text-gray-600 mt-4">
              {subheading}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards?.map?.((card: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all bg-white border-2 border-gray-200 hover:border-cyan-300 group">
                <CardHeader>
                  {/* Icon with gradient */}
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                      <div className="w-7 h-7 bg-white/20 rounded-lg"></div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-navy">
                    {card?.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {card?.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {card?.features?.map?.((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="text-cyan-500 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full group/btn text-cyan-500 hover:text-cyan-600">
                    <Link href={card?.cta?.url || '/services'}>
                      {card?.cta?.text}
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
