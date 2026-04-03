/**
 * CLIENT CONFIGURATION
 * ─────────────────────────────────────────────────────────────
 * This is the ONLY file you need to edit to fully rebrand
 * this template for a new client. All components read from here.
 *
 * Onboarding checklist:
 *  1. Update agent details, bio, contact info
 *  2. Swap brand colors (hex values)
 *  3. Replace image URLs (Unsplash links or /public/ paths)
 *  4. Update listings, testimonials, stats
 *  5. Update site SEO metadata
 * ─────────────────────────────────────────────────────────────
 */

import type { ClientConfig } from '@/types';

const clientConfig: ClientConfig = {
  // ── SEO & Meta ──────────────────────────────────────────────
  site: {
    siteUrl:     'https://sarahchenrealty.com',
    siteName:    'Sarah Chen | Toronto Luxury Real Estate',
    description: 'Award-winning Toronto realtor specializing in luxury condos and freehold homes in the GTA. Honest. Strategic. Results-driven.',
    keywords:    ['Toronto realtor', 'luxury homes Toronto', 'GTA real estate', 'condo specialist'],
    ogImage:     'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
  },

  // ── Brand Colors ─────────────────────────────────────────────
  // Swap these 5 values to fully rebrand for any client
  brand: {
    navy:      '#0F1C2E',
    gold:      '#C9A84C',
    goldLight: '#E8D5A3',
    cream:     '#F9F6F0',
    muted:     '#6B7280',
  },

  // ── Agent Profile ────────────────────────────────────────────
  agent: {
    name:          'Sarah Chen',
    title:         'Luxury Real Estate Specialist',
    tagline:       'Your Dream Home in the Heart of Toronto',
    bio:           'With over 12 years of experience in the Toronto luxury market, I have helped more than 500 families find their perfect home. My data-driven approach and deep neighbourhood expertise mean you get the best deal — every time. I was born and raised in Toronto and I know every pocket of this city intimately.',
    phone:         '+1 (416) 555-0192',
    email:         'sarah@sarahchenrealty.com',
    licenseNumber: 'RECO #4821096',
    brokerageName: 'Royal LePage Signature Realty',
    address:       '123 King Street West, Suite 400, Toronto, ON M5H 1J9',
    photo:         'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
    heroImage:     'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85',
    aboutImage:    'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=900&q=80',
    social: {
      instagram: 'https://instagram.com/',
      facebook:  'https://facebook.com/',
      linkedin:  'https://linkedin.com/',
    },
  },

  // ── Stats Bar ────────────────────────────────────────────────
  stats: [
    { value: '500+',  label: 'Homes Sold',        icon: 'Home' },
    { value: '12',    label: 'Years Experience',   icon: 'Award' },
    { value: '$2B+',  label: 'Total Sales Volume', icon: 'TrendingUp' },
    { value: '98%',   label: 'Client Satisfaction',icon: 'Star' },
  ],

  // ── Featured Listings ────────────────────────────────────────
  listings: [
    {
      id:      'lst-001',
      title:   'Stunning King West Penthouse',
      address: '100 Bathurst St, Unit 4201, Toronto, ON',
      price:   '$2,450,000',
      beds:    3, baths: 3, sqft: 2100,
      status:  'For Sale',
      featured: true,
      tag:     'New Listing',
      image:   'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    },
    {
      id:      'lst-002',
      title:   'Rosedale Heritage Victorian',
      address: '45 Crescent Rd, Toronto, ON',
      price:   '$4,200,000',
      beds:    5, baths: 4, sqft: 4500,
      status:  'For Sale',
      featured: true,
      tag:     'Exclusive',
      image:   'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
      id:      'lst-003',
      title:   'Distillery District Loft',
      address: '390 Cherry St, Unit 902, Toronto, ON',
      price:   '$899,000',
      beds:    1, baths: 2, sqft: 980,
      status:  'Sold',
      featured: true,
      image:   'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    },
    {
      id:      'lst-004',
      title:   'Yorkville Luxury Corner Suite',
      address: '133 Hazelton Ave, Unit 12A, Toronto, ON',
      price:   '$3,100,000',
      beds:    3, baths: 3, sqft: 2650,
      status:  'Pending',
      featured: true,
      tag:     'Under Contract',
      image:   'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    },
    {
      id:      'lst-005',
      title:   'Leslieville Semi-Detached',
      address: '220 Carlaw Ave, Toronto, ON',
      price:   '$1,250,000',
      beds:    3, baths: 2, sqft: 1800,
      status:  'Sold',
      featured: false,
      image:   'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    },
    {
      id:      'lst-006',
      title:   'Forest Hill Manor',
      address: '72 Dunvegan Rd, Toronto, ON',
      price:   '$6,850,000',
      beds:    6, baths: 6, sqft: 7200,
      status:  'For Sale',
      featured: false,
      tag:     'Trophy Property',
      image:   'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    },
  ],

  // ── Testimonials ─────────────────────────────────────────────
  testimonials: [
    {
      id:     't-001',
      name:   'Michael & Lisa Thornton',
      role:   'Buyers — Rosedale',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
      rating: 5,
      text:   "Sarah found us our dream home in under 3 weeks, negotiated $85K below asking, and guided us through every step. She is not just an agent — she is a true advocate.",
      date:   'March 2026',
    },
    {
      id:     't-002',
      name:   'Jennifer Park',
      role:   'Seller — King West Condo',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
      rating: 5,
      text:   "Listed on a Tuesday, received 7 offers by Thursday, sold for $120K over asking. Sarah\'s staging advice and marketing strategy were game-changers.",
      date:   'January 2026',
    },
    {
      id:     't-003',
      name:   'David Okonkwo',
      role:   'Investor — Multiple Properties',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
      rating: 5,
      text:   "I have worked with Sarah on 4 investment properties. Her market intelligence and negotiation skills are unmatched. She pays for herself many times over.",
      date:   'February 2026',
    },
  ],

  // ── Services ─────────────────────────────────────────────────
  services: [
    {
      title:       'Buyer Representation',
      description: 'I guide you through every step — from pre-approval to keys in hand — protecting your interests and finding the best value.',
      icon:        'Search',
    },
    {
      title:       'Seller Marketing',
      description: 'Professional photography, staging consultation, MLS exposure, and targeted digital campaigns to maximize your sale price.',
      icon:        'BarChart3',
    },
    {
      title:       'Investment Advisory',
      description: 'Cap rate analysis, neighbourhood growth forecasting, and portfolio strategy for first-time and experienced investors alike.',
      icon:        'TrendingUp',
    },
    {
      title:       'Relocation Services',
      description: 'Moving to Toronto? I offer concierge-level service to help you settle in the right neighbourhood for your lifestyle and budget.',
      icon:        'MapPin',
    },
  ],
};

export default clientConfig;
