import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { publicationsQuery } from "@/sanity/lib/queries";
import { FileText, Download, ExternalLink } from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Publications | Prof. Saidou Madougou",
  description: "Full archive of publications, policy briefs, and research papers by Prof. Saidou Madougou.",
};

export default async function PublicationsArchivePage() {
  const publications = await client.fetch(publicationsQuery);

  return (
    <div className="section-padding max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="section-header">
        <span className="section-label after-label block">Thought Leadership</span>
        <h1 className="font-playfair type-section text-gray-900 dark:text-white after-title">
          Publications
        </h1>
        <div className="before-title h-[2px] w-16 bg-executive-gold rounded-full" />
      </div>

      {(!publications || publications.length === 0) ? (
        <p className="text-gray-500 dark:text-gray-400">No publications available yet.</p>
      ) : (
        <div className="space-y-6">
          {publications.map((pub: any) => (
            <div key={pub._id} className="executive-card p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-8 bg-white dark:bg-executive-darkSurface relative overflow-hidden">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-executive-blue/10 text-executive-blue dark:bg-executive-gold/10 dark:text-executive-gold tracking-wide uppercase">
                    {pub.type}
                  </span>
                  {pub.date && (
                    <span className="type-meta font-medium text-gray-500 dark:text-gray-400">{pub.date}</span>
                  )}
                </div>

                <h2 className="font-playfair type-card-title text-gray-900 dark:text-white mb-2 leading-tight">
                  {pub.title}
                </h2>

                <p className="text-sm font-bold text-gold-ink mb-4 uppercase tracking-wider">
                  {pub.journal}
                </p>

                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-3xl">
                  {pub.abstract}
                </p>
              </div>

              <div className="flex flex-row md:flex-col gap-3 shrink-0 md:pt-1">
                {pub.pdfUrl && (
                  <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-lg text-white bg-executive-blue hover:bg-executive-blue/90 dark:bg-white/10 dark:hover:bg-white/20 transition-all duration-200 w-full md:w-auto shadow-sm">
                    <Download className="mr-2 h-4 w-4" /> PDF
                  </a>
                )}
                {pub.externalLink && (
                  <a href={pub.externalLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-200 dark:border-gray-700 text-sm font-bold rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 w-full md:w-auto">
                    <FileText className="mr-2 h-4 w-4" /> Citation
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
