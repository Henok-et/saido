import { AnimatedSection } from "../ui/AnimatedSection";
import { BookOpen, FileText, Globe, Users, Award, FlaskConical } from "lucide-react";
import { PendingContent } from "../ui/PendingContent";

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
  const impacts = data?.impacts;
  const hasData = impacts && impacts.length > 0;

  return (
    <AnimatedSection id="research" className="section-padding bg-white dark:bg-executive-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-executive-gold uppercase mb-2">Academic Impact</h2>
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 dark:text-white">
            {data?.sectionTitle || "Research & Academic Impact"}
          </h3>
        </div>

        {hasData ? (
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
        ) : (
          <PendingContent sectionName="Research & Academic Impact" />
        )}

      </div>
    </AnimatedSection>
  );
}
