import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata(
  '/case-studies/energy-predictive-maintenance',
  'Energy Predictive Maintenance Case Study | HumanAIze',
  'How HumanAIze delivered measurable outcomes in a Energy Predictive Maintenance engagement — KPIs defined before day one, results tracked against a locked baseline.',
);

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
