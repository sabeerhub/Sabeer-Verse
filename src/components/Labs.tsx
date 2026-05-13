import { motion } from 'motion/react';
import { Cpu, Rocket, Sparkles, Zap } from 'lucide-react';

const technologies = [
  { name: 'React', level: '98%', color: 'from-blue-400 to-blue-600' },
  { name: 'Next.js', level: '95%', color: 'from-gray-400 to-white' },
  { name: 'TypeScript', level: '92%', color: 'from-blue-500 to-indigo-600' },
  { name: 'Tailwind', level: '99%', color: 'from-cyan-400 to-blue-500' },
  { name: 'Firebase', level: '88%', color: 'from-orange-400 to-red-500' },
  { name: 'AI/LLM', level: '90%', color: 'from-purple-400 to-pink-600' },
  { name: 'Python', level: '85%', color: 'from-yellow-400 to-green-500' },
  { name: 'Node.js', level: '94%', color: 'from-green-400 to-emerald-600' }
];

export default function Labs() {
  return (
    <section id="labs" className="py-32 bg-sabeer-bg relative overflow-hidden" aria-labelledby="labs-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white opacity-5" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sabeer-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 border border-white/10 mb-8 shadow-2xl"
          >
            <Cpu size={40} className="text-sabeer-accent" aria-hidden="true" />
          </motion.div>

          <motion.h2
            id="labs-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white uppercase mb-8"
          >
            The Tech <span className="text-sabeer-primary">Protocol</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-medium"
          >
            We utilize an elite stack of technologies to build high-performance, intelligent systems that scale with the speed of thought.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-8 glass rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b opacity-20 group-hover:opacity-100 transition-opacity" />
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">{tech.name}</h3>
                  <span className="text-[10px] font-black text-sabeer-primary uppercase tracking-widest">{tech.level}</span>
                </div>

                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: tech.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className={`h-full bg-gradient-to-r ${tech.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 glass rounded-[3rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-xl">
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Join the Innovation Hub</h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              Experience the future first. Apply for early access to our experimental AI tools and unreleased protocols.
            </p>
          </div>
          <a href="#contact" className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full transition-all hover:scale-105 hover:bg-sabeer-primary hover:text-white shadow-2xl shadow-white/5 active:scale-95">
            Get Access <Zap size={18} className="fill-current" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
