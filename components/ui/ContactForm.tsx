'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/constants';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 flex flex-col items-center justify-center text-center h-[300px]">
        <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="font-bold text-xl mb-2">تم تجهيز طلبك بنجاح!</h3>
        <p>إذا لم يفتح الواتساب التلقائي، <a href={`https://wa.me/${siteConfig.contact.whatsappNum}`} target="_blank" rel="noopener noreferrer" className="underline font-bold text-green-900">اضغط هنا</a></p>
      </div>
    );
  }

  return (
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
          <span className="animate-pulse">جاري التحويل للواتساب...</span>
        ) : (
          <>
            <Send className="w-5 h-5 rtl:-scale-x-100" />
            إرسال عبر واتساب
          </>
        )}
      </button>
    </form>
  );
}
