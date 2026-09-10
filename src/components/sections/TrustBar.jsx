import { motion } from 'framer-motion';
import { Award, Users2, Star, CalendarClock, BadgeCheck } from 'lucide-react';

const items = [
  { icon: Award, label: '15+ Years Experience' },
  { icon: Users2, label: '10K+ Patients' },
  { icon: Star, label: '4.9/5 Rating' },
  { icon: CalendarClock, label: 'Same-Day Appointments' },
  { icon: BadgeCheck, label: 'Board-Certified Physicians' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:justify-between">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-2.5 text-ink-soft"
              >
                <Icon size={18} strokeWidth={1.75} className="text-primary" />
                <span className="text-[14px] font-medium whitespace-nowrap">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
