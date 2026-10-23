import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata(
  '/case-studies/banking-invoice-automation',
  'Banking Invoice Automation Case Study | HumanAIze',
  'How HumanAIze delivered measurable outcomes in a Banking Invoice Automation engagement — KPIs defined before day one, results tracked against a locked baseline.',
);

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
