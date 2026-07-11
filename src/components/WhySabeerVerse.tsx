import { motion } from 'motion/react';
import { Target, Compass, Cpu, HardDrive } from 'lucide-react';

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
    title: 'Build for Scale',
    subtitle: 'High scalability thresholds.',
    description: 'Modern architectures built for growth. Ready to scale and support heavy workload surges flawlessly.',
    metric: '99.9%',
    metricLabel: 'Runtime Fidelity'
  },
  {
    icon: Compass,
    title: 'Premium Design',
    subtitle: 'Systemic layout principles.',
    description: 'Beautiful interfaces focused on user experience. Engineered with elite swiss-grid metrics.',
    metric: '100%',
    metricLabel: 'Systemic Cohesion'
  },
  {
    icon: Cpu,
    title: 'AI First',
    subtitle: 'Deep intelligence engines.',
    description: 'Every product leverages modern AI capabilities to streamline user flows and deliver immediate outputs.',
    metric: '<20ms',
    metricLabel: 'Cognitive Response'
  },
  {
    icon: HardDrive,
    title: 'Performance',
    subtitle: 'Highly compiled speed layers.',
    description: 'Fast, secure, and production-ready applications structured on leading software engineering standards.',
    metric: '120FPS',
    metricLabel: 'Fluid Motion Loop'
  }
];

export default function WhySabeerVerse() {
  return (
    <section id="why" className="py-40 bg-black text-white relative overflow-hidden technical-grid-dense">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter kerning-ultra uppercase leading-[0.95]">
            WHY US
          </h2>
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

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
