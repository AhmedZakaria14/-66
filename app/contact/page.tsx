import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Script from 'next/script';
import { getBreadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/constants';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = constructMetadata({
  title: 'اتصل بنا',
  description: 'تواصل مع فريق نجارة أبو ثابت للاستفسار عن أسعار تفصيل المطابخ، غرف النوم، والأبواب. نحن هنا لخدمتك عبر واتساب، الهاتف، أو في ورشتنا بالرياض.',
  canonical: '/contact',
});

export default function ContactPage() {
  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "اتصل بنا", url: "/contact" },
  ];

  return (
    <>
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)) }}
      />
      
      <section className="bg-bg-dark pt-32 pb-20 text-white relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="font-amiri text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            اتصل بنجارة أبو ثابت
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتكم وتحويل أفكاركم إلى مشاريع ملموسة.
          </p>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-black/5">
              <h2 className="font-amiri text-3xl font-bold text-bg-dark mb-8">أرسل استفسارك</h2>
              <ContactForm />
            </div>

            {/* Info Cards */}
            <div className="space-y-8 lg:pt-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-black/5 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6 rtl:scale-x-[-1]" />
                </div>
                <div>
                  <h3 className="font-amiri font-bold text-xl text-bg-dark mb-2">رقم الجوال</h3>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-text-muted hover:text-primary transition-colors text-lg inline-block dir-ltr" dir="ltr" suppressHydrationWarning>
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-black/5 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-amiri font-bold text-xl text-bg-dark mb-2">البريد الإلكتروني</h3>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-text-muted hover:text-primary transition-colors text-lg">{siteConfig.contact.email}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-black/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-amiri font-bold text-xl text-bg-dark mb-2">العنوان</h3>
                  <p className="text-text-muted text-lg leading-relaxed">{siteConfig.contact.address}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 mt-8">
                <h3 className="font-amiri font-bold text-xl text-bg-dark mb-4">ساعات العمل</h3>
                <ul className="space-y-2 text-text-muted">
                  <li><span className="font-bold mr-2 text-primary">السبت–الخميس:</span> 8 صباحاً – 10 مساءً</li>
                  <li><span className="font-bold mr-2 text-primary">الجمعة:</span> 2 عصراً – 10 مساءً</li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] w-full bg-gray-200">
        <iframe 
          src="https://maps.google.com/maps?q=24.7136,46.6753&hl=ar&z=14&output=embed"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="خريطة موقع نجار الرياض"
        ></iframe>
      </section>
    </>
  );
}
