'use client';

import { useState } from 'react';
import Script from 'next/script';
import { getBreadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/constants';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "اتصل بنا", url: "/اتصل-بنا" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp deep link logic
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');
    
    const text = `مرحباً، أنا ${name}، \nرقم التواصل: ${phone}\nأريد الاستفسار عن: ${service}\n\nرسالتي:\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNum}?text=${encodedText}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, '_blank');
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

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
            اتصل بنجار الرياض
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
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 flex flex-col items-center justify-center text-center h-[300px]">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="font-bold text-xl mb-2">تم تحويلك إلى واتساب بنجاح!</h3>
                  <p>سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-text-muted">الاسم الكريم</label>
                    <input required type="text" id="name" name="name" className="w-full bg-bg-light border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="محمد صالح" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-text-muted">رقم الجوال</label>
                      <input required type="tel" id="phone" name="phone" className="w-full bg-bg-light border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="05X XXX XXXX" dir="ltr" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-bold text-text-muted">الخدمة المطلوبة</label>
                      <select required id="service" name="service" className="w-full bg-bg-light border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                        <option value="">اختر الخدمة...</option>
                        <option value="مطابخ">مطابخ خشبية</option>
                        <option value="غرف نوم">غرف نوم وخزائن</option>
                        <option value="أبواب">أبواب خشبية</option>
                        <option value="ديكورات">ديكورات خشبية</option>
                        <option value="صيانة">صيانة أثاث</option>
                        <option value="أخرى">أخرى</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-text-muted">تفاصيل الطلب (اختياري)</label>
                    <textarea id="message" name="message" rows={4} className="w-full bg-bg-light border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="اشرح لنا ماذا تحتاج..."></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white hover:bg-primary-dark disabled:bg-primary/50 disabled:cursor-not-allowed transition-colors px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                    {isSubmitting ? (
                      <span className="animate-pulse">جاري التحويل...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 rtl:-scale-x-100" />
                        إرسال عبر واتساب
                      </>
                    )}
                  </button>
                </form>
              )}
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
