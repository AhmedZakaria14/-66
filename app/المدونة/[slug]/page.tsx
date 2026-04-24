import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Script from 'next/script';
import { getBreadcrumbSchema } from '@/lib/schema';
import { BLOG_POSTS } from '@/lib/constants';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find(p => p.slug === resolvedParams.slug);
  
  if (!post) {
    return {};
  }

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    canonical: `/المدونة/${post.slug}`,
    ogImage: post.image,
  });
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "المدونة", url: "/المدونة" },
    { name: post.title, url: `/المدونة/${post.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [
      post.image
    ],
    "datePublished": `${post.date}T08:00:00+08:00`,
    "dateModified": `${post.date}T08:00:00+08:00`,
    "author": [{
        "@type": "Person",
        "name": "نجار الرياض",
        "url": "https://najjar-riyadh.com"
      }]
  };

  return (
    <>
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)) }}
      />
      <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="pt-32 pb-20 bg-bg-light min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          <Link href="/المدونة" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold mb-8 transition-colors">
            <span className="transform inline-block font-sans">→</span> العودة للمدونة
          </Link>

          <header className="mb-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold">{post.category}</span>
              <time dateTime={post.date} className="text-text-muted text-sm dir-ltr" dir="ltr" suppressHydrationWarning>
                {new Date(post.date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
            <h1 className="font-amiri text-4xl md:text-5xl lg:text-5xl font-bold text-bg-dark leading-tight mb-8">
              {post.title}
            </h1>
            
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl">
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </div>
          </header>

          <div className="prose prose-lg prose-amber max-w-none text-text-dark/80 prose-headings:font-amiri prose-headings:text-bg-dark prose-a:text-primary prose-img:rounded-2xl leading-loose">
            <p className="lead text-xl md:text-2xl font-amiri text-primary-dark opacity-90 mb-8 border-r-4 border-accent pr-6">
              {post.excerpt}
            </p>
            
            <h2>مقدمة في عالم الأخشاب</h2>
            <p>
              يعد الخشب من أهم المواد المستخدمة في صناعة الأثاث والمطابخ، وتختلف جودة العمل بناءً على نوع الخشب المستخدم ومدى ملاءمته للظروف المناخية وخاصة في مدينة الرياض حيث تتفاوت درجات الحرارة والرطوبة طوال العام.
            </p>
            
            <h3>الخشب الصلب (Solid Wood)</h3>
            <p>
              يمتاز بعمره الطويل وقدرته على تحمل الاستخدام الشاق. من أشهر أنواعه الموصى بها في السعودية: الزان والبلوط (الأوك) نظراً لصلابتها العالية ومقاومتها الجيدة.
            </p>

            <h3>أخشاب الـ MDF المعالجة</h3>
            <p>
              خيار اقتصادي وعملي جداً، خاصة إذا كان مقاوماً للرطوبة (MDF Green). يُستخدم بكثرة في دواليب المطابخ والمكاتب لسهولة تشكيله وتغليفه بطبقات حماية متينة وتصاميم مودرن.
            </p>

            <blockquote>
              &quot;النجاح في أعمال التفصيل لا يعتمد فقط على نوع الخشب، بل يعتمد بنسبة 50% على مهارة النجار ودقة المقاسات و 50% على جودة الخشب والدهانات.&quot;
            </blockquote>

            <h2>الخاتمة</h2>
            <p>
              في النهاية، ننصح دائماً بالاعتماد على ذوي الخبرة في اختيار الخشب الأنسب لمشروعك، فنحن في نجار الرياض نقوم بتقديم الاستشارة المجانية لضمان حصولك على مطبخ أو غرفة نوم تدوم لسنوات دون مشاكل.
            </p>
          </div>
          
        </div>
      </article>
    </>
  );
}
