'use client';

import * as motion from 'motion/react-client';
import Image from 'next/image';
import { Search } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  category: string;
  imageSrc: string;
}

export default function PortfolioCard({ title, category, imageSrc }: PortfolioCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square border border-black/5"
    >
      <Image
        src={imageSrc}
        alt={`${title} - نجار الرياض`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-accent text-bg-dark flex items-center justify-center mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <Search className="w-5 h-5" />
        </div>
        <span className="text-accent/90 text-sm font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {category}
        </span>
        <h3 className="text-white font-amiri text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
