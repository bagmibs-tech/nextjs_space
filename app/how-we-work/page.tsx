
import dynamic from 'next/dynamic';

const HowWeWorkPage = dynamic(() => import('@/components/pages/how-we-work-page'), {
  ssr: true,
});

export const metadata = {
  title: 'How We Work - 5-Step AI Orchestration | HumanAIze',
  description: 'Our proven 5-step framework delivers measurable AI and digital transformation ROI in 90 days for DACH and UAE enterprises.',
};

export default function HowWeWork() {
  return <HowWeWorkPage />;
}
