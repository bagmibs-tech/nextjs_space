'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Target, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function BankingInvoiceAutomationCaseStudy() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'AI-Powered Invoice & Compliance Automation for Banking',
      subtitle: 'Banking | AI-Powered Invoice & Compliance Automation',
      industry: 'Banking & Financial Services (DACH / EU)',
      backLink: 'Back to Home',
      sections: {
        businessContext: {
          title: 'Business Context',
          content: 'A financial services institution processed thousands of invoices monthly through manual review, resulting in slow turnaround times, high audit effort, and significant compliance risk.'
        },
        challenges: {
          title: 'Core Challenges',
          items: [
            'Slow, manual invoice processing',
            'High audit effort and compliance risk',
            'Inconsistent data extraction accuracy',
            'Limited scalability without increasing headcount'
          ]
        },
        approach: {
          title: 'HumanAIze Approach',
          content: 'HumanAIze implemented an AI document and invoice copilot:',
          items: [
            'Automated invoice data extraction and validation',
            'Built-in audit trails and governance',
            'Integrated with existing financial systems',
            'Real-time compliance monitoring and alerts'
          ]
        },
        kpis: {
          title: 'Key KPIs Tracked',
          items: [
            'Invoice processing time',
            'Extraction accuracy',
            'Audit readiness score',
            'Processing cost per invoice'
          ]
        },
        outcomes: {
          title: 'Business Outcomes & ROI',
          items: [
            '80% faster processing',
            '20–35% cost avoidance',
            'Real-time audit readiness',
            '95%+ extraction accuracy',
            'Payback period: <15 months'
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
