import type { Metadata } from 'next';
import './globals.css';
import clientConfig from '@/config/client.config';

export const metadata: Metadata = {
  metadataBase:  new URL(clientConfig.site.siteUrl),
  title:         clientConfig.site.siteName,
  description:   clientConfig.site.description,
  keywords:      clientConfig.site.keywords,
  openGraph: {
    type:        'website',
    title:       clientConfig.site.siteName,
    description: clientConfig.site.description,
    url:         clientConfig.site.siteUrl,
    images:      [{ url: clientConfig.site.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       clientConfig.site.siteName,
    description: clientConfig.site.description,
    images:      [clientConfig.site.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { brand } = clientConfig;
  const cssVars = {
    '--color-navy':       brand.navy,
    '--color-gold':       brand.gold,
    '--color-gold-light': brand.goldLight,
    '--color-cream':      brand.cream,
    '--color-muted':      brand.muted,
  } as React.CSSProperties;

  return (
    <html lang="en" style={cssVars}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
