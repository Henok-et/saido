import { AnimatedSection } from "../ui/AnimatedSection";
import { Trophy } from "lucide-react";

interface AwardItem {
  _id: string;
  title: string;
  organization: string;
  year?: string;
  description?: string;
}

export function AwardsSection({ data }: { data?: AwardItem[] }) {
  const awards = data && data.length > 0 ? data : [
    {
      _id: "1",
      title: "Officer of the Order of Academic Palms of Niger",
      organization: "Republic of Niger",
      year: "",
      description: "Recognized for outstanding contributions to higher education, scientific research, and academic leadership.",
    },
    {
      _id: "2",
      title: "Knight of the International Order of Academic Palms of CAMES",
      organization: "African and Malagasy Council for Higher Education (CAMES)",
      year: "",
      description: "Awarded in recognition of significant contributions to academic excellence and higher education development across Africa.",
    }
  ];

  return (
    <AnimatedSection id="awards" className="section-padding bg-white dark:bg-executive-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-executive-gold uppercase mb-2">Recognition</h2>
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 dark:text-white">Awards & Honors</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award) => (
            <div key={award._id} className="executive-card p-6 flex items-start space-x-4 group hover:border-executive-gold transition-colors">
              <div className="flex-shrink-0 p-3 bg-gray-50 dark:bg-executive-darkSurface rounded-full group-hover:bg-executive-blue group-hover:text-white dark:group-hover:text-executive-gold transition-colors">
                <Trophy className="w-6 h-6 text-executive-gold group-hover:text-white dark:group-hover:text-executive-gold" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{award.title}</h4>
                <div className="flex items-center text-sm font-medium text-executive-blue dark:text-gray-400 mb-2">
                  <span>{award.organization}</span>
                  {award.year && (
                    <>
                      <span className="mx-2">&middot;</span>
                      <span>{award.year}</span>
                    </>
                  )}
                </div>
                {award.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {award.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
