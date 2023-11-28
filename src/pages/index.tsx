import Hero from "@/components/feature/Hero";
import Offer from "@/components/feature/Offer";
import AboutUs from "@/components/feature/AboutUs";
import Contact from "@/components/feature/Contact";
import WhyUs from "@/components/feature/WhyUs";
import SectionWrapper from "@/components/ui/SectionWrapper";
import DecorSection from "@/components/feature/DecorSection";

export default function Home() {
  return (
    <>
      <SectionWrapper id={"Home"}>
        <Hero />
        <WhyUs />
      </SectionWrapper>
      <SectionWrapper id={"Oferta"}>
        <Offer />
      </SectionWrapper>
      <DecorSection />
      <SectionWrapper id={"O nas"}>
        <AboutUs />
      </SectionWrapper>
      <SectionWrapper id={"Kontakt"}>
        <Contact />
      </SectionWrapper>
    </>
  );
}
