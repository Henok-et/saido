"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection, PREMIUM_EASE } from "../ui/AnimatedSection";
import { MapPin, Calendar, ExternalLink, Mic, Camera } from "lucide-react";
import { PendingContent } from "../ui/PendingContent";

interface EngagementItem {
  _id: string;
  title: string;
  type?: string;
  event?: string;
  date?: string;
  location?: string;
  description?: string;
  link?: string;
  imageUrl?: string;
  imageCaption?: string;
}

export function EngagementsSection({ data }: { data?: EngagementItem[] }) {
  if (!data || data.length === 0) {
    return <PendingContent sectionName="Speaking & Engagements" />;
  }
  const events = data;

  return (
    <AnimatedSection id="engagement" className="section-padding bg-gray-50 dark:bg-executive-darkSurface relative overflow-hidden border-t border-gray-200/60 dark:border-gray-800">

      {/* Background Icon Watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 bottom-0 opacity-5 dark:opacity-[0.02] transform translate-x-1/4 translate-y-1/4">
          <Mic className="w-[500px] h-[500px] text-executive-blue dark:text-white" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="section-header section-header--center"
        >
          <span className="section-label after-label block">Public Appearances</span>
          <h2 className="font-playfair type-subsection text-gray-900 dark:text-white after-title">
            Speaking & Engagements
          </h2>
          <div className="before-title h-[2px] w-16 bg-executive-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {events.map((evt, idx) => (
            <motion.div
              key={evt._id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.6, ease: PREMIUM_EASE, delay: idx * 0.1 }}
              className="border-t border-gray-300 dark:border-gray-800 pt-6 pb-2 flex flex-col group"
            >
              {/* Event Image & Caption Overlay */}
              {evt.imageUrl && (
                <div className="relative w-full aspect-[16/9] mb-4 rounded-sm overflow-hidden bg-gray-100 dark:bg-gray-800 group/img">
                  <Image
                    src={evt.imageUrl}
                    alt={evt.title}
                    fill
                    className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {evt.imageCaption && (
                    <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 text-white/90 text-xs font-medium backdrop-blur-md bg-black/50 border border-white/10 px-2 py-0.5 rounded-sm">
                      <Camera className="w-3.5 h-3.5 text-executive-gold flex-shrink-0" />
                      <span className="truncate">{evt.imageCaption}</span>
                    </div>
                  )}
                </div>
              )}

              <span className="text-xs font-bold uppercase tracking-widest text-gold-ink dark:text-executive-gold mb-2 block">
                {evt.type || "Speaker"}
              </span>

              <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                {evt.title}
              </h3>

              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 flex-1">
                {evt.event}
              </p>

              {evt.description && (
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {evt.description}
                </p>
              )}

              <div className="mt-auto space-y-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-200 dark:border-gray-800">
                {evt.date && (
                  <div className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-2 text-executive-gold flex-shrink-0" />
                    <span>{evt.date}</span>
                  </div>
                )}
                {evt.location && (
                  <div className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-2 text-executive-gold flex-shrink-0" />
                    <span>{evt.location}</span>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3">
                 <a href={evt.link || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white group-hover:text-gold-ink transition-colors">
                  View Event <ExternalLink className="ml-1 w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}


