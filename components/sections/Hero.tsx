'use client';

import { siteConfig } from '@/lib/constants';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const title = "نحن نصنع الجمال من الخشب";
  
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-bg-dark pt-20">
      {/* Background Image with Parallax & Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="https://picsum.photos/seed/woodworking/1920/1080"
          alt="نجار الرياض خلفية خشبية"
          fill
          priority
          className="object-cover opacity-40 brightness-50"
          sizes="100vw"
        />
        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/60 auto"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/80 via-transparent to-bg-dark/80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-accent-light text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            أفضل مهارات النجارة في الرياض
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-8xl text-white font-amiri font-bold leading-tight md:leading-[1.1] mb-6 flex flex-wrap justify-center gap-x-3 md:gap-x-5">
            {title.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                  damping: 20
                }}
                className={word === 'الجمال' ? 'text-accent text-glow' : ''}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl text-center leading-relaxed mb-10"
          >
            أفضل نجار في الرياض — مطابخ، غرف نوم، أبواب، وديكورات خشبية بأيدي حرفيين متخصصين منذ 2009
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="w-full sm:w-auto px-8 py-4 bg-accent text-bg-dark rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(212,168,83,0.3)] hover:shadow-[0_0_30px_rgba(212,168,83,0.5)] flex items-center justify-center gap-2"
              dir="ltr"
              suppressHydrationWarning
            >
              اتصل الآن: {siteConfig.contact.phoneDisplay}
            </a>
            <Link
              href="/اتصل-بنا"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white backdrop-blur-md rounded-xl font-bold text-lg transition-all hover:bg-white/20 border border-white/20 flex items-center justify-center gap-2 group"
            >
              اطلب عرض سعر مجاني
              <span className="group-hover:-translate-x-1 transition-transform transform rotate-180 inline-block font-sans">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Diagonal Cut */}
      <div className="absolute bottom-[-1px] left-0 right-0 h-16 bg-bg-light clip-diagonal pointer-events-none z-20"></div>
    </section>
  );
}
