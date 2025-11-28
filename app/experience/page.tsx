import { CustomNav } from '@/components/custom-nav';
import Experience from '@/components/experience';


export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <CustomNav title="Experience" />
      <main>
        <Experience />
      </main>
    </div>
  );
}
