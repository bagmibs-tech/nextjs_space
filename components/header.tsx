
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/language-context';
import { getNavigationItems, getSiteMetadata } from '@/lib/content';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState<any[]>([]);
  const [brandName, setBrandName] = useState('HumanAIze');
  const pathname = usePathname();

  useEffect(() => {
    const items = getNavigationItems(language);
    setNavItems(items);
    const metadata = getSiteMetadata(language);
    setBrandName(metadata?.brand_name || 'HumanAIze');
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', label: 'EN', flag: '🇬🇧', name: 'English' },
    { code: 'de', label: 'DE', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'ar', label: 'AR', flag: '🇦🇪', name: 'العربية' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <div className="relative h-12 w-12">
              <Image
                src="/logo.png"
                alt={brandName}
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-cyan-500">{brandName}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems?.map?.((item: any) => {
              const label = item?.label?.[language] || item?.label?.en || '';
              const url = item?.url || '/';
              const isActive = pathname === url;
              
              return (
                <Link
                  key={item?.id}
                  href={url}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? 'text-cyan-500'
                      : 'text-gray-700 hover:text-cyan-500'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Language Switcher & CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Switcher Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="hidden md:flex items-center gap-2 border-gray-300 hover:border-cyan-500 hover:bg-gray-50"
                >
                  <Globe size={18} className="text-cyan-500" />
                  <span className="text-sm font-medium">
                    {languages?.find?.(l => l?.code === language)?.label || 'EN'}
                  </span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages?.map?.((lang) => (
                  <DropdownMenuItem
                    key={lang?.code}
                    onClick={() => setLanguage(lang?.code as any)}
                    className={`cursor-pointer ${language === lang?.code ? 'bg-cyan-50 text-cyan-600' : ''}`}
                  >
                    <span className="mr-2 text-lg">{lang?.flag}</span>
                    <span className="font-medium">{lang?.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button - Desktop */}
            <Link href="/contact" className="hidden md:block">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all">
                {language === 'de' ? 'Discovery Call buchen' : language === 'ar' ? 'احجز مكالمة الاكتشاف' : 'Book Your Discovery Call'}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            {navItems?.map?.((item: any) => {
              const label = item?.label?.[language] || item?.label?.en || '';
              const url = item?.url || '/';
              const isActive = pathname === url;
              
              return (
                <Link
                  key={item?.id}
                  href={url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyan-500 bg-cyan-50'
                      : 'text-gray-700 hover:text-cyan-500 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            
            {/* Mobile Language Switcher */}
            <div className="md:hidden px-4 py-3 border-t mt-2 pt-4">
              <div className="flex items-center gap-2">
                {languages?.map?.((lang) => (
                  <button
                    key={lang?.code}
                    onClick={() => setLanguage(lang?.code as any)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                      language === lang?.code
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {lang?.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile CTA */}
            <div className="px-4 py-3">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-full">
                  {language === 'de' ? 'Discovery Call buchen' : language === 'ar' ? 'احجز مكالمة الاكتشاف' : 'Book Your Discovery Call'}
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
