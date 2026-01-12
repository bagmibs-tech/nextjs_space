
'use client';

import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';

export default function BlogPage() {
  const { language } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const blogPosts = [
    {
      id: 'dach-ai-acceleration',
      slug: 'dach-ai-acceleration',
      title: {
        en: 'Why DACH Needs to Accelerate Its AI Journey',
        de: 'Warum DACH seine KI-Reise beschleunigen muss',
        ar: 'لماذا تحتاج منطقة DACH إلى تسريع رحلتها في الذكاء الاصطناعي',
      },
      description: {
        en: 'An analysis of the current state, challenges, and opportunities for AI adoption in Germany, Austria, and Switzerland.',
        de: 'Eine Analyse des aktuellen Stands, der Herausforderungen und Chancen für die KI-Einführung in Deutschland, Österreich und der Schweiz.',
        ar: 'تحليل للوضع الحالي والتحديات والفرص لاعتماد الذكاء الاصطناعي في ألمانيا والنمسا وسويسرا.',
      },
      readTime: '8 min read',
    },
    {
      id: 'uae-ai-leadership',
      slug: 'uae-ai-leadership',
      title: {
        en: 'What the UAE is Doing to Stay Ahead in AI Leadership',
        de: 'Was die VAE tun, um in der KI-Führung vorne zu bleiben',
        ar: 'ما تفعله الإمارات للبقاء في طليعة قيادة الذكاء الاصطناعي',
      },
      description: {
        en: 'Exploring UAE\'s strategic AI initiatives, investments, and policy frameworks that position it as a global AI leader.',
        de: 'Erkundung der strategischen KI-Initiativen, Investitionen und politischen Rahmenbedingungen der VAE, die sie als globalen KI-Führer positionieren.',
        ar: 'استكشاف المبادرات الاستراتيجية للذكاء الاصطناعي في الإمارات والاستثمارات والأطر السياسية التي تضعها كقائد عالمي في الذكاء الاصطناعي.',
      },
      readTime: '10 min read',
    },
    {
      id: 'dach-uae-cross-learning',
      slug: 'dach-uae-cross-learning',
      title: {
        en: 'Bridging Two Worlds: What DACH and UAE Can Learn from Each Other',
        de: 'Zwei Welten verbinden: Was DACH und VAE voneinander lernen können',
        ar: 'ربط عالمين: ما يمكن أن تتعلمه DACH والإمارات من بعضهما البعض',
      },
      description: {
        en: 'A strategic analysis of complementary strengths and collaboration opportunities between DACH and UAE in AI adoption.',
        de: 'Eine strategische Analyse der komplementären Stärken und Zusammenarbeitsmöglichkeiten zwischen DACH und VAE bei der KI-Einführung.',
        ar: 'تحليل استراتيجي للنقاط القوة التكميلية وفرص التعاون بين DACH والإمارات في اعتماد الذكاء الاصطناعي.',
      },
      readTime: '9 min read',
    },
  ];

  const texts = {
    en: {
      title: 'AI Insights & Strategic Analysis',
      subtitle: 'Strategic perspectives on AI transformation for DACH and UAE enterprises',
      readMore: 'Read Article',
    },
    de: {
      title: 'KI-Einblicke & Strategische Analyse',
      subtitle: 'Strategische Perspektiven zur KI-Transformation für DACH- und VAE-Unternehmen',
      readMore: 'Artikel lesen',
    },
    ar: {
      title: 'رؤى الذكاء الاصطناعي والتحليل الاستراتيجي',
      subtitle: 'وجهات نظر استراتيجية حول تحول الذكاء الاصطناعي لشركات DACH والإمارات',
      readMore: 'اقرأ المقال',
    },
  };

  const t = texts[language as keyof typeof texts] || texts.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts?.map?.((post, index) => (
            <motion.div
              key={post?.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow shadow-md">
                <CardHeader>
                  <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
                    <FileText className="text-blue-600" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {post?.title?.[language as keyof typeof post.title] || post?.title?.en}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post?.description?.[language as keyof typeof post.description] || post?.description?.en}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{post?.readTime}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full group">
                    <Link href={`/blog/${post?.slug}`}>
                      {t.readMore}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
