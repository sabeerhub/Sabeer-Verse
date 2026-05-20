export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-xl font-bold tracking-tighter kerning-ultra uppercase">
            Sabeer-Verse
          </div>

          <div className="flex gap-12">
            {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-brand-blue transition-colors"
              >
                {social}
              </a>
            ))}
          </div>

          <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
            © 2024 Sabeer-Verse. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
