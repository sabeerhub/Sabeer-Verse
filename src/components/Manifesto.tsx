import { motion } from 'motion/react';
import { Terminal, Lightbulb, Workflow } from 'lucide-react';

const manifestoItems = [
  {
    num: '01',
    headline: "We build systems, not pages.",
    subtext: "Static pages are relics of the past. We engineer modular, self-healing visual state machines designed for absolute durability and effortless scaling."
  },
  {
    num: '02',
    headline: "Design is engineered, not decorated.",
    subtext: "Aesthetics must follow mechanical intention. Every layout width, font scale, grid line, and kinetic motion curve serves to clarify system parameters."
  },
  {
    num: '03',
    headline: "Interfaces are intelligence.",
    subtext: "The web layout is no longer passive container code; it is the active cognitive bridge between human thought networks and synthetic machine models."
  }
];

export default function Manifesto() {
  return (
    <section className="py-40 bg-black text-white relative overflow-hidden technical-grid-dense">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 relative z-10">

        {/* Decorative Grid Line */}
        <div className="flex items-center gap-2 mb-16">
          <Terminal className="w-4 h-4 text-brand-blue animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-blue">MANIFESTO // PHILOSOPHY</span>
        </div>

        <div className="space-y-24">
          {manifestoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="group flex flex-col md:flex-row gap-8 md:gap-16 items-start"
            >
              {/* Large Index Number */}
              <div className="text-2xl md:text-3xl font-mono font-bold text-brand-blue border border-brand-blue/30 px-3 py-1.5 bg-brand-blue/5 rounded-sm">
                {item.num}
              </div>

              <div className="space-y-4 max-w-4xl">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter kerning-ultra uppercase leading-[0.95] group-hover:text-brand-blue transition-colors duration-500">
                  {item.headline}
                </h3>
                <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed max-w-2xl">
                  {item.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
