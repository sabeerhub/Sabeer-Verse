import { motion } from 'motion/react';
import { Terminal, Code, PenTool, ArrowRight, ExternalLink, Cpu } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Zero Bank",
    description: "A futuristic AI-driven financial ecosystem. Automated wealth management with high-frequency intelligent trading protocols.",
    icon: <Terminal size={32} className="text-sabeer-primary" aria-hidden="true" />,
    tech: ["React", "AI Engine", "Web3"],
    impact: "Revolutionizing digital finance with autonomous systems.",
    status: "Live"
  },
  {
    id: 2,
    title: "AI Core System",
    description: "The central intelligence of Sabeer Verse. A multi-model AI system designed for complex problem solving and code generation.",
    icon: <Cpu size={32} className="text-sabeer-primary" aria-hidden="true" />,
    tech: ["Python", "TensorFlow", "Next.js"],
    impact: "Scaling development speed by 10x through AI automation.",
    status: "Beta"
  },
  {
    id: 3,
    title: "NexGen Studio",
    description: "An immersive design platform for building futuristic web experiences with AI-powered layout generation.",
    icon: <PenTool size={32} className="text-sabeer-primary" aria-hidden="true" />,
    tech: ["Framer Motion", "React", "AI UI"],
    impact: "Democratizing high-end digital design for startups.",
    status: "Coming Soon"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-32 bg-sabeer-bg relative overflow-hidden" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-[1px] w-8 bg-sabeer-primary" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sabeer-primary">Project Showcase</span>
            </div>
            <motion.h2
              id="products-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white uppercase leading-[0.9]"
            >
              Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Ecosystem</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg font-medium max-w-md"
          >
            A collection of world-class products and experimental systems built for the future.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" role="list">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative glass rounded-[2.5rem] p-10 border border-white/5 hover:border-sabeer-primary/50 transition-all duration-500 hover:-translate-y-4 overflow-hidden"
            >
              {/* Mockup Aesthetic */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-sabeer-primary/5 rounded-full blur-[60px] group-hover:bg-sabeer-primary/10 transition-all duration-1000" />

              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {product.icon}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border ${
                  product.status === 'Live' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                  product.status === 'Beta' ? 'bg-sabeer-primary/10 text-sabeer-primary border-sabeer-primary/20' :
                  'bg-white/5 text-gray-500 border-white/10'
                }`}>
                  {product.status}
                </span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">{product.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed mb-8 text-sm h-20">
                  {product.description}
                </p>

                <div className="mb-8 p-6 bg-white/5 rounded-3xl border border-white/5 group-hover:border-white/10 transition-colors">
                  <div className="text-[10px] uppercase tracking-widest text-sabeer-primary font-black mb-3">Innovation Impact</div>
                  <p className="text-xs text-white font-bold leading-relaxed">{product.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {product.tech.map((t, i) => (
                    <span key={i} className="text-[9px] uppercase tracking-widest font-black text-gray-500 px-3 py-1 bg-white/5 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white group-hover:text-sabeer-primary transition-colors"
                >
                  View Case Study <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
