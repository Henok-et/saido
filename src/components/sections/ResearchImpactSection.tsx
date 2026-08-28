"use client";

import { motion } from "framer-motion";
import { AnimatedSection, PREMIUM_EASE } from "../ui/AnimatedSection";
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

function ImpactGrid({ items }: { items: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {items.map((impact: any, idx: number) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: PREMIUM_EASE, delay: idx * 0.08 }}
          className="border-t border-gray-300 dark:border-gray-800 pt-6 pb-2 group"
        >
          <div className="mb-3 text-gold-ink dark:text-executive-gold">
            {getIcon(impact.iconName)}
          </div>
          <h4 className="text-xl font-playfair font-bold text-gray-900 dark:text-white mb-2 group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
            {impact.title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {impact.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export function ResearchImpactSection({ data }: { data?: any }) {
  const impacts = data?.impacts;
  const hasData = impacts && impacts.length > 0;
  const isGrouped = hasData && impacts.some((i: any) => i.category);
  const researchAreas = isGrouped ? impacts.filter((i: any) => i.category === 'Research Area') : [];
  const impactAreas = isGrouped ? impacts.filter((i: any) => i.category !== 'Research Area') : [];

  return (
    <AnimatedSection id="research" className="section-padding bg-white dark:bg-executive-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="section-header section-header--center"
        >
          <span className="section-label after-label block">Academic Impact</span>
          <h2 className="font-playfair type-section text-gray-900 dark:text-white">
            {data?.sectionTitle || "Research & Impact"}
          </h2>
          {data?.sectionDescription && (
            <p className="text-gray-500 dark:text-gray-400 type-lead measure-tight mt-4 mx-auto text-center">
              {data.sectionDescription}
            </p>
          )}
        </motion.div>

        {hasData ? (
          isGrouped ? (
            <div className="space-y-14">
              {researchAreas.length > 0 && (
                <div>
                  <h3 className="font-playfair type-card-title text-gray-900 dark:text-white mb-6">Research Areas</h3>
                  <ImpactGrid items={researchAreas} />
                </div>
              )}
              {impactAreas.length > 0 && (
                <div>
                  <h3 className="font-playfair type-card-title text-gray-900 dark:text-white mb-6">Impact Areas</h3>
                  <ImpactGrid items={impactAreas} />
                </div>
              )}
            </div>
          ) : (
            <ImpactGrid items={impacts} />
          )
        ) : (
          <PendingContent sectionName="Research & Impact" />
        )}

      </div>
    </AnimatedSection>
  );
}

