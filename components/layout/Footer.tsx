import Link from 'next/link';
import { MAIN_NAV, SERVICES_LIST, siteConfig } from '@/lib/constants';
import { MapPin, Phone, Mail, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white/80 border-t-2 border-accent">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block" aria-label="الرئيسية">
              <span className="font-amiri font-bold text-3xl text-white">
                نجار الرياض<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:bg-accent hover:text-bg-dark transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:bg-accent hover:text-bg-dark transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-amiri font-bold text-xl text-white">روابط سريعة</h3>
            <ul className="flex flex-col gap-3">
              {MAIN_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-accent transition-colors flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-6">
            <h3 className="font-amiri font-bold text-xl text-white">خدماتنا</h3>
            <ul className="flex flex-col gap-3">
              {SERVICES_LIST.map((item) => (
                <li key={item.id}>
                  <Link href="/خدماتنا" className="text-sm hover:text-accent transition-colors flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="font-amiri font-bold text-xl text-white">تواصل معنا</h3>
            <address className="not-italic flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 rtl:scale-x-[-1]" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-sm hover:text-accent transition-colors" dir="ltr" suppressHydrationWarning>
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm hover:text-accent transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
            </address>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50 text-center md:text-right" suppressHydrationWarning>
            حقوق النشر {currentYear} © <span className="text-white/80">{siteConfig.name}</span>. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <Link href="#" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            <Link href="#" className="hover:text-white transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
