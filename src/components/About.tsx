import { motion } from 'motion/react';
import { Shield, Sparkles, Brain, Code } from 'lucide-react';
import founderImage from '@/assets/MG-20260423-WA0024.jpg';

export default function About() {
  return (
    <section id="about" className="py-40 bg-white relative overflow-hidden technical-grid">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Narrative Column - Left */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-blue mb-4 block">
                The Studio // Identity
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter kerning-ultra uppercase leading-[0.9]">
                Sabeer-Verse <br /> builds systems <br /> that think.
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 font-medium text-sm md:text-base leading-relaxed max-w-2xl">
              <p className="text-lg md:text-xl text-black">
                We are a creative intelligence studio and AI systems lab building immersive digital ecosystems, high-performance web experiences, and elite software architecture.
              </p>
              <p>
                Sabeer-Verse was founded to close the widening chasm between deep computational power and user-focused elegance. We believe that intelligence should not be buried behind dense terminals, but should manifest through responsive, physical, and timeless layouts.
              </p>
              <p>
                We do not operate like conventional design agencies or outsourced consultancies. We work as a collaborative research laboratory, engineering custom solutions for high-stakes tech startups and established global leaders.
              </p>
            </div>

            {/* Visionary Signature Panel */}
            <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between">
              <div>
                <div className="font-bold text-gray-900 text-base md:text-lg">
                  Mustapha Abdulsalam
                </div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-0.5">
                  Founder & Principal Director // Sabeer-Verse
                </div>
              </div>

              {/* Handcrafted Signature Emulation */}
              <div className="text-2xl font-serif italic text-brand-blue tracking-widest pointer-events-none select-none select-none font-black">
                M. Abdulsalam
              </div>
            </div>
          </div>

          {/* Founder Image Column - Right */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] bg-gray-50 overflow-hidden border border-gray-200 shadow-md group"
            >
              <img
                src={founderImage}
                alt="Mustapha Abdulsalam, Founder of Sabeer-Verse"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />

              {/* Technical Blueprint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-white font-mono text-[9px] tracking-widest">
                PORTRAIT // EXEC_01_COORDINATES
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-gray-100 bg-gray-50/50">
                <div className="text-2xl md:text-3xl font-mono font-bold text-black">
                  12+
                </div>
                <div className="text-[9px] font-mono uppercase text-gray-500 tracking-wider mt-1">
                  Custom AI Deployments
                </div>
              </div>
              <div className="p-6 border border-gray-100 bg-gray-50/50">
                <div className="text-2xl md:text-3xl font-mono font-bold text-black">
                  120 FPS
                </div>
                <div className="text-[9px] font-mono uppercase text-gray-500 tracking-wider mt-1">
                  Guaranteed Animation Fluidity
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
