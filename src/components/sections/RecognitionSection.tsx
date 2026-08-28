"use client";

import { motion } from "framer-motion";
import { AnimatedSection, PREMIUM_EASE } from "../ui/AnimatedSection";
import { Trophy, Star } from "lucide-react";
import { PendingContent } from "../ui/PendingContent";

interface RecognitionItem {
  _id: string;
  title: string;
  type?: string;
  organization: string;
  year?: string;
  description?: string;
}

export function RecognitionSection({ data }: { data?: RecognitionItem[] }) {
  if (!data || data.length === 0) {
    return <PendingContent sectionName="Recognition" />;
  }
  const recognitions = data;

  return (
    <AnimatedSection
      id="recognition"
      className="section-padding bg-gray-50 dark:bg-executive-darkBg relative overflow-hidden border-y border-gray-200/60 dark:border-gray-800"
    >
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-[0.08] dark:opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="section-header section-header--center"
        >
          <span className="section-label after-label block">Distinguished Honors</span>
          <h2 className="font-playfair type-subsection text-gray-900 dark:text-white">
            <span className="text-gold-ink dark:text-gradient-gold">Recognition</span>
          </h2>
          <div className="before-title h-[2px] w-16 bg-executive-gold rounded-full mx-auto" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-lg mx-auto">
            Distinguished recognition from the Republic of Niger and continental academic institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {recognitions.map((item, idx) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: PREMIUM_EASE, delay: idx * 0.1 }}
              className="border-t border-gray-300 dark:border-gray-800 pt-6 pb-2 group"
            >
              <div className="flex items-start gap-4">
                <Trophy className="w-5 h-5 text-gold-ink dark:text-executive-gold flex-shrink-0 mt-1" />
                <div className="flex-1">
                  {item.type && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-gold-ink dark:text-executive-gold mb-1">
                      {item.type}
                    </span>
                  )}
                  <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-3.5 h-3.5 text-executive-gold fill-executive-gold" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{item.organization}</span>
                    {item.year && <span className="text-gray-400 text-sm">· {item.year}</span>}
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

