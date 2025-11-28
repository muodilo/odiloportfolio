import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { articles } from "@/data/articles";
import BlogCard from "./blog-card";

export function LatestArticles() {
  return (
    <section 
      id="articles" 
      className="lg:px-32 md:px-16 px-5 py-16 lg:py-24 bg-teal-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              Latest <span className="text-teal-500">Articles</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Thoughts on web development, design systems, and modern technologies.
            </p>
          </div>
          <Link
            href="/blogs"
            className="text-teal-500 hover:text-teal-600 font-medium transition-colors self-start md:self-auto"
          >
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

