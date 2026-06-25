import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";

export function InitiativesSection({ data }: { data?: any[] }) {
  const initiatives = data && data.length > 0 ? data : [
    {
      _id: "1",
      title: "Quality Education Reform",
      category: "Education Policy",
      summary: "Implementation of PRAQUE-AO to strengthen educational quality and institutional performance across West Africa.",
      imageUrl: "/placeholder/initiative-1.jpg",
      slug: "quality-education-reform"
    },
    {
      _id: "2",
      title: "Centre of Excellence Development",
      category: "STEM Education",
      summary: "Establishment of CEA/IEA-MS4SSA to advance mathematics and science teaching and learning throughout Sub-Saharan Africa.",
      imageUrl: "/placeholder/initiative-2.jpg",
      slug: "centre-of-excellence"
    },
    {
      _id: "3",
      title: "Higher Education Transformation",
      category: "Academic Reform",
      summary: "Modernization and reform of undergraduate and graduate academic programmes to align with evolving educational and workforce needs.",
      imageUrl: "/placeholder/initiative-3.jpg",
      slug: "higher-education-transformation"
    },
    {
      _id: "4",
      title: "Research Capacity Building",
      category: "Scientific Innovation",
      summary: "Development of research ecosystems, doctoral supervision, and scientific collaboration networks across Africa.",
      imageUrl: "/placeholder/initiative-4.jpg",
      slug: "research-capacity-building"
    }
  ];

  return (
    <AnimatedSection id="initiatives" className="section-padding bg-white dark:bg-executive-darkBg border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="section-label mb-3 block">Global Impact</span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Strategic Initiatives
            </h2>
             <div className="h-[2px] w-16 bg-executive-gold rounded-full" />
          </div>
          <Link href="/initiatives" className="hidden md:inline-flex items-center text-executive-blue dark:text-executive-gold font-bold hover:underline transition-all">
            View All Initiatives <ArrowUpRight className="ml-1.5 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {initiatives.map((initiative: any, idx: number) => (
            <div key={initiative._id} className="executive-card overflow-hidden group flex flex-col sm:flex-row hover:shadow-xl hover:border-executive-gold/40 transition-all duration-300">
              <div 
                className="relative h-48 sm:h-auto sm:w-2/5 bg-gray-100 dark:bg-gray-800/50 overflow-hidden"
                style={initiative.imageUrl ? { backgroundImage: `url(${initiative.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
              >
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-tr from-executive-blue/10 to-transparent" />
                {/* Simulated Image Hover scale */}
                <div className="absolute inset-0 bg-executive-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col bg-white dark:bg-executive-darkSurface">
                <span className="text-xs font-bold uppercase tracking-wider text-executive-gold mb-3 block">
                  {initiative.category}
                </span>
                <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                  {initiative.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                  {initiative.summary}
                </p>
                <Link 
                  href={`/initiatives/${initiative.slug}`}
                  className="inline-flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-executive-gold transition-colors mt-auto w-fit"
                >
                  Read Case Study <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/initiatives" className="inline-flex items-center text-executive-blue dark:text-executive-gold font-bold hover:underline">
            View All Initiatives <ArrowUpRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

      </div>
    </AnimatedSection>
  );
}
