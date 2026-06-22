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

export function AnimatedSection({ children, className, id, delay = 0, style }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      suppressHydrationWarning
    >
      {children}
    </motion.section>
  );
}
