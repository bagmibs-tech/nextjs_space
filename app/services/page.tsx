import { pageMetadata } from '@/lib/site';
import { PAGE_FAQS } from '@/lib/faq-data';
import { PRICING_TIERS, SERVICES_BLINDSPOT } from '@/lib/offers';
import { Page, Section, H2, Card, Bullets, CtaWithSupport, FaqSection } from '@/components/site/ui';
import { OfferCard } from '@/components/site/offer-card';

export const metadata = pageMetadata(
  '/services',
  'Services | Assess, Activate, Implement, Embed | HumanAIze',
  "We don't deliver strategies. We deliver outcomes. Four Pillars, defined KPIs and one accountable partner from day one to measurable ROI — plus Blindspot, an optional entry point.",
);

const tier = (id: string) => PRICING_TIERS.find((t) => t.id === id)!;

const PILLARS = [
  {
    num: 'Pillar I', offer: tier('assess'),
    opening: 'Before a single euro or dirham is committed, you will know exactly which AI investments are worth making — and which ones aren\'t. Most organisations skip this step. That is why most AI investments underperform.',
    objective: tier('assess').summary,
    startHere: 'Start here if you have budget authority but no validated business case yet.',
  },
  {
    num: 'Pillar II', offer: tier('activate'),
    objective: tier('activate').summary,
    startHere: 'Start here if you already have a validated business case and need the governance and architecture to move to delivery.',
  },
  {
    num: 'Pillar III', offer: tier('implement'),
    objective: tier('implement').summary,
    startHere: "Start here if strategy and governance are already in place and you're ready to build.",
  },
  {
    num: 'Pillar IV', offer: tier('embed'),
    objective: "The goal of every HumanAIze engagement is to make ourselves unnecessary. We build the internal capability, governance structures, and measurement systems your organisation needs to sustain AI value without external dependency. When we leave, you own everything. Your team runs it. You don't need us to maintain it. That is not a feature. It is the only honest definition of transformation.",
    startHere: 'Start here if you have at least one proven pilot and need it to scale organisation-wide.',
  },
];

const ACCOUNTABILITY = [
  'KPI baseline defined and signed off before work begins',
  '90-day target and named accountability owner documented in writing',
  'Measurable reporting against the locked baseline',
  'Capability transfer built into every engagement',
  'Vendor-neutral recommendations — no preferred platforms, no referral fees.',
];

const BENCHMARKS = [
  ['15–30%', 'process cycle time reduction'],
  ['20–28%', 'IT cost optimisation'],
  ['20–40%', 'AI-driven process acceleration'],
  ['15–25%', 'FTE productivity uplift'],
  ['90 days', 'to first measurable outcome'],
];

export default function Services() {
  return (
    <Page>
      <Section className="pt-20 md:pt-28">
        <h1 className="text-4xl md:text-5xl font-bold text-white">We don&apos;t deliver strategies. We deliver outcomes.</h1>
        <p className="mt-6 text-xl">Four Pillars. Defined KPIs. One accountable partner from day one to measurable ROI.</p>
      </Section>

      {/* Accountability Standard — moved directly beneath the H1 */}
      <Section alt id="accountability">
        <H2>Our Accountability Standard</H2>
        <Bullets items={ACCOUNTABILITY} />
        <p className="mt-6 font-semibold text-[#38BDF8]">If no credible ROI path is visible within 90 days, we do not begin.</p>
      </Section>

      <Section>
        <p className="text-lg max-w-4xl">
          Every HumanAIze engagement begins the same way: we agree the outcome in writing before any work begins. The KPI baseline, the 90-day target, the accountability owner — defined, documented, and signed off. If we cannot see a credible path to measurable ROI within 90 days, we tell you — and we don&apos;t start. That standard eliminates wasted investment on both sides.
        </p>

        {/* Optional entry point — visually separate from the numbered pillars */}
        <div className="mt-12 rounded-3xl border-2 border-dashed border-[#5B8BF5]/60 p-2">
          <OfferCard offer={SERVICES_BLINDSPOT} label="Optional entry point" />
        </div>

        <div className="mt-12 space-y-8">
          {PILLARS.map((p) => (
            <Card key={p.offer.id} id={p.offer.id}>
              <p className="text-xs uppercase tracking-widest text-[#5B8BF5]">{p.num}</p>
              <h2 className="mt-1 text-2xl md:text-3xl font-bold text-white">
                {p.offer.name} <span className="text-[#38BDF8]">— {p.offer.subtitle}</span>
              </h2>
              {p.opening && <p className="mt-4 text-lg font-medium">{p.opening}</p>}
              <p className="mt-4"><strong className="text-white">Objective:</strong> {p.objective}</p>
              <p className="mt-3 text-[#67C8F0] font-medium">{p.startHere}</p>
              <h3 className="mt-6 font-semibold text-white">Capabilities</h3>
              <Bullets items={p.offer.bullets} />
            </Card>
          ))}
        </div>
      </Section>

      <Section alt>
        <H2>Performance Benchmarks</H2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {BENCHMARKS.map(([n, l]) => (
            <Card key={l} className="text-center p-5">
              <p className="text-3xl font-bold text-[#38BDF8]">{n}</p>
              <p className="mt-2 text-sm">{l}</p>
            </Card>
          ))}
        </div>
      </Section>

      <FaqSection items={PAGE_FAQS.services} alt={false} />

      <Section alt>
        <CtaWithSupport />
      </Section>
    </Page>
  );
}
