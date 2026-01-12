
import dynamic from 'next/dynamic';

const AssessmentPage = dynamic(() => import('@/components/pages/assessment-page'), {
  ssr: true,
});

export const metadata = {
  title: 'AI Readiness Assessment | HumanAIze',
  description: 'Assess your organization\'s AI readiness with our comprehensive questionnaire covering strategy, infrastructure, talent, and governance.',
};

export default function Assessment() {
  return <AssessmentPage />;
}
