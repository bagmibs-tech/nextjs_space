'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TrustedByProps {
  language: string;
}

export default function TrustedBy({ language }: TrustedByProps) {
  const companies = [
    { name: 'Mercedes-Benz AG', logo: '/logo-mercedes.png' },
    { name: 'HSBC', logo: '/logo-hsbc.png' },
    { name: 'DHL', logo: '/logo-dhl.png' },
    { name: 'Henkel', logo: '/logo-henkel.png' },
    { name: 'AstraZeneca', logo: '/logo-astrazeneca.png' },
    { name: 'E.ON', logo: '/logo-eon.png' },
    { name: 'Stadtwerke Heidelberg', logo: '/logo-stadtwerke.png' },
    { name: 'Pfizer', logo: '/logo-pfizer.png' },
  ];

  const texts = {
    en: { title: 'Trusted by Global Enterprises' },
    de: { title: 'Vertraut von globalen Unternehmen' },
    ar: { title: 'موثوق به من الشركات العالمية' },
  };

  const t = texts[language as keyof typeof texts] || texts.en;

  return (
    <section className="py-16 bg-gradient-to-b from-navy-dark to-background border-t border-cyan-500/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white">{t.title}</h3>
        </div>
        
        {/* Scrolling logos container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-dark to-transparent z-10" />
          
          {/* Scrolling animation */}
          <motion.div
            className="flex gap-12"
            animate={{
              x: [0, -120 * companies.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {/* Render logos three times for seamless loop */}
            {[...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-24 px-8 bg-white/5 rounded-xl border border-cyan-500/10 hover:border-cyan-400/30 hover:bg-white/10 transition-all group"
              >
                <div className="relative" style={{ width: '160px', height: '60px' }}>
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain opacity-70 group-hover:opacity-100 transition-opacity filter brightness-110"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
