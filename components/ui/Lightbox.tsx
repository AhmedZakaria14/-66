'use client';

import { X } from 'lucide-react';
import Image from 'next/image';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
}

export default function Lightbox({ isOpen, onClose, imageSrc, title }: LightboxProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-dark/90 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 1536px) 100vw, 1536px"
          />
        </div>
      </div>
    </div>
  );
}
