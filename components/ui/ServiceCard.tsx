import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  excerpt: string;
  imageSrc: string;
  delay?: number;
  href?: string;
}

export default function ServiceCard({ title, excerpt, imageSrc, delay = 0, href = "/services" }: ServiceCardProps) {
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
      style={{ animationDelay: `${delay * 1000}ms` }}
    >
      <div className="aspect-[4/3] w-full relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6 md:p-8 relative bg-white transform transition-transform duration-500">
        <h3 className="font-amiri font-bold text-2xl text-primary-dark mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6">
          {excerpt}
        </p>
        <Link 
          href={href} 
          className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-accent transition-colors group/link"
        >
          اكتشف المزيد
          <ArrowLeft className="w-4 h-4 transform group-hover/link:-translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
