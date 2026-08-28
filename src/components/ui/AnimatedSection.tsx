"use client";

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

export function AnimatedSection({ children, className, id, style }: AnimatedSectionProps) {
  return (
    <section
      id={id}
      className={`scene${className ? ` ${className}` : ""}`}
      style={style}
      suppressHydrationWarning
    >
      {children}
    </section>
  );
}
