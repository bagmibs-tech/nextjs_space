
import dynamic from 'next/dynamic';

const BlogPage = dynamic(() => import('@/components/pages/blog-page'), {
  ssr: true,
});

export const metadata = {
  title: 'Blog - AI Insights for DACH & UAE | HumanAIze',
  description: 'Strategic insights on AI adoption, digital transformation, and cross-regional learnings for DACH and UAE enterprises.',
};

export default function Blog() {
  return <BlogPage />;
}
