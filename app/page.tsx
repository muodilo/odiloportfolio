import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { SkillsCarousel } from "@/components/skills-carousel";
import { RecentProjects } from "@/components/recent-projects";
import { LatestArticles } from "@/components/latest-articles";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsCarousel />
        <RecentProjects />
        <LatestArticles />
      </main>
    </div>
  );
}
