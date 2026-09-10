import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import { services } from '../data/services';

export default function Services() {
  useEffect(() => {
    document.title = 'Services | Lumina Health Clinic';
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive healthcare for every stage of life"
        description="Explore the departments that make up Lumina Health, and what to expect from each one."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-6 px-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const reversed = i % 2 === 1;
            return (
              <motion.div
                id={service.slug}
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="scroll-mt-28 rounded-[28px] border border-border bg-white p-8 sm:p-10"
              >
                <div
                  className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] ${
                    reversed ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h2 className="mt-5 font-display text-[26px] font-medium text-ink">
                      {service.name}
                    </h2>
                    <p className="mt-3 text-[15.5px] leading-relaxed text-ink-soft">
                      {service.longDescription}
                    </p>
                    <Button to="/book-appointment" variant="secondary" className="mt-6" icon={ArrowRight}>
                      Book This Service
                    </Button>
                  </div>

                  <div className="rounded-2xl bg-surface p-7">
                    <p className="text-[13px] font-semibold uppercase tracking-wide text-ink-faint">
                      What&rsquo;s included
                    </p>
                    <ul className="mt-4 space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-teal-light text-teal">
                            <Check size={12} strokeWidth={2.5} />
                          </span>
                          <span className="text-[14.5px] leading-relaxed text-ink">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-primary-light py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-display text-[30px] font-medium leading-[1.2] tracking-[-0.01em] text-ink sm:text-[34px]">
            Not sure which service you need?
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
            Our care team can point you in the right direction, no
            appointment required.
          </p>
          <Button to="/contact" size="lg" className="mt-7">
            Talk to Our Care Team
          </Button>
        </div>
      </section>
    </>
  );
}
