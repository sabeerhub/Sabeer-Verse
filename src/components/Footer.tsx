import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Terminal, Globe, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const currentYear = new Date().getFullYear();

  const linksGroup1 = [
    { name: 'Core Work', href: '#work' },
    { name: 'System Services', href: '#services' },
    { name: 'Products Core', href: '#products' },
    { name: 'Tech Protocol', href: '#tech' }
  ];

  const linksGroup2 = [
    { name: 'Why Us', href: '#why' },
    { name: 'About Studio', href: '#about' },
    { name: 'Client Reviews', href: '#testimonials' },
    { name: 'Inquire Handshake', href: '#contact' }
  ];

  return (
    <footer className="py-24 bg-black text-white border-t border-white/10 relative overflow-hidden technical-grid-dense">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Top sitemap & subscription grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">

          {/* Brand Col - Col 4 */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="text-2xl font-black tracking-tighter kerning-ultra uppercase flex items-center gap-2">
              <span className="w-3 h-3 bg-brand-blue rounded-full" />
              <span className="text-white font-mono font-black">Sabeer-Verse</span>
            </a>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm font-medium">
              A premium creative intelligence studio and AI systems lab. We compile physical experiences for future-facing digital architectures.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                SYSTEM INFRASTRUCTURE ONLINE // VERSION 19.4
              </span>
            </div>
          </div>

          {/* Quick links Col 1 - Col 2 */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              Core Indices
            </div>
            <ul className="space-y-2.5">
              {linksGroup1.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-brand-blue font-medium transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links Col 2 - Col 2 */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              Studio Indices
            </div>
            <ul className="space-y-2.5">
              {linksGroup2.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-brand-blue font-medium transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter subscription - Col 4 */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-brand-blue" /> Receive Intelligence Dispatches
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-medium">
              Subscribe to receive technical breakdowns, code snippets, and system architecture deep dives.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-mono"
              >
                SUCCESS: Subscription Registered.
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border border-white/10 focus:border-brand-blue px-3.5 py-2.5 text-xs text-white focus:outline-none flex-1 font-mono"
                  placeholder="agent@company.com"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-brand-blue text-black px-4 py-2.5 text-xs transition-colors font-mono font-bold flex items-center justify-center gap-2 group"
                >
                  <span>Register</span>
                  <Send className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright & socials */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-mono text-gray-500">

          <div>
            © {currentYear} Sabeer-Verse. HANDCRAFTED WITH INTENTIONAL PRECISION.
          </div>

          {/* Social connections */}
          <div className="flex gap-8">
            {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((social) => (
              <a
                key={social}
                href="#"
                className="hover:text-brand-blue transition-colors uppercase tracking-widest font-bold"
              >
                {social}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <Globe className="w-3.5 h-3.5" />
            <span>GLOBAL PROTOCOL // UTC</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
