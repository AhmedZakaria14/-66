'use client';

import { useState, useEffect } from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as motion from 'motion/react-client';
import Script from 'next/script';
import { getReviewSchema } from '@/lib/schema';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'أحمد المطيري',
    location: 'حي النرجس',
    content: '"عملوا لي مطبخ كامل خشب بلوط، النتيجة كانت فوق توقعاتي. جودة الخشب والتشطيب ممتازة، والتركيب كان نظيف جداً وفي الوقت المتفق عليه. أنصح بهم وبشدة للباحثين عن العمل المتقن."',
    rating: 5,
  },
  {
    id: 2,
    name: 'سارة العتيبي',
    location: 'الملقا',
    content: '"فصلت غرفة نوم من الخشب الطبيعي، التصميم راقي جداً والتنفيذ كان دقيق مطابق للصورة 3D اللي أعطوني إياها. تعامل راقي ومحترف من البداية للنهاية."',
    rating: 5,
  },
  {
    id: 3,
    name: 'فهد الشمري',
    location: 'العليا',
    content: '"ركبنا أبواب خشبية للمكتب وللبيت، احترافية عالية ودقة في التفصيل. الأبواب ثقيلة وعزلها للصوت رائع. أسعارهم كانت منطقية جداً مقابل هذه الجودة العالية."',
    rating: 5,
  },
  {
    id: 4,
    name: 'نورة السالم',
    location: 'حي الياسمين',
    content: '"تم تنفيذ خزائن ملابس جدارية للمنزل بالكامل، استغلال المساحات كان ذكي جداً واستخدموا مفصلات هيدروليك ممتازة. شغل مرتب يعيش العمر."',
    rating: 5,
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? TESTIMONIALS.length - 1 : current - 1));
  };

  return (
    <section className="py-20 md:py-32 bg-bg-dark text-white relative overflow-hidden">
      {TESTIMONIALS.map((testimonial, i) => (
        <Script
          key={`schema-review-${testimonial.id}`}
          id={`schema-review-${testimonial.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewSchema(testimonial.name, testimonial.rating.toString(), testimonial.content))
          }}
        />
      ))}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
              آراء العملاء
            </span>
            <h2 className="font-amiri text-4xl md:text-5xl lg:text-6xl mb-6">
              ماذا يقولون عنا؟
            </h2>
            <p className="text-white/70 text-lg">
              رضا عملائنا هو المقياس الحقيقي لنجاحنا. نفخر بالثقة التي يمنحونها لنا ونسعى دائماً لبناء علاقات طويلة الأمد عبر تقديم أعمال تفوق تطلعاتهم.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="السابق"
            >
              <ChevronRight className="w-6 h-6 rtl:scale-x-[-1]" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-accent text-bg-dark flex items-center justify-center hover:bg-accent-light transition-colors"
              aria-label="التالي"
            >
              <ChevronLeft className="w-6 h-6 rtl:scale-x-[-1]" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden pb-8 -mx-4 px-4 md:mx-0 md:px-0">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `calc(${activeIndex * 100}% + ${activeIndex * 1.5}rem)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: `${TESTIMONIALS.length * 100}%` }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] shrink-0"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
