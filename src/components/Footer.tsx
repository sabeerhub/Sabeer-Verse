export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 bg-black text-white border-t border-white/10 relative overflow-hidden technical-grid-dense">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Simple layout with direct specifications */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 pb-16 border-b border-white/10">
          <div>
            <a href="#home" className="text-2xl font-black tracking-tighter kerning-ultra uppercase flex items-center gap-2">
              <span className="w-3 h-3 bg-brand-blue rounded-full" />
              <span className="text-white font-mono font-black">Sabeer-Verse</span>
            </a>
            <p className="text-gray-400 text-xs md:text-sm mt-4 font-medium">
              Founded by Mustapha Abdulsalam
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            <a
              href="https://github.com/sabeerhub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-brand-blue transition-colors uppercase tracking-widest font-bold"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/masabeer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-brand-blue transition-colors uppercase tracking-widest font-bold"
            >
              LinkedIn
            </a>
            <a
              href="https://sabeer-ai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-brand-blue transition-colors uppercase tracking-widest font-bold"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-xs text-gray-400 hover:text-brand-blue transition-colors uppercase tracking-widest font-bold"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-12 text-[11px] font-mono text-gray-500">
          © {currentYear} Sabeer-Verse. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
