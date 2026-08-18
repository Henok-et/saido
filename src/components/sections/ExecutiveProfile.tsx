import Image from "next/image";
import { AnimatedSection } from "../ui/AnimatedSection";
import { CheckCircle2, GraduationCap, FileText, Download, Award, UserRound } from "lucide-react";
import { PortableText } from "@portabletext/react";

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
        <div className="mb-16 max-w-xl">
          <span className="section-label after-label block">Executive Profile</span>
          <h2 className="font-playfair type-section text-gray-900 dark:text-white">
            {data?.name ? `About ${data.name}` : "Executive Profile"}
          </h2>
          {data?.title && (
            <p className="mt-3 text-[color:var(--gold-ink)] dark:text-executive-gold font-semibold type-lead measure-tight">{data.title}</p>
          )}
          <div className="before-title h-[3px] w-20 bg-executive-gold rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16">

          {/* ── Biography column ──────────────────────── */}
          <div className="lg:col-span-7 space-y-6">

            {data?.bio ? (
              <div className="prose dark:prose-invert max-w-none measure text-gray-700 dark:text-gray-300 type-lead space-y-5">
                <PortableText value={data.bio} />
              </div>
            ) : (
              <div className="space-y-5 measure text-gray-700 dark:text-gray-300 type-lead">
                <p className="italic text-gray-400 dark:text-gray-500">
                  Biography not yet available. Add content in Sanity Studio under <strong>Executive Profile → Biography</strong>.
                </p>
              </div>
            )}

            {/* Expertise tags */}
            {expertise.length > 0 && (
              <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
                <h3 className="font-playfair type-card-title text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-executive-gold" />
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-executive-blue/6 text-executive-blue dark:bg-executive-gold/10 dark:text-executive-gold border border-executive-blue/12 dark:border-executive-gold/20 hover:bg-executive-blue/10 dark:hover:bg-executive-gold/15 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CV download */}
            {data?.cvUrl && (
              <a
                href={data.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-6 px-6 py-3.5 bg-executive-blue text-white font-semibold rounded-xl hover:bg-executive-blue/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                Download Full CV / Biography
              </a>
            )}
          </div>

          {/* ── Sidebar ───────────────────────────────── */}
          <div className="lg:col-span-5 space-y-6">

            {/* Photo */}
            {data?.headshotUrl ? (
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 group">
                <Image
                  src={data.headshotUrl}
                  alt={data.name || "Executive Profile Photo"}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-executive-darkBg/60 via-transparent to-transparent" />
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
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 dark:border-gray-700 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center p-6">
                  <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-800 mx-auto mb-3 flex items-center justify-center">
                    <UserRound className="w-9 h-9 text-gray-400" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-gray-400 dark:text-gray-500">Profile image not set.<br/>Upload one in Sanity Studio.</p>
                </div>
              </div>
            )}

            {/* Education */}
            {education.length > 0 && (
              <div className="executive-card rounded-2xl p-7">
                <h3 className="font-playfair type-card-title text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-executive-gold" />
                  Education
                </h3>
                <div className="space-y-5">
                  {education.map((edu, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-executive-gold flex-shrink-0" />
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white text-sm">{edu.degree}</div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{edu.school}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
              <div className="executive-card rounded-2xl p-7">
                <h3 className="font-playfair type-card-title text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-executive-gold" />
                  Professional Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2.5 border-b border-gray-100 dark:border-gray-800 last:border-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-executive-gold flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
