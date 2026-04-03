import { Instagram, Facebook, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import type { AgentConfig } from '@/types';

const socialIcons: Record<string, React.ElementType> = {
  instagram: Instagram,
  facebook:  Facebook,
  linkedin:  Linkedin,
  twitter:   Twitter,
};

export default function Footer({ agent }: { agent: AgentConfig }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-navy)] text-gray-400" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="font-serif text-2xl text-white mb-1">{agent.name}</p>
          <p className="text-[var(--color-gold)] text-xs tracking-widest uppercase mb-4">{agent.title}</p>
          <p className="text-sm leading-relaxed">{agent.brokerageName}</p>
          <p className="text-xs mt-2">{agent.licenseNumber}</p>
          {/* Social */}
          <div className="flex gap-4 mt-6">
            {Object.entries(agent.social).map(([platform, url]) => {
              if (!url) return null;
              const Icon = socialIcons[platform];
              return Icon ? (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer"
                   aria-label={platform}
                   className="w-9 h-9 border border-white/20 flex items-center justify-center rounded-full hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors">
                  <Icon size={15} />
                </a>
              ) : null;
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Quick Links</p>
          <ul className="space-y-3 text-sm">
            {['#listings', '#about', '#services', '#testimonials', '#contact'].map((href) => (
              <li key={href}>
                <a href={href} className="hover:text-[var(--color-gold)] transition-colors capitalize">
                  {href.replace('#', '')}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Contact</p>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start">
              <MapPin size={16} className="text-[var(--color-gold)] shrink-0 mt-0.5" />
              <span>{agent.address}</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-[var(--color-gold)] shrink-0" />
              <a href={`tel:${agent.phone}`} className="hover:text-[var(--color-gold)] transition-colors">{agent.phone}</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-[var(--color-gold)] shrink-0" />
              <a href={`mailto:${agent.email}`} className="hover:text-[var(--color-gold)] transition-colors">{agent.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-5 text-xs text-gray-600 px-4">
        © {year} {agent.name} · {agent.brokerageName} · All rights reserved ·{' '}
        <a href="/privacy" className="hover:text-[var(--color-gold)]">Privacy Policy</a>
      </div>
    </footer>
  );
}
