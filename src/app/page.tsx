import { About } from "@/sections/About";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Tape } from "@/sections/Tape";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
      <CallToAction />
      <Footer />
    </main>
  );
}
