import { motion } from 'framer-motion';
import Button from '../ui/Button';

const providers = [
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'UnitedHealthcare',
  'Humana',
  'Medicare',
];

export default function Insurance() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 rounded-[28px] bg-surface p-10 sm:p-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[30px] font-medium leading-[1.15] tracking-[-0.01em] text-ink sm:text-[34px]">
              We make care easier
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-ink-soft">
              We accept most major insurance plans and offer flexible payment
              options, so cost is never the reason you delay care.
            </p>
            <p className="mt-4 max-w-md text-[15px] text-ink-faint">
              Don&rsquo;t see your insurance listed? Contact our team and
              we&rsquo;ll be happy to help.
            </p>
            <Button to="/contact" variant="primary" className="mt-7">
              Check Your Coverage
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {providers.map((provider) => (
              <div
                key={provider}
                className="flex items-center justify-center rounded-xl border border-border bg-white px-4 py-6 text-center text-[14px] font-semibold text-ink-soft"
              >
                {provider}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
