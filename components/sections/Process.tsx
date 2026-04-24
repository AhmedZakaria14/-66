'use client';

import * as motion from 'motion/react-client';
import { Lightbulb, PenTool, Hammer, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    icon: Lightbulb,
    title: 'استشارة مجانية',
    description: 'نزور الموقع، نستمع لاحتياجاتك، ونرفع المقاسات بدقة لضمان ملاءمة التصميم للمساحة المتوفرة.',
  },
  {
    icon: PenTool,
    title: 'تصميم مخصص',
    description: 'نقدم لك تصاميم ثلاثية الأبعاد (3D) لتتمكن من رؤية النتيجة النهائية واعتمادها قبل البدء.',
  },
  {
    icon: Hammer,
    title: 'تنفيذ دقيق',
    description: 'يبدأ حرفيونا المهرة في قص وتجميع الأخشاب باستخدام أحدث المعدات وأفضل الخامات المختارة.',
  },
  {
    icon: CheckCircle2,
    title: 'تسليم وضمان',
    description: 'نركب العمل في موقعه النهائي مع التأكد من كل تفصيلة، ونسلمك مع ضمان كامل لمدة سنتين.',
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-32 bg-bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            آلية العمل
          </span>
          <h2 className="font-amiri text-4xl md:text-5xl lg:text-6xl text-bg-dark mb-6">
            كيف نحول فكرتك إلى واقع
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-primary/20 pointer-events-none"></div>

          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col pt-8 lg:pt-0"
            >
              <div className="w-20 h-20 bg-white rounded-2xl shadow-xl shadow-black/5 flex items-center justify-center text-primary mb-8 relative z-10 lg:mx-auto border border-black/5">
                <step.icon className="w-8 h-8" />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent text-bg-dark rounded-full flex items-center justify-center font-bold font-sans shadow-md border-2 border-white">
                  {index + 1}
                </div>
              </div>
              <div className="lg:text-center">
                <h3 className="font-amiri font-bold text-2xl text-bg-dark mb-3 justify-center">
                  {step.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
