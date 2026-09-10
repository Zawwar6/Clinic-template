import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Eye, ShieldCheck } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import DoctorCard from '../components/ui/DoctorCard';
import FinalCTA from '../components/sections/FinalCTA';
import { doctors } from '../data/doctors';

const values = [
  {
    icon: Heart,
    title: 'Compassion First',
    description: 'Every interaction starts with listening, not a clipboard.',
  },
  {
    icon: Target,
    title: 'Clinical Excellence',
    description: 'Evidence-based care delivered by board-certified physicians.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear answers about your health, your options, and your costs.',
  },
  {
    icon: ShieldCheck,
    title: 'Consistency',
    description: 'The same trusted team, visit after visit, year after year.',
  },
];

const stats = [
  { value: '2011', label: 'Founded in Austin' },
  { value: '10,000+', label: 'Patients Served' },
  { value: '15+', label: 'Years in the Community' },
  { value: '4.9/5', label: 'Average Patient Rating' },
];

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Lumina Health Clinic';
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Healthcare built around people"
        description="Lumina Health was founded on a simple idea: that good medicine starts with genuinely knowing your patients. Fifteen years later, that idea still shapes every visit."
      />

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
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80&auto=format&fit=crop"
              alt="Lumina Health clinic reception and waiting area"
              className="h-[420px] w-full object-cover lg:h-[480px]"
              loading="lazy"
            />
          </motion.div>

          <div>
            <p className="text-sm font-semibold text-teal">Our Mission</p>
            <h2 className="mt-3 font-display text-[30px] font-medium leading-[1.18] tracking-[-0.01em] text-ink sm:text-[34px]">
              To make attentive, personalized healthcare the standard, not the exception
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-soft">
              What began as a single family practice on Maple Grove Avenue has
              grown into a multi-specialty clinic serving thousands of Austin
              families. Our approach hasn&rsquo;t changed: hire physicians who
              genuinely care, give them the time to practice medicine well,
              and build a clinic patients actually want to visit.
            </p>
            <p className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">
              Today, our team spans primary care, family medicine,
              women&rsquo;s health, and pediatrics &mdash; but every
              department shares the same founding values.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="What We Stand For"
            title="Our values"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-white p-7"
                >
                  <Icon size={22} strokeWidth={1.75} className="text-primary" />
                  <h3 className="mt-5 font-display text-[18px] font-medium text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center sm:text-left"
              >
                <p className="font-display text-[34px] font-medium text-white sm:text-[40px]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[13.5px] text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Our Team"
            title="The people behind your care"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor, i) => (
              <DoctorCard key={doctor.slug} doctor={doctor} index={i} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
