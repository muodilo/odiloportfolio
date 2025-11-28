'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer h-full">
        {/* Project Image */}
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-teal-50 text-teal-600 rounded-full border border-teal-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
