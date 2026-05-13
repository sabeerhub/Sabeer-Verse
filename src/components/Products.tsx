import { motion } from 'motion/react';
import { ExternalLink, Terminal, Shield, Zap, Globe, Cpu } from 'lucide-react';

const products = [
  {
    id: 'zero-bank',
    title: 'Zero Bank',
    tag: 'Fintech Protocol',
    description: 'A revolutionary borderless banking experience powered by AI risk assessment and real-time settlement systems.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    features: ['Instant Settlement', 'AI Risk Analysis', 'Zero Fees'],
    color: 'from-blue-600/20 to-transparent',
    icon: <Shield size={24} className="text-blue-400" />
  },
  {
    id: 'ai-core',
    title: 'AI Core v1',
    tag: 'Intelligence Layer',
    description: 'An enterprise-grade LLM orchestration engine designed for high-throughput automated decision making.',
    tech: ['Python', 'PyTorch', 'Next.js', 'Redis'],
    features: ['99.9% Accuracy', 'Sub-100ms Latency', 'Self-Learning'],
    color: 'from-purple-600/20 to-transparent',
    icon: <Cpu size={24} className="text-purple-400" />
  },
  {
    id: 'globe-mesh',
    title: 'Globe Mesh',
    tag: 'Infrastructure',
    description: 'A distributed edge computing network that brings AI processing closer to the user for immersive experiences.',
    tech: ['Rust', 'WebAssembly', 'Go', 'Docker'],
    features: ['Edge Optimized', 'Hyper-Scale', 'Decentralized'],
    color: 'from-emerald-600/20 to-transparent',
    icon: <Globe size={24} className="text-emerald-400" />
  }
];

export default function Products() {
  return (
    <section id="products" className="py-32 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-sm font-black uppercase tracking-[0.5em] text-sabeer-accent mb-6"
            >
              The Portfolio
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white uppercase"
            >
              Visionary <br /> Engineering
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-lg md:text-xl font-medium max-w-md pb-2 border-l-2 border-sabeer-primary pl-8"
          >
            Showcasing a selection of elite projects that push the boundaries of what's possible in the digital space.
          </motion.p>
        </div>

        <div className="space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Project Visual */}
              <div className="flex-1 w-full group relative">
                <div className={`absolute -inset-4 bg-gradient-to-br ${product.color} rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="relative glass border border-white/10 rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                  {/* Mockup UI */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="w-full h-full p-8 flex flex-col">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      </div>
                      <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-6 relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-8 opacity-10">
                            {product.icon}
                         </div>
                         <div className="h-4 w-1/3 bg-white/10 rounded-full mb-8" />
                         <div className="space-y-4">
                            <div className="h-2 w-full bg-white/5 rounded-full" />
                            <div className="h-2 w-full bg-white/5 rounded-full" />
                            <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                         </div>
                         <div className="mt-12 grid grid-cols-3 gap-4">
                            <div className="h-16 rounded-lg bg-sabeer-primary/10 border border-sabeer-primary/20" />
                            <div className="h-16 rounded-lg bg-white/5 border border-white/10" />
                            <div className="h-16 rounded-lg bg-white/5 border border-white/10" />
                         </div>
                      </div>
                    </div>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-sabeer-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <div className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform">
                        Launch System <ExternalLink size={18} />
                     </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-white/5 border border-white/10">{product.icon}</span>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-sabeer-primary">{product.tag}</span>
                  </div>
                  <h4 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter uppercase">{product.title}</h4>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/70">
                      <Zap size={16} className="text-sabeer-accent" />
                      <span className="text-sm font-bold tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 flex flex-wrap gap-3">
                  {product.tech.map((t) => (
                    <span key={t} className="px-4 py-2 rounded-full glass border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/40">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="flex items-center gap-3 text-white font-black uppercase tracking-[0.2em] text-sm group">
                    <Terminal size={18} className="text-sabeer-primary" />
                    Read Documentation
                    <div className="h-[1px] w-0 group-hover:w-12 bg-sabeer-primary transition-all duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
