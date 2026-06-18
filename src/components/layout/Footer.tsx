import Link from "next/link";
import { Linkedin, Twitter, Mail, Facebook, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-executive-blue dark:bg-executive-darkBg text-white border-t-2 border-executive-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Prof. Madougou Saidou</h3>
            <p className="text-gray-300 text-sm">
              Strategic Leadership in Education, Science, Technology & Innovation.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#profile" className="hover:text-executive-gold transition-colors">Profile</Link></li>
              <li><Link href="#initiatives" className="hover:text-executive-gold transition-colors">Initiatives</Link></li>
              <li><Link href="#publications" className="hover:text-executive-gold transition-colors">Publications</Link></li>
              <li><Link href="#contact" className="hover:text-executive-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-executive-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-executive-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://web.facebook.com/saidou.madougou.3" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-executive-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.researchgate.net/profile/Saidou-Madougou" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-executive-gold transition-colors">
                <BookOpen className="w-5 h-5" />
              </a>
              <a href="mailto:contact@amarasaido.com" className="p-2 bg-white/10 rounded-full hover:bg-executive-gold transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-base md:text-lg text-center text-gray-300">
          <p>
            Website by{" "}
            <a
              href="https://wa.me/251967670690"
              target="_blank"
              rel="noopener noreferrer"
              className="text-executive-gold hover:text-white transition-colors font-bold inline-flex items-center gap-1"
            >
              Henok D
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
