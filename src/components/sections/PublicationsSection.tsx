"use client";

import { motion } from "framer-motion";
import { AnimatedSection, PREMIUM_EASE } from "../ui/AnimatedSection";
import { FileText, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { PendingContent } from "../ui/PendingContent";

export function PublicationsSection({ data }: { data?: any[] }) {
  if (!data || data.length === 0) {
    return <PendingContent sectionName="Publications" />;
  }
  const publications = data;

  return (
    <AnimatedSection id="publications" className="section-padding bg-white dark:bg-executive-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="section-label after-label block">Thought Leadership</span>
            <h2 className="font-playfair type-section text-gray-900 dark:text-white after-title">
              Selected Publications
            </h2>
            <div className="h-[2px] w-16 bg-executive-gold rounded-full" />
          </div>
          <Link href="/publications" className="hidden md:inline-flex items-center text-executive-blue dark:text-executive-gold font-bold hover:underline transition-all">
            View All Publications <ExternalLink className="ml-1.5 w-4 h-4" />
          </Link>
        </motion.div>

        <div className="space-y-4">
          {publications.map((pub: any, idx: number) => (
            <motion.div
              key={pub._id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: PREMIUM_EASE, delay: idx * 0.08 }}
              className="border-t border-gray-300 dark:border-gray-800 pt-8 pb-6 flex flex-col md:flex-row md:items-start justify-between gap-8 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-ink dark:text-executive-gold">
                    {pub.type}
                  </span>
                  {pub.date && (
                    <span className="text-xs font-medium text-gray-400">· {pub.date}</span>
                  )}
                </div>
                
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                  {pub.title}
                </h3>
                
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                  {pub.journal}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-3xl">
                  {pub.abstract}
                </p>
              </div>

              <div className="flex flex-row md:flex-col gap-2.5 shrink-0 md:pt-1">
                {pub.pdfUrl && (
                  <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white rounded-sm hover:border-executive-gold transition-all duration-200">
                    <Download className="mr-1.5 h-3.5 w-3.5 text-executive-gold" /> PDF
                  </a>
                )}
                {pub.externalLink && (
                  <a href={pub.externalLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 rounded-sm hover:border-executive-gold transition-all duration-200">
                    <FileText className="mr-1.5 h-3.5 w-3.5 text-executive-gold" /> Citation
                  </a>
                )}
                {!pub.pdfUrl && !pub.externalLink && (
                   <a href="#" className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white rounded-sm hover:border-executive-gold transition-all duration-200">
                    <Download className="mr-1.5 h-3.5 w-3.5 text-executive-gold" /> PDF
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}

