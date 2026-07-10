import { motion } from 'motion/react';
import { ArrowDown, Terminal, Cpu } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // premium cubic easing
      },
    },
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white technical-grid"
    >
      {/* Handcrafted Abstract Interactive Canvas Grid */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">

        {/* Kinetic Rotating Architectural Coordinates */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] border-[0.5px] border-brand-blue/30 rounded-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-brand-blue/30 via-transparent to-brand-blue/30" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-brand-blue/30 via-transparent to-brand-blue/30" />
        </motion.div>

        {/* Outer orbital rings */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] border-[0.5px] border-dashed border-brand-blue/20 rounded-full"
        />

        {/* Small center orbit core */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border-[0.5px] border-brand-blue/15 rounded-full"
        />

        {/* Top & bottom light barriers */}
        <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8 md:gap-12"
        >
          {/* Micro Tagline */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white text-[10px] font-mono uppercase tracking-[0.3em]"
          >
            <Cpu className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
            <span>Creative Intelligence Studio</span>
          </motion.div>

          {/* Large Kinetic Headline */}
          <motion.div variants={itemVariants} className="space-y-4 max-w-5xl">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter kerning-ultra uppercase leading-[0.85] text-black">
              Sabeer-Verse
            </h1>
            <p className="text-sm md:text-lg lg:text-xl font-bold tracking-tight text-gray-500 uppercase tracking-[0.15em] max-w-2xl mx-auto mt-6">
              Engineering future digital products & immersive intelligence systems with absolute precision.
            </p>
          </motion.div>

          {/* Action Row */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mt-4">
            <a
              href="#work"
              className="px-8 py-4 bg-black text-white text-xs font-mono uppercase tracking-widest font-bold hover:bg-brand-blue hover:text-black premium-transition border border-black"
            >
              Explore Selected Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent text-black text-xs font-mono uppercase tracking-widest font-bold hover:bg-black hover:text-white premium-transition border border-black/10 hover:border-black"
            >
              Compile Project
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Handcrafted Scroll Hint */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-brand-blue font-mono font-bold animate-pulse">SCROLL PROTOCOL</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-blue via-brand-blue/30 to-transparent relative overflow-hidden">
          <motion.div
            animate={{
              y: ['-100%', '100%']
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-full h-8 bg-brand-blue"
          />
        </div>
      </motion.div>
    </section>
  );
}
