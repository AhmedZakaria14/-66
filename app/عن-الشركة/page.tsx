import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Script from 'next/script';
import { getBreadcrumbSchema } from '@/lib/schema';
import Image from 'next/image';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = constructMetadata({
  title: 'عن الشركة',
  description: 'تعرف على قصة نجار الرياض، خبرتنا لأكثر من 15 عاماً في تقديم خدمات النجارة الاحترافية، رؤيتنا، ورسالتنا.',
  canonical: '/عن-الشركة',
});

export default function AboutPage() {
  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "عن الشركة", url: "/عن-الشركة" },
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
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="font-amiri text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            عن نجار الرياض
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            قصة الحرفة، والسر وراء الإتقان.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-amiri text-4xl font-bold text-bg-dark mb-6">قصتنا</h2>
              <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                <p>
                  تأسسنا عام 2009 في مدينة الرياض برؤية واحدة وبسيطة: تقديم أعمال خشبية تجمع بين الجمال المطلق والمتانة التي تدوم للأجيال. بدأنا كورشة صغيرة بطموحات كبيرة، واليوم نفخر بكوننا إحدى أبرز الأسماء الموثوقة في تقديم خدمات النجارة، وتفصيل المطابخ، وغرف النوم.
                </p>
                <p>
                  لم يكن طريقنا سهلاً، لكن إيماننا بأن <em>&quot;الجودة تتحدث عن نفسها&quot;</em> جعلنا نكسب ثقة أكثر من 2000 عميل في مختلف أحياء الرياض المستدامة والجديدة.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                  <h3 className="font-amiri font-bold text-2xl text-primary mb-3">رؤيتنا</h3>
                  <p className="text-text-muted">أن نكون الخيار الأول والأكثر موثوقية لخدمات النجارة المخصصة في منطقة الرياض والمملكة.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                  <h3 className="font-amiri font-bold text-2xl text-primary mb-3">رسالتنا</h3>
                  <p className="text-text-muted">نلتزم بتقديم أعمال نجارة تفوق توقعات عملائنا بجودة لا تُجارى، وتصاميم تواكب أحدث المعايير العالمية.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] transform -rotate-3"></div>
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                 <Image src="https://picsum.photos/seed/carpenter/800/1000" alt="نجار الرياض يعمل في الورشة" fill className="object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team & Value */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                 <h2 className="font-amiri text-4xl font-bold text-bg-dark mb-10">الشهادات والإنجازات</h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="p-6 border border-black/10 rounded-2xl">
                        <div className="text-4xl font-bold text-primary mb-2">15</div>
                        <div className="text-text-muted">سنة خبرة</div>
                    </div>
                    <div className="p-6 border border-black/10 rounded-2xl">
                        <div className="text-4xl font-bold text-primary mb-2">+2000</div>
                        <div className="text-text-muted">مشروع منجز</div>
                    </div>
                    <div className="p-6 border border-black/10 rounded-2xl">
                        <div className="text-4xl font-bold text-primary mb-2">+50</div>
                        <div className="text-text-muted">عامل وحرفي</div>
                    </div>
                    <div className="p-6 border border-black/10 rounded-2xl">
                        <div className="text-4xl font-bold text-primary mb-2">98%</div>
                        <div className="text-text-muted">تقييم ممتاز</div>
                    </div>
                 </div>
                 
                 <div className="mt-16 flex flex-wrap justify-center gap-6">
                     <span className="px-6 py-3 bg-bg-light text-text-dark font-medium rounded-full shadow-sm border border-black/5">شهادة جودة ISO 9001</span>
                     <span className="px-6 py-3 bg-bg-light text-text-dark font-medium rounded-full shadow-sm border border-black/5">عضو الغرفة التجارية بالرياض</span>
                 </div>
              </div>
          </div>
      </section>

      <CTA />
    </>
  );
}
