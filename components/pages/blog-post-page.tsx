
'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  slug: string;
}

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  const { language } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  const postMetadata: Record<string, any> = {
    'dach-ai-acceleration': {
      title: {
        en: 'Why DACH Needs to Accelerate Its AI Journey',
        de: 'Warum DACH seine KI-Reise beschleunigen muss',
        ar: 'لماذا تحتاج منطقة DACH إلى تسريع رحلتها في الذكاء الاصطناعي',
      },
      date: 'November 2024',
      readTime: '8 min read',
    },
    'uae-ai-leadership': {
      title: {
        en: 'What the UAE is Doing to Stay Ahead in AI Leadership',
        de: 'Was die VAE tun, um in der KI-Führung vorne zu bleiben',
        ar: 'ما تفعله الإمارات للبقاء في طليعة قيادة الذكاء الاصطناعي',
      },
      date: 'November 2024',
      readTime: '10 min read',
    },
    'dach-uae-cross-learning': {
      title: {
        en: 'Bridging Two Worlds: What DACH and UAE Can Learn from Each Other',
        de: 'Zwei Welten verbinden: Was DACH und VAE voneinander lernen können',
        ar: 'ربط عالمين: ما يمكن أن تتعلمه DACH والإمارات من بعضهما البعض',
      },
      date: 'November 2024',
      readTime: '9 min read',
    },
  };

  const metadata = postMetadata?.[slug] || {};

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/blog/${slug}.md`);
        if (response?.ok) {
          const text = await response.text();
          setContent(text);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [slug]);

  const texts = {
    en: { backToBlog: 'Back to Blog' },
    de: { backToBlog: 'Zurück zum Blog' },
    ar: { backToBlog: 'العودة إلى المدونة' },
  };

  const t = texts[language as keyof typeof texts] || texts.en;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2" size={18} />
              {t.backToBlog}
            </Link>
          </Button>

          <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <header className="mb-8 border-b pb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {metadata?.title?.[language] || metadata?.title?.en || ''}
              </h1>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{metadata?.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{metadata?.readTime}</span>
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8" {...props} />,
                  h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6" {...props} />,
                  h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-gray-900 mb-2 mt-4" {...props} />,
                  p: ({ node, ...props }) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700" {...props} />,
                  li: ({ node, ...props }) => <li className="ml-4" {...props} />,
                  a: ({ node, ...props }) => <a className="text-blue-600 hover:text-blue-700 underline" {...props} />,
                  blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 my-4" {...props} />,
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
}
