import type { Offer } from '@/lib/offers';
import { Card, Bullets } from '@/components/site/ui';

export function OfferCard({ offer, label }: { offer: Offer; label?: string }) {
  return (
    <Card id={offer.id} className="flex flex-col">
      {label && <p className="text-xs uppercase tracking-widest text-[#5B8BF5] mb-2">{label}</p>}
      <h3 className="text-2xl font-bold text-white">
        {offer.name} <span className="text-[#38BDF8]">— {offer.subtitle}</span>
      </h3>
      <p className="mt-2 text-sm italic text-[#67C8F0]">{offer.terms}</p>
      <p className="mt-4">{offer.summary}</p>
      <Bullets items={offer.bullets} />
      <p className="mt-4 text-sm italic text-[#E2E8F0]/80">Best for: {offer.bestFor}</p>
    </Card>
  );
}
