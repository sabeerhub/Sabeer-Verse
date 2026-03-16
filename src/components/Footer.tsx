import { Twitter, Linkedin, Youtube } from 'lucide-react';

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
    <footer className="bg-white py-12 border-t border-slate-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" aria-label="Sabeer-Verse Home" className="text-3xl font-bold uppercase tracking-tighter mb-6 inline-block text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary rounded-md px-2 py-1 -ml-2">
              Sabeer<span className="text-sabeer-primary">-Verse</span>
            </a>
            <p className="text-slate-600 font-light leading-relaxed max-w-md">
              The first AI-powered startup ecosystem. We build tools that empower creators, developers, and businesses worldwide.
            </p>
          </div>

          <nav aria-labelledby="footer-links-heading">
            <h4 id="footer-links-heading" className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-500 hover:text-sabeer-primary transition-colors text-sm uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary rounded-md px-2 py-1 -ml-2">About Us</a></li>
              <li><a href="#products" className="text-slate-500 hover:text-sabeer-primary transition-colors text-sm uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary rounded-md px-2 py-1 -ml-2">Products</a></li>
              <li><a href="#team" className="text-slate-500 hover:text-sabeer-primary transition-colors text-sm uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary rounded-md px-2 py-1 -ml-2">Team</a></li>
              <li><a href="#labs" className="text-slate-500 hover:text-sabeer-primary transition-colors text-sm uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary rounded-md px-2 py-1 -ml-2">Labs</a></li>
            </ul>
          </nav>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-sabeer-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary focus-visible:ring-offset-2">
                <Twitter size={18} aria-hidden="true" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-sabeer-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary focus-visible:ring-offset-2">
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-sabeer-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary focus-visible:ring-offset-2">
                <Youtube size={18} aria-hidden="true" />
              </a>
              <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-sabeer-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary focus-visible:ring-offset-2">
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-light">
            &copy; {currentYear} Sabeer-Verse. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 font-light">
            <a href="#" className="hover:text-sabeer-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary rounded-md px-1">Privacy Policy</a>
            <a href="#" className="hover:text-sabeer-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary rounded-md px-1">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
