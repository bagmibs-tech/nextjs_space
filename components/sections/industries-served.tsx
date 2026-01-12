'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Factory, Building2, Zap, ShoppingBag } from 'lucide-react';

interface IndustriesServedProps {
  language: string;
}

export default function IndustriesServed({ language }: IndustriesServedProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const texts = {
    en: {
      title: 'Industries Served',
      industries: [
        {
          title: 'Industrial & Manufacturing Systems',
          description: 'Automotive, Tier-1 & Tier-2 Suppliers, Smart Factories, Logistics & Supply Chain',
          icon: Factory,
        },
        {
          title: 'Regulated Industries',
          description: 'Banking, Insurance, Asset Management, Healthcare, Life Sciences',
          icon: Building2,
        },
        {
          title: 'Energy, Utilities & Infrastructure',
          description: 'Energy Providers, Renewables, Grid & Network Operators, Public Utilities',
          icon: Zap,
        },
        {
          title: 'Customer-Driven Businesses',
          description: 'Retail, E-Commerce, Consumer Services, BPOs, CX Operations',
          icon: ShoppingBag,
        },
      ],
    },
    de: {
      title: 'Bediente Branchen',
      industries: [
        {
          title: 'Industrie & Fertigungssysteme',
          description: 'Automotive, Tier-1 & Tier-2 Zulieferer, Smart Factories, Logistik & Supply Chain',
          icon: Factory,
        },
        {
          title: 'Regulierte Branchen',
          description: 'Banking, Versicherungen, Asset Management, Gesundheitswesen, Life Sciences',
          icon: Building2,
        },
        {
          title: 'Energie, Versorgung & Infrastruktur',
          description: 'Energieversorger, Erneuerbare Energien, Netz- & Netzbetreiber, öffentliche Versorgung',
          icon: Zap,
        },
        {
          title: 'Kundenorientierte Unternehmen',
          description: 'Einzelhandel, E-Commerce, Verbraucherdienstleistungen, BPOs, CX-Operationen',
          icon: ShoppingBag,
        },
      ],
    },
    ar: {
      title: 'الصناعات التي نخدمها',
      industries: [
        {
          title: 'الأنظمة الصناعية والتصنيع',
          description: 'السيارات، موردو المستوى الأول والثاني، المصانع الذكية، اللوجستيات وسلسلة التوريد',
          icon: Factory,
        },
        {
          title: 'الصناعات المنظمة',
          description: 'البنوك، التأمين، إدارة الأصول، الرعاية الصحية، علوم الحياة',
          icon: Building2,
        },
        {
          title: 'الطاقة والمرافق والبنية التحتية',
          description: 'مزودو الطاقة، الطاقة المتجددة، مشغلو الشبكات، المرافق العامة',
          icon: Zap,
        },
        {
          title: 'الأعمال الموجهة للعملاء',
          description: 'التجزئة، التجارة الإلكترونية، خدمات المستهلك، مراكز الاتصال، عمليات تجربة العملاء',
          icon: ShoppingBag,
        },
      ],
    },
  };

  const t = texts[language as keyof typeof texts] || texts.en;

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-navy-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          {t.title}
        </motion.h2>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#1a2332] border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
