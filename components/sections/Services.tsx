'use client';
import { Search, BarChart3, TrendingUp, MapPin } from 'lucide-react';
import { useInView }   from 'react-intersection-observer';
import SectionHeading  from '@/components/ui/SectionHeading';
import { cn }          from '@/lib/utils';
import type { Service } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  Search, BarChart3, TrendingUp, MapPin,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const Icon = iconMap[service.icon] ?? Search;

  return (
    <div
      ref={ref}
      className={cn(
        'group p-8 border border-white/10 hover:border-[var(--color-gold)]/40 transition-all duration-500 hover:bg-white/5',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--color-gold)] transition-colors duration-300">
        <Icon size={22} className="text-[var(--color-gold)] group-hover:text-[var(--color-navy)] transition-colors duration-300" />
      </div>
      <h3 className="font-serif text-white text-xl mb-3">{service.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
    </div>
  );
}

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="section-pad bg-[var(--color-navy)]" aria-label="Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="What I Offer"
          title="Full-Service Real Estate"
          subtitle="Whether you are buying, selling, or investing — I provide end-to-end guidance every step of the way."
          center
          light
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
