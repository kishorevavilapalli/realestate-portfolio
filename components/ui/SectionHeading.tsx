import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title:    string;
  subtitle?: string;
  center?:  boolean;
  light?:   boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow, title, subtitle, center, light, className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-14', center && 'text-center mx-auto max-w-2xl', className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
          {eyebrow}
        </p>
      )}
      <h2 className={cn('font-serif text-3xl md:text-4xl lg:text-5xl leading-tight', light ? 'text-white' : 'text-[var(--color-navy)]')}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-base md:text-lg leading-relaxed', light ? 'text-gray-300' : 'text-[var(--color-muted)]')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
