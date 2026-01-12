
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

interface NewsletterSignupProps {
  language: string;
}

export default function NewsletterSignup({ language }: NewsletterSignupProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const texts = {
    en: {
      title: 'Subscribe to Humanize Briefing',
      subtitle: 'The High-Trust AI Operator Lens',
      description: 'Stay updated with insights on AI transformation, industry trends, and strategic guidance for medium to large-scale enterprises across DACH, MENA & Beyond',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      submitButton: 'Subscribe',
      linkedInButton: 'Subscribe on LinkedIn',
      successMessage: 'Successfully subscribed!',
      errorMessage: 'Subscription failed. Please try again.',
    },
    de: {
      title: 'Humanize Briefing abonnieren',
      subtitle: 'Die High-Trust-KI-Operatorperspektive',
      description: 'Bleiben Sie auf dem Laufenden mit Einblicken zur KI-Transformation, Branchentrends und strategischer Orientierung für mittlere bis große Unternehmen in DACH, MENA und darüber hinaus',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'Ihre E-Mail',
      submitButton: 'Abonnieren',
      linkedInButton: 'Auf LinkedIn abonnieren',
      successMessage: 'Erfolgreich abonniert!',
      errorMessage: 'Abonnement fehlgeschlagen. Bitte versuchen Sie es erneut.',
    },
    ar: {
      title: 'اشترك في Humanize Briefing',
      subtitle: 'عدسة مشغل الذكاء الاصطناعي عالية الثقة',
      description: 'ابق على اطلاع برؤى حول تحول الذكاء الاصطناعي واتجاهات الصناعة والتوجيه الاستراتيجي للمؤسسات المتوسطة والكبيرة عبر DACH و MENA وما بعدها',
      namePlaceholder: 'اسمك',
      emailPlaceholder: 'بريدك الإلكتروني',
      submitButton: 'اشترك',
      linkedInButton: 'اشترك على LinkedIn',
      successMessage: 'تم الاشتراك بنجاح!',
      errorMessage: 'فشل الاشتراك. الرجاء المحاولة مرة أخرى.',
    },
  };

  const t = texts[language as keyof typeof texts] || texts.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error(t.errorMessage);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source: 'website' }),
      });

      if (response?.ok) {
        toast.success(t.successMessage);
        setEmail('');
        setName('');
        
        // Open LinkedIn newsletter in new tab
        window?.open?.('https://www.linkedin.com/newsletters/humanaize-7361709791192190976/', '_blank');
      } else {
        toast.error(t.errorMessage);
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast.error(t.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="py-20 bg-navy-gradient">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-card-dark border border-cyan-500/20 rounded-2xl shadow-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {t.title}
            </h2>
            <p className="text-xl md:text-2xl text-gradient-purple font-semibold mb-4">
              {t.subtitle}
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>

          {/* LinkedIn Subscribe Button - Prominent */}
          <div className="mb-8 flex justify-center">
            <Button
              type="button"
              onClick={() => window?.open?.('https://www.linkedin.com/newsletters/humanaize-7361709791192190976/', '_blank')}
              className="bg-gradient-to-r from-[#0077B5] to-[#0095D5] hover:from-[#005885] hover:to-[#0077B5] text-white font-bold px-10 py-6 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              {t.linkedInButton}
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder={t.namePlaceholder}
                value={name}
                onChange={(e) => setName(e?.target?.value || '')}
                className="h-12 bg-white/10 border-cyan-500/30 text-white placeholder:text-gray-400"
              />
              <Input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e?.target?.value || '')}
                required
                className="h-12 bg-white/10 border-cyan-500/30 text-white placeholder:text-gray-400"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold"
            >
              {isSubmitting ? (language === 'de' ? 'Wird gesendet...' : language === 'ar' ? 'جاري الإرسال...' : 'Submitting...') : t.submitButton}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
