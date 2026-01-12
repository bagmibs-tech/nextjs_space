
import BlogPostPage from '@/components/pages/blog-post-page';

export async function generateStaticParams() {
  return [
    { slug: 'dach-ai-acceleration' },
    { slug: 'uae-ai-leadership' },
    { slug: 'dach-uae-cross-learning' },
  ];
}

export const dynamic = 'force-static';

export default function BlogPost({ params }: { params: { slug: string } }) {
  return <BlogPostPage slug={params?.slug} />;
}
