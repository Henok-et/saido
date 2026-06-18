import { AnimatedSection } from "../ui/AnimatedSection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function BlogSection() {
  const posts = [
    {
      id: 1,
      title: "The Imperative of Digital Sovereignty in the Global South",
      category: "Digital Transformation",
      date: "Nov 12, 2024",
      readTime: "6 min read",
      excerpt: "How emerging nations can balance the need for foreign technological investment with the requirement to protect critical citizen data and build local capacity.",
      slug: "digital-sovereignty"
    },
    {
      id: 2,
      title: "Rethinking the Role of Multilateral Development Banks",
      category: "Governance",
      date: "Oct 28, 2024",
      readTime: "8 min read",
      excerpt: "A critical look at current funding models and proposed reforms to accelerate capital deployment for climate adaptation projects.",
      slug: "rethinking-mdbs"
    },
    {
      id: 3,
      title: "Empowering the Next Generation of Policy Leaders",
      category: "Leadership",
      date: "Sep 15, 2024",
      readTime: "5 min read",
      excerpt: "Lessons learned from establishing youth advisory councils across the African continent and integrating their voices into national planning.",
      slug: "empowering-policy-leaders"
    }
  ];

  return (
    <AnimatedSection id="blog" className="section-padding bg-gray-50 dark:bg-executive-darkSurface border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-executive-gold uppercase mb-2">Insights</h2>
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 dark:text-white">Latest Articles</h3>
          </div>
          <Link href="/blog" className="hidden md:inline-flex items-center text-executive-blue dark:text-executive-gold font-medium hover:underline mt-4 md:mt-0">
            View All Articles <ArrowUpRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="executive-card p-6 flex flex-col group hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-executive-gold">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {post.readTime}
                </span>
              </div>
              
              <h4 className="text-xl font-playfair font-bold text-gray-900 dark:text-white mb-3 group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h4>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">{post.date}</span>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-executive-blue dark:text-white group-hover:text-executive-gold transition-colors"
                >
                  Read Article <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>



      </div>
    </AnimatedSection>
  );
}
