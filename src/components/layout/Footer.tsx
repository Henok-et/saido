import Link from "next/link";
import { Linkedin, Twitter, Mail, Facebook, BookOpen, ArrowUpRight } from "lucide-react";

const NAV = [
  { name: "Profile",      href: "#profile"      },
  { name: "Experience",   href: "#experience"   },
  { name: "Initiatives",  href: "#initiatives"  },
  { name: "Publications", href: "#publications" },
  { name: "Speaking",     href: "#speaking"     },
  { name: "Blog",         href: "#blog"         },
  { name: "Contact",      href: "#contact"      },
];

const SOCIALS = [
  { icon: Facebook, href: "https://web.facebook.com/saidou.madougou.3",      label: "Facebook"    },
  { icon: BookOpen, href: "https://www.researchgate.net/profile/Saidou-Madougou", label: "ResearchGate"},
  { icon: Twitter,  href: "https://twitter.com",                              label: "Twitter"     },
  { icon: Linkedin, href: "https://linkedin.com",                             label: "LinkedIn"    },
];

export function Footer() {
  return (
    <footer className="relative bg-executive-darkBg border-t border-executive-gold/20 overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-executive-gold/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-executive-gold/4 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">

          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-executive-gold flex items-center justify-center text-executive-darkBg font-playfair font-bold text-lg">
                SM
              </div>
              <div>
                <div className="font-playfair font-bold text-white text-lg leading-tight">Prof. Saidou Madougou</div>
                <div className="text-executive-gold text-xs tracking-widest uppercase">Director · African Union Commission</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Strategic Leadership in Education, Science, Technology & Innovation — advancing Africa's knowledge systems at the continental level.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-400 hover:text-executive-gold hover:border-executive-gold/40 hover:bg-executive-gold/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <a
                href="mailto:office@amarasaido.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-400 hover:text-executive-gold hover:border-executive-gold/40 hover:bg-executive-gold/10 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {NAV.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-executive-gold text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-executive-gold transition-all duration-200 overflow-hidden" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Executive Office</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div>
                <div className="text-white font-semibold text-xs uppercase tracking-wider mb-1">Email</div>
                <a href="mailto:office@amarasaido.com" className="hover:text-executive-gold transition-colors">
                  office@amarasaido.com
                </a>
              </div>
              <div>
                <div className="text-white font-semibold text-xs uppercase tracking-wider mb-1">Organisation</div>
                <div>African Union Commission<br />Addis Ababa, Ethiopia</div>
              </div>
              <div>
                <div className="text-white font-semibold text-xs uppercase tracking-wider mb-1">University</div>
                <div>Abdou Moumouni University<br />Niamey, Niger</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Prof. Saidou Madougou. All rights reserved.</p>
          <p>
            Website by{" "}
            <a
              href="https://wa.me/251967670690"
              target="_blank"
              rel="noopener noreferrer"
              className="text-executive-gold hover:text-white transition-colors font-semibold"
            >
              Henok D
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
