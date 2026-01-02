import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationSelector from "@/components/LocationSelector";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import TransformationSection from "@/components/sections/TransformationSection";
import BMISection from "@/components/sections/BMISection";
import TrainersSection from "@/components/sections/TrainersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstagramSection from "@/components/sections/InstagramSection";
import LocationsSection from "@/components/sections/LocationsSection";
import HoursSection from "@/components/sections/HoursSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [showLocationSelector, setShowLocationSelector] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenLocationSelector={() => setShowLocationSelector(true)} />
      
      <LocationSelector
        isOpen={showLocationSelector}
        onClose={() => setShowLocationSelector(false)}
        onSelectLocation={(id) => {
          setShowLocationSelector(false);
          window.location.href = `/locations/${id}`;
        }}
      />

      <main>
        <HeroSection />
        <BenefitsSection />
        <section id="programs">
          <ProgramsSection />
        </section>
        <TransformationSection />
        <BMISection />
        <section id="trainers">
          <TrainersSection />
        </section>
        <TestimonialsSection />
        <InstagramSection />
        <section id="locations">
          <LocationsSection />
        </section>
        <HoursSection />
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
