import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="What We Offer"
          title="Comprehensive care under one roof"
          description="From routine checkups to ongoing care, our team provides personalized healthcare for every stage of life."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
