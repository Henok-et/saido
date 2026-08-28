"use client";

import { motion } from "framer-motion";
import { AnimatedSection, PREMIUM_EASE } from "../ui/AnimatedSection";
import { PendingContent } from "../ui/PendingContent";
import { Briefcase, Landmark, ShieldCheck, Handshake, GraduationCap } from "lucide-react";

type ExperienceCategory = "Professional" | "Leadership" | "Governance" | "Advisory" | "Academic";

interface ExperienceItem {
  _id: string;
  role: string;
  organization: string;
  category?: ExperienceCategory;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  location?: string;
  description?: any;
  achievements?: string[];
  responsibilities?: string[];
}

const CATEGORY_ICON: Record<ExperienceCategory, typeof Briefcase> = {
  Professional: Briefcase,
  Leadership: Landmark,
  Governance: ShieldCheck,
  Advisory: Handshake,
  Academic: GraduationCap,
};

export function ExperienceTimeline({ data }: { data?: ExperienceItem[] }) {
  const hasData = data && data.length > 0;

  const formatDate = (value?: string) => {
    if (!value) return "";
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return value; // "2018", "Spring 2020", etc.
    return parsed.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  };

  const formatPeriod = (exp: ExperienceItem) => {
    const start = formatDate(exp.startDate);
    if (exp.current) return start ? `${start} – Present` : "Present";
    const end = formatDate(exp.endDate);
    if (start && end) return `${start} – ${end}`;
    return start || "Previous";
  };

  const renderDescription = (desc: any) => {
    if (!desc) return null;
    if (typeof desc === 'string') return <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{desc}</p>;
    if (Array.isArray(desc) && desc[0]?.children) {
      return <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{desc.map((b:any) => b.children.map((c:any) => c.text).join('')).join('\n')}</p>;
    }
    return null;
  };

  return (
    <AnimatedSection
      id="experience"
      className="section-padding bg-gray-50 dark:bg-executive-darkSurface relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 dot-pattern opacity-[0.07] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="section-header section-header--center"
        >
          <span className="section-label after-label block">The Journey</span>
          <h2 className="font-playfair type-section text-gray-900 dark:text-white">
            Career & Leadership
          </h2>
          <div className="before-title h-[2px] w-16 bg-executive-gold rounded-full mx-auto" />
        </motion.div>

        {hasData ? (
          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-executive-gold/60 via-executive-gold/30 to-transparent -translate-x-1/2" />

            {data.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp._id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.65, ease: PREMIUM_EASE, delay: index * 0.1 }}
                  className={`relative mb-12 md:mb-16 flex md:items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >

                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? "md:mr-10" : "md:ml-10"}`}>
                    <div className="group pt-6 pb-4 border-t border-gray-300 dark:border-gray-800 transition-colors">

                      {/* Period badge */}
                      <div className="inline-flex flex-wrap items-center gap-2 mb-3">
                        <div className={`w-2 h-2 rounded-full ${exp.current ? "bg-executive-gold" : "bg-gray-400"}`} />
                        <span className="text-xs font-bold tracking-wider text-gold-ink uppercase">
                          {formatPeriod(exp)}
                        </span>
                        {exp.current && (
                          <span className="text-[10px] font-semibold text-executive-darkBg bg-executive-gold rounded-sm px-2 py-0.5 uppercase tracking-wider">Current</span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                        {exp.role}
                      </h3>

                      {/* Organization & Location */}
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                        {exp.organization}
                        {exp.location && <span className="text-gray-400 font-normal"> · {exp.location}</span>}
                      </div>

                      {/* Description */}
                      {renderDescription(exp.description)}

                      {/* Key Achievements */}
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <ul className="space-y-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800/80">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="text-xs md:text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2 leading-relaxed">
                              <span className="text-executive-gold mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-5 h-5 rounded-full border-2 border-executive-gold bg-white dark:bg-executive-darkBg z-10 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-executive-gold" />
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        ) : (
          <PendingContent sectionName="Professional Experience" />
        )}
      </div>
    </AnimatedSection>
  );
}

