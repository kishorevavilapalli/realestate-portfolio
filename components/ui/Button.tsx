import React from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline' | 'ghost';
type Size    = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?:    Size;
  asChild?: boolean;
  href?:    string;
}

const base = 'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide rounded-none transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary: 'bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold-light)] active:scale-[0.98]',
  outline: 'border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)]',
  ghost:   'text-[var(--color-gold)] hover:underline underline-offset-4',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, href, ...props }, ref) => {
    const cls = cn(base, variants[variant], sizes[size], className);
    if (href) {
      return <a href={href} className={cls}>{children}</a>;
    }
    return (
      <button ref={ref} className={cls} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
export default Button;
