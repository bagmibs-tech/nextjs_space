import Link from 'next/link';
import { pageMetadata } from '@/lib/site';
import { PAGE_FAQS } from '@/lib/faq-data';
import { PRICING_TIERS } from '@/lib/offers';
import { Page, Section, H2, CtaButton, FaqSection } from '@/components/site/ui';
import { OfferCard } from '@/components/site/offer-card';

export const metadata = pageMetadata(
  '/pricing',
  'Pricing | Outcome-Linked AI Engagements | HumanAIze',
  'We align fees to defined outcomes — not billable hours. Blindspot, Assess, Activate, Implement and Embed engagements structured for DACH and UAE governance, procurement and ROI expectations.',
);

export default function Pricing() {
  return (
    <Page>
      <Section className="pt-20 md:pt-28">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Pricing</h1>
        <p className="mt-6 text-xl max-w-4xl">
          We align fees to defined outcomes — not billable hours. Engagements are structured to match governance, procurement, and ROI expectations in DACH and the UAE.
        </p>
      </Section>

      <Section alt>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PRICING_TIERS.map((o) => <OfferCard key={o.id} offer={o} />)}
        </div>
      </Section>

      <Section>
        <H2>What you can expect</H2>
        <p className="text-lg max-w-4xl">
          Every engagement begins with a KPI baseline and ends with measurable reporting. Scope is explicit. Governance is built in. Accountability is named.
        </p>
        <p className="mt-4 text-lg max-w-4xl">To receive a tailored proposal aligned to your scale and risk profile:</p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <CtaButton label="Talk to us" />
          <span>We&apos;ll recommend the smallest credible starting point.</span>
        </div>
        <p className="mt-6"><Link href="/how-we-work" className="text-[#67C8F0] hover:underline">See how we deliver →</Link></p>
      </Section>

      <FaqSection items={PAGE_FAQS.pricing} />
    </Page>
  );
}
