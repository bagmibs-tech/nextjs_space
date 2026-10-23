import fs from 'node:fs/promises';
import path from 'node:path';
import { notFound } from 'next/navigation';
import BlogPostPage from '@/components/pages/blog-post-page';
import { pageMetadata } from '@/lib/site';

const POSTS: Record<string, { title: string; description: string }> = {
  'dach-ai-acceleration': { title: 'Why DACH Needs to Accelerate Its AI Journey', description: 'Why DACH enterprises need to accelerate AI adoption — and how to tie it to measurable ROI.' },
  'uae-ai-leadership': { title: 'What the UAE is Doing to Stay Ahead in AI Leadership', description: 'How the UAE is building and sustaining AI leadership, and what enterprises can learn from it.' },
  'dach-uae-cross-learning': { title: 'Bridging Two Worlds: What DACH and UAE Can Learn from Each Other', description: 'Cross-regional lessons on AI transformation between DACH and the UAE.' },
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];
  if (!post) return {};
  return pageMetadata(`/blog/${params.slug}`, `${post.title} | HumanAIze Insights`, post.description);
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  if (!POSTS[params.slug]) notFound();
  // Read the markdown at build time so the article text is in the static HTML.
  const content = await fs.readFile(path.join(process.cwd(), 'public', 'blog', `${params.slug}.md`), 'utf8').catch(() => '');
  return <BlogPostPage slug={params.slug} initialContent={content} />;
}
