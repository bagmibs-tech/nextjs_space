
import dynamic from 'next/dynamic';

const ServicesPage = dynamic(() => import('@/components/pages/services-page'), {
  ssr: true,
});

export const metadata = {
  title: 'Services - AI Strategy & Digital Transformation | HumanAIze',
  description: 'Comprehensive AI and digital transformation services for DACH and UAE enterprises. From SAP modernization to ROI-as-a-Service.',
};

export default function Services() {
  return <ServicesPage />;
}
