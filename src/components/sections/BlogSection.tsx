"use client";

import { motion } from "framer-motion";
import { AnimatedSection, PREMIUM_EASE } from "../ui/AnimatedSection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function BlogSection({ data }: { data?: any[] }) {
  if (!data || data.length === 0) {
    return null;
  }
  const posts = data;

  return (
    <AnimatedSection id="blog" className="section-padding bg-white dark:bg-executive-darkBg relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-executive-blue/5 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="section-label after-label block">Thought Leadership</span>
            <h2 className="font-playfair type-subsection text-gray-900 dark:text-white after-title">
              Insights
            </h2>
            <div className="h-[2px] w-16 bg-executive-gold rounded-full" />
          </div>
          <Link href="/blog" className="hidden md:inline-flex items-center text-executive-blue dark:text-executive-gold font-bold hover:underline transition-all">
            View All Articles <ArrowUpRight className="ml-1.5 w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post: any, idx: number) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.6, ease: PREMIUM_EASE, delay: idx * 0.1 }}
              className="border-t border-gray-300 dark:border-gray-800 pt-6 pb-2 flex flex-col group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-ink dark:text-executive-gold">
                  {post.category}
                </span>
                <span className="text-xs font-medium text-gray-400">
                  {post.readTime || "5 min read"}
                </span>
              </div>
              
              <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors line-clamp-3">
                <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}
                </span>
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white group-hover:text-gold-ink transition-colors">
                  Read Article <ArrowUpRight className="ml-1 w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </motion.article>
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

