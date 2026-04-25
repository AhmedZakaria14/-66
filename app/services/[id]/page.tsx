import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Script from 'next/script';
import { getBreadcrumbSchema } from '@/lib/schema';
import { SERVICES_LIST, siteConfig } from '@/lib/constants';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CTA from '@/components/sections/CTA';

// Detailed info for each service
const SERVICE_DETAILS: Record<string, {
  image: string;
  description: string;
  features: string[];
  process: string[];
}> = {
  kitchens: {
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016585/WhatsApp_Image_2026-04-01_at_12.46.06_AM_3_velq5u.jpg',
    description: 'نفخر في نجارة أبو ثابت بتقديم أفضل تصاميم المطابخ الخشبية في الرياض، سواء كنت تفضل التصميم الكلاسيكي الدافئ أو المودرن العملي. نستخدم أجود أنواع الأخشاب المقاومة للرطوبة والحرارة مثل البلوط والزان وMDF عالي الكثافة لضمان مطبخ يدوم طويلاً.',
    features: ['تصميم ثلاثي الأبعاد (3D) قبل التنفيذ مجاناً', 'استخدام أخشاب مقاومة للماء والرطوبة', 'مفصلات وإكسسوارات عالية الجودة بضمان', 'استغلال أمثل لمساحات المطبخ مهما كان حجمه'],
    process: ['رفع المقاسات ومعاينة الموقع', 'عمل التصميم المبدئي والتعديل عليه', 'تنفيذ وتفصيل الخشب في الورشة', 'التركيب الميداني بأيدي محترفين']
  },
  bedrooms: {
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016584/WhatsApp_Image_2026-04-01_at_12.46.05_AM_3_rdtbcf.jpg',
    description: 'غرفة نومك هي ملاذك، لذلك نحرص على تصميمها وتفصيلها بأعلى معايير الدقة والراحة. تفصيل غرف نوم رئيسية وأطفال، وتفصيل خزائن ملابس (دواليب) مدمجة حسب المساحة المتوفرة لديك وبأفضل الأخشاب.',
    features: ['تصاميم حصرية تتناسب مع ذوقك', 'تفصيل دواليب ملابس جدارية توفر المساحة', 'استخدام خشب صلب متين ومضمون', 'سرير مريح وذو جودة عالية'],
    process: ['مناقشة أفكارك واحتياجاتك', 'أخذ أبعاد الغرفة', 'التصميم الثلاثي الأبعاد', 'التصنيع والتركيب']
  },
  doors: {
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016584/WhatsApp_Image_2026-04-01_at_12.46.04_AM_3_equ4wh.jpg',
    description: 'نقدم لك تفصيل الأبواب الخشبية الداخلية والخارجية التي تجمع بين الأناقة المطلقة والمتانة ومقاومة العوامل الجوية والحرارة. نستخدم خشب الماهوجني والزان والسنديان لتوفير أبواب عازلة للضوت وصلبة كالصخر.',
    features: ['عزل ممتاز للصوت والحرارة', 'إطارات متينة لا تتأثر بالرطوبة', 'دقة في النقش والدهان', 'تفصيل أبواب سحب مخفية لتوفير المساحة'],
    process: ['اختيار الموديل ونوع الخشب', 'أخذ المقاسات الدقيقة للحلوق', 'دهان وفرن في بيئة خالية من الغبار', 'التركيب وضبط المفصلات']
  },
  decor: {
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016583/WhatsApp_Image_2026-04-01_at_12.46.05_AM_sj3um2.jpg',
    description: 'الأخشاب تضفي فخامة لا تُضاهى على أي مكان. نحن في نجارة أبو ثابت متخصصون في تنفيذ جميع أعمال الديكورات الخشبية الجدارية، بديل الخشب، البارتشن (القواطع)، والبرجولات الخشبية للحدائق وأسطح المنازل.',
    features: ['تكسيات جدارية خشبية عصرية', 'برجولات وحدائق بتصاميم هندسية رائعة', 'قواطع خشبية (بارتشن) مفرغة أو صلبة', 'معالجة الخشب الخارجي ضد الشمس والأمطار'],
    process: ['دراسة وتخطيط المساحة', 'تصميم شكل الديكور مع العميل', 'قص بالليزر والراوتر دقيق جداً', 'التركيب الاحترافي']
  },
  office: {
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016582/WhatsApp_Image_2026-04-01_at_12.46.04_AM_2_nwmzjg.jpg',
    description: 'نعرف تماماً أن بيئة العمل المميزة تزيد من الإنتاجية، لذلك صممنا أفضل خيارات الأثاث المكتبي الخشبي: مكاتب للمدراء، محطات عمل للموظفين، مكاتب استقبال فخمة، وقاعات اجتماعات تعكس هوية وقوة شركتك.',
    features: ['مكاتب استقبال تعكس هوية العلامة التجارية', 'تمديدات الكابلات الذكية مدمجة في المكاتب', 'أثاث مكتبي عملي ومريح', 'وحدات تخزين ملفات متينة'],
    process: ['معاينة المكاتب لرفع المقاسات', 'عرض مخططات توزيع الأثاث والتصاميم', 'الموافقة وبدء التفصيل', 'التركيب خلال العطل الأسبوعية لعدم تعطيل العمل']
  },
  maintenance: {
    image: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777016582/WhatsApp_Image_2026-04-01_at_12.46.03_AM_dokbdt.jpg',
    description: 'عمر أثاثك لم ينتهِ، نحن هنا لنجدده لك ونعيده كالجديد. خدمة شاملة في صيانة وترميم جميع أنواع الأثاث الخشبي وإصلاح الكسر وتجديد الدهان وفحص وتغيير المفصلات التالفة بدقة عالية.',
    features: ['إصلاح الخدوش والكسر وتجديد الدهان الخشبي', 'صيانة الأبواب ومفصلات المطابخ', 'تقوية وإصلاح هياكل الأسرة والخزائن', 'تجديد لون وتنجيد الأثاث الكلاسيكي'],
    process: ['تقييم حالة الأثاث ومدى إمكانية صيانته', 'سنفرة الخشب ومعالجة العيوب فيه', 'إعادة تركيب قطع جديدة إن لزم', 'الدهان النهائي وتلميع القطعة لتبدو جديدة']
  }
};

export async function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const service = SERVICES_LIST.find(s => s.id === resolvedParams.id);
  
  if (!service) {
    return {};
  }

  return constructMetadata({
    title: service.title,
    description: service.excerpt,
    canonical: `/services/${service.id}`,
    ogImage: SERVICE_DETAILS[service.id]?.image,
  });
}

export default async function ServicePage(
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const serviceDef = SERVICES_LIST.find(s => s.id === resolvedParams.id);
  const serviceData = SERVICE_DETAILS[resolvedParams.id];

  if (!serviceDef || !serviceData) {
    notFound();
  }

  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "خدماتنا", url: "/services" },
    { name: serviceDef.title, url: `/services/${serviceDef.id}` },
  ];

  return (
    <>
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)) }}
      />

      <article className="pt-32 pb-20 bg-bg-light min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold mb-8 transition-colors">
            <span className="transform inline-block font-sans">→</span> العودة للخدمات
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            <div>
              <h1 className="font-amiri text-4xl md:text-5xl lg:text-6xl font-bold text-bg-dark leading-tight mb-6">
                {serviceDef.title} في الرياض
              </h1>
              <p className="text-xl text-text-muted leading-relaxed mb-8">
                {serviceData.description}
              </p>
              
              <h2 className="font-amiri text-2xl font-bold text-bg-dark mb-4">مميزات هذه الخدمة:</h2>
              <ul className="space-y-3 mb-8">
                {serviceData.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                    <span className="text-text-muted text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-black/5">
              <Image src={serviceData.image} alt={serviceDef.title} fill className="object-cover hover:scale-105 transition-transform duration-700" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent"></div>
            </div>
          </div>
          
          <div className="bg-white rounded-[2rem] shadow-sm border border-black/5 p-8 md:p-12 mb-8">
            <h2 className="font-amiri text-3xl font-bold text-bg-dark mb-8 text-center">مراحل التنفيذ</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {serviceData.process.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center relative group">
                  <div className="w-16 h-16 rounded-2xl bg-bg-light border border-black/5 flex items-center justify-center font-bold text-xl text-primary font-sans mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-bg-dark">{step}</h3>
                  {i < serviceData.process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(-50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-black/5"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTA 
        title={`هل تبحث عن ${serviceDef.title}؟`} 
        subtitle="اتصل بنا الآن لمعاينة المكان وتصميم ما يتناسب مع مساحتك وميزانيتك." 
      />
    </>
  );
}
