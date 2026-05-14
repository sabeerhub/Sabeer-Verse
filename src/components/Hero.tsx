import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Command, Cpu, Globe, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-start justify-center overflow-hidden bg-sabeer-bg pt-20 md:pt-24">
      {/* Background Cinematic Effects */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-white opacity-[0.15]" />

        {/* Animated Radial Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-sabeer-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-sabeer-accent/10 rounded-full blur-[100px]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      {/* Floating UI Elements (Startup Aesthetic) */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-[20%] left-[10%] p-4 glass rounded-2xl border border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sabeer-primary/20 flex items-center justify-center">
              <Cpu size={16} className="text-sabeer-primary" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-12 bg-white/20 rounded-full" />
              <div className="h-1.5 w-8 bg-white/10 rounded-full" />
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-[30%] right-[12%] p-5 glass rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-sabeer-accent/20 flex items-center justify-center">
              <Zap size={20} className="text-sabeer-accent" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-16 bg-white/20 rounded-full" />
              <div className="h-2 w-10 bg-white/10 rounded-full" />
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[15%] right-[20%] px-4 py-2 glass rounded-full border border-white/10 flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Core System Active</span>
        </motion.div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-sabeer-accent mb-6 shadow-2xl"
        >
          <Command size={14} />
          Protocol v.4.0 Innovation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter leading-none mb-8 text-white uppercase"
        >
          Building <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sabeer-primary via-white to-sabeer-accent">AI-Powered</span> <br />
          Ecosystems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed tracking-tight"
        >
          Sabeer Verse is a futuristic innovation platform focused on AI systems, modern web engineering, and immersive digital technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#products"
            className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] overflow-hidden rounded-full transition-all hover:scale-105 hover:bg-sabeer-primary hover:text-white shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Vision <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a
            href="#labs"
            className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 glass border border-white/10 text-white font-black uppercase tracking-[0.2em] rounded-full transition-all hover:bg-white/5 active:scale-95"
          >
            Access Labs
          </a>
        </motion.div>

        {/* Startup Credibility Visuals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-28 flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          {[
            { icon: <Globe size={18} />, label: 'Global Scale' },
            { icon: <Cpu size={18} />, label: 'AI Integrated' },
            { icon: <Zap size={18} />, label: '99.9% Uptime' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-white">
              {item.icon}
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-gray-600"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-sabeer-primary/50 to-transparent" />
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
