import { SERVICES_LIST } from '@/lib/constants';
import ServiceCard from '@/components/ui/ServiceCard';

const SERVICE_IMAGES = [
  '/media/work-124606-3.jpg',
  '/media/work-124605-3.jpg',
  '/media/work-124604-3.jpg',
  '/media/work-124605-0.jpg',
  '/media/work-124604-2.jpg',
  '/media/work-124603-0.jpg',
];

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-bg-light relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            ماذا نقدم
          </span>
          <h2 className="font-amiri text-4xl md:text-5xl lg:text-6xl text-primary-dark mb-6">
            خدمات نجارة متكاملة
          </h2>
          <p className="text-text-muted text-lg">
            نقدم مجموعة واسعة من خدمات النجارة التي تلبي كافة احتياجاتك، من التصميم المبدئي وحتى التركيب النهائي، مع ضمان الجودة والدقة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              excerpt={service.excerpt}
              imageSrc={SERVICE_IMAGES[index]}
              delay={index * 0.1}
              href={`/services/${service.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
