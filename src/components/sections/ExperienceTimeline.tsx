import { AnimatedSection } from "../ui/AnimatedSection";

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
    description: "Providing strategic leadership for continental initiatives that advance education, research, innovation, skills development, and scientific cooperation across Africa.",
    achievements: [
      "Education Policy & STEM Advancement",
      "Science & Research",
      "Technology & Innovation",
      "Skills Development",
      "Continental Research Cooperation",
      "GMES & Africa Programme Oversight",
    ],
  },
  {
    _id: "2",
    position: "Director",
    organization: "Ecole Normale Supérieure (ENS), Abdou Moumouni University",
    isCurrent: false,
    description: "Led institutional transformation initiatives focused on educational quality, academic excellence, and teacher training modernization.",
    achievements: [
      "Implemented the West African Regional Program for Quality Education Support (PRAQUE-AO).",
      "Established the Centre for Innovative African Excellence in Mathematics and Science Teaching and Learning for Sub-Saharan Africa (CEA/IEA-MS4SSA).",
      "Led reforms of Bachelor's and Master's degree programmes.",
      "Chaired the Scientific and Teaching Council of the École Supérieure de Communication Électronique et de la Poste.",
      "Strengthened quality assurance and teacher education systems.",
    ],
  },
  {
    _id: "3",
    position: "Deputy Director",
    organization: "Ecole Normale Supérieure (ENS), Abdou Moumouni University",
    isCurrent: false,
    description: "Supported institutional governance, academic planning, and operational management.",
    achievements: [],
  },
  {
    _id: "4",
    position: "Director",
    organization: "Laboratory of Energetics, Electronics, Electrical Engineering, Automation and Industrial Computing",
    startDate: "2014",
    isCurrent: true,
    description: "Leading multidisciplinary research initiatives since 2014, fostering innovation and scientific collaboration across engineering and physical sciences.",
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
    <AnimatedSection id="experience" className="section-padding bg-white dark:bg-executive-darkBg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold tracking-widest text-executive-gold uppercase mb-2">Leadership Journey</h2>
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 dark:text-white">Professional Experience</h3>
        </div>
        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 md:ml-0 md:border-l-0">
          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-200 dark:bg-gray-800"></div>
          {experiences.map((exp, index) => (
            <div key={exp._id} className={`relative mb-16 md:mb-24 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
              {/* Timeline Node */}
              <div className="absolute top-0 -left-[25px] md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-executive-darkBg border-4 border-executive-gold flex items-center justify-center z-10 shadow-sm">
                <div className="w-3 h-3 bg-executive-blue dark:bg-white rounded-full"></div>
              </div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 pl-8 md:pl-0" : "md:pl-16 pl-8 md:ml-auto"}`}>
                <div className="executive-card p-6 md:p-8 relative group hover:border-executive-gold/50 transition-colors">
                  <div className="text-sm font-bold text-executive-gold mb-2">{formatPeriod(exp)}</div>
                  <h4 className="text-xl font-playfair font-bold text-gray-900 dark:text-white mb-1">{exp.position}</h4>
                  <div className="text-base font-medium text-gray-600 dark:text-gray-400 mb-4">{exp.organization}</div>
                  {exp.description && (
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm md:text-base leading-relaxed">{exp.description}</p>
                  )}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className={`relative ${index % 2 === 0 ? "md:pr-6 pl-6 md:pl-0" : "pl-6"}`}>
                          <span className={`absolute top-1.5 w-1.5 h-1.5 bg-executive-blue dark:bg-executive-gold rounded-full ${index % 2 === 0 ? "left-0 md:left-auto md:right-0" : "left-0"}`}></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
