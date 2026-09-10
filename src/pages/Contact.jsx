import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, TriangleAlert, Send } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';

const infoItems = [
  { icon: Phone, label: 'Phone', value: '(555) 123-4567' },
  { icon: Mail, label: 'Email', value: 'hello@luminahealth.com' },
  { icon: MapPin, label: 'Address', value: '482 Maple Grove Ave, Austin, TX 78701' },
  { icon: Clock, label: 'Opening Hours', value: 'Mon\u2013Fri, 8:00 AM\u20136:00 PM \u00b7 Sat, 9:00 AM\u20131:00 PM' },
];

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | Lumina Health Clinic';
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    reason: 'General Inquiry',
    message: '',
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We're here to help"
        description="Questions about a service, your insurance, or an upcoming visit? Reach out and our team will respond within one business day."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <div className="space-y-6">
              {infoItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary-light text-primary">
                      <Icon size={19} strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-[13px] text-ink-faint">{item.label}</p>
                      <p className="mt-0.5 text-[15.5px] font-medium text-ink">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="flex h-52 items-center justify-center text-[14px] text-ink-faint">
                Map location &mdash; 482 Maple Grove Ave, Austin, TX
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-primary-light/60 p-5">
              <TriangleAlert size={18} strokeWidth={1.75} className="mt-0.5 flex-none text-primary" />
              <p className="text-[13.5px] leading-relaxed text-ink-soft">
                If you are experiencing a medical emergency, please call 911
                or go to your nearest emergency room. This form is not
                monitored for urgent medical needs.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[28px] border border-border bg-white p-8 sm:p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-light text-teal">
                  <Send size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-[22px] font-medium text-ink">
                  Message sent
                </h3>
                <p className="mt-2 max-w-sm text-[15px] text-ink-soft">
                  Thank you for reaching out. A member of our team will
                  respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full Name">
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@email.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Phone">
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Reason for Contact">
                    <select
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option>General Inquiry</option>
                      <option>Insurance Question</option>
                      <option>Existing Patient</option>
                      <option>New Patient</option>
                      <option>Billing</option>
                    </select>
                  </Field>
                </div>

                <Field label="Message">
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="How can we help?"
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}

const inputClass =
  'w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-primary';

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
        {label}
      </span>
      {children}
    </label>
  );
}
