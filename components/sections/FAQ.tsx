'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';
import Script from 'next/script';
import { getFAQSchema } from '@/lib/schema';

const FAQS = [
  {
    question: "ما هي مناطق التغطية في الرياض؟",
    answer: "نخدم جميع أحياء الرياض بما فيها العليا، النرجس، الملقا، الياسمين، حي الورود، الروضة، والمونسية، مع إمكانية الوصول إلى الدرعية والمناطق المجاورة."
  },
  {
    question: "كم يستغرق تنفيذ مطبخ خشبي كامل؟",
    answer: "يستغرق تنفيذ المطبخ الخشبي الكامل من 2 إلى 4 أسابيع حسب الحجم والتفاصيل والتشطيبات المطلوبة. سنزودك بجدول زمني دقيق بعد الاعتماد النهائي للتصميم."
  },
  {
    question: "هل تقدمون ضمان على الأعمال؟",
    answer: "نعم، نقدم ضماناً كاملاً لمدة سنتين على جميع أعمالنا، يشمل الخامات، جودة التصنيع، ودقة التركيب لضمان راحة بالك التامة."
  },
  {
    question: "ما أنواع الخشب المستخدمة؟",
    answer: "نستخدم خشب البلوط، الزان، الصنوبر، الجوز المقاوم للرطوبة، وخشب MDF الألماني عالي الجودة والمقاوم للماء، ويتم الاختيار حسب متطلبات التصميم."
  },
  {
    question: "كيف يمكنني طلب عرض سعر؟",
    answer: "يمكنك التواصل معنا عبر الواتساب أو الاتصال المباشر على رقمنا المجاني، وسنقوم بتزويدك بعرض سعر مبدئي مجاني خلال 24 ساعة."
  },
  {
    question: "هل تصنعون الأثاث حسب الطلب؟",
    answer: "بالتأكيد، تصميم وتنفيذ الأعمال حسب تفضيلات ومقاسات العميل بمثابة التخصص الرئيسي لنا، لتكون القطعة فريدة وملائمة تماماً للمكان."
  },
  {
    question: "هل يمكن رؤية أعمال سابقة؟",
    answer: "نعم، يمكنك الاطلاع على معرض أعمالنا في الموقع أو حساباتنا على إنستغرام، كما يمكن ترتيب زيارة للورشة لمشاهدة جودة الخشب والتشطيبات عن قرب."
  },
  {
    question: "كيف يتم الدفع؟",
    answer: "نعتمد نظام الدفعات المريحة: دفعة مقدمة عند التعاقد للبدء في التفصيل، التزام بدفعة ثانية أثناء إنجاز العمل بالورشة، والمتبقي بعد تسليم وتركيب المشروع بالكامل ورضاك التام."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(FAQS)) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            الأسئلة الشائعة
          </span>
          <h2 className="font-amiri text-4xl md:text-5xl text-bg-dark mb-6">
            كل ما تحتاج لمعرفته
          </h2>
          <p className="text-text-muted text-lg">
            جمعنا لك إجابات لأكثر الأسئلة التي يطرحها عملاؤنا، لنوفر عليك الوقت ونجعل تجربتك معنا شفافة ومريحة.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="border border-black/10 rounded-2xl overflow-hidden bg-bg-light transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-right hover:bg-black/5 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-lg text-bg-dark">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
