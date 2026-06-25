import { AnimatedSection } from "../ui/AnimatedSection";
import { motion } from "framer-motion";
import { PendingContent } from "../ui/PendingContent";

interface ExperienceItem {
  _id: string;
  role: string;
  organization: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  description?: any;
  achievements?: string[];
}

export function ExperienceTimeline({ data }: { data?: ExperienceItem[] }) {
  const hasData = data && data.length > 0;

  const formatPeriod = (exp: ExperienceItem) => {
    if (exp.current) return exp.startDate ? `${exp.startDate} – Present` : "Present";
    if (exp.startDate && exp.endDate) return `${exp.startDate} – ${exp.endDate}`;
    return "Previous";
  };

  const renderDescription = (desc: any) => {
    if (!desc) return null;
    if (typeof desc === 'string') return <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{desc}</p>;
    // If it's Portable Text array, just render the text of the first block for now
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
        <div className="text-center mb-20">
          <span className="section-label mb-3 block">Leadership Journey</span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-executive-gold rounded-full mx-auto" />
        </div>

        {hasData ? (
          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-executive-gold/60 via-executive-gold/30 to-transparent -translate-x-1/2" />

            {data.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={exp._id} className={`relative mb-12 md:mb-16 flex md:items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>

                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? "md:mr-10" : "md:ml-10"}`}>
                    <div className="group bg-white dark:bg-executive-darkBg rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-executive-gold/30 dark:hover:border-executive-gold/30 transition-all duration-300 hover:-translate-y-1">

                      {/* Period badge */}
                      <div className="inline-flex items-center gap-2 mb-4">
                        <div className={`w-2 h-2 rounded-full ${exp.current ? "bg-executive-gold animate-pulse-gold" : "bg-gray-400"}`} />
                        <span className="text-xs font-bold tracking-wider text-executive-gold uppercase">
                          {formatPeriod(exp)}
                        </span>
                        {exp.current && (
                          <span className="text-[10px] font-semibold text-white bg-executive-gold rounded-full px-2 py-0.5">Current</span>
                        )}
                      </div>

                      <h3 className="font-playfair font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-1 leading-snug group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">{exp.organization}</div>

                      {renderDescription(exp.description)}
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-5 h-5 rounded-full border-2 border-executive-gold bg-white dark:bg-executive-darkBg z-10 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-executive-gold" />
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
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
