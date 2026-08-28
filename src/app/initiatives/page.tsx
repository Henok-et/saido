import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { initiativesQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Strategic Initiatives | Prof. Saidou Madougou",
  description: "Case studies of strategic initiatives led by Prof. Saidou Madougou across education, science, technology and innovation.",
};

export default async function InitiativesArchivePage() {
  const initiatives = await client.fetch(initiativesQuery);

  return (
    <div className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="section-header">
        <span className="section-label after-label block">Global Impact</span>
        <h1 className="font-playfair type-section text-gray-900 dark:text-white after-title">
          Strategic Initiatives
        </h1>
        <div className="before-title h-[2px] w-16 bg-executive-gold rounded-full" />
      </div>

      {(!initiatives || initiatives.length === 0) ? (
        <p className="text-gray-500 dark:text-gray-400">No initiatives available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((initiative: any) => (
            <div key={initiative._id} className="executive-card overflow-hidden group flex flex-col sm:flex-row hover:shadow-xl hover:border-executive-gold/40 transition-all duration-300">
              <div
                className="relative h-48 sm:h-auto sm:w-2/5 bg-gray-100 dark:bg-gray-800/50 overflow-hidden"
                style={initiative.imageUrl ? { backgroundImage: `url(${initiative.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
              >
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-tr from-executive-blue/10 to-transparent" />
              </div>
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col bg-white dark:bg-executive-darkSurface">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-ink mb-3 block">
                  {initiative.category}
                </span>
                <h2 className="font-playfair type-card-title text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                  {initiative.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                  {initiative.summary}
                </p>
                <Link
                  href={`/initiatives/${initiative.slug}`}
                  className="inline-flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-gold-ink transition-colors mt-auto w-fit"
                >
                  Read Case Study <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
