import { Metadata, Viewport } from 'next';
import { Amiri, Tajawal } from 'next/font/google';
import './globals.css';
import { constructMetadata } from '@/lib/seo';
import Script from 'next/script';
import { getLocalBusinessSchema, getWebsiteSchema } from '@/lib/schema';
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/layout/FloatingActions';

const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-amiri',
  display: 'swap',
});

const tajawal = Tajawal({
  weight: ['400', '500', '700'],
  subsets: ['arabic'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#8B4513',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Trigger rebuild
  return (
    <html lang="ar" dir="rtl" className={`scroll-smooth ${amiri.variable} ${tajawal.variable}`} suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="SA-01" />
        <meta name="geo.placename" content="الرياض" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
          strategy="lazyOnload"
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema()) }}
          strategy="lazyOnload"
        />
      </head>
      <body className="antialiased min-h-screen relative flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
