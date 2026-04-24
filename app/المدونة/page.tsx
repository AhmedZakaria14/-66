import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Script from 'next/script';
import { getBreadcrumbSchema } from '@/lib/schema';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';

export const metadata: Metadata = constructMetadata({
  title: 'المدونة',
  description: 'مدونة نجار الرياض: مقالات ونصائح حول اختيار الأخشاب، تصاميم المطابخ، العناية بالأثاث، وأحدث ديكورات الخشب في 2025.',
  canonical: '/المدونة',
});

export default function BlogPage() {
  const breadcrumbs = [
    { name: "الرئيسية", url: "/" },
    { name: "المدونة", url: "/المدونة" },
  ];

  return (
    <>
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)) }}
      />
      
      {/* Page Header */}
      <section className="bg-bg-dark pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="font-amiri text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            المدونة والنصائح
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            محتوى متخصص لإثراء معرفتك حول عالم الأخشاب والنجارة والديكور.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-shadow duration-300 group">
                <Link href={`/المدونة/${post.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <time dateTime={post.date} className="block text-sm text-text-muted mb-3 font-sans opacity-70 dir-ltr text-right" dir="ltr" suppressHydrationWarning>{new Date(post.date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    <h2 className="font-amiri text-2xl font-bold text-bg-dark mb-4 group-hover:text-primary transition-colors leading-tight">{post.title}</h2>
                    <p className="text-text-muted mb-6 leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      اقرأ المقال <span className="transform rtl:rotate-180 inline-block font-sans">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
