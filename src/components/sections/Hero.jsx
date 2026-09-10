import { motion } from 'framer-motion';
import { Star, ArrowRight, CalendarCheck } from 'lucide-react';
import Button from '../ui/Button';

const trustIndicators = [
  { value: '4.9/5', label: 'Patient Rating', stars: true },
  { value: '10,000+', label: 'Patients Served' },
  { value: '15+ Years', label: 'of Experience' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-14 lg:grid-cols-2 lg:gap-10 lg:pb-28 lg:pt-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-[13px] font-medium text-ink-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Trusted Family &amp; Primary Care
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-[42px] font-medium leading-[1.08] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[56px]"
          >
            Healthcare that puts you first.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink-soft"
          >
            Personalized, compassionate care from a team dedicated to helping
            you and your family live healthier, longer lives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button to="/book-appointment" size="lg" icon={ArrowRight}>
              Book an Appointment
            </Button>
            <Button to="/services" variant="secondary" size="lg">
              Explore Our Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-x-9 gap-y-5"
          >
            {trustIndicators.map((item) => (
              <div key={item.label}>
                {item.stars && (
                  <div className="mb-1 flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                )}
                <p className="font-display text-[19px] font-medium text-ink">
                  {item.value}
                </p>
                <p className="text-[13px] text-ink-faint">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[28px] bg-surface">
            <img
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=900&q=80&auto=format&fit=crop"
              alt="Physician consulting with a patient in a bright clinic room"
              className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[560px]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-6 -left-4 w-64 rounded-2xl bg-white p-5 shadow-lifted sm:-left-8 sm:w-72"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-teal-light text-teal">
                <CalendarCheck size={19} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[12.5px] text-ink-faint">Next Available</p>
                <p className="text-[14.5px] font-semibold text-ink">
                  Today &bull; 3:30 PM
                </p>
              </div>
            </div>
            <Button to="/book-appointment" variant="ghost" className="mt-4 w-full !justify-between px-4">
              Book Now
              <ArrowRight size={15} strokeWidth={2.25} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
