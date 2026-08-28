import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Insights | Prof. Saidou Madougou",
  description: "Articles and commentary from Prof. Saidou Madougou on education, science, technology and innovation policy.",
};

export default async function BlogArchivePage() {
  const posts = await client.fetch(blogPostsQuery);

  return (
    <div className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="section-header">
        <span className="section-label after-label block">Thought Leadership</span>
        <h1 className="font-playfair type-section text-gray-900 dark:text-white after-title">
          Insights
        </h1>
        <div className="before-title h-[2px] w-16 bg-executive-gold rounded-full" />
      </div>

      {(!posts || posts.length === 0) ? (
        <p className="text-gray-500 dark:text-gray-400">No articles published yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <article key={post._id} className="executive-card p-8 flex flex-col group hover:border-executive-gold/40 hover:shadow-xl transition-all duration-300 bg-white dark:bg-executive-darkBg relative">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-ink bg-executive-gold/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <h2 className="font-playfair type-card-title text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors line-clamp-3">
                <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {post.title}
                </Link>
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 flex-1 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100 dark:border-gray-800">
                <span className="text-sm font-bold text-gray-900 dark:text-gray-300">
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}
                </span>
                <span className="inline-flex items-center text-sm font-bold text-executive-blue dark:text-white group-hover:text-gold-ink transition-colors">
                  Read Article <ArrowUpRight className="ml-1 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
