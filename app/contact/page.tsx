import { pageMetadata } from '@/lib/site';

import dynamic from 'next/dynamic';

const ContactPage = dynamic(() => import('@/components/pages/contact-page'), {
  ssr: true,
});

export const metadata = pageMetadata('/contact', 'Contact Us | HumanAIze', 'Get in touch with HumanAIze to discuss your AI and digital transformation needs for DACH and UAE enterprises.');

export default function Contact() {
  return <ContactPage />;
}
