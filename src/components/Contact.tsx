import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-40 bg-brand-blue relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter kerning-ultra mb-16"
          >
            Start a project
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <a
              href="mailto:hello@sabeer-verse.com"
              className="text-2xl md:text-4xl font-bold text-white/90 hover:text-white transition-colors tracking-tighter kerning-ultra border-b-2 border-white/20 hover:border-white pb-2"
            >
              hello@sabeer-verse.com
            </a>
            <span className="text-white/40 font-mono hidden md:block">//</span>
            <button className="text-2xl md:text-4xl font-bold text-white/90 hover:text-white transition-colors tracking-tighter kerning-ultra border-b-2 border-white/20 hover:border-white pb-2">
              Book a call
            </button>
          </motion.div>
        </div>
      </div>

      {/* Background Abstract Geometry */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] border border-white/10 rounded-full opacity-50"
      />
    </section>
  );
}
