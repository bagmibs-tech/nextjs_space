
'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const { language } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const texts = {
    en: {
      title: 'Get in Touch',
      subtitle: 'Ready to orchestrate AI across DACH or UAE? Let\'s start a conversation.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      companyLabel: 'Company',
      phoneLabel: 'Phone',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      submitButton: 'Send Message',
      contactInfo: 'Contact Information',
      successMessage: 'Message sent successfully! Opening email client...',
      errorMessage: 'Failed to send message. Please try again.',
    },
    de: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Bereit, KI in DACH oder den VAE zu orchestrieren? Lassen Sie uns ins Gespräch kommen.',
      nameLabel: 'Name',
      emailLabel: 'E-Mail',
      companyLabel: 'Unternehmen',
      phoneLabel: 'Telefon',
      subjectLabel: 'Betreff',
      messageLabel: 'Nachricht',
      submitButton: 'Nachricht senden',
      contactInfo: 'Kontaktinformationen',
      successMessage: 'Nachricht erfolgreich gesendet! E-Mail-Client wird geöffnet...',
      errorMessage: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
    },
    ar: {
      title: 'تواصل معنا',
      subtitle: 'جاهز لتنسيق الذكاء الاصطناعي في DACH أو الإمارات؟ لنبدأ المحادثة.',
      nameLabel: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      companyLabel: 'الشركة',
      phoneLabel: 'الهاتف',
      subjectLabel: 'الموضوع',
      messageLabel: 'الرسالة',
      submitButton: 'إرسال الرسالة',
      contactInfo: 'معلومات الاتصال',
      successMessage: 'تم إرسال الرسالة بنجاح! جاري فتح عميل البريد الإلكتروني...',
      errorMessage: 'فشل إرسال الرسالة. الرجاء المحاولة مرة أخرى.',
    },
  };

  const t = texts[language as keyof typeof texts] || texts.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData?.name || !formData?.email || !formData?.message) {
      toast.error(t.errorMessage);
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to database
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'contact' }),
      });

      if (response?.ok) {
        toast.success(t.successMessage);
        
        // Open Gmail compose in new tab
        const subject = encodeURIComponent(formData?.subject || 'Contact from HumanAIze Website');
        const body = encodeURIComponent(
          `Name: ${formData?.name}\nEmail: ${formData?.email}\nCompany: ${formData?.company || 'N/A'}\nPhone: ${formData?.phone || 'N/A'}\n\nMessage:\n${formData?.message}`
        );
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=connect@human-aize.com&su=${subject}&body=${body}`;
        window?.open?.(mailtoLink, '_blank');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error(t.errorMessage);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(t.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-gray-600">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.nameLabel} *
                      </label>
                      <Input
                        type="text"
                        value={formData?.name}
                        onChange={(e) => setFormData({ ...formData, name: e?.target?.value || '' })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.emailLabel} *
                      </label>
                      <Input
                        type="email"
                        value={formData?.email}
                        onChange={(e) => setFormData({ ...formData, email: e?.target?.value || '' })}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.companyLabel}
                      </label>
                      <Input
                        type="text"
                        value={formData?.company}
                        onChange={(e) => setFormData({ ...formData, company: e?.target?.value || '' })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.phoneLabel}
                      </label>
                      <Input
                        type="tel"
                        value={formData?.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e?.target?.value || '' })}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.subjectLabel}
                    </label>
                    <Input
                      type="text"
                      value={formData?.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e?.target?.value || '' })}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.messageLabel} *
                    </label>
                    <Textarea
                      value={formData?.message}
                      onChange={(e) => setFormData({ ...formData, message: e?.target?.value || '' })}
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700"
                  >
                    {isSubmitting ? (
                      language === 'de' ? 'Wird gesendet...' : language === 'ar' ? 'جاري الإرسال...' : 'Sending...'
                    ) : (
                      <>
                        {t.submitButton}
                        <Send className="ml-2" size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>{t.contactInfo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <a href="mailto:connect@human-aize.com" className="text-gray-600 hover:text-blue-600">
                      connect@human-aize.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Phone className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="space-y-1">
                      <div>
                        <a href="tel:+4971116018830" className="text-gray-600 hover:text-blue-600">
                          Tel: +49 711 1601 8830
                        </a>
                      </div>
                      <div>
                        <a href="tel:+971559658808" className="text-gray-600 hover:text-blue-600">
                          Mob: +971 55965 8808
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Address</div>
                    <p className="text-gray-600">
                      BC-888856, Amber Gem Tower, UAE
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
