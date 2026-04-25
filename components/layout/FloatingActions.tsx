'use client';

import { siteConfig } from '@/lib/constants';
import { MessageCircle, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 left-6 z-50 flex flex-col gap-4 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}`}>
      
      {/* Phone Button */}
      <a
        href={`tel:${siteConfig.contact.phone}`}
        className="group relative flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-110"
        aria-label="اتصل بنا"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-primary opacity-30"></div>
        <Phone className="w-6 h-6 relative z-10" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-bg-dark text-white text-sm py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">
          اتصل بنا
          <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-4 border-transparent border-l-bg-dark"></span>
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={siteConfig.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110"
        aria-label="تواصل معنا على واتساب"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30"></div>
        <MessageCircle className="w-7 h-7 relative z-10 rtl:scale-x-[-1]" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-bg-dark text-white text-sm py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">
          تواصل معنا على واتساب
          <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-4 border-transparent border-l-bg-dark"></span>
        </span>
      </a>
      
    </div>
  );
}
