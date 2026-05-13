import { motion } from 'motion/react';
import { Layers, Zap, Eye, BarChart3, Binary } from 'lucide-react';

export default function Vision() {
  const features = [
    {
      title: "Neural Architectures",
      desc: "Advanced AI models integrated at the core of digital products.",
      icon: <Binary className="text-sabeer-accent" size={24} />
    },
    {
      title: "Predictive Analytics",
      desc: "Harnessing data to foresee market trends and user behavior.",
      icon: <BarChart3 className="text-sabeer-accent" size={24} />
    },
    {
      title: "Adaptive Interfaces",
      desc: "UI that evolves based on user interaction and context.",
      icon: <Layers className="text-sabeer-accent" size={24} />
    },
    {
      title: "Real-time Intelligence",
      desc: "Instant processing and autonomous decision-making systems.",
      icon: <Zap className="text-sabeer-accent" size={24} />
    }
  ];

  return (
    <section className="py-32 bg-sabeer-bg relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sabeer-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-2xl"
          >
            <Eye size={32} className="text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white uppercase mb-6"
          >
            The Future of <span className="text-sabeer-primary">Intelligence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium"
          >
            We are building a future where technology isn't just a tool, but an intelligent partner that understands and anticipates your needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-[2rem] border border-white/5 hover:border-sabeer-accent/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-white mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 glass rounded-[3rem] border border-white/5 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sabeer-primary/10 via-transparent to-sabeer-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 relative z-10">
            "The future is already being built here."
          </h3>
          <p className="text-sabeer-primary font-bold uppercase tracking-[0.3em] text-[10px] relative z-10">
            Sabeer Verse Innovation Roadmap
          </p>
        </motion.div>
      </div>
    </section>
  );
}
