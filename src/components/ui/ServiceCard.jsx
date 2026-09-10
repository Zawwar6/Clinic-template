import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-card"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 font-display text-[21px] font-medium text-ink">
        {service.name}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
        {service.description}
      </p>
      <Link
        to={`/services#${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
      >
        Learn more
        <ArrowRight
          size={15}
          strokeWidth={2.25}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}
