import { siteConfig } from '@/lib/constants';
import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';

export default function CTA({ 
  title = "جاهز لتحويل منزلك؟", 
  subtitle = "تواصل معنا اليوم واحصل على استشارة مهنية مجانية وعرض سعر مخصص لمشروعك خلال 24 ساعة فقط. الحرفة المتقنة تبدأ بخطوة." 
}: { 
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative py-24 overflow-hidden bg-bg-dark">
      {/* Background Image & Texture */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016579/WhatsApp_Image_2026-04-01_at_12.46.03_AM_3_uu7bjj.jpg"
          alt="نجارة وخشب"
          fill
          className="object-cover opacity-20 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/80 to-bg-dark"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          <h2 className="font-amiri text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {title}
          </h2>
          
          <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="w-full sm:w-auto px-8 py-4 bg-accent text-bg-dark rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 group"
              dir="ltr"
              suppressHydrationWarning
            >
              <Phone className="w-5 h-5 rtl:scale-x-[-1]" />
              {siteConfig.contact.phoneDisplay}
            </a>
            
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
              suppressHydrationWarning
            >
              <MessageCircle className="w-6 h-6 rtl:scale-x-[-1]" />
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
