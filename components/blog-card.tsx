'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/data/articles';

export default function BlogCard({ article }: { article: Article }) {
  return (
    <Link href={`/blogs/${article.id}`} className="block">
      <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer h-full">
        <div className="relative h-44 w-full">
          <Image src={article.image} alt={article.imageAlt} fill className="object-cover" />
        </div>

        <div className="p-4">
          <p className="text-xs text-teal-600 font-semibold mb-1">{article.category}</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.description}</p>
          <div className="text-xs text-gray-400">{article.date}</div>
        </div>
      </article>
    </Link>
  );
}
