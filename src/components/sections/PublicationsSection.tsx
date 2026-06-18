import { AnimatedSection } from "../ui/AnimatedSection";
import { FileText, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

export function PublicationsSection() {
  const publications = [
    {
      id: 1,
      title: "The Future of Digital Trade in Sub-Saharan Africa",
      type: "White Paper",
      journal: "Global Economic Review",
      date: "October 2023",
      abstract: "An analysis of how mobile money infrastructure and cross-border data frameworks are accelerating intra-African trade.",
    },
    {
      id: 2,
      title: "Climate Finance: Bridging the Gap in Emerging Markets",
      type: "Policy Brief",
      journal: "UN Development Programme",
      date: "March 2022",
      abstract: "Policy recommendations for increasing private sector participation in climate-resilient infrastructure funding.",
    },
    {
      id: 3,
      title: "Governance in the Age of AI",
      type: "Research Paper",
      journal: "Oxford Policy Institute",
      date: "November 2021",
      abstract: "Examining the regulatory challenges and opportunities presented by artificial intelligence in public sector administration.",
    }
  ];

  return (
    <AnimatedSection id="publications" className="section-padding bg-gray-50 dark:bg-executive-darkSurface border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-executive-gold uppercase mb-2">Thought Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 dark:text-white">Selected Publications</h3>
          </div>
          <Link href="/publications" className="hidden md:inline-flex items-center text-executive-blue dark:text-executive-gold font-medium hover:underline mt-4 md:mt-0">
            View All Publications <ExternalLink className="ml-1 w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-6">
          {publications.map((pub) => (
            <div key={pub.id} className="executive-card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-executive-blue text-white dark:bg-executive-gold dark:text-executive-darkBg">
                    {pub.type}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{pub.date}</span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                  {pub.title}
                </h4>
                
                <p className="text-sm font-medium text-executive-gold mb-3">
                  Published in: {pub.journal}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                  {pub.abstract}
                </p>
              </div>

              <div className="flex flex-row md:flex-col gap-3 shrink-0">
                <a href="#" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-sm text-white bg-executive-blue hover:bg-executive-blue/90 transition-colors w-full md:w-auto">
                  <Download className="mr-2 h-4 w-4" /> PDF
                </a>
                <a href="#" className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors w-full md:w-auto">
                  <FileText className="mr-2 h-4 w-4" /> Citation
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
