import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { SkillsCarousel } from "@/components/skills-carousel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsCarousel />
      </main>
    </div>
  );
}
