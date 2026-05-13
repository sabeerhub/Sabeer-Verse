import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Ecosystem', href: '#products' },
  { name: 'Innovation', href: '#labs' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center px-6 py-3 transition-all duration-500 rounded-full ${
          scrolled ? 'glass-dark shadow-2xl shadow-blue-900/10' : ''
        }`}>
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              aria-label="Sabeer Verse Home"
              className="text-xl font-bold tracking-tighter text-white flex items-center gap-2 group"
            >
              <div className="w-8 h-8 bg-sabeer-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="text-white text-xs">SV</span>
              </div>
              <span className="hidden sm:block uppercase">Sabeer <span className="text-sabeer-primary">Verse</span></span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] uppercase tracking-widest font-semibold text-gray-400 hover:text-white px-4 py-2 rounded-full transition-all hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2 bg-white text-black text-[13px] font-bold uppercase tracking-widest rounded-full hover:bg-sabeer-primary hover:text-white transition-all shadow-lg shadow-white/5"
            >
              Build with us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 glass-dark rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="px-4 py-8 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-lg font-bold uppercase tracking-tighter text-gray-300 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-center bg-sabeer-primary text-white font-black uppercase tracking-widest rounded-2xl"
              >
                Build with us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
