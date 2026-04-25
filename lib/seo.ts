import { Metadata } from 'next';
import { siteConfig } from './constants';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string[];
  ogImage?: string;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  canonical,
  keywords = [
    "نجارة أبو ثابت",
    "نجارة الرياض",
    "نجار في الرياض",
    "مطابخ خشبية الرياض",
    "غرف نوم خشب الرياض",
    "أبواب خشبية الرياض",
    "ديكورات خشبية الرياض"
  ],
  ogImage = '/images/og-main.jpg',
}: SEOProps = {}): Metadata {
  return {
    title: {
      default: `${siteConfig.name} | خدمات نجارة احترافية في الرياض`,
      template: `%s | ${siteConfig.name}`,
    },
    ...(title && { title: `${title} | ${siteConfig.name}` }),
    description,
    keywords,
    icons: {
      icon: siteConfig.logo,
      shortcut: siteConfig.logo,
      apple: siteConfig.logo,
    },
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: canonical ? `${siteConfig.domain}${canonical}` : siteConfig.domain,
      languages: {
        'ar-SA': canonical ? `${siteConfig.domain}${canonical}` : siteConfig.domain,
      },
    },
    openGraph: {
      type: "website",
      locale: "ar_SA",
      url: canonical ? `${siteConfig.domain}${canonical}` : siteConfig.domain,
      siteName: siteConfig.name,
      title: title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | خدمات نجارة احترافية في الرياض`,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | خدمات نجارة احترافية في الرياض`,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION,
    },
  };
}
