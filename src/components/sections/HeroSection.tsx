"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowRight, FileText, Globe, GraduationCap, Building2 } from "lucide-react";
import { PREMIUM_EASE } from "@/components/ui/AnimatedSection";

interface HeroData {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  cvUrl?: string;
  biographyUrl?: string;
}

export function HeroSection({ data }: { data?: HeroData }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const title = data?.title || "Prof. Saidou Madougou";
  const subtitle = data?.subtitle || "Strategic Leadership in Education, Science, Technology & Innovation";
  const description = data?.description || "Advancing Africa's knowledge systems through continental leadership, scientific excellence, and two decades of transformative academic governance.";
  const imageUrl = data?.imageUrl;
  const cvUrl = data?.cvUrl || "#profile";

  const parts = title.split(" ");
  const firstPart = parts.slice(0, -1).join(" ") || parts[0];
  const lastPart = parts.length > 1 ? parts[parts.length - 1] : "";

  // Senior executive key credentials
  const executiveTitles = [
    { icon: Building2, text: "Former Minister of Higher Education & Research" },
    { icon: Globe, text: "African Union STI Policy Advisory" },
    { icon: GraduationCap, text: "Professor of Physics & Renewable Energy" },
  ];

  return (
    <section
      ref={ref}
      id="hero"
      className="scene relative min-h-screen flex items-center overflow-hidden bg-executive-darkBg"
    >
      {/* ── Ambient background gradient (no full-bleed image) ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 75% 40%, rgba(15,45,82,0.45) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(201,162,39,0.06) 0%, transparent 50%), #071525",
        }}
      />

      {/* ── Subtle Dot Pattern ────────────────────────── */}
      <div className="absolute inset-0 z-[1] dot-pattern opacity-20 pointer-events-none" />

      {/* ── Two-Column Layout ─────────────────────────── */}
      <motion.div
        style={{ opacity }}
        className="relative z-[5] w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text Content ─────────────────────── */}
          <div className="max-w-xl lg:max-w-none order-2 lg:order-1">

            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: PREMIUM_EASE }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="section-label section-label-on-dark tracking-[0.2em] font-semibold text-xs sm:text-sm">
                {subtitle}
              </span>
            </motion.div>

            {/* Name — Single Accessible h1 with staggered spans */}
            <h1 className="font-playfair type-display mb-6 tracking-tight">
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 1.0, ease: PREMIUM_EASE }}
                  className="block text-white font-bold"
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
                    className="block text-executive-gold font-bold"
                  >
                    {lastPart}
                  </motion.span>
                </span>
              )}
            </h1>

            {/* Elegant Gold Accent Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.65, duration: 0.9, ease: PREMIUM_EASE }}
              className="h-[2px] w-28 bg-executive-gold origin-left mb-6"
            />

            {/* Lead Narrative Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7, ease: PREMIUM_EASE }}
              className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 font-normal"
            >
              {description}
            </motion.p>

            {/* Senior Executive Credentials Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7, ease: PREMIUM_EASE }}
              className="border-y border-white/15 py-4 mb-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
            >
              {executiveTitles.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-executive-gold flex-shrink-0" />
                    <span className="text-gray-200 text-xs sm:text-sm font-medium tracking-wide">
                      {item.text}
                    </span>
                    {idx < executiveTitles.length - 1 && (
                      <span className="hidden sm:inline text-gray-600 ml-3">•</span>
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7, ease: PREMIUM_EASE }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#profile"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-executive-gold text-executive-darkBg font-bold text-sm rounded-sm hover:bg-[#dbb84a] transition-all duration-300 ease-premium hover:shadow-[0_0_20px_rgba(201,162,39,0.3)] hover:-translate-y-0.5"
              >
                <span>View Full Profile</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-sm hover:border-executive-gold hover:text-executive-gold transition-all duration-300 ease-premium hover:-translate-y-0.5"
              >
                <span>Get in Touch</span>
              </a>

              {cvUrl && cvUrl !== "#profile" && (
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-gray-300 hover:text-executive-gold text-sm font-medium transition-colors duration-300"
                >
                  <FileText className="w-4 h-4 text-executive-gold" />
                  <span>Curriculum Vitae</span>
                </a>
              )}
            </motion.div>

          </div>

          {/* ── RIGHT: Portrait Image ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1.0, ease: PREMIUM_EASE }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {imageUrl ? (
              <div className="relative w-[320px] sm:w-[400px] lg:w-full lg:max-w-[520px]">
                {/* Decorative gold corner accent */}
                <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-executive-gold/40 z-10 pointer-events-none" />
                <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-executive-gold/40 z-10 pointer-events-none" />

                {/* Image container with editorial crop */}
                <div
                  className="relative aspect-[3/4] overflow-hidden bg-gray-800"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 92%, 88% 100%, 0 100%)",
                  }}
                >
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    priority
                    className="object-cover object-top"
                    style={{ transform: "scaleX(-1)" }}
                  />
                  {/* Subtle overlay gradient from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-executive-darkBg/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Name plate accent under image */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6, ease: PREMIUM_EASE }}
                  className="mt-4 flex items-center gap-3"
                >
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-executive-gold/60 to-transparent" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-medium whitespace-nowrap">
                    Republic of Niger
                  </span>
                </motion.div>
              </div>
            ) : (
              /* Placeholder when no image is provided */
              <div className="relative w-[320px] sm:w-[400px] lg:w-full lg:max-w-[520px] aspect-[3/4] bg-gray-800/40 border border-gray-700/50 flex items-center justify-center">
                <span className="text-gray-600 text-sm tracking-wider uppercase">Portrait</span>
              </div>
            )}
          </motion.div>

        </div>
      </motion.div>

      {/* ── Scroll Indicator ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-gray-500 text-[10px] tracking-[0.25em] uppercase font-medium">
          Scroll
        </span>
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



