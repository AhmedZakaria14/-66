import { ShieldCheck, Gem, Users, Clock } from 'lucide-react';
import Image from 'next/image';

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'جودة مضمونة',
    description: 'نقدم ضماناً رسمياً على كافة أعمالنا يمتد لسنوات، لأننا نثق بجودة ما نصنعه.',
  },
  {
    icon: Gem,
    title: 'خامات ممتازة',
    description: 'نستخدم أفضل أنواع الخشب المحلي والمستورد لضمان المتانة والجماليات العالية.',
  },
  {
    icon: Users,
    title: 'حرفيون مهرة',
    description: 'فريقنا يتكون من أمهر المتخصصين في النجارة والديكور بخبرة تزيد عن 15 عاماً.',
  },
  {
    icon: Clock,
    title: 'التزام بالمواعيد',
    description: 'نحترم وقت عملائنا ونلتزم بتسليم المشاريع في الموعد المحدد بكل دقة.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-32 bg-bg-dark text-white relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016579/WhatsApp_Image_2026-04-01_at_12.46.00_AM_qcadvy.jpg"
          alt="texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <span 
              className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block"
            >
              لماذا نجارة أبو ثابت؟
            </span>
            <h2 className="font-amiri text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              خبرة تُرى في <br/><span className="text-accent italic">كل تفصيل</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              نجاح مشاريعنا ليس صدفة، بل هو نتيجة التزامنا المطلق بالجودة والاهتمام بالتفاصيل الدقيقة التي تصنع الفارق بين العمل العادي والعمل الاستثنائي.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {REASONS.map((reason, index) => (
                <div 
                  key={index}
                  className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 font-amiri text-white">{reason.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/10">
              <Image
                src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016578/WhatsApp_Image_2026-04-01_at_12.46.02_AM_foly1d.jpg"
                alt="نجار محترف في الرياض يعمل على قطعة خشبية"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-80"></div>
              
              <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <blockquote className="font-amiri text-xl leading-relaxed italic">
                 &quot;الخشب لغة نتحدث بها، وكل قطعة نصنعها تروي قصة إتقان وحب للحرفة.&quot;
                </blockquote>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-accent rounded-tr-3xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-accent rounded-bl-3xl opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
