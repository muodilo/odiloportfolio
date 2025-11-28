'use client';

import { ArrowLeft, BackpackIcon } from 'lucide-react';
import Link from 'next/link';
export function CustomNav({title}: {title?: string}) {


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <nav className="lg:px-32 md:px-16 px-5">
        <div className="flex h-16 items-center justify-between relative">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-teal-500 transition-colors"
          >
            <ArrowLeft className="inline-block w-5 h-5 mr-1" />
            <span>Back</span>
          </Link>

          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold text-gray-800">
            {title}
          </h1>


          <div className="w-6"></div>
        </div>
      </nav>
    </header>
  );
}
