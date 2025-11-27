import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section 
      id="home" 
      className="lg:px-32 md:px-16 px-5 py-16 "
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gray-900">HI, I&apos;m</span>{" "}
            <span className="text-teal-500">Odilo Murindahabi</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Full-stack developer and designer crafting beautiful, performant digital 
            experiences. Specialized in React, Next.js, and modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg"
              className="bg-black text-white hover:bg-gray-800 rounded-lg px-8 py-3 h-auto"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-teal-500 text-teal-500 hover:bg-teal-50 rounded-lg px-8 py-3 h-auto"
            >
              Download CV
            </Button>
          </div>
        </div>
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] order-first lg:order-last">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src="/images/Murindahabi_odilo_make_a_proffetional_software_Engineer_38cb13cb-9001-444f-a58d-07a33ea9a072.jpg"
              alt="Odilo Murindahabi - Professional Software Engineer"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

