import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Languages, CalendarDays, GraduationCap } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import { doctors } from '../data/doctors';

export default function Doctors() {
  useEffect(() => {
    document.title = 'Our Doctors | Lumina Health Clinic';
  }, []);

  const specialties = useMemo(
    () => ['All', ...new Set(doctors.map((d) => d.specialty))],
    []
  );
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? doctors : doctors.filter((d) => d.specialty === active);

  return (
    <>
      <PageHero
        eyebrow="Our Doctors"
        title="A team you can build a relationship with"
        description="Board-certified physicians dedicated to unhurried, attentive care across every specialty we offer."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setActive(specialty)}
                className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
                  active === specialty
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-white text-ink-soft hover:border-primary/40'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((doctor, i) => (
              <motion.div
                id={doctor.slug}
                key={doctor.slug}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-white"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="font-display text-[19px] font-medium text-ink">
                    {doctor.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-primary">
                    {doctor.credentials} &middot; {doctor.specialty}
                  </p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                    {doctor.bio}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-border pt-4">
                    <div className="flex items-center gap-2.5 text-[13.5px] text-ink-soft">
                      <GraduationCap size={15} strokeWidth={1.75} className="text-ink-faint" />
                      {doctor.experience}
                    </div>
                    <div className="flex items-center gap-2.5 text-[13.5px] text-ink-soft">
                      <Languages size={15} strokeWidth={1.75} className="text-ink-faint" />
                      {doctor.languages.join(', ')}
                    </div>
                    <div className="flex items-center gap-2.5 text-[13.5px] text-ink-soft">
                      <CalendarDays size={15} strokeWidth={1.75} className="text-ink-faint" />
                      Available {doctor.availability}
                    </div>
                  </div>

                  <Button to="/book-appointment" variant="secondary" className="mt-5 w-full">
                    Book with {doctor.name.replace('Dr. ', 'Dr. ')}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
