'use client';
import { useInView } from 'react-intersection-observer';
import { Home, Award, TrendingUp, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { StatItem } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  Home, Award, TrendingUp, Star,
};

function StatCard({ item, index }: { item: StatItem; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const Icon = iconMap[item.icon] ?? Star;

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col items-center text-center transition-all duration-700',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mb-4">
        <Icon size={24} className="text-[var(--color-gold)]" />
      </div>
      <p className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-1">{item.value}</p>
      <p className="text-sm text-[var(--color-muted)] uppercase tracking-widest">{item.label}</p>
    </div>
  );
}

export default function Stats({ items }: { items: StatItem[] }) {
  return (
    <section id="stats" className="section-pad bg-[var(--color-cream)]" aria-label="Key statistics">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {items.map((item, i) => (
            <StatCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
