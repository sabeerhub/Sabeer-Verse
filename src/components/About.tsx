import { motion } from 'motion/react';
import { BrainCircuit, Globe, Rocket } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <BrainCircuit size={32} className="text-sabeer-primary" />,
      title: "AI-First Approach",
      description: "We integrate artificial intelligence into every layer of our operations, from ideation to deployment."
    },
    {
      icon: <Globe size={32} className="text-sabeer-primary" />,
      title: "Global Ecosystem",
      description: "A borderless startup building tools that empower creators, developers, and businesses worldwide."
    },
    {
      icon: <Rocket size={32} className="text-sabeer-primary" />,
      title: "Rapid Innovation",
      description: "Our unique human-AI hybrid team structure allows us to iterate and launch products at unprecedented speeds."
    }
  ];

  return (
    <section id="about" className="py-24 bg-sabeer-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-slate-900">
              The Story of <span className="text-sabeer-primary">Sabeer-Verse</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6 font-light">
              Sabeer-Verse isn't just another tech startup. We are the world's first fully integrated AI-powered ecosystem where human creativity meets machine intelligence.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
              Founded by Mustapha Abdulsalam, our mission is to democratize AI tools and create a seamless environment where ideas are transformed into reality at the speed of thought. We envision a future where AI isn't just a tool, but a co-founder, developer, and strategist.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-sabeer-primary"></div>
              <span className="text-sm uppercase tracking-widest font-bold text-slate-900">Our Vision</span>
            </div>
            <p className="mt-4 text-xl font-medium italic text-slate-700 border-l-4 border-sabeer-primary pl-4 py-2">
              "To build the ultimate playground for human-AI collaboration."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-sabeer-primary/30 hover:shadow-md transition-all ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="bg-sabeer-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
