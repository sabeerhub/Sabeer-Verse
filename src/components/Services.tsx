import { motion } from 'motion/react';
import { ArrowUpRight, Cpu, Code, Layers, Sparkles, Orbit } from 'lucide-react';

const services = [
  {
    code: '01 // AI_PD',
    title: "AI Product Design",
    description: "Architecting intelligent interfaces that bridge the gap between human intent and machine execution. We model cognitive workflows and context-aware templates.",
    features: ['Cognitive workflow design', 'Agent feedback loop visualization', 'Contextual multi-modal layouts'],
    icon: Sparkles
  },
  {
    code: '02 // EXP_ENG',
    title: "Web Experience Engineering",
    description: "Developing high-performance, cinematic digital environments with unmatched technical precision. Fluid physics-based coordinate animations.",
    features: ['120fps GPU acceleration', 'Sub-pixel rendering engines', 'Responsive fluid breakpoints'],
    icon: Code
  },
  {
    code: '03 // SYS_ARC',
    title: "Creative Systems Architecture",
    description: "Building scalable design languages and systemic frameworks for future-facing brands. We translate static brand rules into functional design systems.",
    features: ['Atomic design systems in code', 'Distributed token configurations', 'Storybook & test suite integrations'],
    icon: Layers
  },
  {
    code: '04 // BR_ID',
    title: "Brand Identity for Tech Companies",
    description: "Crafting digital-first identities that communicate elite engineering and visionary intent. Tailored for companies working on complex, future infrastructures.",
    features: ['High-fidelity vector geometries', 'Editorial typography systems', 'Interactive micro-brand motion'],
    icon: Orbit
  },
  {
    code: '05 // FT_SYS',
    title: "High-performance Frontend Systems",
    description: "Optimizing every frame and interaction for fluid, GPU-accelerated digital storytelling. Deferring bundle payloads to achieve true instant-loading performance.",
    features: ['Vite & Next.js chunk optimization', 'Advanced state orchestration', 'WASM-powered render pipelines'],
    icon: Cpu
  }
];

export default function Services() {
  return (
    <section id="services" className="py-40 bg-white text-black relative overflow-hidden technical-grid">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-blue mb-4 block">
              Systems // Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter kerning-ultra uppercase">
              Core Expertise
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-sm">
              We design and compile state-of-the-art interactive frameworks. Combining luxury design thinking with hardware-level logic.
            </p>
          </div>
        </div>

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white border border-gray-100 hover:border-brand-blue/35 p-10 md:p-12 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[460px] hover:shadow-lg hover:shadow-brand-blue/[0.03] transition-all duration-700"
              >
                {/* Border accent indicator */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-100 group-hover:bg-brand-blue transition-colors duration-700" />

                <div>
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-[10px] font-mono font-bold text-gray-400 group-hover:text-brand-blue transition-colors duration-500">
                      {service.code}
                    </span>
                    <div className="p-2.5 bg-gray-50 text-gray-700 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors duration-500 rounded-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 group-hover:text-black transition-colors mb-4">
                    {service.title}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-500 group-hover:text-gray-700 transition-colors leading-relaxed font-medium mb-8">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="text-[9px] font-mono uppercase text-gray-400 tracking-wider mb-3">
                    Deliverables:
                  </div>
                  <ul className="space-y-1.5 border-t border-gray-100 pt-3">
                    {service.features.map((f, i) => (
                      <li key={i} className="text-[11px] text-gray-500 flex items-center gap-2">
                        <span className="w-1 h-1 bg-brand-blue rounded-full" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Corner link icon */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight className="w-4 h-4 text-brand-blue" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
