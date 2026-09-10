import { motion } from 'framer-motion';
import { HeartHandshake, Building2, UserCheck, CalendarDays } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const features = [
  {
    icon: HeartHandshake,
    title: 'Experienced Care Team',
    description:
      'Board-certified physicians with an average of 12+ years treating patients across every life stage.',
  },
  {
    icon: Building2,
    title: 'Modern Facilities',
    description:
      'Bright, comfortable clinic spaces equipped with on-site labs and diagnostic technology.',
  },
  {
    icon: UserCheck,
    title: 'Patient-First Approach',
    description:
      'Longer appointment times and a team that remembers your history, not just your chart number.',
  },
  {
    icon: CalendarDays,
    title: 'Convenient Scheduling',
    description:
      'Online booking, same-week availability, and reminders that make care easy to fit into your life.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Why Lumina Health"
          title="Why patients choose Lumina Health"
          light
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[24px] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-ink p-8"
              >
                <Icon size={24} strokeWidth={1.5} className="text-teal" />
                <h3 className="mt-5 font-display text-[19px] font-medium text-white">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
