import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sabeer-bg pt-20">
      {/* Background Cinematic Effects */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-white opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sabeer-primary/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sabeer-accent/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-white/10 text-[11px] font-bold uppercase tracking-[0.2em] text-sabeer-accent mb-10 shadow-2xl shadow-blue-500/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sabeer-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sabeer-accent"></span>
          </span>
          Next-Gen Innovation Ecosystem
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.85] mb-8 text-white uppercase"
        >
          Building <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sabeer-primary via-sabeer-accent to-white">AI-Powered</span> <br />
          Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Sabeer Verse is a futuristic innovation platform focused on AI, modern web systems, and immersive digital technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <a
            href="#products"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-widest overflow-hidden rounded-full transition-all hover:scale-105 hover:bg-sabeer-primary hover:text-white shadow-2xl shadow-white/5 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Ecosystem <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
          </a>
          
          <a
            href="#labs"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 glass border border-white/10 text-white font-black uppercase tracking-widest rounded-full transition-all hover:bg-white/5 active:scale-95"
          >
            Join Labs
          </a>
        </motion.div>

        {/* Animated Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/5"
        >
          {[
            { label: 'AI Models', value: '12+' },
            { label: 'Products', value: '08' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'Innovation', value: 'Elite' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-gray-500"
        aria-hidden="true"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-sabeer-primary to-transparent" />
        <ChevronDown className="animate-bounce" size={20} />
      </motion.div>
    </section>
  );
}
