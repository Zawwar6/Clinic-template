import SectionHeading from '../ui/SectionHeading';
import DoctorCard from '../ui/DoctorCard';
import Button from '../ui/Button';
import { doctors } from '../../data/doctors';

export default function Doctors() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            label="Our Team"
            title="Meet your care team"
            description="Every physician at Lumina Health is board-certified and personally invested in your long-term health."
          />
          <Button to="/doctors" variant="secondary" className="flex-none">
            View All Doctors
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, i) => (
            <DoctorCard key={doctor.slug} doctor={doctor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
