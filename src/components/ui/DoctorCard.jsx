import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function DoctorCard({ doctor, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-surface">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-72 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-display text-[19px] font-medium text-ink">
          {doctor.name}
        </h3>
        <p className="mt-0.5 text-sm text-primary font-medium">
          {doctor.credentials} &middot; {doctor.specialty}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {doctor.bio}
        </p>
        <Link
          to={`/doctors#${doctor.slug}`}
          className="mt-3 inline-block text-sm font-semibold text-ink underline decoration-border underline-offset-4 hover:decoration-primary hover:text-primary"
        >
          View profile
        </Link>
      </div>
    </motion.div>
  );
}
