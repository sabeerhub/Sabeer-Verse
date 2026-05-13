import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, Quote } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-32 bg-sabeer-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Cinematic Portrait Area */}
            <div className="aspect-[4/5] rounded-[3rem] bg-gradient-to-tr from-sabeer-primary/20 via-white/5 to-sabeer-accent/20 border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl flex items-center justify-center text-white/20 text-8xl font-black italic">
                  S
                </div>
              </div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black via-black/50 to-transparent">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-1">Mustapha Abdulsalam</h3>
                <p className="text-sabeer-primary font-bold uppercase tracking-[0.2em] text-xs">Founder & Creative Technologist</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-sabeer-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sabeer-accent/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="h-[1px] w-8 bg-sabeer-primary" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sabeer-primary">The Visionary</span>
            </div>

            <Quote size={48} className="text-white/10 mb-6" />

            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
              "Building the future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sabeer-primary to-sabeer-accent">through AI-powered</span> <br />
              digital experiences."
            </h2>

            <div className="space-y-6 text-gray-400 text-lg font-medium leading-relaxed mb-10">
              <p>
                Mustapha Abdulsalam, known as Sabeer, is an elite frontend developer and AI-focused builder dedicated to creating intelligent digital systems.
              </p>
              <p>
                His philosophy blends technical excellence with creative vision, ensuring that every product within the Sabeer Verse ecosystem is both technologically flawless and emotionally powerful.
              </p>
            </div>

            <div className="flex gap-6">
              {[
                { icon: <Twitter size={20} />, label: 'Twitter' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn' },
                { icon: <Github size={20} />, label: 'Github' }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-sabeer-primary hover:border-sabeer-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-16 p-8 glass rounded-3xl border border-white/5 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/10 border-2 border-black" />
                ))}
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-white">Trusted by Innovation Hubs</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Global Collaborations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
