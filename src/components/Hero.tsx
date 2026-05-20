import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Abstract Motion Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] border-[0.5px] border-brand-blue/30 rounded-[40%] blur-sm"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] border-[0.5px] border-brand-blue/20 rounded-[60%] blur-[2px]"
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold kerning-ultra uppercase tracking-tighter"
        >
          Sabeer-Verse
        </motion.h1>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-brand-blue" />
        <span className="text-[10px] uppercase tracking-widest text-brand-blue font-mono">Scroll</span>
      </motion.div>
    </section>
  );
}
