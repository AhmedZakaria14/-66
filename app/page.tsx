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

export const metadata = constructMetadata({
  canonical: "/",
});

export default function Home() {
  return (
    <>
      <h1 className="sr-only">نجار الرياض — خدمات نجارة احترافية بجودة عالية</h1>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
