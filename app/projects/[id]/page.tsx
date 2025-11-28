import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { CustomNav } from '@/components/custom-nav';

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectId = parseInt(id, 10);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-teal-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <CustomNav title={project.title} />

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full inline-block mb-4">
            {project.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>

          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            {project.fullDescription || project.description}
          </p>

 
          <div className="relative h-72 w-full rounded-lg overflow-hidden mb-8">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover"
            />
          </div>


          <div className="flex justify-between mb-12 py-7 border-b border-t">
            {project.year && (
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Year</p>
                <p className="text-lg font-semibold text-gray-900">{project.year}</p>
              </div>
            )}
            {project.role && (
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Role</p>
                <p className="text-lg font-semibold text-gray-900">{project.role}</p>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 bg-teal-100 text-teal-600 rounded-full border border-teal-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>


          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-900 mb-4">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-teal-500 font-bold text-lg">●</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-3 pt-8">
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                className="px-5 py-2 bg-teal-100 text-teal-600 text-sm font-medium rounded hover:bg-teal-200 transition-colors"
              >
                View code
              </a>
            )}
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                className="px-5 py-2 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-900 transition-colors"
              >
                View Live
              </a>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
