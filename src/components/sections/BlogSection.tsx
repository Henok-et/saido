import { AnimatedSection } from "../ui/AnimatedSection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function BlogSection({ data }: { data?: any[] }) {
  const posts = data && data.length > 0 ? data : [
    {
      _id: "1",
      title: "The Imperative of Digital Sovereignty in the Global South",
      category: "Digital Transformation",
      publishedAt: "Nov 12, 2024",
      readTime: "6 min read",
      excerpt: "How emerging nations can balance the need for foreign technological investment with the requirement to protect critical citizen data and build local capacity.",
      slug: "digital-sovereignty"
    },
    {
      _id: "2",
      title: "Rethinking the Role of Multilateral Development Banks",
      category: "Governance",
      publishedAt: "Oct 28, 2024",
      readTime: "8 min read",
      excerpt: "A critical look at current funding models and proposed reforms to accelerate capital deployment for climate adaptation projects.",
      slug: "rethinking-mdbs"
    },
    {
      _id: "3",
      title: "Empowering the Next Generation of Policy Leaders",
      category: "Leadership",
      publishedAt: "Sep 15, 2024",
      readTime: "5 min read",
      excerpt: "Lessons learned from establishing youth advisory councils across the African continent and integrating their voices into national planning.",
      slug: "empowering-policy-leaders"
    }
  ];

  return (
    <AnimatedSection id="blog" className="section-padding bg-gray-50 dark:bg-executive-darkSurface relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-executive-blue/5 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="section-label mb-3 block">Insights</span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Latest Articles
            </h2>
            <div className="h-[2px] w-16 bg-executive-gold rounded-full" />
          </div>
          <Link href="/blog" className="hidden md:inline-flex items-center text-executive-blue dark:text-executive-gold font-bold hover:underline transition-all">
            View All Articles <ArrowUpRight className="ml-1.5 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <article key={post._id} className="executive-card p-8 flex flex-col group hover:border-executive-gold/40 hover:shadow-xl transition-all duration-300 bg-white dark:bg-executive-darkBg">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-executive-gold bg-executive-gold/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs font-medium text-gray-400">
                  {post.readTime || "5 min read"}
                </span>
              </div>
              
              <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors line-clamp-3">
                <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                   <span className="absolute inset-0" aria-hidden="true" />
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 flex-1 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100 dark:border-gray-800">
                <span className="text-sm font-bold text-gray-900 dark:text-gray-300">
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}
                </span>
                <span className="inline-flex items-center text-sm font-bold text-executive-blue dark:text-white group-hover:text-executive-gold transition-colors">
                  Read Article <ArrowUpRight className="ml-1 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/blog" className="inline-flex items-center text-executive-blue dark:text-executive-gold font-bold hover:underline">
            View All Articles <ArrowUpRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

      </div>
    </AnimatedSection>
  );
}
