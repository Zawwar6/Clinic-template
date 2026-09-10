import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../ui/Button';

const checklist = [
  'Personalized treatment plans',
  'Easy appointment scheduling',
  'Experienced medical professionals',
  'Modern facilities',
  'Follow-up care',
];

export default function FeaturedValue() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-[28px] bg-surface"
        >
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&q=80&auto=format&fit=crop"
            alt="Physician reviewing a treatment plan with a patient"
            className="h-[420px] w-full object-cover lg:h-[480px]"
            loading="lazy"
          />
        </motion.div>

        <div>
          <p className="text-sm font-semibold text-teal">Personalized Care</p>
          <h2 className="mt-3 font-display text-[32px] font-medium leading-[1.15] tracking-[-0.01em] text-ink sm:text-[38px]">
            Care designed around you
          </h2>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-ink-soft">
            No two patients are alike, and your care shouldn&rsquo;t be
            either. Every visit at Lumina Health starts with listening, so
            the plan we build fits your life, not the other way around.
          </p>

          <ul className="mt-8 space-y-3.5">
            {checklist.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-3"
              >
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-light text-teal">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <span className="text-[15.5px] text-ink">{item}</span>
              </motion.li>
            ))}
          </ul>

          <Button to="/doctors" variant="secondary" size="lg" className="mt-9">
            Meet Our Doctors
          </Button>
        </div>
      </div>
    </section>
  );
}
