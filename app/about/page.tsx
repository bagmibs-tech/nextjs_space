
import dynamic from 'next/dynamic';

const AboutPage = dynamic(() => import('@/components/pages/about-page'), {
  ssr: true,
});

export const metadata = {
  title: 'About HumanAIze - AI-Business Orchestrator | DACH & UAE',
  description: 'Learn about HumanAIze\'s mission, values, and founder Bagmi Sahoo\'s 17+ years delivering digital transformation across DACH and UAE.',
};

export default function About() {
  return <AboutPage />;
}
