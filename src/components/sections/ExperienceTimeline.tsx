import { AnimatedSection } from "../ui/AnimatedSection";
import { motion } from "framer-motion";

interface ExperienceItem {
  _id: string;
  position: string;
  organization: string;
  startDate?: string;
  endDate?: string;
  isCurrent?: boolean;
  description?: string;
  achievements?: string[];
}

const FALLBACK_EXPERIENCES: ExperienceItem[] = [
  {
    _id: "1",
    position: "Director, Education, Science, Technology and Innovation (ESTI)",
    organization: "African Union Commission",
    isCurrent: true,
    description: "Providing strategic leadership for continental initiatives that advance education, research, innovation, skills development, and scientific cooperation across all 55 AU member states.",
    achievements: [
      "Education Policy & STEM Advancement",
      "Science & Research Strategy",
      "Technology & Innovation Frameworks",
      "Skills Development Programmes",
      "Continental Research Cooperation",
      "GMES & Africa Programme Oversight",
    ],
  },
  {
    _id: "2",
    position: "Director",
    organization: "École Normale Supérieure (ENS), Abdou Moumouni University",
    isCurrent: false,
    description: "Led institutional transformation focused on educational quality, academic excellence, and teacher training modernization for over six years.",
    achievements: [
      "Implemented PRAQUE-AO: Regional Programme for Quality Education in West Africa",
      "Established CEA/IEA-MS4SSA: African Centre of Excellence in Mathematics & Science",
      "Led reforms of Bachelor's and Master's degree programmes",
      "Chaired Scientific and Teaching Council of ESCEP",
      "Strengthened quality assurance and teacher education systems",
    ],
  },
  {
    _id: "3",
    position: "Deputy Director",
    organization: "École Normale Supérieure (ENS), Abdou Moumouni University",
    isCurrent: false,
    description: "Supported institutional governance, academic planning, and operational management under the Director.",
    achievements: [],
  },
  {
    _id: "4",
    position: "Director, Laboratory of Energetics, Electronics & Automation",
    organization: "Abdou Moumouni University – Niger",
    startDate: "2014",
    isCurrent: true,
    description: "Leading multidisciplinary research in Energetics, Electrical Engineering, and Industrial Computing since 2014.",
    achievements: [],
  },
];

export function ExperienceTimeline({ data }: { data?: ExperienceItem[] }) {
  const experiences = data && data.length > 0 ? data : FALLBACK_EXPERIENCES;

  const formatPeriod = (exp: ExperienceItem) => {
    if (exp.isCurrent) return exp.startDate ? `${exp.startDate} – Present` : "Present";
    if (exp.startDate && exp.endDate) return `${exp.startDate} – ${exp.endDate}`;
    return "Previous";
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

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-executive-gold/60 via-executive-gold/30 to-transparent -translate-x-1/2" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={exp._id} className={`relative mb-12 md:mb-16 flex md:items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>

                {/* Card */}
                <div className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? "md:mr-10" : "md:ml-10"}`}>
                  <div className="group bg-white dark:bg-executive-darkBg rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-executive-gold/30 dark:hover:border-executive-gold/30 transition-all duration-300 hover:-translate-y-1">

                    {/* Period badge */}
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className={`w-2 h-2 rounded-full ${exp.isCurrent ? "bg-executive-gold animate-pulse-gold" : "bg-gray-400"}`} />
                      <span className="text-xs font-bold tracking-wider text-executive-gold uppercase">
                        {formatPeriod(exp)}
                      </span>
                      {exp.isCurrent && (
                        <span className="text-[10px] font-semibold text-white bg-executive-gold rounded-full px-2 py-0.5">Current</span>
                      )}
                    </div>

                    <h3 className="font-playfair font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-1 leading-snug group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                      {exp.position}
                    </h3>
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">{exp.organization}</div>

                    {exp.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{exp.description}</p>
                    )}

                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="space-y-2">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-executive-gold mt-2 flex-shrink-0" />
                            {a}
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
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
