import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";

export function InitiativesSection() {
  const initiatives = [
    {
      id: 1,
      title: "Quality Education Reform",
      category: "Education Policy",
      summary: "Implementation of PRAQUE-AO to strengthen educational quality and institutional performance across West Africa.",
      image: "/placeholder/initiative-1.jpg",
      slug: "quality-education-reform"
    },
    {
      id: 2,
      title: "Centre of Excellence Development",
      category: "STEM Education",
      summary: "Establishment of CEA/IEA-MS4SSA to advance mathematics and science teaching and learning throughout Sub-Saharan Africa.",
      image: "/placeholder/initiative-2.jpg",
      slug: "centre-of-excellence"
    },
    {
      id: 3,
      title: "Higher Education Transformation",
      category: "Academic Reform",
      summary: "Modernization and reform of undergraduate and graduate academic programmes to align with evolving educational and workforce needs.",
      image: "/placeholder/initiative-3.jpg",
      slug: "higher-education-transformation"
    },
    {
      id: 4,
      title: "Research Capacity Building",
      category: "Scientific Innovation",
      summary: "Development of research ecosystems, doctoral supervision, and scientific collaboration networks across Africa.",
      image: "/placeholder/initiative-4.jpg",
      slug: "research-capacity-building"
    }
  ];

  return (
    <AnimatedSection id="initiatives" className="section-padding bg-gray-50 dark:bg-executive-darkSurface border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-executive-gold uppercase mb-2">Global Impact</h2>
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 dark:text-white">Strategic Initiatives</h3>
          </div>
          <Link href="/initiatives" className="hidden md:inline-flex items-center text-executive-blue dark:text-executive-gold font-medium hover:underline mt-4 md:mt-0">
            View All Initiatives <ArrowUpRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative) => (
            <div key={initiative.id} className="executive-card overflow-hidden group flex flex-col">
              <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-executive-blue/10 dark:bg-executive-blue/20" style={{ backgroundImage: 'radial-gradient(#C9A227 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-executive-gold mb-3 block">
                  {initiative.category}
                </span>
                <h4 className="text-xl font-playfair font-bold text-gray-900 dark:text-white mb-3 group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                  {initiative.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">
                  {initiative.summary}
                </p>
                <Link 
                  href={`/initiatives/${initiative.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-executive-blue dark:text-white group-hover:text-executive-gold transition-colors mt-auto"
                >
                  Read Case Study <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/initiatives" className="inline-flex items-center text-executive-blue dark:text-executive-gold font-medium hover:underline">
            View All Initiatives <ArrowUpRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

      </div>
    </AnimatedSection>
  );
}
