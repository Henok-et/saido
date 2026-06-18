"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable scroll while the preloader is visible
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, 2200);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-executive-blue flex flex-col items-center justify-center"
        >
          <div className="overflow-hidden px-4 text-center">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }
              }}
              exit={{ 
                y: -60, 
                opacity: 0,
                transition: { duration: 0.5, ease: "easeIn" }
              }}
              className="font-playfair text-3xl sm:text-4xl md:text-6xl font-bold text-executive-gold tracking-wide"
            >
              Prof. Madougou Saidou
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: 1, 
                opacity: 1,
                transition: { duration: 1, delay: 0.5, ease: "easeInOut" }
              }}
              exit={{ 
                opacity: 0,
                transition: { duration: 0.3 }
              }}
              className="h-[1px] w-24 bg-executive-gold/40 mx-auto mt-4 origin-center"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
