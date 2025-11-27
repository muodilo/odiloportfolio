import { ExperienceNavbar } from '@/components/experience-navbar';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import AskAIButton from '@/components/ask-ai-button';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <ExperienceNavbar />
      <main>
        <Experience />
      </main>
      <Footer />
      <AskAIButton />
    </div>
  );
}
