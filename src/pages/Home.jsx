import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import Services from '../components/sections/Services';
import FeaturedValue from '../components/sections/FeaturedValue';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Doctors from '../components/sections/Doctors';
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import Insurance from '../components/sections/Insurance';
import FAQSection from '../components/sections/FAQSection';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  useEffect(() => {
    document.title = 'Lumina Health Clinic | Better Care. Better Health. Better Life.';
  }, []);

  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <FeaturedValue />
      <WhyChooseUs />
      <Doctors />
      <HowItWorks />
      <Testimonials />
      <Insurance />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
