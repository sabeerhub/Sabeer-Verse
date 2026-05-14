import { motion } from 'motion/react';
import { Cpu, Eye, Zap, Target, Star } from 'lucide-react';

export default function Vision() {
  const roadmap = [
    { year: '2024', event: 'AI Core Integration', icon: <Cpu size={20} /> },
    { year: '2025', event: 'Global Mesh Protocol', icon: <Zap size={20} /> },
    { year: '2026', event: 'Autonomous Ecosystems', icon: <Target size={20} /> },
  ];

  return (
    <section id="vision" className="py-32 relative bg-zinc-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-sabeer-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sabeer-accent mb-4"
          >
            <Star size={14} className="fill-current" />
            <span className="text-[10px] font-black uppercase tracking-widest">Future Roadmap</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white uppercase"
          >
            The Future is <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sabeer-primary to-white">Being Built</span> Here
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white flex items-center gap-4">
                <Eye className="text-sabeer-primary" />
                Vision Strategy
              </h3>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                We are transitioning from traditional digital products to autonomous, intelligent ecosystems. Sabeer Verse is at the forefront of this evolution, merging generative AI with hyperscale infrastructure.
              </p>
            </motion.div>

            <div className="space-y-8">
              {roadmap.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-8 group"
                >
                  <div className="text-2xl font-black text-white/20 group-hover:text-sabeer-primary transition-colors duration-500 w-16">
                    {item.year}
                  </div>
                  <div className="flex-1 p-6 rounded-2xl glass border border-white/5 group-hover:border-white/20 transition-all flex items-center justify-between">
                    <span className="text-lg font-bold text-white uppercase tracking-tight">{item.event}</span>
                    <div className="p-2 rounded-lg bg-white/5 text-gray-500 group-hover:text-sabeer-accent transition-colors">
                      {item.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-square glass border border-white/10 rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden"
            >
              {/* Futuristic UI Visualization */}
              <div className="absolute inset-0 bg-grid-white opacity-5" />
              <div className="relative w-full h-full border border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-sabeer-primary rounded-full shadow-[0_0_20px_rgba(0,122,255,1)]" />
                 <div className="w-2/3 h-2/3 border border-white/5 rounded-full flex items-center justify-center">
                    <div className="w-1/2 h-1/2 border border-white/5 rounded-full" />
                 </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center space-y-2">
                    <div className="text-6xl font-black text-white">99%</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-sabeer-accent">Neural Accuracy</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
