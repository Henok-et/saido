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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
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

      {/* ── Background Vignette & Gradient Overlays ─── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: imageUrl
            ? "linear-gradient(100deg, rgba(7,21,37,0.98) 0%, rgba(7,21,37,0.92) 45%, rgba(7,21,37,0.6) 75%, rgba(7,21,37,0.3) 100%)"
            : "radial-gradient(circle at 80% 20%, rgba(15,45,82,0.6) 0%, #071525 70%)"
        }}
      />

      {/* ── Subtle Dot Pattern ────────────────────────── */}
      <div className="absolute inset-0 z-[2] dot-pattern opacity-20 pointer-events-none" />

      {/* ── Main Content Container ────────────────────── */}
      <motion.div
        style={{ opacity }}
        className="relative z-[5] w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-start my-auto"
      >
        <div className="w-full max-w-3xl">

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
            className="text-gray-300 text-lg md:text-xl measure-tight leading-relaxed mb-8 font-normal"
          >
            {description}
          </motion.p>

          {/* Senior Executive Credentials Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7, ease: PREMIUM_EASE }}
            className="border-y border-white/15 py-4 mb-10 max-w-2xl flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
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


