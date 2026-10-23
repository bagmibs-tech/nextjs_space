export type FaqItem = { id: string; q: string; a: string };
export type FaqGroup = { title: string; items: FaqItem[] };

// Copy is verbatim from the prioritised fixes spec (24 Oct 2026). Do not edit the first sentence of any answer.
export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: 'About HumanAIze',
    items: [
      { id: 'what-is', q: 'What is HumanAIze?', a: 'HumanAIze is an AI transformation firm serving mid-to-large enterprises in DACH (Germany, Austria, Switzerland) and the UAE. It ties its fees to defined business outcomes rather than hours billed, and works to make AI investments produce measurable ROI within 90 days.' },
      { id: 'different', q: 'How is HumanAIze different from a Big4 firm or AI consultancy?', a: 'HumanAIze links its fee to defined KPI outcomes, is vendor-neutral with no preferred platforms or referral fees, uses senior practitioners instead of junior analyst teams, and transfers the capability to your team when the engagement ends. Big4 firms typically bill by time and team size.' },
      { id: 'who-with', q: 'Who does HumanAIze work with?', a: 'CDOs, CFOs and other C-level leaders at mid-to-large enterprises in DACH and the UAE who are accountable for AI investment and want a number to change, not a strategy deck. This includes organisations whose existing AI spend has not yet produced measurable ROI.' },
      { id: 'who-leads', q: 'Who leads HumanAIze?', a: 'HumanAIze was founded by Bagmi Sahoo, a senior AI transformation leader with 18+ years of enterprise transformation experience across DACH and the UAE, and UAE Delegate to the Global Alliance for AI (GAFAI). Every engagement is senior-led.' },
      { id: 'based', q: 'Where is HumanAIze based?', a: 'HumanAIze FZE LLC is based in Dubai, UAE, and serves enterprises across DACH and the Middle East with an integrated team, so there are no regional handoffs between markets.' },
    ],
  },
  {
    title: 'Services and the engagement journey',
    items: [
      { id: 'services', q: 'What services does HumanAIze offer?', a: 'HumanAIze offers a four-stage Operating System: Assess (diagnostic and business case), Activate (strategy, architecture and governance), Implement (90-day ROI sprints) and Embed (scaling and capability transfer). A separate optional offer, Blindspot, builds the internal business case before any commitment.' },
      { id: 'start', q: 'Where should my organisation start?', a: 'Start where you are. With no AI investment or internal buy-in, start with Blindspot. With budget authority but no validated case, start with Assess. With a validated case, start at Activate. With strategy and governance in place, start at Implement. With a proven pilot to scale, start at Embed.' },
      { id: 'blindspot', q: 'What is the Blindspot Opportunity Assessment?', a: 'Blindspot is a standalone, fixed-fee engagement of 3–5 days that scans for AI opportunities and builds a budget-ready business case for leadership sign-off. It is designed for organisations with no prior AI investment, and sits outside the four-stage methodology as an optional entry point.' },
      { id: 'assess', q: 'What is the Assess stage?', a: 'Assess is a fixed-fee diagnostic of 6–12 weeks that audits AI maturity, prioritises and scores the top use cases, locks KPI baselines with sign-off, and produces a 90-Day Value Hypothesis with metric uplift targets. It tells you which AI investments are worth making before capital is committed.' },
      { id: 'sprint', q: 'What is a 90-Day ROI Sprint?', a: 'A 90-Day ROI Sprint is a time-boxed Implement engagement that builds and deploys priority AI use cases and measures results against a baseline locked beforehand. It ends with a day-90 gate: scale, iterate, or stop. The sprint clock starts only after Assess has locked the baseline.' },
      { id: 'roiaas', q: 'What does "ROI as a Service" mean?', a: "ROI as a Service means HumanAIze's fee is tied to defined outcomes rather than hours worked. KPIs and the baseline are agreed in writing before work begins, and Implement engagements include a success fee linked to the KPI uplift delivered." },
      { id: 'no-roi', q: 'What happens if there is no credible ROI path?', a: 'HumanAIze does not begin. If a credible path to measurable ROI is not visible within 90 days, HumanAIze tells you and declines to start. This protects both sides from wasted investment.' },
    ],
  },
  {
    title: 'Pricing and commercial model',
    items: [
      { id: 'cost', q: 'How much does HumanAIze cost?', a: 'Fees depend on organisation size, scope and market, so HumanAIze does not publish a price list. Blindspot and Assess are fixed-fee, Activate and Embed are monthly retainers, and Implement is a fixed fee per 90-day sprint plus a success fee tied to KPI uplift. Book a diagnostic for a scoped proposal.' },
      { id: 'outcome-pricing', q: 'How does outcome-linked pricing work?', a: 'Before work begins, you and HumanAIze agree the KPI baseline and the 90-day objective in writing. For Implement sprints, part of the fee depends on the measured uplift against that baseline, so HumanAIze is paid on results, not promises.' },
    ],
  },
  {
    title: 'Trust, governance and delivery',
    items: [
      { id: 'vendor-neutral', q: 'Is HumanAIze vendor-neutral?', a: 'Yes. HumanAIze has no preferred technology partners, takes no referral fees and has no platform to sell. Recommendations are based only on what serves your outcome, so you are never locked in to a vendor through HumanAIze.' },
      { id: 'owns', q: 'Who owns the work when the engagement ends?', a: 'You do. Capability transfer is built into every engagement: HumanAIze builds the internal capability, governance structures and measurement systems your team needs to run AI value without external dependency.' },
      { id: 'governance', q: 'How does HumanAIze handle AI governance and regulation?', a: "Activate includes regulatory compliance mapping across the EU AI Act, UAE requirements, DIFC-10 and NIST. In Implement, agentic AI is governed by HumanAIze's TARA-A framework, and vendor-native governance is adopted for other tools." },
      { id: 'results', q: 'What results can I expect?', a: "HumanAIze's benchmarks, set in writing before an engagement starts, are 15–30% process cycle-time reduction, 20–28% IT cost optimisation, 20–40% AI-driven process acceleration, and 15–25% FTE productivity uplift. First measurable outcomes are targeted within 90 days." },
      { id: 'get-started', q: 'How do I get started?', a: 'Book an AI Readiness Diagnostic: a 30-minute conversation with a senior HumanAIze advisor. There is no pitch or deck. You will hear where the value gap in your AI investment is, whether or not you engage HumanAIze.' },
    ],
  },
];

const ALL = FAQ_GROUPS.flatMap((g) => g.items);
export const faqByIds = (ids: string[]): FaqItem[] =>
  ids.map((id) => {
    const item = ALL.find((f) => f.id === id);
    if (!item) throw new Error(`Unknown FAQ id: ${id}`);
    return item;
  });
const group = (i: number) => FAQ_GROUPS[i].items.map((f) => f.id);

// Placement table from the spec.
export const PAGE_FAQS = {
  home: faqByIds(['what-is', 'different', 'who-with', 'get-started']),
  about: faqByIds([...group(0), 'vendor-neutral']),
  services: faqByIds(['start', ...group(1).filter((id) => id !== 'start')]),
  howWeWork: faqByIds(['sprint', 'start', 'governance']),
  pricing: faqByIds([...group(2), 'roiaas']),
};
