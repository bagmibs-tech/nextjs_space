import { pageMetadata } from '@/lib/site';
import { PAGE_FAQS } from '@/lib/faq-data';
import { Page, Section, H2, Card, CtaButton, FaqSection } from '@/components/site/ui';

export const metadata = pageMetadata(
  '/',
  'HumanAIze | AI Transformation for DACH & UAE Enterprises — ROI in 90 Days',
  'HumanAIze is the AI transformation firm for DACH and UAE enterprises that ties its engagement to defined outcomes — not hours billed, not frameworks delivered, not strategies approved.',
);

const TRUST = [
  ['Vendor-neutral', 'no preferred platforms, no referral fees, no lock-in.'],
  ['Outcome-linked', "KPIs defined before engagement begins. If no credible ROI path exists in 90 days, we don't start."],
  ['Capability transfer', 'your team owns everything we build. We exit. You scale.'],
];

const DIFF = [
  ['ROI as a Service', "We tie our engagement to financial outcomes defined before we begin. No outcome, no full fee. Every other firm you've worked with gets paid regardless. We don't."],
  ['No vendor. No lock-in.', 'We have no preferred technology partner, no referral agreements, and no platform to push. Our only agenda is your outcome. When the engagement ends, you own everything — and depend on nothing.'],
  ['Senior expertise. No juniors.', 'Every HumanAIze engagement is led by a senior practitioner with enterprise delivery experience. No graduate analysts. No templated playbooks. No 200-page strategy decks that sit in a drawer.'],
];

const STATS = [
  ['15–30%', 'process cycle time reduction'],
  ['20–28%', 'IT cost optimisation'],
  ['20–40%', 'AI-driven process acceleration'],
  ['15–25%', 'FTE productivity uplift'],
  ['90 days', 'to first measurable outcome'],
];

const COMPARE = [
  ['Fee model', 'Billed by hours and team size', 'Tied to defined outcomes and KPIs'],
  ['Execution', 'Strategy delivered, execution handed off', 'Strategy and execution — we stay until the number moves'],
  ['Vendors', 'Preferred vendor ecosystem (SAP, Microsoft, Salesforce)', 'Vendor-neutral — no preferred platforms, no referral fees'],
  ['Exit model', 'Dependency deepens with every engagement', 'Capability transfer — your team owns it when we leave'],
  ['Team', 'Graduate analysts on your account', 'Curated senior experts, no juniors'],
  ['Philosophy', 'AI as a technology implementation', 'AI as a human and decision-systems challenge'],
];

export default function Home() {
  return (
    <Page>
      {/* Hero */}
      <Section className="pt-20 md:pt-28">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Your AI investment should change the numbers. <span className="text-[#38BDF8]">If it hasn&apos;t — that&apos;s what we fix.</span>
          </h1>
          <p className="mt-6 text-xl text-[#E2E8F0]">
            HumanAIze is the AI transformation firm for DACH and UAE enterprises that ties its engagement to defined outcomes — not hours billed, not frameworks delivered, not strategies approved.
          </p>
          <p className="mt-4 text-lg text-[#E2E8F0]/80">
            We define the KPIs before day one. We stay until the number moves. And we leave with your team owning the capability — not dependent on ours.
          </p>
          <div className="mt-8">
            <CtaButton label="Book your AI Readiness Diagnostic — no pitch, no deck, just diagnosis." />
          </div>
        </div>
        {/* Trust bar */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {TRUST.map(([t, d]) => (
            <Card key={t} className="p-5 md:p-6">
              <p><strong className="text-[#67C8F0]">{t}</strong> — {d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Problem */}
      <Section alt>
        <H2>Most enterprises have an AI strategy. Very few can show what it returned.</H2>
        <div className="space-y-4 text-lg max-w-4xl">
          <p>You approved the budget. You selected the vendor. Your teams attended the training. Twelve months later, the KPI line hasn&apos;t moved.</p>
          <p>This is not an AI problem. It is a decision-systems problem — and it is more common than any consultancy will tell you, because most of them caused it.</p>
          <p>The gap between AI strategy and AI value is where HumanAIze operates. We don&apos;t sell transformation. We deliver the outcome it was supposed to produce.</p>
        </div>
      </Section>

      {/* Differentiation */}
      <Section>
        <H2>Why enterprises choose HumanAIze over a Big4 firm</H2>
        <div className="grid gap-6 md:grid-cols-3">
          {DIFF.map(([t, d]) => (
            <Card key={t}>
              <h3 className="text-xl font-bold text-[#38BDF8] mb-3">{t}</h3>
              <p>{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Comparison table (P4.2) */}
      <Section alt>
        <H2>How HumanAIze compares</H2>
        <div className="overflow-x-auto rounded-2xl border border-[#38BDF8]/20">
          <table className="w-full text-left">
            <thead className="bg-white/5">
              <tr>
                <th scope="col" className="p-4 text-white">Criteria</th>
                <th scope="col" className="p-4 text-white">Big4 / McKinsey</th>
                <th scope="col" className="p-4 text-[#38BDF8]">HumanAIze</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map(([c, big4, us]) => (
                <tr key={c} className="border-t border-[#38BDF8]/10">
                  <th scope="row" className="p-4 font-semibold text-white">{c}</th>
                  <td className="p-4 text-[#E2E8F0]/80">{big4}</td>
                  <td className="p-4">{us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-lg italic">
          You don&apos;t choose HumanAIze instead of McKinsey. You choose HumanAIze because McKinsey has already been — and the ROI line hasn&apos;t moved.
        </p>
      </Section>

      {/* Benchmarks */}
      <Section>
        <H2>Our benchmark is not client satisfaction. It is client ROI.</H2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STATS.map(([n, l]) => (
            <Card key={l} className="text-center p-5">
              <p className="text-3xl font-bold text-[#38BDF8]">{n}</p>
              <p className="mt-2 text-sm">{l}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6">These are not projections. They are the standards we hold ourselves to — in writing, before the engagement begins.</p>
      </Section>

      <FaqSection items={PAGE_FAQS.home} />

      {/* Closing CTA */}
      <Section className="text-center">
        <H2 className="max-w-4xl mx-auto">If your AI investment hasn&apos;t returned a number you can defend in a board meeting — let&apos;s talk.</H2>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Not a sales call. A 30-minute diagnostic with a senior HumanAIze advisor. We will tell you exactly where the value gap is — whether you work with us or not.
        </p>
        <CtaButton label="Book your AI Readiness Diagnostic →" />
      </Section>
    </Page>
  );
}
