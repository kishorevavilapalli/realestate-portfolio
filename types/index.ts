export interface AgentConfig {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  phone: string;
  email: string;
  licenseNumber: string;
  brokerageName: string;
  address: string;
  photo: string;
  heroImage: string;
  aboutImage: string;
  social: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface BrandConfig {
  /** CSS hex values injected as CSS variables */
  navy: string;
  gold: string;
  goldLight: string;
  cream: string;
  muted: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string; // lucide icon name
}

export interface Listing {
  id: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  status: 'For Sale' | 'Sold' | 'Pending' | 'For Lease';
  image: string;
  featured?: boolean;
  tag?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface SiteConfig {
  siteUrl: string;
  siteName: string;
  description: string;
  keywords: string[];
  ogImage: string;
  gtmId?: string;
}

export interface ClientConfig {
  site: SiteConfig;
  brand: BrandConfig;
  agent: AgentConfig;
  stats: StatItem[];
  listings: Listing[];
  testimonials: Testimonial[];
  services: Service[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  interest: 'buying' | 'selling' | 'investing' | 'other';
}
