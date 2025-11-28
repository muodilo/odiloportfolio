import { Navbar } from '@/components/navbar';
import BlogsGrid from '@/components/blogs-grid';

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <BlogsGrid />
      </main>
    </div>
  );
}
