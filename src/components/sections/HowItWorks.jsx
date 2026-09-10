import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Book your visit',
    description: 'Choose a convenient appointment time online or by phone, in under two minutes.',
  },
  {
    number: '02',
    title: 'Meet your doctor',
    description: 'Get personalized care and an unhurried conversation with an experienced physician.',
  },
  {
    number: '03',
    title: 'Feel your best',
    description: 'Leave with a clear treatment plan designed around your health and your life.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="The Process"
          title="Getting care shouldn't be complicated"
          align="center"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border sm:block" />
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative text-center sm:text-left"
            >
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-[15px] font-medium text-white sm:mx-0">
                {step.number}
              </div>
              <h3 className="mt-5 font-display text-[20px] font-medium text-ink">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
