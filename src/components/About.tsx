import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-40 bg-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#00BFFF 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-mono uppercase tracking-[0.3em] text-brand-blue"
            >
              The Studio // Identity
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter kerning-ultra leading-[0.9]"
            >
              Sabeer-Verse <br /> builds systems <br /> that think.
            </motion.h3>
          </div>

          <div className="space-y-8 pt-12 lg:pt-32">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed tracking-tight"
            >
              We are a creative intelligence studio building AI-powered digital ecosystems, immersive web experiences, and high-performance product systems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-base text-gray-500 leading-relaxed max-w-lg"
            >
              It is not a normal agency. We operate as a digital research lab and creative engineering studio, focused on systemic design and future-interface development.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
