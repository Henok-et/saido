"use client";

import Link from "next/link";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "Profile", href: "#profile" },
  { name: "Experience", href: "#experience" },
  { name: "Initiatives", href: "#initiatives" },
  { name: "Publications", href: "#publications" },
  { name: "Speaking", href: "#speaking" },
  { name: "Media", href: "#media" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide if scrolled down past 50px
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 w-full z-50 bg-white/90 dark:bg-executive-darkBg/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="font-playfair text-2xl font-bold text-executive-blue dark:text-white">
              M.S.
            </Link>
          </div>
          
          <nav className="hidden lg:flex space-x-6 items-center">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-executive-gold dark:hover:text-executive-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pl-4 border-l border-gray-200 dark:border-gray-700">
              <ThemeToggle />
            </div>
          </nav>

          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-600 dark:text-gray-300"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-executive-darkSurface border-b border-gray-100 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
