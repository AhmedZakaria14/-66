import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Script from 'next/script';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = constructMetadata({
  title: 'خدماتنا',
  description: 'اكتشف خدمات نجارة أبو ثابت الاحترافية: مطابخ خشبية، غرف نوم، أبواب، وديكورات بأعلى معايير الجودة في السعودية.',
  canonical: '/services',
});

const DETAILED_SERVICES = [
  {
    id: "kitchens",
    title: "مطابخ خشبية في الرياض — عصرية وكلاسيكية",
    type: "نجارة مطابخ الرياض",
    description: "نصمم وننفذ المطابخ الخشبية بأعلى معايير الجودة في الرياض. سواء كنت تبحث عن مطبخ عصري بخطوط نظيفة وألوان محايدة، أو مطبخ كلاسيكي بزخارف وتفاصيل راقية، فريقنا من النجارين المتخصصين يحول رؤيتك إلى واقع. نستخدم خشب البلوط والزان عالي الكثافة مع طلاء مقاوم للحرارة والرطوبة يضمن عمر أطول. كل مطبخ يُصمم خصيصاً بعد قياس دقيق وتقديم مخطط ثلاثي الأبعاد للاعتماد. نوفر الأدراج الناعمة بنظام Soft-Close، والخزائن العلوية المضاءة، والرفوف الداخلية القابلة للتعديل. خدمتنا تشمل التصميم والتصنيع والتركيب مع ضمان سنتين على جميع الأعمال.",
    features: ["تصميم ثلاثي الأبعاد مجاني", "خامات مقاومة للرطوبة والحرارة", "مفصلات هيدروليك هادئة", "ضمان لمدة سنتين"],
    price: "تبدأ من 8,000 ريال",
    image: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016585/WhatsApp_Image_2026-04-01_at_12.46.06_AM_3_velq5u.jpg"
  },
  {
    id: "bedrooms",
    title: "غرف نوم وخزائن ملابس خشبية بالرياض",
    type: "نجارة غرف نوم وخزائن",
    description: "تعتبر غرفة النوم الملاذ الأول للراحة، لذا نقدم تصاميم فريدة لغرف النوم الخشبية تناسب ذوقك الخاص وتستغل المساحات بذكاء. نفصل الخزائن الجدارية وغرف الملابس (Walk-in Closets) بتفاصيل داخلية تسهل تنظيم ملابسك ومقتنياتك. نستخدم أخشاباً صلبة وقشور طبيعية تمنح المكان دفئاً وفخامة. نهتم بأدق التفاصيل من السرير إلى التسريحة وكومودينو بأشكال تتفاوت بين المودرن النقي والكلاسيكي الفاخر. بالإضافة إلى خدمة التركيب الاحترافية لضمان ثبات تام بلا أية أصوات مزعجة.",
    features: ["استغلال ذكي للمساحات الصغيرة", "تشكيلة واسعة من القشرات الطبيعية", "تفصيل وحدات أدراج ومكياج مدمجة", "تسليم خلال 3 أسابيع"],
    price: "تبدأ من 5,500 ريال",
    image: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016584/WhatsApp_Image_2026-04-01_at_12.46.05_AM_3_rdtbcf.jpg"
  },
  {
    id: "doors",
    title: "أبواب خشبية داخلية وخارجية في الرياض",
    type: "صناعة وتركيب أبواب",
    description: "باب منزلك هو العنوان الأول، ولذلك نحرص في نجار الرياض على تصميم وتنفيذ أبواب خشبية متينة، عازلة للصوت، وذات تصاميم ترضي كافة الأذواق. نصنع الأبواب الخارجية من الخشب الصلب المعالج لمقاومة العوامل الجوية القاسية من شمس ورطوبة. أما الأبواب الداخلية فتأتي بخيارات متعددة، من الأبواب الكبس الملبسة بقشرة طبيعية إلى أبواب الحشو التي توفر عزلاً مثالياً. نعتمد أحدث طرق الدهان والتشطيب، ونزودها بمقابض عالية الجودة لضمان أداء سلس وتصميم يعكس الرقي.",
    features: ["عزل صوتي وحراري ممتاز", "أخشاب صلبة معالجة للرطوبة", "تصاميم سادة، محفورة، ومطرزة", "إطارات ومفصلات ثقيلة"],
    price: "تبدأ من 1,200 ريال للباب",
    image: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016584/WhatsApp_Image_2026-04-01_at_12.46.04_AM_3_equ4wh.jpg"
  },
  {
    id: "decor",
    title: "ديكورات وبرجولات خشبية بالرياض",
    type: "ديكور خشبي",
    description: "أضف لمسة من الدفء والجمال لمحيطك مع ديكوراتنا الخشبية المصممة بعناية. نقدم خدمات تكسية الجدران والأسقف بالخشب المعالج الذي يضفي طابعاً سينمائياً فخماً للصالات وغرف استقبال الضيوف والمجالس. كما نصمم البرجولات الخشبية والمظلات الخارجية للحدائق والجلسات الخارجية بأسطح تعزل الحرارة وتتحمل الظروف المناخية في الرياض. أعمالنا الديكورية تمزج بين الخشب الطبيعي وتقنيات الإضاءة المخفية لابتكار مساحات تريح النفس وتبهر العين.",
    features: ["تكسيات جدارية بتصاميم هندسية", "برجولات معالجة ضد الشمس", "استخدام تكنولوجيا CNC للحفر", "دمج الإضاءة المخفية مع الخشب"],
    price: "حسب المقاس والتصميم",
    image: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016583/WhatsApp_Image_2026-04-01_at_12.46.05_AM_sj3um2.jpg"
  },
  {
    id: "office",
    title: "أثاث مكاتب وشركات حسب الطلب",
    type: "تجهيز مكاتب",
    description: "بيئة العمل المحفزة تبدأ من الأثاث العملي والمريح. نقدم حلولاً متكاملة لتجهيز مكاتب الشركات الفردية والجماعية في الرياض. نفصل المكاتب الرئاسية من الأخشاب الفاخرة التي تعكس الهيبة والاحترافية، ونصمم طاولات الاجتماعات الكبيرة المجهزة بمنافذ ذكية للكهرباء والشبكات. كما نصنع محطات العمل (Workstations) المرنة التي تتيح لموظفيك العمل براحة. نهتم باللمسة الجمالية والعملية لتكون مقرات العمل واجهة مشرفة أمام عملائكم.",
    features: ["أثاث مريح بتصميم مريح (Ergonomic)", "مكاتب رئاسية فخمة", "طاولات اجتماعات مدمجة التقنية", "مكاتب عمل جماعية مقسمة"],
    price: "تبدأ من 2,500 ريال للمكتب الفردي",
    image: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016582/WhatsApp_Image_2026-04-01_at_12.46.04_AM_2_nwmzjg.jpg"
  },
  {
    id: "maintenance",
    title: "صيانة وترميم الأثاث الخشبي بالرياض",
    type: "صيانة أثاث نجارة",
    description: "لا تتخلص من أثاثك القديم أو التالف؛ نحن نمتلك المهارة والخبرة لإعادته إلى الحياة كما لو كان جديداً. خدمة صيانة وترميم الأثاث الخشبي تشتمل على إصلاح الخدوش، تغيير لون الخشب وتجديد الدهان بالكامل، تقوية الهياكل الضعيفة وتغيير المفصلات والإكسسوارات. نتعامل مع التحف والقطع الخشبية النادرة بحذر شديد واستخدام مواد ترميم لا تؤثر على قيمتها الأصلية، لنمنحك فرصة الاحتفاظ بقطعك المفضلة لفترة أطول وبمظهر أكثر جاذبية.",
    features: ["تجديد دهانات وإزالة الخدوش", "استبدال المفصلات والمقابض", "ترميم القطع الأثرية والقديمة", "تقوية وإصلاح الكسور الجوهرية"],
    price: "تبدأ من 300 ريال حسب التلف",
    image: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016582/WhatsApp_Image_2026-04-01_at_12.46.03_AM_dokbdt.jpg"
  }
];

// Trigger rebuild
export default function ServicesPage() {
  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "خدماتنا", url: "/services" },
  ];

  return (
    <>
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)) }}
      />
      {DETAILED_SERVICES.map((service) => (
        <Script
          key={`schema-${service.id}`}
          id={`schema-service-${service.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getServiceSchema(service.type, service.title, service.description))
          }}
        />
      ))}

      {/* Page Header */}
      <section className="bg-bg-dark pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016579/WhatsApp_Image_2026-04-01_at_12.46.03_AM_4_t7zg8g.jpg" alt="خلفية" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-light to-transparent translate-y-20 opacity-10 blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="font-amiri text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            خدمات نجار الرياض الاحترافية
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            من التصميم إلى التركيب، نقدم لك خدمات نجارة الشاملة تلبي احتياجاتك السكنية والتجارية بأعلى مقاييس الإتقان.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-4 md:px-6 space-y-24 md:space-y-32">
          {DETAILED_SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`} id={service.id}>
              
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-black/5 group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none"></div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="font-amiri text-3xl md:text-4xl font-bold text-bg-dark mb-6 leading-tight">
                  {service.title}
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black/5 mb-8">
                  <h3 className="font-bold text-bg-dark mb-4 drop-shadow-sm">مميزات الخدمة:</h3>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-text-muted text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="bg-bg-dark text-white px-6 py-3 rounded-full font-bold">
                    <span className="text-accent ml-2 text-sm">تكلفة تقريبية:</span>
                    {service.price}
                  </div>
                  <Link href="/contact" className="text-primary font-bold hover:text-accent transition-colors underline underline-offset-8 decoration-2 decoration-primary/20 hover:decoration-accent">
                    طلب هذه الخدمة ←
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA 
        title="احصل على استشارة مهنية مجانية اليوم"
        subtitle="هل لديك مشروع نجارة في ذهنك؟ نحن هنا لمساعدتك. تواصل معنا للحصول على استشارة مهنية مجانية وعرض سعر مخصص لمشروعك، وسنقوم بتحويل أفكارك إلى واقع ملموس بدقة واحترافية."
      />
    </>
  );
}
