import Image from "next/image";

const stats = [
  { number: "50+", label: "Projects completed" },
  { number: "30+", label: "Happy clients" },
  { number: "6+", label: "years experience" },
  { number: "5+", label: "Tech stack" },
];

export function About() {
  return (
    <section 
      id="about" 
      className="lg:px-32 md:px-16 px-5 py-16 lg:py-24 bg-teal-50"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] order-first lg:order-first">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-teal-100 rounded-2xl -z-0"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about.jpg"
                alt="Coding and development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            About <span className="text-teal-500">Me</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            I&apos;m a passionate full-stack developer with 6+ years of experience creating 
            beautiful and functional digital products. I love solving complex problems and 
            bringing ideas to life through code and design.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing 
            to open source, or sharing knowledge with the developer community through writing 
            and speaking.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-6">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-500">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

