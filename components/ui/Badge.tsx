import { cn } from '@/lib/utils';

type BadgeVariant = 'gold' | 'navy' | 'sold' | 'pending';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  gold:    'bg-[var(--color-gold)] text-[var(--color-navy)]',
  navy:    'bg-[var(--color-navy)] text-white',
  sold:    'bg-emerald-600 text-white',
  pending: 'bg-amber-500 text-white',
};

export default function Badge({ children, variant = 'gold', className }: BadgeProps) {
  return (
    <span className={cn('inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest', variants[variant], className)}>
      {children}
    </span>
  );
}
