"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection, PREMIUM_EASE } from "../ui/AnimatedSection";
import { PendingContent } from "../ui/PendingContent";
import { TestimonialStrip } from "./TestimonialStrip";

export function InitiativesSection({ data, testimonials }: { data?: any[]; testimonials?: any[] }) {
  if (!data || data.length === 0) {
    return <PendingContent sectionName="Strategic Initiatives" />;
  }
  const initiatives = data;

  return (
    <AnimatedSection id="initiatives" className="section-padding bg-gray-50 dark:bg-executive-darkSurface border-y border-gray-200/60 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="section-label after-label block">Global Impact</span>
            <h2 className="font-playfair type-section text-gray-900 dark:text-white after-title">
              Strategic Initiatives
            </h2>
             <div className="h-[2px] w-16 bg-executive-gold rounded-full" />
          </div>
          <Link href="/initiatives" className="hidden md:inline-flex items-center text-executive-blue dark:text-executive-gold font-bold hover:underline transition-all">
            View All Initiatives <ArrowUpRight className="ml-1.5 w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {initiatives.map((initiative: any, idx: number) => (
            <motion.div
              key={initiative._id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: PREMIUM_EASE, delay: idx * 0.1 }}
              className="border-t border-gray-300 dark:border-gray-800 pt-8 pb-4 flex flex-col sm:flex-row gap-6 sm:gap-8 group"
            >
              <div 
                className="relative h-48 sm:h-auto sm:w-2/5 rounded-sm overflow-hidden bg-gray-100 dark:bg-gray-800/50 min-h-[180px]"
                style={initiative.imageUrl ? { backgroundImage: `url(${initiative.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
              >
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-tr from-executive-blue/10 to-transparent" />
                <div className="absolute inset-0 bg-executive-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="sm:w-3/5 flex flex-col justify-between py-1">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-ink dark:text-executive-gold mb-2 block">
                    {initiative.category}
                  </span>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {initiative.summary}
                  </p>
                </div>
                <Link 
                  href={`/initiatives/${initiative.slug}`}
                  className="inline-flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-gold-ink transition-colors mt-auto w-fit"
                >
                  Read Case Study <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/initiatives" className="inline-flex items-center text-executive-blue dark:text-executive-gold font-bold hover:underline">
            View All Initiatives <ArrowUpRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        <TestimonialStrip data={testimonials} />

      </div>
    </AnimatedSection>
  );
}

