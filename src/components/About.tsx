import { motion } from 'motion/react';
import { BrainCircuit, Cpu, Globe, Rocket, ShieldCheck, Sparkles } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <BrainCircuit size={28} className="text-sabeer-accent" />,
      title: "AI Core",
      description: "Intelligent systems integrated into the foundation of every product we build."
    },
    {
      icon: <Globe size={28} className="text-sabeer-accent" />,
      title: "Global Reach",
      description: "A borderless innovation hub serving a worldwide community of creators."
    },
    {
      icon: <Cpu size={28} className="text-sabeer-accent" />,
      title: "System Thinking",
      description: "Engineering robust, scalable architectures for the next generation of web."
    },
    {
      icon: <ShieldCheck size={28} className="text-sabeer-accent" />,
      title: "Secure Future",
      description: "Ensuring privacy and security in an increasingly AI-driven digital landscape."
    }
  ];

  return (
    <section id="about" className="py-32 bg-sabeer-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-[1px] w-8 bg-sabeer-primary" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sabeer-primary">The Vision</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white uppercase leading-[0.9]">
              Redefining <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Digital Intelligence</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg font-medium leading-relaxed">
              <p>
                Sabeer Verse is more than a technology company; it is a futuristic digital innovation ecosystem. We are building the bridge between human ingenuity and artificial intelligence.
              </p>
              <p>
                Focused on AI systems, high-performance web engineering, and immersive product experiences, we aim to deliver solutions that are not just functional, but transformative.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="p-6 glass rounded-3xl border border-white/5">
                <div className="text-3xl font-black text-white mb-1">01.</div>
                <div className="text-xs uppercase tracking-widest text-sabeer-primary font-bold">Innovation</div>
              </div>
              <div className="p-6 glass rounded-3xl border border-white/5">
                <div className="text-3xl font-black text-white mb-1">02.</div>
                <div className="text-xs uppercase tracking-widest text-sabeer-primary font-bold">Excellence</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="group relative glass p-8 rounded-[2.5rem] border border-white/5 hover:border-sabeer-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                  <Sparkles size={64} className="text-white" />
                </div>

                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-sabeer-primary/20 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-white">{pillar.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{pillar.description}</p>

                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-sabeer-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  Protocol Active <Rocket size={12} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
