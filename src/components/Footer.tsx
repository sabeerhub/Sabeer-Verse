import { Twitter, Linkedin, Youtube, Github, Instagram } from 'lucide-react';

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sabeer-bg py-24 border-t border-white/5 relative overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sabeer-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" aria-label="Sabeer Verse Home" className="text-3xl font-black tracking-tighter mb-8 inline-block text-white uppercase">
              Sabeer <span className="text-sabeer-primary">Verse</span>
            </a>
            <p className="text-gray-500 font-medium leading-relaxed max-w-md text-lg">
              Building AI-powered digital experiences for the future. An elite innovation ecosystem for high-performance systems and immersive technology.
            </p>

            <div className="mt-10 flex gap-4">
              {[
                { icon: <Twitter size={18} />, label: 'Twitter' },
                { icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { icon: <Github size={18} />, label: 'Github' },
                { icon: <Instagram size={18} />, label: 'Instagram' },
                { icon: <TikTokIcon size={18} />, label: 'TikTok' }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:bg-sabeer-primary hover:text-white hover:border-sabeer-primary transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-labelledby="footer-links-heading">
            <h4 id="footer-links-heading" className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Ecosystem', 'Labs', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8">Legal & Privacy</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Security Protocol', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
              All Systems Operational
            </p>
          </div>

          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
            &copy; {currentYear} Sabeer Verse Innovation platform. Global.
          </p>

          <div className="flex gap-8">
            <span className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">Designed for the future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
