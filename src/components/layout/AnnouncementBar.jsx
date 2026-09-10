import { Link } from 'react-router-dom';

export default function AnnouncementBar() {
  return (
    <div className="bg-ink text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-2.5 text-[13px]">
        <p className="text-center text-white/85">
          Accepting New Patients <span className="mx-2 text-white/40">&bull;</span> Same-Week Appointments Available
        </p>
        <Link
          to="/book-appointment"
          className="hidden whitespace-nowrap font-semibold text-teal-light hover:text-white sm:inline-block"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}
