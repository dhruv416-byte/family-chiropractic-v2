import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Trust from "@/components/sections/Trust";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Services />
      <Process />
      <Trust />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
