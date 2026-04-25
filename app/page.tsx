import { constructMetadata } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import dynamic from 'next/dynamic';
import { siteConfig } from "@/lib/constants";

const Stats = dynamic(() => import("@/components/sections/Stats"));
const Services = dynamic(() => import("@/components/sections/Services"));
const WhyUs = dynamic(() => import("@/components/sections/WhyUs"));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const Process = dynamic(() => import("@/components/sections/Process"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const CTA = dynamic(() => import("@/components/sections/CTA"));

export const metadata = constructMetadata({
  canonical: "/",
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.domain,
  logo: siteConfig.logo,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.contact.address,
    addressLocality: 'الرياض',
    addressRegion: 'الرياض',
    addressCountry: 'SA',
  },
  openingHoursSpecification: siteConfig.openingHours.map(hours => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: hours.split(':')[0],
    opens: hours.split(':')[1].split('–')[0].replace('صباحاً', '08:00').replace('عصراً', '14:00').trim(), // Simplified mapping for illustration
    closes: '22:00',
  })),
  sameAs: Object.values(siteConfig.social),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">نجارة أبو ثابت — خدمات نجارة احترافية بجودة عالية</h1>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Portfolio limit={6} />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
