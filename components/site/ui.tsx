import Link from 'next/link';
import type { ReactNode } from 'react';
import type { FaqItem } from '@/lib/faq-data';
import { PRIMARY_CTA, CTA_SUPPORT } from '@/lib/site';

// Server-rendered building blocks in the HumanAIze theme:
// navy #1E2A45, cyan #38BDF8/#67C8F0, blue-purple #5B8BF5, CTA teal #2ABFBF, text white/#E2E8F0.

export function Page({ children }: { children: ReactNode }) {
  return <div className="bg-[#1E2A45] text-[#E2E8F0]">{children}</div>;
}

export function Section({ children, id, alt = false, className = '' }: { children: ReactNode; id?: string; alt?: boolean; className?: string }) {
  return (
    <section id={id} className={`py-16 md:py-20 ${alt ? 'bg-[#18233B]' : ''} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function H2({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${className}`}>{children}</h2>;
}

export function Card({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return <div id={id} className={`rounded-2xl border border-[#38BDF8]/20 bg-white/5 p-6 md:p-8 ${className}`}>{children}</div>;
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-4">
      {items.map((b) => (
        <li key={b} className="flex gap-2">
          <span className="text-[#38BDF8] mt-0.5" aria-hidden>✓</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaButton({ label = PRIMARY_CTA, href = '/contact' }: { label?: string; href?: string }) {
  return (
    <Link href={href} className="inline-block rounded-full bg-[#2ABFBF] px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-[#25A9A9]">
      {label}
    </Link>
  );
}

/** Primary CTA with the standard supporting line beneath it. */
export function CtaWithSupport({ secondary = false }: { secondary?: boolean }) {
  return (
    <div className="text-center">
      <CtaButton />
      <p className="mt-4 text-sm text-[#E2E8F0]/80 max-w-2xl mx-auto">{CTA_SUPPORT}</p>
      {secondary && (
        <p className="mt-4">
          <Link href="/how-we-work" className="text-[#67C8F0] hover:underline">Read how we define ROI before we begin →</Link>
        </p>
      )}
    </div>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-6">
      {items.map((f) => (
        <div key={f.id} id={`faq-${f.id}`} className="border-b border-[#38BDF8]/15 pb-6">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{f.q}</h3>
          <p className="text-[#E2E8F0]/90 leading-relaxed">{f.a}</p>
        </div>
      ))}
    </div>
  );
}

/** Contextual FAQ block + matching FAQPage JSON-LD (text identical to visible copy). */
export function FaqSection({ items, title = 'Frequently asked questions', alt = true }: { items: FaqItem[]; title?: string; alt?: boolean }) {
  return (
    <Section alt={alt} id="faq">
      <H2>{title}</H2>
      <FaqList items={items} />
      <p className="mt-8">
        <Link href="/faq" className="text-[#67C8F0] hover:underline">See all FAQs →</Link>
      </p>
      <JsonLd data={faqJsonLd(items)} />
    </Section>
  );
}
