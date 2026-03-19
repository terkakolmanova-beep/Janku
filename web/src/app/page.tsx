import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import CatalogSection from "@/components/CatalogSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import data from "@/data/properties.json";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CatalogSection properties={data.properties} />
        <LocationSection locations={data.locations} />
        <AboutSection />
        <TestimonialsSection tenants={data.tenants} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
