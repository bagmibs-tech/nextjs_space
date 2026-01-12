'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Target, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function EnergyPredictiveMaintenanceCaseStudy() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Predictive Maintenance & Asset Intelligence for Energy Utilities',
      subtitle: 'Energy & Utilities | Predictive Maintenance & Asset Intelligence',
      industry: 'Energy | Utilities | Infrastructure (DACH)',
      backLink: 'Back to Home',
      sections: {
        businessContext: {
          title: 'Business Context',
          content: 'An energy and utilities provider operated critical infrastructure with aging assets. Maintenance was largely reactive, leading to unplanned outages, regulatory exposure, and rising costs.'
        },
        challenges: {
          title: 'Core Challenges',
          items: [
            'Reactive maintenance model',
            'Limited asset health visibility',
            'High outage frequency and duration',
            'Increasing regulatory pressure'
          ]
        },
        approach: {
          title: 'HumanAIze Approach',
          content: 'HumanAIze led the design of a predictive maintenance and asset intelligence layer:',
          items: [
            'Unified operational, sensor, and maintenance data',
            'Applied AI models to predict failures and degradation',
            'Optimized maintenance schedules based on risk',
            'Enabled data-driven asset lifecycle decisions'
          ]
        },
        kpis: {
          title: 'Key KPIs Tracked',
          items: [
            'Asset uptime',
            'Maintenance cost per asset',
            'Outage frequency and duration',
            'Regulatory performance indicators'
          ]
        },
        outcomes: {
          title: 'Business Outcomes & ROI',
          items: [
            '20–30% reduction in maintenance costs',
            '~25% reduction in unplanned outages',
            'Improved regulatory reporting confidence',
            'Platform established for future smart-grid initiatives',
            'Payback period: 12–18 months'
          ]
        }
      }
    },
    de: {
      title: 'Prädiktive Wartung & Asset Intelligence für Energieversorger',
      subtitle: 'Energie & Versorgung | Prädiktive Wartung & Asset Intelligence',
      industry: 'Energie | Versorgung | Infrastruktur (DACH)',
      backLink: 'Zurück zur Startseite',
      sections: {
        businessContext: {
          title: 'Geschäftskontext',
          content: 'Ein Energie- und Versorgungsunternehmen betrieb kritische Infrastruktur mit alternden Anlagen. Die Wartung war weitgehend reaktiv, was zu ungeplanten Ausfällen, regulatorischen Risiken und steigenden Kosten führte.'
        },
        challenges: {
          title: 'Kernherausforderungen',
          items: [
            'Reaktives Wartungsmodell',
            'Begrenzte Sichtbarkeit des Anlagenzustands',
            'Hohe Ausfallhäufigkeit und -dauer',
            'Zunehmender regulatorischer Druck'
          ]
        },
        approach: {
          title: 'HumanAIze-Ansatz',
          content: 'HumanAIze leitete die Gestaltung einer prädiktiven Wartungs- und Asset-Intelligence-Ebene:',
          items: [
            'Vereinheitlichte Betriebs-, Sensor- und Wartungsdaten',
            'Angewandte KI-Modelle zur Vorhersage von Ausfällen und Degradation',
            'Optimierte Wartungspläne basierend auf Risiken',
            'Ermöglichte datengesteuerte Asset-Lifecycle-Entscheidungen'
          ]
        },
        kpis: {
          title: 'Verfolgte Haupt-KPIs',
          items: [
            'Anlagenverfugbarkeit',
            'Wartungskosten pro Anlage',
            'Ausfallhäufigkeit und -dauer',
            'Regulatorische Leistungsindikatoren'
          ]
        },
        outcomes: {
          title: 'Geschäftsergebnisse & ROI',
          items: [
            '20–30% Reduzierung der Wartungskosten',
            '~25% Reduzierung ungeplanter Ausfälle',
            'Verbessertes Vertrauen in regulatorische Berichterstattung',
            'Plattform für zukünftige Smart-Grid-Initiativen etabliert',
            'Amortisationszeit: 12–18 Monate'
          ]
        }
      }
    },
    ar: {
      title: 'الصيانة التنبؤية وذكاء الأصول لمرافق الطاقة',
      subtitle: 'الطاقة والمرافق | الصيانة التنبؤية وذكاء الأصول',
      industry: 'الطاقة | المرافق | البنية التحتية (DACH)',
      backLink: 'العودة إلى الصفحة الرئيسية',
      sections: {
        businessContext: {
          title: 'السياق التجاري',
          content: 'قام مزود الطاقة والمرافق بتشغيل بنية تحتية حيوية مع أصول قديمة. كانت الصيانة تفاعلية إلى حد كبير، مما أدى إلى انقطاعات غير مخططة ومخاطر تنظيمية وارتفاع التكاليف.'
        },
        challenges: {
          title: 'التحديات الرئيسية',
          items: [
            'نموذج صيانة تفاعلي',
            'رؤية محدودة لصحة الأصول',
            'تردد ومدة انقطاع عالية',
            'ضغط تنظيمي متزايد'
          ]
        },
        approach: {
          title: 'نهج HumanAIze',
          content: 'قادت HumanAIze تصميم طبقة الصيانة التنبؤية وذكاء الأصول:',
          items: [
            'توحيد البيانات التشغيلية والمستشعرات والصيانة',
            'تطبيق نماذج الذكاء الاصطناعي للتنبؤ بالأعطال والتدهور',
            'تحسين جداول الصيانة على أساس المخاطر',
            'تمكين قرارات دورة حياة الأصول المستندة إلى البيانات'
          ]
        },
        kpis: {
          title: 'مؤشرات الأداء الرئيسية المتتبعة',
          items: [
            'وقت تشغيل الأصول',
            'تكلفة الصيانة لكل أصل',
            'تردد ومدة الانقطاع',
            'مؤشرات الأداء التنظيمي'
          ]
        },
        outcomes: {
          title: 'نتائج الأعمال وعائد الاستثمار',
          items: [
            'خفض 20–30% في تكاليف الصيانة',
            '~25% تقليل في الانقطاعات غير المخططة',
            'تحسين الثقة في التقارير التنظيمية',
            'إنشاء منصة لمبادرات الشبكة الذكية المستقبلية',
            'فترة الاسترداد: 12–18 شهراً'
          ]
        }
      }
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark via-background to-navy-dark">
      {/* Back Link */}
      <div className="border-b border-cyan-500/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {c.backLink}
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 border-b border-cyan-500/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-wide text-sm">{c.industry}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{c.title}</h1>
            <p className="text-xl text-gray-400">{c.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Business Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl bg-[#1a2332] border border-cyan-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-4">{c.sections.businessContext.title}</h2>
            <p className="text-gray-300 leading-relaxed">{c.sections.businessContext.content}</p>
          </motion.div>

          {/* Core Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-[#1a2332] border border-cyan-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">{c.sections.challenges.title}</h2>
            <ul className="space-y-3">
              {c.sections.challenges.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* HumanAIze Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl bg-[#1a2332] border border-cyan-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-4">{c.sections.approach.title}</h2>
            <p className="text-gray-300 mb-6">{c.sections.approach.content}</p>
            <ul className="space-y-3">
              {c.sections.approach.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Key KPIs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-2xl bg-[#1a2332] border border-cyan-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">{c.sections.kpis.title}</h2>
            <ul className="space-y-3">
              {c.sections.kpis.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Business Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30"
          >
            <h2 className="text-2xl font-bold text-white mb-6">{c.sections.outcomes.title}</h2>
            <ul className="space-y-3">
              {c.sections.outcomes.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
