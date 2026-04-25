import { constructMetadata } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { siteConfig } from "@/lib/constants";

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
