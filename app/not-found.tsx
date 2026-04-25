import Link from 'next/link';
import { siteConfig, MAIN_NAV, SERVICES_LIST } from '@/lib/constants';
import * as motion from 'motion/react-client';
import { Home, Search, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'الصفحة غير موجودة | نجارة أبو ثابت',
  description: 'نعتذر، الصفحة التي تبحث عنها غير موجودة. استكشف خدمات النجارة وتفصيل الأثاث والمطابخ لدينا.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg-light flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-black/5 p-8 md:p-16 mb-12"
        >
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
            <Search className="w-12 h-12" />
          </div>
          
          <h1 className="font-amiri text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-amiri font-bold text-bg-dark mb-6">
            عذراً، لم نتمكن من العثور على هذه الصفحة
          </h2>
          <p className="text-text-muted text-lg mb-10 leading-relaxed">
            يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو أنها غير موجودة. 
            لكن لا تقلق، يمكنك العودة للرئيسية أو تصفح خدماتنا المستمرة في إضافة لمسة جمال خشبية لمنزلك.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 bg-primary text-white hover:bg-primary-dark px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105 shadow-lg shadow-primary/20 w-full sm:w-auto"
          >
            <Home className="w-5 h-5" />
            العودة للرئيسية
          </Link>
        </motion.div>

        {/* Helpful Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-4xl mx-auto text-right"
        >
          <h3 className="text-2xl font-amiri font-bold text-bg-dark mb-8 text-center relative inline-block left-1/2 -translate-x-1/2">
            اكتشف أبرز ما نقدمه:
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-accent rounded-full"></div>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.slice(0, 6).map((service) => (
              <Link 
                key={service.id} 
                href={`/services/${service.id}`}
                className="group flex flex-col p-6 bg-white rounded-2xl shadow-sm border border-black/5 hover:border-accent/50 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-primary-dark group-hover:text-primary mb-2 flex items-center justify-between">
                  {service.title}
                  <ArrowRight className="w-4 h-4 text-accent rtl:-scale-x-100 transform group-hover:-translate-x-1 transition-transform" />
                </h4>
                <p className="text-sm text-text-muted">{service.excerpt}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
