import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-sabeer-bg">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sabeer-primary/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700 mb-8"
        >
          <Zap size={16} className="text-sabeer-primary" aria-hidden="true" />
          <span>The Future of Innovation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 text-slate-900"
        >
          Sabeer<span className="text-transparent bg-clip-text bg-gradient-to-r from-sabeer-primary to-blue-600">-Verse</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-4 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light"
        >
          Sabeer-Verse – The First AI-Powered Startup Ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#products"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-sabeer-primary text-white font-bold uppercase tracking-wider overflow-hidden rounded-lg transition-transform hover:scale-105 shadow-lg shadow-sabeer-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary focus-visible:ring-offset-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Products <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sabeer-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
          </a>
          
          <a
            href="#labs"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-300 text-slate-900 font-bold uppercase tracking-wider rounded-lg transition-all hover:bg-slate-50 hover:border-sabeer-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary focus-visible:ring-offset-2"
          >
            Join Labs
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent" />
      </motion.div>
    </section>
  );
}
