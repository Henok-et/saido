"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PendingContent } from "../ui/PendingContent";

interface MetricItem {
  value: string;
  label: string;
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref  = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step     = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function MetricsSection({ data }: { data?: MetricItem[] }) {
  const topMetrics = data?.slice(0, 4);
  const hasData = topMetrics && topMetrics.length > 0;

  const parsed = hasData
    ? topMetrics.map(m => {
        const num    = parseInt(m.value.replace(/\D/g, ""), 10) || 0;
        const suffix = m.value.replace(/[0-9]/g, "").trim();
        return { ...m, num, suffix };
      })
    : [];

  return (
    <section id="metrics" className="scene relative py-20 bg-gray-50 dark:bg-executive-darkSurface border-y border-gray-200/60 dark:border-gray-800 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 dot-pattern opacity-[0.08] dark:opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="section-header section-header--center"
        >
          <span className="section-label after-label block">By the Numbers</span>
          <h2 className="font-playfair type-subsection text-gray-900 dark:text-white">
            Impact at a <span className="text-gold-ink dark:text-gradient-gold">Glance</span>
          </h2>
          <div className="before-title h-[2px] w-16 bg-executive-gold rounded-full mx-auto" />
        </motion.div>

        {hasData ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {parsed.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border-t border-gray-300 dark:border-gray-800 pt-6 pb-2"
              >
                <div className="text-4xl md:text-6xl font-playfair font-bold text-gold-ink dark:text-executive-gold mb-3 tabular-nums tracking-tight">
                  <CountUp target={metric.num} suffix={metric.suffix} />
                </div>
                <div className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-semibold uppercase tracking-wider leading-snug">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <PendingContent sectionName="Metrics" className="text-gray-900 dark:text-white [&_h3]:text-gray-900 dark:[&_h3]:text-white" />
        )}
      </div>
    </section>
  );
}
