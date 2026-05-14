import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, ExternalLink, Award, Globe, Code } from 'lucide-react';
import founderImg from '../assets/IMG-20260423-WA0024.jpg';

export default function Team() {
  return (
    <section id="team" className="py-32 relative bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sabeer-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">

          {/* Visual Side */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 glass shadow-2xl"
            >
              {/* This represents a premium cinematic portrait area */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                 <img
                   src={founderImg}
                   alt="Mustapha Abdulsalam"
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     e.currentTarget.src = "/founder.png";
                   }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="absolute bottom-12 left-12 right-12 z-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <h4 className="text-4xl font-extrabold text-white tracking-tighter uppercase">Mustapha Abdulsalam</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Founder', 'Creative Technologist', 'AI Architect'].map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full glass border border-white/10 text-[8px] font-black uppercase tracking-widest text-sabeer-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-8 -right-8 glass p-8 rounded-3xl border border-white/10 shadow-2xl hidden md:block"
            >
               <div className="flex flex-col items-center gap-2">
                  <Award className="text-sabeer-accent" size={32} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/50 text-center">Top Rated <br /> Innovation</span>
               </div>
            </motion.div>
          </div>

          {/* Bio Side */}
          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-sm font-black uppercase tracking-[0.5em] text-sabeer-primary"
              >
                The Leadership
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[0.9]"
              >
                Building the <br /> Future Today
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 font-medium leading-relaxed"
              >
                Mustapha Abdulsalam (Sabeer) is a visionary frontend developer and AI builder dedicated to creating intelligent digital experiences. With a focus on system thinking and creative technology, he bridges the gap between imagination and execution.
              </motion.p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 rounded-3xl glass border border-white/5 hover:border-sabeer-primary/30 transition-colors">
                <div className="p-3 rounded-2xl bg-sabeer-primary/10">
                   <Code size={24} className="text-sabeer-primary" />
                </div>
                <div>
                   <h5 className="text-white font-bold mb-1">Philosophy</h5>
                   <p className="text-gray-400 text-sm">Elegant code meets intelligent systems. Every pixel and every line of logic serves a purpose in the ecosystem.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-3xl glass border border-white/5 hover:border-sabeer-accent/30 transition-colors">
                <div className="p-3 rounded-2xl bg-sabeer-accent/10">
                   <Globe size={24} className="text-sabeer-accent" />
                </div>
                <div>
                   <h5 className="text-white font-bold mb-1">Global Vision</h5>
                   <p className="text-gray-400 text-sm">Creating technology that scales beyond borders, empowering industries through AI-driven innovation.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 pt-4">
              {[
                { icon: <Github size={20} />, label: 'GitHub' },
                { icon: <Twitter size={20} />, label: 'Twitter' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5 }}
                  href="#"
                  className="p-4 rounded-2xl glass border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl"
              >
                Inquiry <ExternalLink size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
