"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Globe, BookOpen, Users } from "lucide-react";
import { PREMIUM_EASE } from "@/components/ui/AnimatedSection";

interface HeroData {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  biographyUrl?: string;
}


export function HeroSection({ data }: { data?: HeroData }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y      = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity= useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const title       = data?.title       || "Prof. Saidou Madougou";
  const subtitle    = data?.subtitle    || "Strategic Leadership in Education, Science, Technology & Innovation";
  const description = data?.description || "Advancing Africa's knowledge systems through continental leadership, scientific excellence, and two decades of transformative academic governance.";
  const imageUrl    = data?.imageUrl;

  const parts = title.split(" ");
  const firstPart = parts.slice(0, -1).join(" ") || parts[0];
  const lastPart = parts.length > 1 ? parts[parts.length - 1] : "";

  return (
    <section
      ref={ref}
      id="hero"
      className="scene relative h-screen min-h-[700px] max-h-[1100px] flex items-center overflow-hidden bg-executive-darkBg"
    >
      {/* ── Parallax Background Image ─────────────────── */}
      {imageUrl && (
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full z-0 will-change-transform">
          <Image
            src={imageUrl}
            alt={title}
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      )}

      {/* ── Gradient overlays ─────────────────────────── */}
      <div className="absolute inset-0 z-[1]" style={{
        background: imageUrl
          ? "linear-gradient(100deg, rgba(7,21,37,0.22) 0%, rgba(7,21,37,0.45) 35%, rgba(7,21,37,0.82) 58%, rgba(7,21,37,0.97) 78%, #071525 100%)"
          : "linear-gradient(135deg, #071525 0%, #0F2D52 100%)"
      }} />

      {/* ── Dot pattern ───────────────────────────────── */}
      <div className="absolute inset-0 z-[2] dot-pattern opacity-30 pointer-events-none" />



      {/* ── Main content ──────────────────────────────── */}
      <motion.div
        style={{ opacity }}
        className="relative z-[5] w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-end"
      >
        <div className="w-full max-w-2xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: PREMIUM_EASE }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="section-label section-label-on-dark">{subtitle}</span>
          </motion.div>

          {/* Name — one <h1> for the page. The two lines are spans inside it
              rather than two sibling <h1> elements (which is what this was):
              the name is the page's single top-level heading, and duplicate
              h1s give assistive tech and search engines a page with two
              competing titles. The masked slide-up reveal is unchanged — the
              overflow-hidden wrapper and per-line stagger now live on the
              spans. */}
          <h1 className="font-playfair type-display mb-8">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 1.0, ease: PREMIUM_EASE }}
                className="block text-white"
              >
                {firstPart}
              </motion.span>
            </span>
            {lastPart && (
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.45, duration: 1.0, ease: PREMIUM_EASE }}
                  className="block"
                  style={{ color: "#C9A227" }}
                >
                  {lastPart}
                </motion.span>
              </span>
            )}
          </h1>

          {/* Animated gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.75, duration: 0.9, ease: PREMIUM_EASE }}
            className="h-[2px] w-28 bg-executive-gold origin-left mb-8"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7, ease: PREMIUM_EASE }}
            className="text-gray-300 type-lead measure-tight mb-10"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: PREMIUM_EASE }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#profile"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-executive-gold text-executive-darkBg font-bold text-sm rounded-lg hover:bg-[#dbb84a] transition-all duration-300 ease-premium hover:shadow-[0_0_30px_rgba(201,162,39,0.4)] hover:-translate-y-0.5"
            >
              View Full Profile
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-lg hover:border-executive-gold hover:text-executive-gold transition-all duration-300 ease-premium hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-executive-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
