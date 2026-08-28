"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection, PREMIUM_EASE } from "../ui/AnimatedSection";
import { CheckCircle2, GraduationCap, Download, Award, UserRound } from "lucide-react";
import { ExpandableBio } from "../ui/ExpandableBio";

interface ProfileData {
  name?: string;
  title?: string;
  tagline?: string;
  summary?: string;
  bio?: any;
  headshotUrl?: string;
  cvUrl?: string;
  socialLinks?: Array<{ platform: string; url: string }>;
  expertise?: string[];
  education?: Array<{ degree: string; school: string }>;
  certifications?: string[];
}

export function ExecutiveProfile({ data }: { data?: ProfileData }) {
  const expertise = data?.expertise ?? [];
  const education = data?.education ?? [];
  const certifications = data?.certifications ?? [];

  return (
    <AnimatedSection
      id="profile"
      className="section-padding bg-white dark:bg-executive-darkBg relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-executive-gold/3 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="mb-16 max-w-xl"
        >
          <span className="section-label after-label block">Executive Profile</span>
          <h2 className="font-playfair type-section text-gray-900 dark:text-white">
            {data?.name ? `About ${data.name}` : "Executive Profile"}
          </h2>
          {data?.title && (
            <p className="mt-3 text-[color:var(--gold-ink)] dark:text-executive-gold font-semibold type-lead measure-tight">{data.title}</p>
          )}
          <div className="before-title h-[3px] w-20 bg-executive-gold rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16">

          {/* ── Biography column ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: PREMIUM_EASE, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >

            {data?.bio ? (
              <ExpandableBio value={data.bio} />
            ) : (
              <div className="space-y-5 measure text-gray-700 dark:text-gray-300 type-lead">
                <p className="italic text-gray-400 dark:text-gray-500">
                  Biography not yet available. Add content in Sanity Studio under <strong>Executive Profile → Biography</strong>.
                </p>
              </div>
            )}

            {/* Expertise tags */}
            {expertise.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-8 border-t border-gray-200 dark:border-gray-800"
              >
                <h3 className="font-playfair type-card-title text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-executive-gold" />
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {expertise.map((item, idx) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.35 + idx * 0.05 }}
                      className="inline-flex items-center px-3.5 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 bg-transparent"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CV download */}
            {data?.cvUrl && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a
                  href={data.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-6 px-7 py-3 bg-executive-blue text-white font-semibold text-sm rounded-sm hover:bg-executive-blue/90 transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download Full CV / Biography
                </a>
              </motion.div>
            )}
          </motion.div>

          {/* ── Sidebar ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: PREMIUM_EASE, delay: 0.25 }}
            className="lg:col-span-5 space-y-8"
          >

            {/* Photo */}
            {data?.headshotUrl ? (
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden border border-gray-200 dark:border-gray-800 group">
                <Image
                  src={data.headshotUrl}
                  alt={data.name || "Executive Profile Photo"}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-executive-darkBg/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  {data.name && (
                    <div className="text-white font-playfair font-bold text-lg">{data.name}</div>
                  )}
                  {data.title && (
                    <div className="text-executive-gold text-sm">{data.title}</div>
                  )}
                </div>
              </div>
            ) : (
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800 mx-auto mb-3 flex items-center justify-center">
                    <UserRound className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Profile image not set.<br/>Upload one in Sanity Studio.</p>
                </div>
              </div>
            )}

            {/* Education */}
            {education.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                <h3 className="font-playfair type-card-title text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-executive-gold" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                      className="border-l-2 border-executive-gold pl-4 py-1"
                    >
                      <div className="font-bold text-gray-900 dark:text-white text-sm">{edu.degree}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">{edu.school}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                <h3 className="font-playfair type-card-title text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                  <Award className="w-5 h-5 text-executive-gold" />
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

