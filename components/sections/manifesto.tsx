'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Target, Users } from 'lucide-react';

interface ManifestoProps {
  language: string;
}

export default function Manifesto({ language }: ManifestoProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const texts = {
    en: {
      title: 'Founder Manifesto',
      content: [
        "I didn't found HumanAIze to chase technology or build a \"cool\" start-up.",
        "I built it knowing that most businesses don't fail because they lack ambition or tools—they fail because they sell before they solve, chase numbers instead of truth, and mistake motion for meaning.",
        'Over the years, I watched teams confuse speed with progress, tools with strategy, and automation with leadership.',
        "AI isn't failing because it's powerful. It's failing because people don't trust what they don't understand.",
        'HumanAIze was founded on a simple conviction: AI only creates value when humans trust it enough to rely on it, own it, and stay accountable for its outcomes.',
        "This is not about more technology. It's about better thinking, clearer decisions, and systems that serve people—not replace them.",
        "That's why HumanAIze exists.",
      ],
    },
    de: {
      title: 'Gründer-Manifest',
      content: [
        'Ich habe HumanAIze nicht gegründet, um Technologie nachzujagen oder ein "cooles" Start-up aufzubauen.',
        'Ich habe es gegründet, weil ich weiß, dass die meisten Unternehmen nicht scheitern, weil es ihnen an Ehrgeiz oder Werkzeugen mangelt—sondern weil sie verkaufen, bevor sie Lösungen bieten, Zahlen statt Wahrheit verfolgen und Bewegung mit Bedeutung verwechseln.',
        'Über die Jahre habe ich gesehen, wie Teams Geschwindigkeit mit Fortschritt, Werkzeuge mit Strategie, und Automatisierung mit Führung verwechseln.',
        'KI scheitert nicht, weil sie mächtig ist. Sie scheitert, weil Menschen nicht vertrauen, was sie nicht verstehen.',
        'HumanAIze wurde auf einer einfachen Überzeugung gegründet: KI schafft nur dann Wert, wenn Menschen ihr genug vertrauen, um sich darauf zu verlassen, sie zu besitzen, und für ihre Ergebnisse verantwortlich zu bleiben.',
        'Es geht nicht um mehr Technologie. Es geht um besseres Denken, klarere Entscheidungen und Systeme, die Menschen dienen—nicht ersetzen.',
        'Deshalb existiert HumanAIze.',
      ],
    },
    ar: {
      title: 'بيان المؤسس',
      content: [
        'لم أؤسس HumanAIze لمطاردة التكنولوجيا أو بناء شركة ناشئة "رائعة".',
        'بنيتها لأنني أعلم أن معظم الشركات لا تفشل لأنها تفتقر إلى الطموح أو الأدوات—بل لأنها تبيع قبل أن تحل المشكلات، وتطارد الأرقام بدلاً من الحقيقة.',
        'على مر السنين، رأيت فرقًا تخلط بين السرعة والتقدم، الأدوات والاستراتيجية، والأتمتة والقيادة.',
        'لا يفشل الذكاء الاصطناعي لأنه قوي. إنه يفشل لأن الناس لا يثقون بما لا يفهمونه.',
        'تأسست HumanAIze على قناعة بسيطة: لا يخلق الذكاء الاصطناعي قيمة إلا عندما يثق به البشر بما يكفي للاعتماد عليه، وامتلاكه، والبقاء مسؤولين عن نتائجه.',
        'هذا ليس عن مزيد من التكنولوجيا. إنه عن تفكير أفضل، وقرارات أوضح، وأنظمة تخدم الناس—لا تستبدلهم.',
        'لهذا السبب توجد HumanAIze.',
      ],
    },
  };

  const t = texts[language as keyof typeof texts] || texts.en;

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-navy-dark to-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="p-12 rounded-3xl bg-[#1a2332] border border-cyan-500/20 shadow-2xl"
        >
          {/* Title with icon */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t.title}
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {t.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-base md:text-lg text-gray-300 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Signature/Closing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-10 text-center border-t border-cyan-500/20 pt-8"
          >
            <p className="text-lg font-semibold text-cyan-400">- Bagmi Sahoo, Founder</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
