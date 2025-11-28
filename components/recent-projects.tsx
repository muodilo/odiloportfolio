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
import ProjectCard from "./project-card";

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
            href="/projects"
            className="text-teal-500 hover:text-teal-600 font-medium transition-colors self-start md:self-auto"
          >
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

