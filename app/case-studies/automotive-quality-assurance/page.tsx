'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Target, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function AutomotiveQualityAssuranceCaseStudy() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'AI-Driven Quality Assurance for Automotive Manufacturing',
      subtitle: 'Automotive Manufacturing | AI-Driven Quality Assurance',
      industry: 'Automotive Manufacturing (DACH)',
      backLink: 'Back to Home',
      sections: {
        businessContext: {
          title: 'Business Context',
          content: 'A leading automotive manufacturer faced challenges with inconsistent quality control and manual inspection processes across multiple production lines, leading to inefficiencies and quality issues.'
        },
        challenges: {
          title: 'Core Challenges',
          items: [
            'Inconsistent quality across production lines',
            'Manual inspections were time-consuming and error-prone',
            'Limited real-time traceability of defects',
            'High cost of quality-related issues'
          ]
        },
        approach: {
          title: 'HumanAIze Approach',
          content: 'HumanAIze implemented an AI-powered quality inspection solution:',
          items: [
            'Integrated AI vision systems with ERP and production systems',
            'Real-time defect detection and classification',
            'Automated quality reporting and traceability',
            'Predictive quality analytics to prevent issues'
          ]
        },
        kpis: {
          title: 'Key KPIs Tracked',
          items: [
            'Defect detection rate',
            'Production throughput',
            'Quality-related costs',
            'Inspection time per unit'
          ]
        },
        outcomes: {
          title: 'Business Outcomes & ROI',
          items: [
            '95% defect detection (up from 80%)',
            '30% throughput increase',
            'Mid six-figure annual savings',
            'Reduced inspection time by 60%',
            'Payback period: <18 months'
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
