import { motion } from 'framer-motion';

export default function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  light = false,
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      {label && (
        <p
          className={`text-sm font-semibold mb-3 ${
            light ? 'text-teal-light/90' : 'text-teal'
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.12] tracking-[-0.01em] font-medium ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[17px] leading-relaxed ${
            light ? 'text-white/75' : 'text-ink-soft'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
