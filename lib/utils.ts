import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Format price string to display */
export function formatPrice(price: string): string {
  return price;
}

/** Truncate text to n words */
export function truncate(text: string, words = 20): string {
  const parts = text.split(' ');
  return parts.length > words ? parts.slice(0, words).join(' ') + '…' : text;
}
