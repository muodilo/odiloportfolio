import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";

export function RecentProjects() {
  return (
    <section 
      id="projects" 
      className="lg:px-32 md:px-16 px-5 py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              Recent <span className="text-teal-500">Projects</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Showcasing my latest work and featured projects.
            </p>
          </div>
          <Link
            href="#projects"
            className="text-teal-500 hover:text-teal-600 font-medium transition-colors self-start md:self-auto"
          >
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow border-gray-200">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <CardHeader className="pb-3">
                <span className="text-teal-500 text-sm font-medium">
                  {project.category}
                </span>
                <CardTitle className="text-xl font-bold text-gray-900 mt-1">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="pt-0 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

