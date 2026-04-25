'use client';

import { useState } from 'react';
import PortfolioCard from '@/components/ui/PortfolioCard';
import Lightbox from '@/components/ui/Lightbox';
import Link from 'next/link';

const TABS = ['الكل', 'مطابخ', 'غرف نوم', 'أبواب', 'ديكور'];

const PROJECTS = [
  { id: 1, title: 'مطبخ كلاسيكي - حي النرجس', category: 'مطابخ', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016582/WhatsApp_Image_2026-04-01_at_12.46.05_AM_2_dheoz2.jpg' },
  { id: 2, title: 'غرفة نوم مودرن - الملقا', category: 'غرف نوم', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016582/WhatsApp_Image_2026-04-01_at_12.46.03_AM_2_ac3xel.jpg' },
  { id: 3, title: 'أبواب خشب صلب - العليا', category: 'أبواب', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016582/WhatsApp_Image_2026-04-01_at_12.46.05_AM_1_up0yh1.jpg' },
  { id: 4, title: 'ديكور جداري خشبي - الياسمين', category: 'ديكور', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016581/WhatsApp_Image_2026-04-01_at_12.46.04_AM_lqedte.jpg' },
  { id: 5, title: 'مطبخ عصري - حطين', category: 'مطابخ', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016581/WhatsApp_Image_2026-04-01_at_12.46.04_AM_1_jduxax.jpg' },
  { id: 6, title: 'خزائن ملابس مدمجة', category: 'غرف نوم', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016578/WhatsApp_Image_2026-04-01_at_12.46.02_AM_4_x7nsnc.jpg' },
  { id: 7, title: 'غرفة نوم ماستر - حطين', category: 'غرف نوم', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016585/WhatsApp_Image_2026-04-01_at_12.46.06_AM_3_velq5u.jpg' },
  { id: 8, title: 'تفصيل باب خشبي - الرائد', category: 'أبواب', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016584/WhatsApp_Image_2026-04-01_at_12.46.05_AM_3_rdtbcf.jpg' },
  { id: 9, title: 'تكسيات جدارية - قرطبة', category: 'ديكور', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016584/WhatsApp_Image_2026-04-01_at_12.46.04_AM_3_equ4wh.jpg' },
  { id: 10, title: 'خزانة ملابس عصرية', category: 'غرف نوم', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016583/WhatsApp_Image_2026-04-01_at_12.46.05_AM_sj3um2.jpg' },
  { id: 11, title: 'تركيب مطبخ أمريكي - الندى', category: 'مطابخ', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016582/WhatsApp_Image_2026-04-01_at_12.46.04_AM_2_nwmzjg.jpg' },
  { id: 12, title: 'أبواب داخلية - التخصصي', category: 'أبواب', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016582/WhatsApp_Image_2026-04-01_at_12.46.03_AM_dokbdt.jpg' },
  { id: 13, title: 'درج خشبي داخلي - الوادي', category: 'ديكور', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016588/WhatsApp_Image_2026-04-01_at_12.46.07_AM_3_l2yjza.jpg' },
  { id: 14, title: 'مطبخ كلاسيكي فاخر - الغدير', category: 'مطابخ', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016588/WhatsApp_Image_2026-04-01_at_12.46.07_AM_2_ev11ro.jpg' },
  { id: 15, title: 'تأثيث غرفة أطفال', category: 'غرف نوم', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016587/WhatsApp_Image_2026-04-01_at_12.46.06_AM_4_qfxd5t.jpg' },
  { id: 16, title: 'ديكور تلفزيون - التعاون', category: 'ديكور', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016587/WhatsApp_Image_2026-04-01_at_12.46.07_AM_wz6dat.jpg' },
  { id: 17, title: 'أبواب سحابة - النخيل', category: 'أبواب', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016586/WhatsApp_Image_2026-04-01_at_12.46.06_AM_2_ui9yvj.jpg' },
  { id: 18, title: 'ديكور خشب طبيعي - الصحافة', category: 'ديكور', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016586/WhatsApp_Image_2026-04-01_at_12.46.07_AM_1_hihzc9.jpg' },
  { id: 19, title: 'طاولة طعام خشب طبيعي', category: 'ديكور', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016579/WhatsApp_Image_2026-04-01_at_12.46.03_AM_3_uu7bjj.jpg' },
  { id: 20, title: 'مكتب منزلي خشبي - المروج', category: 'ديكور', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016579/WhatsApp_Image_2026-04-01_at_12.46.00_AM_qcadvy.jpg' },
  { id: 21, title: 'مطبخ تحضيري متكامل', category: 'مطابخ', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016578/WhatsApp_Image_2026-04-01_at_12.46.02_AM_foly1d.jpg' },
  { id: 22, title: 'تجديد أبواب وزخرفة يدوية', category: 'أبواب', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016586/WhatsApp_Image_2026-04-01_at_12.46.06_AM_hnnp9e.jpg' },
  { id: 23, title: 'تصميم جداري لغرفة المعيشة', category: 'ديكور', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016585/WhatsApp_Image_2026-04-01_at_12.46.06_AM_1_oxwnww.jpg' },
  { id: 24, title: 'جلسة خارجية خشبية - السفارات', category: 'ديكور', imageSrc: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016579/WhatsApp_Image_2026-04-01_at_12.46.03_AM_4_t7zg8g.jpg' },
];

interface PortfolioProps {
  limit?: number;
}

export default function Portfolio({ limit }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState('الكل');
  const [selectedImage, setSelectedImage] = useState<{src: string, title: string} | null>(null);

  let filteredProjects = activeTab === 'الكل'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);
  
  if (limit) {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  return (
    <section className="py-20 md:py-32 bg-bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
              معرض أعمالنا
            </span>
            <h2 className="font-amiri text-4xl md:text-5xl lg:text-6xl text-bg-dark mb-6">
              مشاريع نفخر بها
            </h2>
            <p className="text-text-muted text-lg">
              تصفح بعضاً من أحدث أعمالنا في مختلف مجالات النجارة. كل مشروع هو قصة نجاح وشراكة حقيقية مع عملائنا لنحقق رؤيتهم على أرض الواقع.
            </p>
          </div>
          {limit && (
            <Link
              href="/portfolio"
              className="hidden md:inline-flex px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-xl font-bold"
            >
              عرض كافة المشاريع
            </Link>
          )}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-text-muted hover:bg-primary/10 hover:text-primary shadow-sm'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              title={project.title}
              category={project.category}
              imageSrc={project.imageSrc}
              onClick={() => setSelectedImage({src: project.imageSrc, title: project.title})}
            />
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center md:hidden">
            <Link
              href="/portfolio"
              className="inline-flex px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-xl font-bold"
            >
              عرض كافة المشاريع
            </Link>
          </div>
        )}
      </div>
      <Lightbox
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        title={selectedImage?.title || ''}
      />
    </section>
  );
}
