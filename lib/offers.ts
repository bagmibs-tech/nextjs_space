// Canonical offer names, in canonical order: Blindspot (optional entry) · Assess · Activate · Implement · Embed.
// Copy verbatim from the prioritised fixes spec (24 Oct 2026). No prices anywhere.
export type Offer = { id: string; name: string; subtitle: string; terms: string; summary: string; bullets: string[]; bestFor: string };

export const PRICING_TIERS: Offer[] = [
  {
    id: 'blindspot', name: 'BLINDSPOT', subtitle: 'Opportunity Case Builder',
    terms: 'Fixed fee · 3–5 days · Standalone, optional',
    summary: "Not sure there's a credible AI opportunity yet? We scan for it and build the business case your board needs to release budget.",
    bullets: ['AI opportunity scan, no prior AI investment needed', 'Budget-ready business case for leadership sign-off'],
    bestFor: 'organisations with no AI investment yet, who need internal buy-in before committing to anything larger.',
  },
  {
    id: 'assess', name: 'ASSESS', subtitle: 'Know Before You Invest',
    terms: 'Fixed fee · 6–12 weeks · Entry point into the Operating System',
    summary: 'A board-ready diagnostic that tells you where AI value actually lives — before capital is committed.',
    bullets: ['AI maturity audit across 5 criteria', 'Top-3 use cases prioritised and scored', 'KPI baselines locked and signed off', '90-Day Value Hypothesis with metric uplift targets'],
    bestFor: 'first mandate, board clarity, no capital committed yet.',
  },
  {
    id: 'activate', name: 'ACTIVATE', subtitle: 'Strategy, Architecture & Governance',
    terms: 'Monthly retainer, scoped to engagement · Recommended once Assess is complete',
    summary: 'The enterprise blueprint that turns a validated opportunity into an executable, governed programme.',
    bullets: ['3-year AI roadmap design', 'Operating model alignment and change management', 'Regulatory compliance mapping (EU AI Act / UAE, DIFC-10, NIST)'],
    bestFor: 'organisations with a validated business case who need governance and architecture before delivery.',
  },
  {
    id: 'implement', name: 'IMPLEMENT', subtitle: 'Engineer AI Into the Core',
    terms: 'Per 90-day sprint + KPI success fee · Milestone-based',
    summary: 'We build in your environment in 90-day sprints, measured against a baseline locked before we start. Fixed fee plus a success fee tied to the KPI uplift we deliver — we are paid on outcome, not on hours.',
    bullets: ['Priority use cases built and deployed to production', 'Measurement against a locked baseline — no unfalsifiable claims', 'Agentic AI governed by TARA-A; vendor-native governance elsewhere', 'Day-90 gate: scale, iterate, or kill'],
    bestFor: 'organisations ready to move from roadmap to production, willing to commit to a measured 90-day sprint.',
  },
  {
    id: 'embed', name: 'EMBED', subtitle: 'Make AI Permanent, Not Peripheral',
    terms: 'Ongoing monthly retainer · Recommended when scaling beyond first sprints',
    summary: 'Once a sprint proves value, Embed is how it survives contact with the rest of the organisation — scaled, governed, and run by your own people.',
    bullets: ['Scale proven winners org-wide', 'AI literacy and capability building, from CAIO+ to all levels', 'Transformation-Office-as-a-Service'],
    bestFor: 'organisations with at least one proven 90-day win who want it to become permanent capability.',
  },
];

export const SERVICES_BLINDSPOT: Offer = {
  id: 'blindspot', name: 'BLINDSPOT', subtitle: 'Opportunity Case Builder',
  terms: 'Standalone engagement · 3–5 days · Optional, before Assess',
  summary: "Not sure there's a credible AI opportunity yet? We scan for it and build the internal business case your board can act on — before you commit to anything larger.",
  bullets: ['AI opportunity scan — no prior AI investment needed', 'Budget-ready business case built for leadership sign-off', '2–3 quick-win use cases identified and sized', 'Internal buy-in framework you present upward'],
  bestFor: 'organisations with no AI investment yet, who need a credible internal case to secure budget.',
};
