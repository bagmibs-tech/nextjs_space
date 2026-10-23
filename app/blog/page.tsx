import dynamic from 'next/dynamic';
import { pageMetadata } from '@/lib/site';
import { Section, CtaWithSupport } from '@/components/site/ui';

const BlogPage = dynamic(() => import('@/components/pages/blog-page'), { ssr: true });

export const metadata = pageMetadata(
  '/blog',
  'Insights | AI Transformation for DACH & UAE | HumanAIze',
  'Insights from HumanAIze on outcome-linked AI transformation, AI ROI and cross-regional learnings for DACH and UAE enterprises.',
);

export default function Blog() {
  return (
    <>
      <BlogPage />
      <div className="bg-[#1E2A45] text-[#E2E8F0]">
        <Section>
          <CtaWithSupport secondary />
        </Section>
      </div>
    </>
  );
}
