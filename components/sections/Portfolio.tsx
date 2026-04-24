'use client';

import { useState } from 'react';
import PortfolioCard from '@/components/ui/PortfolioCard';
import Link from 'next/link';

const TABS = ['الكل', 'مطابخ', 'غرف نوم', 'أبواب', 'ديكور'];

const PROJECTS = [
  { id: 1, title: 'مطبخ كلاسيكي - حي النرجس', category: 'مطابخ', imageSrc: 'https://picsum.photos/seed/port1/800/800' },
  { id: 2, title: 'غرفة نوم مودرن - الملقا', category: 'غرف نوم', imageSrc: 'https://picsum.photos/seed/port2/800/800' },
  { id: 3, title: 'أبواب خشب صلب - العليا', category: 'أبواب', imageSrc: 'https://picsum.photos/seed/port3/800/800' },
  { id: 4, title: 'ديكور جداري خشبي - الياسمين', category: 'ديكور', imageSrc: 'https://picsum.photos/seed/port4/800/800' },
  { id: 5, title: 'مطبخ عصري - حطين', category: 'مطابخ', imageSrc: 'https://picsum.photos/seed/port5/800/800' },
  { id: 6, title: 'خزائن ملابس مدمجة', category: 'غرف نوم', imageSrc: 'https://picsum.photos/seed/port6/800/800' },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('الكل');

  const filteredProjects = activeTab === 'الكل'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section className="py-20 md:py-32 bg-white">
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
          <Link
            href="/أعمالنا"
            className="hidden md:inline-flex px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-xl font-bold"
          >
            عرض كافة المشاريع
          </Link>
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
                  : 'bg-bg-light text-text-muted hover:bg-primary/10 hover:text-primary'
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
            />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/أعمالنا"
            className="inline-flex px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-xl font-bold"
          >
            عرض كافة المشاريع
          </Link>
        </div>
      </div>
    </section>
  );
}
