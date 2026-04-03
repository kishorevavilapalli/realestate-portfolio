'use client';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import type { AgentConfig } from '@/types';

export default function Hero({ agent }: { agent: AgentConfig }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Image */}
      <Image
        src={agent.heroImage}
        alt="Luxury property"
        fill
        priority
        quality={90}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)]/85 via-[var(--color-navy)]/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p
          className="mb-4 text-[var(--color-gold)] text-xs font-semibold uppercase tracking-[0.3em] animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          {agent.title}
        </p>

        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 animate-fade-up"
          style={{ animationDelay: '0.25s', opacity: 0 }}
        >
          {agent.tagline}
        </h1>

        <p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          Trusted by 500+ GTA families to navigate the luxury market with confidence.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          <Button href="#listings" size="lg">
            View Listings
          </Button>
          <Button href="#contact" size="lg" variant="outline">
            Free Consultation
          </Button>
        </div>

        {/* Trust bar */}
        <div
          className="mt-14 flex flex-wrap justify-center gap-6 text-xs text-gray-400 animate-fade-up"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          {['Royal LePage Top Producer 2024', 'RECO Certified', '5-Star Google Rating'].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-gold)] inline-block" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#stats"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-[var(--color-gold)] transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
