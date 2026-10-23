import { pageMetadata } from '@/lib/site';

import dynamic from 'next/dynamic';

const AssessmentPage = dynamic(() => import('@/components/pages/assessment-page'), {
  ssr: true,
});

export const metadata = pageMetadata('/assessment', 'AI Readiness Assessment | HumanAIze', 'Assess your organization\'s AI readiness with our comprehensive questionnaire covering strategy, infrastructure, talent, and governance.');

export default function Assessment() {
  return <AssessmentPage />;
}
