import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Tape } from "@/sections/Tape";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Tape />
    </main>
  );
}
