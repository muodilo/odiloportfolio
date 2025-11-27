"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const technologies = [
  "HTML",
  "CSS",
  "Javascript",
  "Node.js",
  "Git",
  "Github",
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "SQL",
  "NoSQL",
];

export function SkillsCarousel() {
  const autoplayPlugin = Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  });

  return (
    <section className="w-full bg-teal-500 py-7 overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        plugins={[autoplayPlugin]}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {technologies.map((tech, index) => (
            <CarouselItem
              key={`${tech}-${index}`}
              className="pl-4 basis-auto"
            >
              <div className="flex items-center justify-center px-8 md:px-12 lg:px-16">
                <span className="text-white text-base md:text-lg lg:text-xl font-medium whitespace-nowrap">
                  {tech}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
