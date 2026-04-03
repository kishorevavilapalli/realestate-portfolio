# 🏡 Real Estate Agent Portfolio — White-Label Template

A **production-ready, fully brandable** real estate agent portfolio built with **Next.js 14 · TypeScript · Tailwind CSS**.  
Designed for subscription-based delivery: onboard a new client by editing **one config file**.

---

## ✨ Features

| Area | Detail |
|---|---|
| **Design** | Luxury Navy/Gold theme, Playfair Display headings, fully responsive |
| **Sections** | Hero · Stats · Listings (filterable) · About · Services · Testimonials · Contact |
| **Performance** | Next.js Image optimization, lazy loading, SSG-ready |
| **SEO** | Dynamic metadata, OG tags, Twitter cards, robots.txt |
| **Forms** | React Hook Form + Zod validation, rate-limited API route, Nodemailer |
| **Security** | Security headers (CSP, XSS, Frame), input sanitization, env secrets |
| **Scalability** | CSS variables for theming, single config file per client |
| **Deployment** | Zero-config Vercel deploy |

---

## 🚀 Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/realestate-portfolio.git
cd realestate-portfolio
npm install
cp .env.example .env.local   # fill in SMTP credentials
npm run dev                  # http://localhost:3000
```

---

## 🔧 Onboarding a New Client

> **You only need to edit ONE file**: `config/client.config.ts`

```
1. Update agent name, bio, photo, contact details
2. Swap brand.navy / brand.gold hex values  ← instant rebrand
3. Replace image URLs (Unsplash or /public/)
4. Update listings, testimonials, stats
5. Set site.siteUrl + site.siteName for SEO
6. Deploy to Vercel → add client's custom domain
```

### Estimated setup time per client: **< 2 hours**

---

## 📁 Project Structure

```
realestate-portfolio/
├── app/
│   ├── layout.tsx           # Injects CSS brand variables from config
│   ├── page.tsx             # Composes all sections
│   ├── globals.css          # Tailwind + CSS variable declarations
│   └── api/contact/
│       └── route.ts         # Validated, rate-limited email endpoint
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky, mobile-responsive
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx         # Full-screen bg image + CTAs
│   │   ├── Stats.tsx        # Animated counter cards
│   │   ├── FeaturedListings.tsx  # Filterable property grid
│   │   ├── About.tsx        # Two-column agent bio
│   │   ├── Services.tsx     # Dark-bg service cards
│   │   ├── Testimonials.tsx # Carousel with navigation
│   │   └── Contact.tsx      # Validated lead capture form
│   └── ui/
│       ├── Button.tsx       # Multi-variant, accessible
│       ├── Badge.tsx        # Status badges
│       └── SectionHeading.tsx
├── config/
│   └── client.config.ts     # ← EDIT THIS for each client
├── lib/
│   ├── utils.ts             # cn(), truncate()
│   └── validations.ts       # Zod contact form schema
└── types/
    └── index.ts             # All TypeScript interfaces
```

---

## 🌐 Deploying to Vercel (Free)

```bash
# 1. Push to GitHub
git add . && git commit -m "Initial client build" && git push

# 2. Import project at vercel.com/new
# 3. Set environment variables (SMTP_HOST, SMTP_USER, etc.)
# 4. Deploy — live in ~90 seconds
# 5. Add client custom domain in Vercel → Domains
```

---

## 💰 Subscription Pricing Suggestion

| Tier | Includes | CAD/mo |
|---|---|---|
| Starter | Site + hosting + SSL | $99–$149 |
| Business | + SEO setup + monthly updates | $199–$299 |
| Pro | + CRM + booking + analytics | $399–$599 |

---

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `SMTP_HOST` | e.g. smtp.gmail.com |
| `SMTP_PORT` | 587 (TLS) or 465 (SSL) |
| `SMTP_USER` | Your email address |
| `SMTP_PASS` | App password (not login password) |
| `CONTACT_RECIPIENT` | Where leads are delivered |
| `NEXT_PUBLIC_GA_ID` | Google Analytics (optional) |

---

## 🛡 Security Features

- **Zod validation** on all form inputs (server-side)
- **Rate limiting** (5 req/min per IP) on contact endpoint
- **Security headers** via `next.config.ts` (XSS, frame options, CSP)
- **No secrets in client bundle** — all SMTP config server-side only
- `.gitignore` protects `.env.local`

---

## 📄 License

MIT — free to use and modify for client projects.
