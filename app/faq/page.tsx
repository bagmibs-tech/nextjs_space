import { pageMetadata } from '@/lib/site';
import { FAQ_GROUPS } from '@/lib/faq-data';
import { Page, Section, H2, FaqList, JsonLd, faqJsonLd, CtaWithSupport } from '@/components/site/ui';

export const metadata = pageMetadata(
  '/faq',
  'FAQ | HumanAIze — Outcome-Linked AI Transformation',
  'Answers to common questions about HumanAIze: who we work with, the Blindspot, Assess, Activate, Implement and Embed engagements, outcome-linked pricing, vendor neutrality and AI governance.',
);

export default function Faq() {
  const all = FAQ_GROUPS.flatMap((g) => g.items);
  return (
    <Page>
      <Section className="pt-20 md:pt-28">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Frequently asked questions</h1>
      </Section>
      {FAQ_GROUPS.map((g, i) => (
        <Section key={g.title} alt={i % 2 === 0}>
          <H2>{g.title}</H2>
          <FaqList items={g.items} />
        </Section>
      ))}
      <Section>
        <CtaWithSupport />
      </Section>
      <JsonLd data={faqJsonLd(all)} />
    </Page>
  );
}
