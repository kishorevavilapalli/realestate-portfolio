'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import type { AgentConfig } from '@/types';

const navLinks = [
  { label: 'Listings',     href: '#listings' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar({ agent }: { agent: AgentConfig }) {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on nav link click
  const handleNav = () => setOpen(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--color-navy)]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0" aria-label={agent.name}>
          <span className="w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--color-gold)] relative block">
            <Image src={agent.photo} alt={agent.name} fill className="object-cover" sizes="40px" />
          </span>
          <div>
            <p className="text-white font-serif text-lg leading-none">{agent.name}</p>
            <p className="text-[var(--color-gold)] text-xs tracking-widest uppercase">{agent.title}</p>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-[var(--color-gold)] text-sm font-medium tracking-wide transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${agent.phone}`} className="flex items-center gap-2 text-[var(--color-gold)] text-sm">
            <Phone size={15} /> {agent.phone}
          </a>
          <Button href="#contact" size="sm">Book a Call</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[var(--color-navy)] border-t border-white/10">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNav} className="text-gray-200 hover:text-[var(--color-gold)] text-base font-medium block py-1">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button href="#contact" className="w-full mt-2" onClick={handleNav}>Book a Call</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
