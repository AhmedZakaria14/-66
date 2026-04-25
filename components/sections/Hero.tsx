'use client';

import { siteConfig } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const title = "نحن نصنع الجمال من الخشب";
  
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-bg-dark pt-20">
      {/* Background Video with Parallax & Overlay */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <video 
          src="https://res.cloudinary.com/dxvjqrb9l/video/upload/q_auto,vc_auto,w_1280/v1777016633/WhatsApp_Video_2026-04-01_at_12.46.07_AM_ap19jy.mp4" 
          poster="https://res.cloudinary.com/dxvjqrb9l/video/upload/q_auto,f_webp,w_1280/v1777016633/WhatsApp_Video_2026-04-01_at_12.46.07_AM_ap19jy.jpg"
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="none"
          className="absolute min-w-full min-h-full max-w-none w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-100 brightness-100"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 via-transparent auto"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/30 via-transparent to-bg-dark/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <div
            className="mb-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-accent-light text-sm font-medium animate-in fade-in slide-in-from-bottom-6 duration-1000"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            أفضل مهارات النجارة في الرياض
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-8xl text-white font-amiri font-bold leading-tight md:leading-[1.1] mb-6 flex flex-wrap justify-center gap-x-3 md:gap-x-5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
            {title.split(' ').map((word, index) => (
              <span
                key={index}
                className={word === 'الجمال' ? 'text-accent text-glow' : ''}
              >
                {word}
              </span>
            ))}
          </h2>

          <p
            className="text-lg md:text-xl text-white/80 max-w-2xl text-center leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both"
          >
            أفضل نجار في الرياض — مطابخ، غرف نوم، أبواب، وديكورات خشبية بأيدي حرفيين متخصصين منذ 2009
          </p>

          <div
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both"
          >
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="w-full sm:w-auto px-8 py-4 bg-accent text-bg-dark rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(212,168,83,0.3)] hover:shadow-[0_0_30px_rgba(212,168,83,0.5)] flex items-center justify-center gap-2"
              dir="ltr"
              suppressHydrationWarning
            >
              اتصل الآن: {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white backdrop-blur-md rounded-xl font-bold text-lg transition-all hover:bg-white/20 border border-white/20 flex items-center justify-center gap-2 group"
            >
              اطلب عرض سعر مجاني
              <span className="group-hover:-translate-x-1 transition-transform transform rotate-180 inline-block font-sans">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Diagonal Cut */}
      <div className="absolute bottom-[-1px] left-0 right-0 h-16 bg-bg-light clip-diagonal pointer-events-none z-20"></div>
    </section>
  );
}
