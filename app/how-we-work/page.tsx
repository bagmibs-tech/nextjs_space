import Link from 'next/link';
import { pageMetadata } from '@/lib/site';
import { PAGE_FAQS } from '@/lib/faq-data';
import { Page, Section, H2, Card, CtaWithSupport, FaqSection } from '@/components/site/ui';

export const metadata = pageMetadata(
  '/how-we-work',
  'How We Work | 5-Step Delivery Process | HumanAIze',
  'The five-step HumanAIze delivery process — Discovery, Readiness, Strategy, Execution and Embed — mapped to the Assess, Activate, Implement and Embed stages, with KPIs locked before day one.',
);

type Step = { number: string; title: string; tag: string; problem?: string; approach?: string; value?: string; points?: string[] };

const STEPS: Step[] = [
  {
    number: '01', title: 'Discovery & Alignment', tag: 'part of Assess',
    problem: 'AI initiatives often start from technology, not business needs.',
    approach: 'Workshops with business and IT; creation of an AI & digital opportunity map tied to P&L KPIs (EBIT, cost-to-serve, OEE, NPS). From Stuttgart to Sharjah, we align AI and digital opportunities with your P&L, regional regulations, and on-the-ground realities.',
    value: 'A prioritized, DACH & MENA-relevant roadmap with quantified value potential.',
  },
  {
    number: '02', title: 'Readiness & Prioritisation', tag: 'part of Assess',
    points: ['AI maturity audit across 5 criteria', 'Top-3 use cases prioritised and scored', 'KPI baselines locked and signed off', '90-Day Value Hypothesis with metric uplift targets'],
  },
  {
    number: '03', title: 'Strategy & Blueprinting', tag: 'Activate',
    problem: 'Fragmented vendors and legacy stacks slow progress.',
    approach: 'Define target architecture, data flows, and integration; select and orchestrate global implementation partners across DACH, MENA and other regions.',
    value: 'Reduced risk, faster time-to-value, and vendor-agnostic recommendations.',
  },
  {
    number: '04', title: 'Execution & Orchestration', tag: 'Implement',
    problem: 'Projects run long without proof of value.',
    approach: '6–12 week sprints delivering MVPs or pilots with clear success metrics and user feedback.',
    value: 'Tangible outcomes in 90 days, with clear go/no-go and scale decisions.',
  },
  {
    number: '05', title: 'Embed, Measure & Scale', tag: 'Embed',
    problem: "Successful pilots don't scale consistently across plants or countries.",
    approach: 'Blueprinting, rollout planning, governance frameworks, change management, and training.',
    value: 'Repeatable, compliant scaling across DACH, MENA and global operations.',
  },
];

export default function HowWeWork() {
  return (
    <Page>
      <Section className="pt-20 md:pt-28">
        <h1 className="text-4xl md:text-5xl font-bold text-white">How We Orchestrate AI Across DACH &amp; MENA</h1>
        <p className="mt-6 text-xl max-w-4xl">
          HumanAIze acts as your AI-Business orchestrator—bridging business, IT and external partners across time zones and cultures. We bring DACH precision, MENA agility, and a global partner network together under one accountable owner.
        </p>
        <p className="mt-4 text-lg">
          This is the delivery process inside the four stages on our{' '}
          <Link href="/services" className="text-[#67C8F0] underline">Services</Link> page, and how each is{' '}
          <Link href="/pricing" className="text-[#67C8F0] underline">priced</Link>.
        </p>
      </Section>

      <Section alt>
        <H2>5-Step Delivery Framework</H2>
        <p className="mb-10 rounded-xl border border-[#5B8BF5]/40 bg-[#5B8BF5]/10 p-4 italic">
          Not sure you have a validated AI opportunity yet? Blindspot builds the business case first.{' '}
          <Link href="/services#blindspot" className="not-italic text-[#67C8F0] hover:underline">Learn more →</Link>
        </p>
        <div className="space-y-8">
          {STEPS.map((s) => (
            <Card key={s.number} className="grid gap-6 md:grid-cols-[auto,1fr]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#38BDF8] to-[#5B8BF5] text-2xl font-bold text-white">
                {s.number}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {s.number} {s.title}{' '}
                  <span className="ml-2 align-middle rounded-full border border-[#38BDF8]/40 px-3 py-0.5 text-sm font-medium italic text-[#67C8F0]">{s.tag}</span>
                </h3>
                {s.problem && <p className="mt-4"><span className="text-xs font-semibold uppercase tracking-wider text-[#67C8F0]">Problem</span><br />{s.problem}</p>}
                {s.approach && <p className="mt-3"><span className="text-xs font-semibold uppercase tracking-wider text-[#5B8BF5]">Approach</span><br />{s.approach}</p>}
                {s.value && <p className="mt-3"><span className="text-xs font-semibold uppercase tracking-wider text-[#2ABFBF]">Value</span><br />{s.value}</p>}
                {s.points && (
                  <ul className="mt-4 list-disc pl-5 space-y-1">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <FaqSection items={PAGE_FAQS.howWeWork} alt={false} />

      <Section alt>
        <CtaWithSupport />
      </Section>
    </Page>
  );
}
