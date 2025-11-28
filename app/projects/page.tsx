
import ProjectsGrid from '@/components/projects-grid';
import { CustomNav } from '@/components/custom-nav';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <CustomNav title="Projects" />
      <main>
        <ProjectsGrid />
      </main>
    </div>
  );
}
