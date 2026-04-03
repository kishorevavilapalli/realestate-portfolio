'use client';
import { useState }    from 'react';
import Image           from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView }   from 'react-intersection-observer';
import SectionHeading  from '@/components/ui/SectionHeading';
import { cn }          from '@/lib/utils';
import type { Testimonial } from '@/types';

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < count ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' : 'text-gray-300'} />
      ))}
    </div>
  );
}

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const { ref, inView }   = useInView({ triggerOnce: true, threshold: 0.1 });

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const t    = testimonials[index];

  return (
    <section id="testimonials" className="section-pad bg-white" aria-label="Testimonials" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Client Stories"
          title="What My Clients Say"
          center
        />

        <div
          className={cn(
            'relative bg-[var(--color-cream)] p-10 md:p-14 transition-all duration-700',
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
        >
          {/* Decorative quote */}
          <Quote size={64} className="absolute top-8 right-10 text-[var(--color-gold)]/10" aria-hidden />

          <Stars count={t.rating} />

          <blockquote className="font-serif text-xl md:text-2xl text-[var(--color-navy)] leading-relaxed mb-8 relative z-10">
            &ldquo;{t.text}&rdquo;
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0">
              <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="56px" />
            </div>
            <div>
              <p className="font-semibold text-[var(--color-navy)]">{t.name}</p>
              <p className="text-sm text-[var(--color-muted)]">{t.role} · {t.date}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-10">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={cn('w-2 h-2 rounded-full transition-all', i === index ? 'bg-[var(--color-gold)] w-6' : 'bg-gray-300')}
              />
            ))}
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
