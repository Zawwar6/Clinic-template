import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <section className="bg-primary-light py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-[34px] font-medium leading-[1.15] tracking-[-0.01em] text-ink sm:text-[42px]"
        >
          Your health deserves better care.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft"
        >
          Take the first step toward better health. Schedule your appointment
          with our care team today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button to="/book-appointment" size="lg" icon={ArrowRight}>
            Book an Appointment
          </Button>
          <Button href="tel:5551234567" variant="secondary" size="lg" icon={Phone}>
            Call (555) 123-4567
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
