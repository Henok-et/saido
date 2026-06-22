"use client";

import Link from "next/link";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Profile",      href: "#profile"      },
  { name: "Experience",   href: "#experience"   },
  { name: "Initiatives",  href: "#initiatives"  },
  { name: "Publications", href: "#publications" },
  { name: "Speaking",     href: "#speaking"     },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog",         href: "#blog"         },
  { name: "Contact",      href: "#contact"      },
];

export function Header() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [isVisible, setIsVisible]     = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setMobileOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active section detection
      const sections = NAV_LINKS.map(l => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-executive-darkBg/95 backdrop-blur-xl border-b border-executive-gold/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-executive-gold flex items-center justify-center text-executive-darkBg font-playfair font-bold text-lg group-hover:scale-105 transition-transform duration-200">
              SM
            </div>
            <div className="hidden sm:block">
              <div className="font-playfair font-bold text-white text-sm leading-tight">Prof. Saidou Madougou</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive  = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActive
                      ? "text-executive-gold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-executive-gold rounded-full"
                    />
                  )}
                </a>
              );
            })}
            <div className="ml-3 pl-3 border-l border-white/10 flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#contact"
                className="px-4 py-2 bg-executive-gold text-executive-darkBg text-sm font-bold rounded-lg hover:bg-[#dbb84a] transition-all duration-200 hover:shadow-[0_0_20px_rgba(201,162,39,0.35)]"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-executive-darkBg/98 backdrop-blur-xl border-t border-executive-gold/10"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              <div className="pt-3 pb-1">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-executive-gold text-executive-darkBg font-bold rounded-lg hover:bg-[#dbb84a] transition-colors"
                >
                  Contact Office
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
