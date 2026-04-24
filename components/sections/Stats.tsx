'use client';

import * as motion from 'motion/react-client';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import CountUp from 'react-countup';

const stats = [
  { value: 15, suffix: '+', label: 'سنة خبرة' },
  { value: 2000, suffix: '+', label: 'مشروع منجز' },
  { value: 98, suffix: '%', label: 'رضا العملاء' },
  { value: 24, suffix: '/7', label: 'دعم فني' },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-bg-light py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 -mt-24 md:-mt-32 relative z-30 border border-primary/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-x-reverse divide-primary/10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center text-center px-4"
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
