'use client';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { useInView }    from 'react-intersection-observer';
import SectionHeading   from '@/components/ui/SectionHeading';
import Button           from '@/components/ui/Button';
import { cn }           from '@/lib/utils';
import type { AgentConfig } from '@/types';

const highlights = [
  'Top 1% of REALTORS® in the GTA for 5 consecutive years',
  'Certified Luxury Home Marketing Specialist (CLHMS)',
  'Fluent in English, Mandarin & Cantonese',
  'Free home evaluation and market analysis',
];

export default function About({ agent }: { agent: AgentConfig }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="section-pad bg-[var(--color-cream)]" aria-label="About the agent" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image column */}
        <div className={cn('relative transition-all duration-700', inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10')}>
          <div className="relative h-[520px] overflow-hidden">
            <Image
              src={agent.aboutImage}
              alt={`${agent.name} — ${agent.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Gold accent block */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[var(--color-gold)] -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--color-navy)] -z-10" />
        </div>

        {/* Text column */}
        <div className={cn('transition-all duration-700 delay-200', inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10')}>
          <SectionHeading
            eyebrow="About"
            title={`Meet ${agent.name}`}
            subtitle={agent.bio}
          />

          <ul className="space-y-3 mb-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <CheckCircle2 size={18} className="text-[var(--color-gold)] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#contact" size="md">Work With Me</Button>
            <Button href={`tel:${agent.phone}`} variant="outline" size="md">
              {agent.phone}
            </Button>
          </div>

          <p className="mt-6 text-xs text-[var(--color-muted)]">{agent.licenseNumber} · {agent.brokerageName}</p>
        </div>
      </div>
    </section>
  );
}
