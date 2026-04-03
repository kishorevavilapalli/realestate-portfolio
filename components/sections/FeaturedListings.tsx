'use client';
import { useState }            from 'react';
import Image                   from 'next/image';
import { Bed, Bath, Maximize } from 'lucide-react';
import { useInView }           from 'react-intersection-observer';
import SectionHeading           from '@/components/ui/SectionHeading';
import Badge                   from '@/components/ui/Badge';
import Button                  from '@/components/ui/Button';
import { cn }                  from '@/lib/utils';
import type { Listing }        from '@/types';

type Filter = 'All' | 'For Sale' | 'Sold' | 'Pending';
const FILTERS: Filter[] = ['All', 'For Sale', 'Sold', 'Pending'];

function statusVariant(status: Listing['status']): 'gold' | 'navy' | 'sold' | 'pending' {
  if (status === 'Sold')    return 'sold';
  if (status === 'Pending') return 'pending';
  if (status === 'For Sale') return 'gold';
  return 'navy';
}

function ListingCard({ listing, index }: { listing: Listing; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={cn(
        'group bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5">
          <Badge variant={statusVariant(listing.status)}>{listing.status}</Badge>
          {listing.tag && <Badge variant="navy">{listing.tag}</Badge>}
        </div>
        {/* Price overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
          <p className="text-white font-serif text-2xl">{listing.price}</p>
        </div>
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="font-serif text-[var(--color-navy)] text-lg leading-snug mb-1 group-hover:text-[var(--color-gold)] transition-colors">
          {listing.title}
        </h3>
        <p className="text-[var(--color-muted)] text-sm mb-4">{listing.address}</p>
        <div className="flex items-center gap-5 text-sm text-gray-600 border-t border-gray-100 pt-4">
          <span className="flex items-center gap-1.5">
            <Bed size={15} className="text-[var(--color-gold)]" /> {listing.beds} Bed
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={15} className="text-[var(--color-gold)]" /> {listing.baths} Bath
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize size={15} className="text-[var(--color-gold)]" /> {listing.sqft.toLocaleString()} sqft
          </span>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedListings({ listings }: { listings: Listing[] }) {
  const [active, setActive] = useState<Filter>('All');

  const filtered = active === 'All'
    ? listings
    : listings.filter((l) => l.status === active);

  return (
    <section id="listings" className="section-pad bg-white" aria-label="Featured listings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Properties"
          subtitle="A curated selection of exceptional homes bought and sold in the GTA."
          center
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                'px-5 py-2 text-xs font-semibold uppercase tracking-widest border transition-all duration-200',
                active === f
                  ? 'bg-[var(--color-navy)] text-white border-[var(--color-navy)]'
                  : 'border-gray-300 text-gray-500 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]'
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((listing, i) => (
            <ListingCard key={listing.id} listing={listing} index={i} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Button href="#contact" variant="outline" size="lg">
            Enquire About a Property
          </Button>
        </div>
      </div>
    </section>
  );
}
