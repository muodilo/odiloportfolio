import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/data/articles';
import { Calendar1Icon, Share, Share2Icon, User2 } from 'lucide-react';

export default async function BlogDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const articleId = parseInt(id, 10);
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blogs" className="text-teal-500 hover:underline">Back to Articles</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <nav className="lg:px-32 md:px-16 px-5">
          <div className="flex h-16 items-center">
            <Link href="/blogs" className="text-sm font-medium text-gray-700 hover:text-teal-500 transition-colors">← Back</Link>
          </div>
        </nav>
      </header>

      <main className="py-12 px-5 md:px-16 lg:px-32">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-teal-600 font-semibold mb-2">{article.category}</p>

         
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">{article.title}</h1>
          {article.subtitle && (
            <p className="text-gray-600 text-base mb-6">{article.subtitle}</p>
          )}

          
          <div className="flex items-center justify-between gap-6 text-sm text-gray-600 mb-6 border-b border-t py-6">
            <div className="flex items-center gap-2">
            <User2 className="text-gray-400 w-5 h-5" />
            <span>{article.author ?? 'Odilo Murindahabi'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar1Icon className="text-gray-400 w-5 h-5" />
              <span>{article.date}</span>
            </div>
            {article.readTime && (
              <div className="ml-auto text-teal-600 font-medium">{article.readTime}</div>
            )}
          </div>

          
          <div className="relative h-64 w-full rounded-lg overflow-hidden mb-8">
            <Image src={article.image} alt={article.imageAlt} fill className="object-cover" />
          </div>

          
          <div className="prose max-w-none text-gray-700">
            {article.fullContent ? (
              article.fullContent.split('\n\n').map((block, idx) => {
                const trimmed = block.trim();
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={idx} className="text-lg font-semibold mt-6">{trimmed.replace('## ', '')}</h2>
                  );
                }
                return <p key={idx}>{trimmed}</p>;
              })
            ) : (
              <p>{article.description}</p>
            )}
          </div>

        
          <div className="mt-8 pt-8 border-t text-sm text-gray-500 flex items-center gap-3">
            <span>Share this article</span>
            <Share2Icon className="text-gray-400 w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </main>
    </div>
  );
}
