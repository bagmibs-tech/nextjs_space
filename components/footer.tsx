'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { getSiteMetadata } from '@/lib/content';
import { NAV_ITEMS, FOOTER_TAGLINE } from '@/lib/site';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();
  const [metadata, setMetadata] = useState<any>({});

  useEffect(() => {
    const data = getSiteMetadata(language);
    setMetadata(data);
  }, [language]);

  return (
    <footer className="bg-gradient-to-b from-background to-navy-dark text-gray-300 border-t border-cyan-500/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand + Get in Touch */}
          <div className="md:col-span-1">
            {/* Brand */}
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">
              {metadata?.brand_name || 'HumanAIze'}
            </h3>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              {metadata?.tagline?.[language] || metadata?.tagline?.en || 'AI-Business Orchestration for DACH & UAE Enterprises'}
            </p>

            {/* Get in Touch - Vertical Format */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">
                {language === 'de' ? 'Kontakt' : language === 'ar' ? 'ابق على تواصل' : 'Get in Touch'}
              </h4>
              
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="bg-cyan-500/20 p-2 rounded-lg mt-1">
                  <Mail size={16} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    {language === 'de' ? 'E-Mail' : language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </p>
                  <a
                    href="mailto:connect@human-aize.com"
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    connect@human-aize.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="bg-cyan-500/20 p-2 rounded-lg mt-1">
                  <Phone size={16} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    {language === 'de' ? 'Telefon' : language === 'ar' ? 'الهاتف' : 'Phone'}
                  </p>
                  <div className="text-sm text-gray-300 space-y-1">
                    <div>
                      <a
                        href="tel:+4971116018830"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        Tel: +49 711 1601 8830
                      </a>
                    </div>
                    <div>
                      <a
                        href="tel:+971559658808"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        Mob: +971 55965 8808
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="bg-cyan-500/20 p-2 rounded-lg mt-1">
                  <MapPin size={16} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    {language === 'de' ? 'Standort' : language === 'ar' ? 'الموقع' : 'Location'}
                  </p>
                  <p className="text-sm text-gray-300">
                    BC-888856, Amber Gem Tower, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              {language === 'de' ? 'Quick Links' : language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {[...NAV_ITEMS, { id: 'faq', url: '/faq', label: { en: 'FAQ', de: 'FAQ', ar: 'الأسئلة الشائعة' } }].map((item) => (
                <li key={item.id}>
                  <Link href={item.url} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {item.label[language] || item.label.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              {language === 'de' ? 'Dienstleistungen' : language === 'ar' ? 'خدمات' : 'Services'}
            </h4>
            <ul className="space-y-3">
              {['Blindspot', 'Assess', 'Activate', 'Implement', 'Embed'].map((name) => (
                <li key={name}>
                  <Link href={`/services#${name.toLowerCase()}`} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tagline */}
        <div className="mb-10 pb-10 border-b border-cyan-500/10">
          <p className="text-sm text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            <strong className="text-white">HumanAIze.</strong> {FOOTER_TAGLINE}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {metadata?.brand_name || 'HumanAIze'} FZE LLC.{' '}
            {language === 'de' ? 'Alle Rechte vorbehalten.' : language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
