import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Script from 'next/script';
import { getBreadcrumbSchema } from '@/lib/schema';
import Portfolio from '@/components/sections/Portfolio';
import CTA from '@/components/sections/CTA';
import Image from 'next/image';

export const metadata: Metadata = constructMetadata({
  title: 'معرض الأعمال',
  description: 'تصفح أحدث مشاريع نجارة أبو ثابت من غرف نوم ومطابخ خشبية وأبواب وديكورات مخصصة بمدينة الرياض.',
  canonical: '/portfolio',
});

export default function PortfolioPage() {
  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "أعمالنا", url: "/portfolio" },
  ];

  return (
    <>
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)) }}
      />
      
      {/* Page Header */}
      <section className="bg-bg-dark pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016585/WhatsApp_Image_2026-04-01_at_12.46.06_AM_1_oxwnww.jpg" alt="خلفية أعمالنا" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="font-amiri text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            معرض أعمال نجار الرياض
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            مجموعة مختارة من مشاريعنا المميزة التي تعكس الدقة في التصميم والاحترافية في التنفيذ.
          </p>
        </div>
      </section>

      {/* We reuse the Portfolio component which already acts as a full section */}
      <div className="pt-10 bg-white">
          <Portfolio />
      </div>

      <CTA />
    </>
  );
}
