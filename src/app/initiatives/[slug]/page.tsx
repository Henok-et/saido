import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { initiativeBySlugQuery } from "@/sanity/lib/queries";

export const revalidate = 5;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const initiative = await client.fetch(initiativeBySlugQuery, { slug });
  if (!initiative) return {};
  return {
    title: `${initiative.title} | Prof. Saidou Madougou`,
    description: initiative.summary,
  };
}

export default async function InitiativeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const initiative = await client.fetch(initiativeBySlugQuery, { slug });

  if (!initiative) notFound();

  return (
    <article className="section-padding max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link href="/initiatives" className="inline-flex items-center gap-1.5 text-sm font-bold text-executive-blue dark:text-executive-gold hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" /> All Initiatives
      </Link>

      <span className="text-xs font-bold uppercase tracking-wider text-gold-ink mb-3 block">
        {initiative.category}
      </span>
      <h1 className="font-playfair type-section text-gray-900 dark:text-white mb-6">
        {initiative.title}
      </h1>

      {initiative.imageUrl && (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 border border-gray-100 dark:border-gray-800">
          <Image src={initiative.imageUrl} alt={initiative.title} fill className="object-cover" priority />
        </div>
      )}

      {initiative.summary && (
        <p className="type-lead text-gray-600 dark:text-gray-300 mb-10 measure">
          {initiative.summary}
        </p>
      )}

      {initiative.content ? (
        <div className="prose dark:prose-invert max-w-none measure text-gray-700 dark:text-gray-300 type-body space-y-5">
          <PortableText value={initiative.content} />
        </div>
      ) : (
        <p className="italic text-gray-400 dark:text-gray-500">Full case study content coming soon.</p>
      )}
    </article>
  );
}
