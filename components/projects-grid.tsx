'use client';

import { useState } from 'react';
import ProjectCard from './project-card';
import { projects } from '@/data/projects';

const filters = ['All', 'Full-Stack', 'Frontend', 'Design', 'Mobile'];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-12 px-5 md:px-16 lg:px-32 bg-white">
      <div className="">
        {/* Header and Description */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">
            All <span className="text-teal-500">Projects</span>
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            A collection of projects showcasing my expertise
            <br className="hidden sm:block" />
            across web development, design, and full-stack applications.
          </p>

          {/* Filters */}
          <div className="flex gap-3 flex-wrap">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1 rounded-full text-sm font-medium border ${activeFilter === f ? 'bg-black text-white border-black' : 'bg-gray-100 text-gray-800 border-gray-200'} transition-colors`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
