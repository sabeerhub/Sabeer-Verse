import { useState } from 'react';
import { motion } from 'motion/react';

interface TechLayer {
  level: string;
  title: string;
  description: string;
  status: string;
  tech: string[];
}

const techLayers: TechLayer[] = [
  {
    level: 'L1',
    title: 'Frontend Engineering Layer',
    description: 'Developing high-fidelity, kinetic user experiences with flawless performance and native fluid response speeds.',
    status: 'Operational // 120 FPS',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    level: 'L2',
    title: 'Backend Systems Layer',
    description: 'Securing structural state stores, realtime synchronization channels, cloud handlers, and identity portals.',
    status: 'Active // Quantum Secured',
    tech: ['Firebase', 'Firestore', 'Firebase Authentication', 'Supabase', 'Node.js']
  },
  {
    level: 'L3',
    title: 'Creative Design & Interaction',
    description: 'Handcrafting blueprint layouts based on clean typographic grids and modern physics micro-damping physics.',
    status: 'Swiss-grid Optimized',
    tech: ['Figma', 'Framer Motion', 'GSAP', 'shadcn/ui']
  },
  {
    level: 'L4',
    title: 'Artificial Intelligence Stack',
    description: 'Native execution of contextual multi-modal structures and advanced vector retrieval straight into the system flow.',
    status: 'Cognitive Connected',
    tech: ['OpenAI', 'Claude', 'Gemini']
  },
  {
    level: 'L5',
    title: 'Deployment & Continuous Integration',
    description: 'Automating build pipelines, continuous checks, and global edge CDNs for instant-loading delivery.',
    status: 'Active // CD Global',
    tech: ['Vercel', 'GitHub']
  }
];

const timelineMilestones = [
  {
    year: '24 // Q1',
    title: 'Vortex Protocol Initialization',
    description: 'Architected the core spatial routing engine and successfully established our first sub-15ms feedback loop.'
  },
  {
    year: '24 // Q3',
    title: 'Sabeer-OS Alpha Rollout',
    description: 'Deployed the operating system to key defense, finance, and industrial enterprise partners.'
  },
  {
    year: '25 // Q1',
    title: 'High-Performance Pulse Engine Release',
    description: 'Shipped custom GPU-accelerated motion core for complex visual orchestration and real-time visualization.'
  },
  {
    year: '26 // Launch',
    title: 'Global Cognitive API Network',
    description: 'Redesign of Sabeer-Verse public infrastructure. Unification of all systems into the ultimate Creative Intelligence Hub.'
  }
];

export default function Technology() {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  return (
    <section id="tech" className="py-40 bg-white text-black relative overflow-hidden technical-grid">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-brand-blue" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-blue">Protocol Stack // Architecture</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter kerning-ultra uppercase">
              Core Tech Stack
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm md:text-base font-medium leading-relaxed">
            Our multi-tier tech stack compiles high-level requirements into high-performance binaries. Engineered for reliability, speed, and clean craftsmanship.
          </p>
        </div>

        {/* Tech Stack Interaction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center">

          {/* Layer List - Column 1 */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-4">
              Architecture Tiers [Interactive]
            </div>
            {techLayers.map((layer, index) => (
              <button
                key={index}
                onClick={() => setActiveLayer(index)}
                className={`w-full text-left p-6 border transition-all duration-500 flex items-start gap-6 group relative ${
                  activeLayer === index
                    ? 'border-brand-blue bg-brand-blue/[0.03] shadow-sm'
                    : 'border-gray-100 hover:border-gray-300 bg-transparent'
                }`}
              >
                {/* Visual Line Accent */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-brand-blue transition-transform duration-500 ${
                  activeLayer === index ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                }`} />

                <span className="text-xs font-mono font-bold text-brand-blue bg-brand-blue/10 px-2 py-1 rounded-sm">
                  {layer.level}
                </span>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold tracking-tight text-gray-900 group-hover:text-black transition-colors">
                    {layer.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
                    {layer.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Code/Visualization Simulator - Column 2 */}
          <div className="lg:col-span-6">
            <div className="border border-gray-200 bg-gray-50 p-8 font-mono text-xs text-gray-800 relative overflow-hidden shadow-inner">

              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                </div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest">
                  STACK_INSPECT // LAYER_0{activeLayer + 1}
                </div>
              </div>

              {/* Dynamic Stack Output */}
              <div className="space-y-4">
                <div>
                  <span className="text-brand-blue"># query</span> <span className="text-gray-400">sabeer --inspect --level={techLayers[activeLayer].level}</span>
                </div>
                <div className="text-gray-400">
                  // Inspecting sub-system modules and real-time environment variables...
                </div>
                <div>
                  <span className="text-emerald-600">✔ SYSTEM_STATUS:</span> <span className="font-bold">{techLayers[activeLayer].status}</span>
                </div>
                <div>
                  <span className="text-brand-blue font-bold">CORE_ARCH:</span> <span className="text-gray-900 font-bold">{techLayers[activeLayer].title}</span>
                </div>
                <div>
                  <span className="text-brand-blue font-bold">COMPILED_TECH:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {techLayers[activeLayer].tech.map((t, idx) => (
                      <span key={idx} className="bg-white border border-gray-200 text-gray-700 px-2.5 py-1 text-[10px] rounded-sm shadow-sm font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-[11px] leading-relaxed text-gray-500 font-sans italic">
                    "{techLayers[activeLayer].description}"
                  </p>
                </div>
              </div>

              {/* Watermark Matrix Grid */}
              <div className="absolute bottom-2 right-2 text-[8px] text-gray-300 uppercase tracking-widest pointer-events-none">
                SABEER PROTOCOL // OK
              </div>
            </div>
          </div>

        </div>

        {/* Timeline Protocol Section */}
        <div className="border-t border-gray-100 pt-32">
          <div className="text-center mb-20">
            <span className="text-[10px] font-mono uppercase text-brand-blue tracking-[0.2em]">Engineering Chronicles</span>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter kerning-ultra uppercase mt-2">
              System Timeline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineMilestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 border border-gray-100 hover:border-gray-200 bg-white transition-all duration-500 hover:shadow-sm"
              >
                {/* Year Badge */}
                <div className="text-xs font-mono font-bold text-brand-blue mb-6 border-b border-gray-100 pb-4 flex justify-between items-center">
                  <span>{milestone.year}</span>
                  <span className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-brand-blue rounded-full transition-colors" />
                </div>

                <h4 className="text-lg font-bold tracking-tight text-gray-900 group-hover:text-black mb-3">
                  {milestone.title}
                </h4>

                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
