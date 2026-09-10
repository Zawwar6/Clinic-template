import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, CalendarCheck } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import { services } from '../data/services';
import { doctors } from '../data/doctors';

const steps = ['Service', 'Doctor', 'Date & Time', 'Your Info'];

const times = ['9:00 AM', '10:30 AM', '11:15 AM', '1:00 PM', '2:30 PM', '3:30 PM', '4:45 PM'];

function getNextDays(count) {
  const days = [];
  const today = new Date();
  for (let i = 1; days.length < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0) days.push(d);
  }
  return days;
}

export default function BookAppointment() {
  useEffect(() => {
    document.title = 'Book an Appointment | Lumina Health Clinic';
  }, []);

  const [step, setStep] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [data, setData] = useState({
    serviceSlug: '',
    doctorSlug: '',
    date: null,
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    insurance: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});

  const availableDays = getNextDays(7);

  const update = (patch) => setData((d) => ({ ...d, ...patch }));

  const canAdvance = () => {
    if (step === 0) return !!data.serviceSlug;
    if (step === 1) return !!data.doctorSlug;
    if (step === 2) return !!data.date && !!data.time;
    return true;
  };

  const validatePatientInfo = () => {
    const e = {};
    if (!data.firstName.trim()) e.firstName = 'Required';
    if (!data.lastName.trim()) e.lastName = 'Required';
    if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = 'Enter a valid email';
    if (!data.phone.trim()) e.phone = 'Required';
    if (!data.dob) e.dob = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === 3) {
      if (validatePatientInfo()) setConfirmed(true);
      return;
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  const selectedService = services.find((s) => s.slug === data.serviceSlug);
  const selectedDoctor = doctors.find((d) => d.slug === data.doctorSlug);

  if (confirmed) {
    return (
      <section className="bg-white py-28">
        <div className="mx-auto max-w-xl px-6 text-center">
          <motion.span
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-light text-teal"
          >
            <CalendarCheck size={28} strokeWidth={1.75} />
          </motion.span>
          <h1 className="mt-6 font-display text-[30px] font-medium text-ink">
            Appointment confirmed
          </h1>
          <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">
            We&rsquo;ve reserved your visit. A confirmation email is on its
            way to {data.email}.
          </p>

          <div className="mt-8 space-y-3 rounded-2xl border border-border bg-surface p-6 text-left">
            <SummaryRow label="Service" value={selectedService?.name} />
            <SummaryRow label="Doctor" value={selectedDoctor?.name} />
            <SummaryRow
              label="Date"
              value={data.date?.toLocaleDateString(undefined, {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            />
            <SummaryRow label="Time" value={data.time} />
            <SummaryRow label="Patient" value={`${data.firstName} ${data.lastName}`} />
          </div>

          <Button to="/" variant="secondary" size="lg" className="mt-9">
            Return Home
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Book an Appointment"
        title="Book your appointment"
        description="A few quick steps and you're set. No account required."
      />

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <ol className="flex items-center justify-between">
            {steps.map((label, i) => (
              <li key={label} className="flex flex-1 items-center">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full border text-[13px] font-semibold transition-colors ${
                      i < step
                        ? 'border-primary bg-primary text-white'
                        : i === step
                        ? 'border-primary text-primary'
                        : 'border-border text-ink-faint'
                    }`}
                  >
                    {i < step ? <Check size={15} strokeWidth={2.5} /> : i + 1}
                  </div>
                  <span
                    className={`hidden text-[12.5px] font-medium sm:block ${
                      i <= step ? 'text-ink' : 'text-ink-faint'
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`mx-2 h-px flex-1 ${
                      i < step ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                )}
              </li>
            ))}
          </ol>

          <div className="mt-10 min-h-[420px] rounded-[28px] border border-border p-7 sm:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {step === 0 && (
                  <StepChoose
                    title="Choose a service"
                    options={services.map((s) => ({ id: s.slug, label: s.name, sub: s.description }))}
                    selected={data.serviceSlug}
                    onSelect={(id) => update({ serviceSlug: id })}
                  />
                )}

                {step === 1 && (
                  <StepChoose
                    title="Choose a doctor"
                    options={doctors.map((d) => ({
                      id: d.slug,
                      label: d.name,
                      sub: d.specialty,
                      image: d.image,
                    }))}
                    selected={data.doctorSlug}
                    onSelect={(id) => update({ doctorSlug: id })}
                  />
                )}

                {step === 2 && (
                  <div>
                    <h2 className="font-display text-[22px] font-medium text-ink">
                      Choose a date &amp; time
                    </h2>
                    <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {availableDays.map((d) => {
                        const active = data.date?.toDateString() === d.toDateString();
                        return (
                          <button
                            key={d.toISOString()}
                            onClick={() => update({ date: d })}
                            className={`rounded-xl border px-3 py-3 text-center transition-colors ${
                              active
                                ? 'border-primary bg-primary text-white'
                                : 'border-border text-ink hover:border-primary/40'
                            }`}
                          >
                            <div className="text-[11.5px] uppercase opacity-70">
                              {d.toLocaleDateString(undefined, { weekday: 'short' })}
                            </div>
                            <div className="text-[15px] font-semibold">
                              {d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <p className="mt-7 text-[13.5px] font-medium text-ink-soft">
                      Available times
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {times.map((t) => (
                        <button
                          key={t}
                          onClick={() => update({ time: t })}
                          className={`rounded-xl border px-3 py-2.5 text-[14px] font-medium transition-colors ${
                            data.time === t
                              ? 'border-primary bg-primary text-white'
                              : 'border-border text-ink hover:border-primary/40'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="font-display text-[22px] font-medium text-ink">
                      Your information
                    </h2>
                    <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <TextField label="First Name" error={errors.firstName}>
                        <input
                          value={data.firstName}
                          onChange={(e) => update({ firstName: e.target.value })}
                          className={inputClass}
                        />
                      </TextField>
                      <TextField label="Last Name" error={errors.lastName}>
                        <input
                          value={data.lastName}
                          onChange={(e) => update({ lastName: e.target.value })}
                          className={inputClass}
                        />
                      </TextField>
                      <TextField label="Email" error={errors.email}>
                        <input
                          type="email"
                          value={data.email}
                          onChange={(e) => update({ email: e.target.value })}
                          className={inputClass}
                        />
                      </TextField>
                      <TextField label="Phone" error={errors.phone}>
                        <input
                          type="tel"
                          value={data.phone}
                          onChange={(e) => update({ phone: e.target.value })}
                          className={inputClass}
                        />
                      </TextField>
                      <TextField label="Date of Birth" error={errors.dob}>
                        <input
                          type="date"
                          value={data.dob}
                          onChange={(e) => update({ dob: e.target.value })}
                          className={inputClass}
                        />
                      </TextField>
                      <TextField label="Insurance Provider">
                        <input
                          value={data.insurance}
                          onChange={(e) => update({ insurance: e.target.value })}
                          placeholder="e.g. Blue Cross Blue Shield"
                          className={inputClass}
                        />
                      </TextField>
                    </div>
                    <TextField label="Additional Notes" className="mt-5">
                      <textarea
                        rows={3}
                        value={data.notes}
                        onChange={(e) => update({ notes: e.target.value })}
                        placeholder="Anything your doctor should know before your visit"
                        className={`${inputClass} resize-none`}
                      />
                    </TextField>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <Button
              variant="secondary"
              onClick={handleBack}
              className={step === 0 ? 'invisible' : ''}
            >
              <ArrowLeft size={16} strokeWidth={2.25} className="mr-1" />
              Back
            </Button>
            <Button onClick={handleNext} disabled={!canAdvance()}>
              {step === steps.length - 1 ? 'Confirm Appointment' : 'Continue'}
              <ArrowRight size={16} strokeWidth={2.25} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function StepChoose({ title, options, selected, onSelect }) {
  return (
    <div>
      <h2 className="font-display text-[22px] font-medium text-ink">{title}</h2>
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
              selected === opt.id
                ? 'border-primary bg-primary-light'
                : 'border-border hover:border-primary/40'
            }`}
          >
            {opt.image && (
              <img src={opt.image} alt="" className="h-12 w-12 flex-none rounded-full object-cover" />
            )}
            <div>
              <p className="text-[15px] font-semibold text-ink">{opt.label}</p>
              <p className="text-[13px] text-ink-soft">{opt.sub}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function TextField({ label, children, error, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[13.5px] font-medium text-ink-soft">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-[12.5px] text-red-600">{error}</span>}
    </label>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between text-[14.5px]">
      <span className="text-ink-faint">{label}</span>
      <span className="font-medium text-ink">{value || '\u2014'}</span>
    </div>
  );
}

const inputClass =
  'w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-primary';
