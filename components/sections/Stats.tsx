'use client';

import { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';

const stats = [
  { value: 15, suffix: '+', label: 'سنة خبرة' },
  { value: 2000, suffix: '+', label: 'مشروع منجز' },
  { value: 98, suffix: '%', label: 'رضا العملاء' },
  { value: 24, suffix: '/7', label: 'دعم فني' },
];

export default function Stats() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: "-50px" });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  },[]);

  return (
    <section className="bg-bg-light py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 -mt-24 md:-mt-32 relative z-30 border border-primary/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-x-reverse divide-primary/10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center px-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center text-4xl md:text-5xl font-amiri font-bold text-primary mb-2 dir-ltr" dir="ltr">
                  {isInView && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      useEasing={true}
                      separator=","
                    />
                  )}
                  <span className="text-accent ml-1 font-sans">{stat.suffix}</span>
                </div>
                <div className="text-text-muted font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
