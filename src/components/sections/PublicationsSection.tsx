import { AnimatedSection } from "../ui/AnimatedSection";
import { FileText, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { PendingContent } from "../ui/PendingContent";

export function PublicationsSection({ data }: { data?: any[] }) {
  if (!data || data.length === 0) {
    return <PendingContent sectionName="Publications" />;
  }
  const publications = data;

  return (
    <AnimatedSection id="publications" className="section-padding bg-gray-50 dark:bg-executive-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="section-label mb-3 block">Thought Leadership</span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Selected Publications
            </h2>
            <div className="h-[2px] w-16 bg-executive-gold rounded-full" />
          </div>
          <Link href="/publications" className="hidden md:inline-flex items-center text-executive-blue dark:text-executive-gold font-bold hover:underline transition-all">
            View All Publications <ExternalLink className="ml-1.5 w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-6">
          {publications.map((pub: any) => (
            <div key={pub._id} className="executive-card p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-8 hover:shadow-xl hover:border-executive-gold/40 transition-all duration-300 group bg-white dark:bg-executive-darkSurface relative overflow-hidden">
               {/* Accent Border */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-executive-gold/20 via-executive-gold to-executive-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-executive-blue/10 text-executive-blue dark:bg-executive-gold/10 dark:text-executive-gold tracking-wide uppercase">
                    {pub.type}
                  </span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{pub.date}</span>
                </div>
                
                <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                  {pub.title}
                </h3>
                
                <p className="text-sm font-bold text-executive-gold mb-4 uppercase tracking-wider">
                  {pub.journal}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-3xl">
                  {pub.abstract}
                </p>
              </div>

              <div className="flex flex-row md:flex-col gap-3 shrink-0 md:pt-1">
                {pub.pdfUrl && (
                  <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-lg text-white bg-executive-blue hover:bg-executive-blue/90 dark:bg-white/10 dark:hover:bg-white/20 transition-all duration-200 w-full md:w-auto shadow-sm">
                    <Download className="mr-2 h-4 w-4" /> PDF
                  </a>
                )}
                {pub.externalLink && (
                  <a href={pub.externalLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-200 dark:border-gray-700 text-sm font-bold rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 w-full md:w-auto">
                    <FileText className="mr-2 h-4 w-4" /> Citation
                  </a>
                )}
                {!pub.pdfUrl && !pub.externalLink && (
                   <a href="#" className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-lg text-white bg-executive-blue hover:bg-executive-blue/90 dark:bg-white/10 dark:hover:bg-white/20 transition-all duration-200 w-full md:w-auto shadow-sm">
                    <Download className="mr-2 h-4 w-4" /> PDF
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
