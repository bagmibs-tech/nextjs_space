import { pageMetadata } from '@/lib/site';
import { PAGE_FAQS } from '@/lib/faq-data';
import { Page, Section, H2, CtaWithSupport, FaqSection } from '@/components/site/ui';

export const metadata = pageMetadata(
  '/about',
  'About HumanAIze | Outcome-Linked AI Transformation for DACH & UAE',
  'We built HumanAIze because we kept watching the same thing happen: enterprises spent millions on AI and the ROI line never moved. Vendor-neutral by design. Senior-led by policy. Outcome-linked by contract.',
);

export default function About() {
  return (
    <Page>
      <Section className="pt-20 md:pt-28">
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
          We built HumanAIze because we kept watching the same thing happen.
        </h1>
        <p className="mt-6 text-xl max-w-4xl">
          Enterprises spent millions on AI. Consultancies delivered strategies. Vendors sold platforms. And twelve months later — in boardroom after boardroom across DACH and UAE — the ROI line hadn&apos;t moved.
        </p>
      </Section>

      <Section alt>
        <H2>The problem was never the technology. It was the model.</H2>
        <div className="space-y-4 text-lg max-w-4xl">
          <p>Consultancies are paid by the hour. Vendors are paid by the licence. Neither has a structural reason to care whether the transformation actually works. The incentives point away from accountability — and toward the next engagement.</p>
          <p>HumanAIze was built around a different question: what if the firm&apos;s fee was tied to the outcome? That question changed everything about how we work.</p>
        </div>
      </Section>

      <Section>
        <H2>What we are</H2>
        <div className="space-y-4 text-lg max-w-4xl">
          <p>We are an AI transformation firm — not a consultancy, not a vendor, not a training provider. We are the orchestration layer between strategy and measurable value.</p>
          <p>We define the outcome before we begin. We stay until the number moves. We transfer the capability so our clients never depend on us to sustain it.</p>
          <p className="font-semibold text-[#38BDF8]">Vendor-neutral by design. Senior-led by policy. Outcome-linked by contract.</p>
        </div>
      </Section>

      <Section alt>
        <H2>Who we work with</H2>
        <div className="space-y-4 text-lg max-w-4xl">
          <p>We work with mid to large enterprises in DACH and UAE — CDOs, CFOs, and CxOs who are accountable for AI investment and need a partner who shares that accountability.</p>
          <p>We do not work with organisations that want a strategy deck. We work with organisations that want a number to change — and are willing to define it before the first invoice is raised.</p>
        </div>
      </Section>

      <Section>
        <H2>Founder</H2>
        <div className="space-y-4 text-lg max-w-4xl">
          <p>HumanAIze was founded by Bagmi Sahoo — a senior technology and AI transformation leader with 18+ years of enterprise transformation experience across DACH and UAE, including roles at Mercedes-Benz and international technology organisations, and UAE Delegate to the Global Alliance for AI (GAFAI).</p>
          <p>Bagmi built HumanAIze from a conviction that AI adoption is fundamentally a human and decision-systems challenge — not a technology problem.</p>
          <p>HumanAIze operates from the UAE, serves enterprises across DACH and MENA, and holds to one standard: if the ROI case isn&apos;t credible within 90 days, we don&apos;t begin.</p>
        </div>
      </Section>

      <Section alt>
        <H2>What we believe</H2>
        <div className="space-y-4 text-lg max-w-4xl">
          <p>We believe AI without structured human agency is expensive noise.</p>
          <p>We believe the most dangerous thing in enterprise AI right now is the gap between what organisations think they&apos;re building and what they&apos;re actually delivering.</p>
          <p>And we believe the only honest measure of transformation is a number — defined upfront, tracked in real time, and reported without spin. That is what HumanAIze was built to deliver.</p>
        </div>
      </Section>

      <FaqSection items={PAGE_FAQS.about} alt={false} />

      <Section alt>
        <CtaWithSupport secondary />
      </Section>
    </Page>
  );
}
