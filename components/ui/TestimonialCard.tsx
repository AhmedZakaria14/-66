import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({ name, location, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-black/5 relative h-full flex flex-col">
      <div className="absolute top-8 left-8 text-primary/10 font-serif text-8xl leading-none rotate-180">
        &quot;
      </div>
      
      <div className="flex gap-1 mb-6 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'fill-accent text-accent' : 'text-gray-200'}`}
          />
        ))}
      </div>
      
      <p className="text-text-muted text-lg leading-relaxed mb-8 flex-grow relative z-10">
        {content}
      </p>
      
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-bg-dark">{name}</h4>
          <p className="text-sm text-text-muted">{location}</p>
        </div>
      </div>
    </div>
  );
}
