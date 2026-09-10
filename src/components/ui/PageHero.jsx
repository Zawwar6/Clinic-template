import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-teal"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-[36px] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[46px]"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-soft"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
