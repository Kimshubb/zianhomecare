import { About } from "@/components/marketing/About";
import { Hero } from "@/components/marketing/Hero";
import { Navbar } from "@/components/marketing/Navbar";
import { Services } from "@/components/marketing/Services";
import { StatsBar } from "@/components/marketing/StatsBar";
import { HowItWorks } from "@/components/marketing/sections/HowItWorks";
import { Testimonial } from "@/components/marketing/sections/Testimonial";
import { Footer } from "@/components/marketing/sections/Footer";
import { EmergencyCTA } from "@/components/marketing/sections/EmergencyCTA";
export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <HowItWorks />
        <Testimonial />
        <EmergencyCTA />

      </main>
    </>
  );
}