import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { blogPostBySlugQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(blogPostBySlugQuery, { slug });
  if (!post) return {};
  return {
    title: `${post.title} | Prof. Saidou Madougou`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(blogPostBySlugQuery, { slug });

  if (!post) notFound();

  return (
    <article className="section-padding max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-bold text-executive-blue dark:text-executive-gold hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" /> All Insights
      </Link>

      <div className="flex items-center gap-3 mb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-gold-ink bg-executive-gold/10 px-3 py-1 rounded-full">
          {post.category}
        </span>
        {post.publishedAt && (
          <span className="type-meta text-gray-500 dark:text-gray-400">
            {new Date(post.publishedAt).toLocaleDateString()}
          </span>
        )}
      </div>

      <h1 className="font-playfair type-section text-gray-900 dark:text-white mb-6">
        {post.title}
      </h1>

      {post.author && (
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-8">By {post.author}</p>
      )}

      {post.imageUrl && (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 border border-gray-100 dark:border-gray-800">
          <Image src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
        </div>
      )}

      {post.content ? (
        <div className="prose dark:prose-invert max-w-none measure text-gray-700 dark:text-gray-300 type-body space-y-5">
          <PortableText value={post.content} />
        </div>
      ) : (
        <p className="italic text-gray-400 dark:text-gray-500">{post.excerpt}</p>
      )}
    </article>
  );
}
