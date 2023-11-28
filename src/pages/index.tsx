import Hero from "@/components/feature/Hero";
import Offer from "@/components/feature/Offer";
import AboutUs from "@/components/feature/AboutUs";
import Contact from "@/components/feature/Contact";
import WhyUs from "@/components/feature/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Offer />
      <AboutUs />
      <Contact />
    </>
  );
}
