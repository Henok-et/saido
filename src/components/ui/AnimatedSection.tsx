"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  style?: React.CSSProperties;
}

// Shared "expo-out" curve — every reveal, hover and nav transition in the
// site moves on this one curve so motion reads as one coherent system.
export const PREMIUM_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function AnimatedSection({ children, className, id, delay = 0, style }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={`scene${className ? ` ${className}` : ""}`}
      style={style}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: PREMIUM_EASE, delay }}
      suppressHydrationWarning
    >
      {children}
    </motion.section>
  );
}
