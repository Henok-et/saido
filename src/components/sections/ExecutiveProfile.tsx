import Image from "next/image";
import { AnimatedSection } from "../ui/AnimatedSection";
import { CheckCircle2, GraduationCap, FileText } from "lucide-react";
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
}

export function ExecutiveProfile({ data }: { data?: ProfileData }) {
  const defaultExpertise = [
    "Higher Education Leadership",
    "Education Policy & Reform",
    "Science, Technology & Innovation Strategy",
    "Physics Research",
    "Scientific Capacity Building",
    "Institutional Transformation",
    "Curriculum Development",
    "STEM Education",
    "Research Management",
    "Continental Academic Cooperation",
  ];

  const expertise = data?.expertise || defaultExpertise;

  const education = [
    { degree: "Ph.D. in Physics", school: "Université Toulouse III – France", year: "" },
    { degree: "Master's Degree in Educational Sciences", school: "Université Strasbourg I – France", year: "" },
    { degree: "Postgraduate Doctorate", school: "Cheikh Anta Diop University – Dakar, Senegal", year: "" },
  ];

  const certifications = [
    { cert: "Results-Based Project Planning" },
    { cert: "Programme Management" },
    { cert: "Strategic Institutional Development" },
    { cert: "Leadership Journey" },
  ];

  return (
    <AnimatedSection id="profile" className="section-padding bg-gray-50 dark:bg-executive-darkSurface border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-sm font-bold tracking-widest text-executive-gold uppercase mb-2">Executive Profile</h2>
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 dark:text-white">
            {data?.name ? `About ${data.name}` : "Professional Biography"}
          </h3>
          {data?.title && (
            <p className="text-executive-blue dark:text-executive-gold font-medium mt-2">
              {data.title}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Biography Text */}
          <div className="lg:col-span-7 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            {data?.bio ? (
              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
                <PortableText value={data.bio} />
              </div>
            ) : (
              <>
                <p>
                  Professor Madougou Saidou is a Full Professor of Physics at Abdou Moumouni University in Niger and a distinguished leader in higher education, research, and scientific governance. Throughout a career spanning more than twenty years, he has successfully combined academic scholarship with executive leadership, shaping educational institutions, research programs, and policy frameworks at national, regional, and continental levels.
                </p>
                <p>
                  Prior to joining the African Union, Prof. Saidou served as Director of the Ecole Normale Supérieure (ENS) at Abdou Moumouni University for over six years after previously serving as Deputy Director. During his tenure, he spearheaded transformative initiatives focused on improving educational quality, institutional effectiveness, and teacher training excellence.
                </p>
                <p>
                  His leadership led to the implementation of the Regional Support Programme for Quality Education in West Africa (PRAQUE-AO) and the establishment of the African Center of Excellence for Innovative Teaching and Learning in Mathematics and Science for Sub-Saharan Africa (CEA/IEA-MS4SSA). He also guided major curriculum reforms at Bachelor's and Master's degree levels, strengthening the institution's academic competitiveness and regional impact.
                </p>
                <p>
                  Professor Madougou's international leadership extends beyond national institutions. He served on the Mathematics-Physics-Chemistry Specialized Technical Committee of the African and Malagasy Council for Higher Education (CAMES) and was appointed General Rapporteur from 2021 to 2023, contributing to the advancement of academic standards and scientific excellence across the continent.
                </p>
                <p>
                  A respected researcher and mentor, Prof. Saidou directs the Laboratory of Energetics, Electronics, Electrical Engineering, Automation and Industrial Computing and has contributed extensively to scientific knowledge through publications, books, conference presentations, and doctoral supervision.
                </p>
              </>
            )}

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-8">
              <h4 className="text-xl font-playfair font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <CheckCircle2 className="w-5 h-5 text-executive-gold mr-2" />
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span key={item} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-executive-blue/5 text-executive-blue dark:bg-white/5 dark:text-gray-300 border border-executive-blue/10 dark:border-white/10">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Languages Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {data?.headshotUrl && (
              <div className="relative w-full h-80 rounded-sm overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
                <Image
                  src={data.headshotUrl}
                  alt={data.name || "Professor Madougou Saidou"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {data?.cvUrl && (
              <div className="executive-card p-6 border-2 border-dashed border-executive-gold/30 hover:border-executive-gold transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-executive-gold" />
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white">Biography / CV</h5>
                    <p className="text-xs text-gray-500">Read complete profile in PDF</p>
                  </div>
                </div>
                <a 
                  href={data.cvUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-executive-blue hover:bg-executive-blue/90 text-white font-medium text-sm rounded-sm transition-colors"
                >
                  Download
                </a>
              </div>
            )}

            <div className="executive-card p-8">
              <h4 className="text-xl font-playfair font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 text-executive-gold mr-2" />
                Education
              </h4>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-executive-gold before:rounded-full">
                    <h5 className="font-bold text-gray-900 dark:text-white">{edu.degree}</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.school} &middot; {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="executive-card p-8">
              <h4 className="text-xl font-playfair font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <CheckCircle2 className="w-5 h-5 text-executive-gold mr-2" />
                Professional Certifications
              </h4>
              <div className="space-y-4">
                {certifications.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-2 last:border-0 last:pb-0">
                    <span className="font-medium text-gray-900 dark:text-white">{item.cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
