import { AnimatedSection } from "../ui/AnimatedSection";
import { BookOpen, FileText, Globe, Users, Award, FlaskConical } from "lucide-react";

// Helper to render icon based on string name
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileText': return <FileText className="w-6 h-6" />;
    case 'BookOpen': return <BookOpen className="w-6 h-6" />;
    case 'Globe': return <Globe className="w-6 h-6" />;
    case 'Users': return <Users className="w-6 h-6" />;
    case 'Award': return <Award className="w-6 h-6" />;
    case 'FlaskConical': return <FlaskConical className="w-6 h-6" />;
    default: return <FileText className="w-6 h-6" />;
  }
};

export function ResearchImpactSection({ data }: { data?: any }) {
  const impacts = data?.impacts || [
    {
      iconName: "FileText",
      title: "50+ Scientific Articles",
      description: "Published peer-reviewed scientific articles in Physics and Education Sciences.",
    },
    {
      iconName: "BookOpen",
      title: "Academic Authorship",
      description: "Author and co-author of academic books and scholarly publications.",
    },
    {
      iconName: "Globe",
      title: "40+ International Conferences",
      description: "Participated in international conferences, symposia, and scientific workshops.",
    },
    {
      iconName: "Users",
      title: "Doctoral Supervision",
      description: "Supervised numerous doctoral candidates in Physics.",
    },
    {
      iconName: "Award",
      title: "30+ PhD Juries",
      description: "Served on PhD examination juries across Niger, Senegal, Benin, and Burkina Faso.",
    },
    {
      iconName: "FlaskConical",
      title: "Multidisciplinary Research",
      description: "Leads research through the Laboratory of Energetics, Electronics, Electrical Engineering, Automation and Industrial Computing.",
    }
  ];

  return (
    <AnimatedSection id="research" className="section-padding bg-white dark:bg-executive-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-executive-gold uppercase mb-2">Academic Impact</h2>
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 dark:text-white">
            {data?.sectionTitle || "Research & Academic Impact"}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact: any, idx: number) => (
            <div key={idx} className="executive-card p-6 group hover:border-executive-gold transition-colors">
              <div className="mb-4 text-executive-blue dark:text-executive-gold bg-executive-blue/5 dark:bg-executive-gold/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIcon(impact.iconName)}
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{impact.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {impact.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
