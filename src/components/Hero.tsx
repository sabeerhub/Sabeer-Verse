import { motion } from 'motion/react';
import { Cpu } from 'lucide-react';

import { useState, useEffect } from 'react';
import { useMotionValue, useSpring } from 'motion/react';

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

  // Mouse interactivity offsets via smooth spring curves
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 200, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xOffset = (clientX / window.innerWidth - 0.5) * 40;
      const yOffset = (clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(xOffset);
      mouseY.set(yOffset);
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      const { beta, gamma } = e;
      if (beta !== null && gamma !== null) {
        const xOffset = (gamma / 90) * 40;
        const yOffset = (beta / 180) * 40;
        mouseX.set(xOffset);
        mouseY.set(yOffset);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('deviceorientation', handleDeviceOrientation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white technical-grid"
    >
      {/* Handcrafted Abstract Interactive Canvas Grid */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute inset-0 z-0 opacity-45 pointer-events-none"
      >
        {/* Visual Foundation Premium Layout Image */}
        <div className="absolute inset-0 bg-cover bg-center select-none"
             style={{
               backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260626_041422_4a459e05-abce-4150-9fb7-4ededc423cd1.png&w=1280&q=85')",
               mixBlendMode: 'luminosity'
             }}
        />

        {/* Elegant Overlays (Masking, blur, gradients, subtle DeepSkyBlue glows) */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/40 to-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/15 blur-[120px] rounded-full" />

        {/* Animated blueprint grid & architectural lines */}
        <div className="absolute inset-0 opacity-35 bg-[linear-gradient(rgba(0,191,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Kinetic Rotating Architectural Coordinates */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] border-[0.5px] border-brand-blue/20 rounded-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-brand-blue/20 via-transparent to-brand-blue/20" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-brand-blue/20 via-transparent to-brand-blue/20" />
        </motion.div>

        {/* Outer orbital rings */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] border-[0.5px] border-dashed border-brand-blue/15 rounded-full"
        />

        {/* Small center orbit core */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border-[0.5px] border-brand-blue/10 rounded-full"
        />

        {/* Top & bottom light barriers */}
        <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent" />
      </motion.div>

      {/* Main Content Layout */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8 md:gap-12"
        >
          {/* Large Kinetic Headline */}
          <motion.div variants={itemVariants} className="space-y-4 max-w-5xl">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter kerning-ultra uppercase leading-[0.85] text-black">
              Sabeer-Verse
            </h1>
          </motion.div>

          {/* Action Row */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mt-4">
            <a
              href="#work"
              className="px-8 py-4 bg-black text-white text-xs font-mono uppercase tracking-widest font-bold hover:bg-brand-blue hover:text-black premium-transition border border-black"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent text-black text-xs font-mono uppercase tracking-widest font-bold hover:bg-black hover:text-white premium-transition border border-black/10 hover:border-black"
            >
              Start a Project
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
