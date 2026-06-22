"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const holdTimer = setTimeout(() => setPhase("hold"), 600);
    const outTimer  = setTimeout(() => {
      setPhase("out");
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "";
      }, 800);
    }, 2200);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(holdTimer);
      clearTimeout(outTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-executive-darkBg flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background dot pattern */}
          <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute w-[350px] h-[350px] rounded-full border border-executive-gold/15"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute w-[280px] h-[280px] rounded-full border border-executive-gold/8"
          />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Logo badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
              className="w-16 h-16 rounded-2xl bg-executive-gold flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(201,162,39,0.4)]"
            >
              <span className="font-playfair font-bold text-executive-darkBg text-2xl">SM</span>
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden mb-1">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                className="font-playfair font-bold text-white text-3xl sm:text-4xl md:text-5xl tracking-wide"
              >
                Prof. Saidou Madougou
              </motion.h1>
            </div>

            {/* Gold line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
              className="h-[2px] w-24 bg-executive-gold origin-center mt-4 mb-4"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95, duration: 0.6 }}
              className="text-executive-gold text-xs tracking-[0.25em] uppercase font-medium"
            >
              Director · Education, Science, Technology & Innovation
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="text-gray-500 text-xs tracking-[0.2em] uppercase mt-1"
            >
              African Union Commission
            </motion.p>
          </div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-white/8 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ delay: 0.4, duration: 1.6, ease: "easeInOut" }}
              className="h-full bg-executive-gold rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
