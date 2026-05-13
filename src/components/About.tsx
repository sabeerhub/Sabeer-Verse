import { motion } from 'motion/react';
import { Shield, Sparkles, Zap, Brain, Layers, Globe } from 'lucide-react';

const bentoItems = [
  {
    title: "AI Excellence",
    description: "Architecting deep-learning systems that redefine human-machine interaction.",
    icon: <Brain className="text-sabeer-primary" size={24} />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-sabeer-primary/10 to-transparent",
    visual: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-64 h-64 border border-sabeer-primary/30 rounded-full animate-ping" />
        <div className="absolute w-48 h-48 border border-sabeer-primary/50 rounded-full animate-pulse" />
      </div>
    )
  },
  {
    title: "Systemic Vision",
    description: "Future-ready digital structures built on core principles of excellence.",
    icon: <Sparkles className="text-sabeer-accent" size={24} />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Global Scale",
    description: "High-performance infrastructure optimized for the modern web.",
    icon: <Globe className="text-blue-400" size={24} />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Elite Engineering",
    description: "Crafting bulletproof code with Next-gen React and AI protocols.",
    icon: <Layers className="text-purple-400" size={24} />,
    className: "md:col-span-1 md:row-span-2",
    visual: (
      <div className="mt-8 space-y-2 opacity-50">
        <div className="h-2 w-full bg-white/10 rounded-full" />
        <div className="h-2 w-4/5 bg-white/10 rounded-full" />
        <div className="h-2 w-3/4 bg-sabeer-primary/30 rounded-full" />
      </div>
    )
  },
  {
    title: "Instant Impact",
    description: "Deploying innovation at the speed of thought.",
    icon: <Zap className="text-yellow-400" size={24} />,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Security Protocol",
    description: "Enterprise-grade safety for the next generation of data.",
    icon: <Shield className="text-green-400" size={24} />,
    className: "md:col-span-1 md:row-span-1",
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-black uppercase tracking-[0.5em] text-sabeer-primary mb-6"
          >
            The Ecosystem
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white uppercase mb-8"
          >
            Redefining the <br /> Digital Frontier
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-medium"
          >
            Sabeer Verse is more than a platform. It's a visionary laboratory dedicated to the convergence of artificial intelligence and world-class digital engineering.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[240px]">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative glass p-8 rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col justify-between ${item.className}`}
            >
              <div className="relative z-10">
                <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                  {item.description}
                </p>
              </div>

              {item.visual && item.visual}

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
