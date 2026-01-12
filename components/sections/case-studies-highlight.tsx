'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface CaseStudiesHighlightProps {
  data: any;
  language: string;
}

export default function CaseStudiesHighlight({ data, language }: CaseStudiesHighlightProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const caseStudies = {
    en: [
      {
        title: 'Automotive Manufacturing | AI-Driven Quality Assurance',
        challenge: 'Inconsistent quality, manual inspections, and limited real-time traceability across production lines.',
        solution: 'AI-powered quality inspection integrated with ERP and production systems.',
        impact: [
          '95% defect detection (up from 80%)',
          '30% throughput increase',
          'Mid six-figure annual savings'
        ],
        link: '/case-studies/automotive-quality-assurance'
      },
      {
        title: 'Banking | AI-Powered Invoice & Compliance Automation',
        challenge: 'Slow, manual invoice processing with high audit effort and compliance risk.',
        solution: 'AI document and invoice copilot with built-in audit trails and governance.',
        impact: [
          '80% faster processing',
          '20–35% cost avoidance',
          'Real-time audit readiness'
        ],
        link: '/case-studies/banking-invoice-automation'
      },
      {
        title: 'Energy & Utilities | Predictive Maintenance & Asset Intelligence',
        challenge: 'Reactive maintenance, unplanned outages, and rising operational costs.',
        solution: 'AI-based predictive maintenance and asset intelligence platform.',
        impact: [
          '20–30% maintenance cost reduction',
          '~25% fewer outages',
          'Improved regulatory performance'
        ],
        link: '/case-studies/energy-predictive-maintenance'
      },
      {
        title: 'Healthcare | AI-Based Medical Document Automation',
        challenge: 'Manual processing of medical forms causing long turnaround times and high admin effort.',
        solution: 'AI-driven medical document extraction and workflow automation.',
        impact: [
          '<1-day turnaround (from 5–7 days)',
          '~50% cost reduction',
          '92% extraction accuracy'
        ],
        link: '/case-studies/healthcare-document-automation'
      }
    ],
    de: [
      {
        title: 'Automobilherstellung | KI-gestützte Qualitätssicherung',
        challenge: 'Inkonsistente Qualität, manuelle Inspektionen und begrenzte Echtzeit-Rückverfolgbarkeit in Produktionslinien.',
        solution: 'KI-gestützte Qualitätsinspektion integriert mit ERP- und Produktionssystemen.',
        impact: [
          '95% Fehlererkennung (von 80%)',
          '30% Durchsatzsteigerung',
          'Mittlere sechsstellige jährliche Einsparungen'
        ],
        link: '/case-studies/automotive-quality-assurance'
      },
      {
        title: 'Banking | KI-gestützte Rechnungs- & Compliance-Automatisierung',
        challenge: 'Langsame, manuelle Rechnungsverarbeitung mit hohem Prüfaufwand und Compliance-Risiko.',
        solution: 'KI-Dokumenten- und Rechnungs-Copilot mit integrierten Audit-Trails und Governance.',
        impact: [
          '80% schnellere Verarbeitung',
          '20–35% Kostenvermeidung',
          'Echtzeit-Audit-Bereitschaft'
        ],
        link: '/case-studies/banking-invoice-automation'
      },
      {
        title: 'Energie & Versorgung | Vorausschauende Wartung & Asset Intelligence',
        challenge: 'Reaktive Wartung, ungeplante Ausfälle und steigende Betriebskosten.',
        solution: 'KI-basierte vorausschauende Wartungs- und Asset-Intelligence-Plattform.',
        impact: [
          '20–30% Wartungskostenreduktion',
          '~25% weniger Ausfälle',
          'Verbesserte regulatorische Leistung'
        ],
        link: '/case-studies/energy-predictive-maintenance'
      },
      {
        title: 'Gesundheitswesen | KI-basierte medizinische Dokumentenautomatisierung',
        challenge: 'Manuelle Verarbeitung medizinischer Formulare mit langen Bearbeitungszeiten und hohem Verwaltungsaufwand.',
        solution: 'KI-gestützte medizinische Dokumentenextraktion und Workflow-Automatisierung.',
        impact: [
          '<1-Tag Bearbeitungszeit (von 5–7 Tagen)',
          '~50% Kostenreduktion',
          '92% Extraktionsgenauigkeit'
        ],
        link: '/case-studies/healthcare-document-automation'
      }
    ],
    ar: [
      {
        title: 'تصنيع السيارات | ضمان الجودة بالذكاء الاصطناعي',
        challenge: 'جودة غير متسقة، فحوصات يدوية، وتتبع محدود في الوقت الفعلي عبر خطوط الإنتاج.',
        solution: 'فحص الجودة بالذكاء الاصطناعي متكامل مع أنظمة ERP والإنتاج.',
        impact: [
          '95% كشف العيوب (من 80%)',
          '30% زيادة في الإنتاجية',
          'وفورات سنوية بأرقام ستة'
        ],
        link: '/case-studies/automotive-quality-assurance'
      },
      {
        title: 'الخدمات المصرفية | أتمتة الفواتير والامتثال',
        challenge: 'معالجة بطيئة ويدوية للفواتير مع جهد تدقيق عالي ومخاطر الامتثال.',
        solution: 'مساعد مستندات وفواتير بالذكاء الاصطناعي مع مسارات تدقيق مدمجة.',
        impact: [
          '80% معالجة أسرع',
          '20–35% تجنب التكاليف',
          'جاهزية التدقيق في الوقت الفعلي'
        ],
        link: '/case-studies/banking-invoice-automation'
      },
      {
        title: 'الطاقة والمرافق | الصيانة التنبؤية',
        challenge: 'صيانة تفاعلية، انقطاعات غير مخططة، وارتفاع التكاليف التشغيلية.',
        solution: 'منصة الصيانة التنبؤية وذكاء الأصول بالذكاء الاصطناعي.',
        impact: [
          '20–30% خفض تكاليف الصيانة',
          '~25% أقل انقطاعات',
          'تحسين الأداء التنظيمي'
        ],
        link: '/case-studies/energy-predictive-maintenance'
      },
      {
        title: 'الرعاية الصحية | أتمتة المستندات الطبية',
        challenge: 'معالجة يدوية للنماذج الطبية تسبب أوقات معالجة طويلة.',
        solution: 'استخراج المستندات الطبية وأتمتة سير العمل بالذكاء الاصطناعي.',
        impact: [
          '<1 يوم تسليم (من 5–7 أيام)',
          '~50% خفض التكلفة',
          '92% دقة الاستخراج'
        ],
        link: '/case-studies/healthcare-document-automation'
      }
    ]
  };

  const studies = caseStudies[language as keyof typeof caseStudies] || caseStudies.en;

  const titles = {
    en: 'Proven Impact Across Industries',
    de: 'Nachgewiesene Wirkung branchenweit',
    ar: 'تأثير مثبت عبر الصناعات'
  };

  const labels = {
    en: { challenge: 'Challenge', solution: 'Solution', impact: 'Impact', viewStudy: 'View detailed case study' },
    de: { challenge: 'Herausforderung', solution: 'Lösung', impact: 'Auswirkung', viewStudy: 'Detaillierte Fallstudie ansehen' },
    ar: { challenge: 'التحدي', solution: 'الحل', impact: 'التأثير', viewStudy: 'عرض دراسة الحالة التفصيلية' }
  };

  const l = labels[language as keyof typeof labels] || labels.en;

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-navy-dark to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          {titles[language as keyof typeof titles] || titles.en}
        </motion.h2>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#1a2332] border border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-6 leading-tight">
                {study.title}
              </h3>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wide">{l.challenge}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wide">{l.solution}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
              </div>

              {/* Impact */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">{l.impact}</h4>
                <ul className="space-y-2">
                  {study.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* View Case Study Link */}
              <Link
                href={study.link}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors group"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                {l.viewStudy}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
