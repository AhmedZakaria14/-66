'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { MAIN_NAV, siteConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';

import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-bg-dark/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group relative z-50" aria-label="الرئيسية">
            <Image 
              src={siteConfig.logo} 
              alt={siteConfig.name} 
              width={120} 
              height={40} 
              className="object-contain h-12 w-auto scale-125 origin-left"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="القائمة الرئيسية">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent relative overflow-hidden',
                  pathname === item.href ? 'text-accent' : 'text-white/80'
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/20"
              aria-label="تواصل معنا عبر واتساب"
              suppressHydrationWarning
            >
              <MessageCircle className="w-5 h-5 rtl:scale-x-[-1]" />
              واتساب
            </a>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className={cn(
          "md:hidden overflow-hidden bg-bg-dark border-b border-white/10 absolute top-full left-0 right-0 shadow-2xl origin-top"
        )}
      >
        <div className="px-4 py-6 flex flex-col gap-6">
          <div className="text-center pb-4 border-b border-white/10">
            <a href={`tel:${siteConfig.contact.phone}`} className="text-accent font-bold text-xl dir-ltr inline-block" dir="ltr" suppressHydrationWarning>
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
          <nav className="flex flex-col gap-4">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'text-lg font-medium py-2 transition-colors',
                  pathname === item.href ? 'text-accent' : 'text-white/80'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
            suppressHydrationWarning
          >
            <MessageCircle className="w-5 h-5 rtl:scale-x-[-1]" />
            تواصل عبر واتساب
          </a>
        </div>
      </motion.div>
    </header>
  );
}
