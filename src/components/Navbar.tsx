import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Tech', href: '#tech' },
  { name: 'Why Us', href: '#why' },
  { name: 'About', href: '#about' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ${
          scrolled
            ? 'py-4 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-black tracking-tighter kerning-ultra uppercase flex items-center gap-2 group focus-visible:outline-2"
          >
            <span className="w-2.5 h-2.5 bg-brand-blue rounded-full group-hover:scale-125 transition-transform duration-500" />
            <span className="text-black font-mono font-black">Sabeer-Verse</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[10px] uppercase tracking-[0.25em] font-bold text-gray-500 hover:text-black transition-colors py-2 group"
              >
                {link.name}
                {/* Magnetic Blue Dot Hover Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Call To Action Button (Desktop Only) */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="text-[10px] font-mono uppercase tracking-widest font-bold border border-black/10 hover:border-brand-blue px-6 py-3 hover:bg-black hover:text-white transition-all duration-500 flex items-center gap-2"
            >
              System Online <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            </a>
          </div>

          {/* Hamburger Menu - Tablet/Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-black hover:text-brand-blue transition-colors focus-visible:outline-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 top-[60px] md:top-[80px] w-full bg-white/98 backdrop-blur-lg z-40 border-t border-gray-100 flex flex-col justify-between p-8 overflow-y-auto lg:hidden"
            >
              <div className="flex flex-col gap-6 py-6">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-brand-blue" /> System Sitemap
                </span>
                {navLinks.map((link) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold tracking-tighter kerning-ultra uppercase text-black hover:text-brand-blue transition-colors flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </motion.a>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="border-t border-gray-100 pt-8 pb-12 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    SYSTEM INFRASTRUCTURE ACTIVE
                  </span>
                </div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                  © 2026 Sabeer-Verse. HANDCRAFTED DESIGN & CODE.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
