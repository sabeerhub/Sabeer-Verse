import { motion } from 'motion/react';
import { Target, Pocket, Eye, Cpu, Compass, HardDrive } from 'lucide-react';

interface Feature {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
}

const features: Feature[] = [
  {
    icon: Target,
    title: 'Extreme Technical Precision',
    subtitle: 'Zero compromises on code quality.',
    description: 'Every interaction, pixel, and transition is built to work flawlessly across devices. We compile lightweight pipelines that run at constant high refresh rates.',
    metric: '99.9%',
    metricLabel: 'Runtime Fidelity'
  },
  {
    icon: Compass,
    title: 'Intelligent Design Systems',
    subtitle: 'Systemic consistency across media.',
    description: 'We don’t draw static pages; we compile responsive, scalable layout protocols. Built with modular codebases to grow with your technological evolution.',
    metric: '100%',
    metricLabel: 'Systemic Cohesion'
  },
  {
    icon: Cpu,
    title: 'Integrated AI Architecture',
    subtitle: 'Deeply embedded intelligence models.',
    description: 'We natively implement advanced context models, vector stores, and programmatic LLM triggers straight into your user-facing layouts with zero third-party lag.',
    metric: '<20ms',
    metricLabel: 'Cognitive Response'
  },
  {
    icon: HardDrive,
    title: 'Timeless Aesthetic Craft',
    subtitle: 'Luxury editorial aesthetics.',
    description: 'Combining clean swiss grid principles with modern tech-noir minimalism. We design websites and products that continue to look cutting-edge for decades.',
    metric: '0.0',
    metricLabel: 'Unnecessary Noise'
  }
];

export default function WhySabeerVerse() {
  return (
    <section id="why" className="py-40 bg-black text-white relative overflow-hidden technical-grid-dense">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-blue mb-4 block">
              Value Protocol // The Edge
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter kerning-ultra uppercase leading-[0.95]">
              Why Work With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-blue to-white">Sabeer-Verse</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
              We operate at the convergence of advanced software engineering and world-class product design. No templates, no fluff.
            </p>
          </div>
        </div>

        {/* Value Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative border border-white/10 hover:border-brand-blue/50 p-10 md:p-12 bg-white/[0.01] hover:bg-brand-blue/[0.02] transition-all duration-700 flex flex-col justify-between"
              >
                {/* Micro Border Glow */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/0 to-transparent group-hover:via-brand-blue/30 transition-all duration-700" />

                <div>
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-3 bg-white/5 border border-white/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-black transition-all duration-500 rounded-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-mono font-bold tracking-tight text-white group-hover:text-brand-blue transition-colors">
                        {feat.metric}
                      </div>
                      <div className="text-[9px] font-mono uppercase text-gray-500 tracking-wider">
                        {feat.metricLabel}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase text-brand-blue/70 tracking-widest block mb-2">
                    {feat.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                    {feat.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed font-medium">
                    {feat.description}
                  </p>
                </div>

                {/* technical decoration footer */}
                <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-gray-600">
                  <span>METRIC_BOUND: ACCURATE</span>
                  <span>[0{index + 1} // SYS]</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
