import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

const socialLinks = [
  {
    label: 'Facebook',
    path: 'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z',
  },
  {
    label: 'Instagram',
    path: 'M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.78.22 2.42.46.65.25 1.2.6 1.75 1.15.5.5.86 1.05 1.15 1.75.24.64.41 1.36.46 2.42.05 1.06.06 1.4.06 4.16s-.01 3.1-.06 4.16c-.05 1.06-.22 1.78-.46 2.42-.25.65-.6 1.2-1.15 1.75-.5.5-1.05.86-1.75 1.15-.64.24-1.36.41-2.42.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.78-.22-2.42-.46a4.93 4.93 0 0 1-1.75-1.15 4.93 4.93 0 0 1-1.15-1.75c-.24-.64-.41-1.36-.46-2.42C2 15.1 2 14.76 2 12s.01-3.06.06-4.12c.05-1.06.22-1.78.46-2.42.25-.7.6-1.25 1.15-1.75A4.93 4.93 0 0 1 5.42.56C6.06.32 6.78.15 7.84.1 8.94.02 9.28 0 12 0Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.4 5.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z',
  },
  {
    label: 'LinkedIn',
    path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z',
  },
];

const columns = [
  {
    heading: 'Services',
    links: [
      { label: 'Primary Care', to: '/services#primary-care' },
      { label: 'Family Medicine', to: '/services#family-medicine' },
      { label: "Women's Health", to: '/services#womens-health' },
      { label: 'Pediatrics', to: '/services#pediatrics' },
      { label: 'Preventive Care', to: '/services#preventive-care' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Our Doctors', to: '/doctors' },
      { label: 'Careers', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Patient Resources',
    links: [
      { label: 'Book Appointment', to: '/book-appointment' },
      { label: 'Insurance', to: '/contact' },
      { label: 'Patient Portal', to: '/contact' },
      { label: 'FAQs', to: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-[14.5px] leading-relaxed text-white/60">
              Compassionate healthcare for you and your family, built around
              trust, time, and attentive care.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                  aria-label={social.label}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-white/40">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[14.5px] text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-white/40">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-[14.5px] text-white/70">
              <li className="flex items-start gap-2.5">
                <Phone size={16} strokeWidth={1.75} className="mt-0.5 flex-none" />
                (555) 123-4567
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} strokeWidth={1.75} className="mt-0.5 flex-none" />
                hello@luminahealth.com
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} strokeWidth={1.75} className="mt-0.5 flex-none" />
                482 Maple Grove Ave, Austin, TX
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} strokeWidth={1.75} className="mt-0.5 flex-none" />
                Mon&ndash;Fri, 8:00 AM&ndash;6:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-[13px] text-white/50">
            &copy; 2026 Lumina Health Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[13px] text-white/50 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-[13px] text-white/50 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
