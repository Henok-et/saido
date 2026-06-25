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
  const inView = useInView(ref, { once: true, margin: "-50px" });

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
  const hasData = data && data.length > 0;

  const parsed = hasData
    ? data.map(m => {
        const num    = parseInt(m.value.replace(/\D/g, ""), 10) || 0;
        const suffix = m.value.replace(/[0-9]/g, "").trim();
        return { ...m, num, suffix };
      })
    : [];

  return (
    <section id="metrics" className="relative py-20 bg-executive-darkBg overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-executive-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-executive-gold/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-3 block">Impact by the Numbers</span>
          <h2 className="font-playfair font-bold text-white text-3xl md:text-4xl">
            A Legacy of{" "}
            <span className="text-gradient-gold">Excellence</span>
          </h2>
        </motion.div>

        {hasData ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {parsed.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="glass-card rounded-2xl p-6 md:p-8 text-center h-full border border-white/5 hover:border-executive-gold/30 transition-all duration-300 hover:bg-white/[0.08]">
                  {/* Gold accent top bar */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-executive-gold/60 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="text-5xl md:text-6xl font-playfair font-bold text-executive-gold mb-3 tabular-nums">
                    <CountUp target={metric.num} suffix={metric.suffix} />
                  </div>
                  <div className="text-sm md:text-base text-gray-400 font-medium leading-snug">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <PendingContent sectionName="Metrics" className="text-white [&_h3]:text-white" />
        )}
      </div>
    </section>
  );
}
