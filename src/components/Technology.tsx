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
    title: 'Frontend Engineering',
    description: 'Building fast, responsive, and accessible web applications with modern frontend technologies.',
    status: 'Production Ready',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'Framer Motion']
  },
  {
    level: 'L2',
    title: 'Backend Systems',
    description: 'Secure backend architecture for authentication, databases, storage, and scalable cloud applications.',
    status: 'Production Ready',
    tech: ['Firebase Authentication', 'Cloud Firestore', 'Supabase', 'Node.js']
  },
  {
    level: 'L3',
    title: 'Product Design',
    description: 'Designing intuitive interfaces focused on clarity, usability, and exceptional user experience.',
    status: 'Production Ready',
    tech: ['Figma', 'shadcn/ui', 'Framer Motion', 'GSAP']
  },
  {
    level: 'L4',
    title: 'Artificial Intelligence',
    description: 'Integrating modern AI models into products to improve workflows and user experiences.',
    status: 'Production Ready',
    tech: ['OpenAI', 'Gemini', 'Claude']
  },
  {
    level: 'L5',
    title: 'Deployment',
    description: 'Automated deployment pipelines with reliable hosting and continuous delivery.',
    status: 'Production Ready',
    tech: ['GitHub', 'Vercel', 'GitHub Actions']
  }
];

const timelineMilestones = [
  {
    year: '2024',
    title: 'Modern Web Development',
    description: 'Started learning modern web development and AI-powered product development.'
  },
  {
    year: '2025',
    title: 'Zero Bank & FUD Health',
    description: 'Built Zero Bank (modern digital wallet platform) and FUD Health Management System (complete healthcare management platform).'
  },
  {
    year: '2026',
    title: 'TimeLux & Build-V',
    description: 'Launched TimeLux luxury e-commerce platform and founded Build-V, a developer community focused on collaboration. Participated in the AMD Developer Hackathon.'
  },
  {
    year: 'Next',
    title: 'Launch Schlverse',
    description: 'Launch Schlverse, a modern education platform for schools.'
  },
  {
    year: 'Future',
    title: 'Ecosystem Expansion',
    description: 'Expand the Sabeer-Verse product ecosystem with AI-powered software for businesses, education, healthcare, and fintech.'
  }
];

export default function Technology() {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  return (
    <section id="tech" className="py-40 bg-white text-black relative overflow-hidden technical-grid">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter kerning-ultra uppercase">
            TECH
          </h2>
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
                  STACK OVERVIEW
                </div>
              </div>

              {/* Dynamic Stack Output */}
              <div className="space-y-4 text-xs font-mono">
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 border-b border-gray-100 pb-4">
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Framework:</span>
                    <span className="text-gray-900 font-bold">Next.js 15</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Language:</span>
                    <span className="text-gray-900 font-bold">TypeScript</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Database:</span>
                    <span className="text-gray-900 font-bold">Firestore</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Authentication:</span>
                    <span className="text-gray-900 font-bold">Firebase Auth</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Deployment:</span>
                    <span className="text-gray-900 font-bold">Vercel</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Repository:</span>
                    <span className="text-gray-900 font-bold">GitHub</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Status:</span>
                    <span className="text-emerald-600 font-bold">Production Ready</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 block text-[10px] uppercase">Active Category:</span>
                    <span className="text-brand-blue font-bold uppercase">{techLayers[activeLayer].title}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-[11px] leading-relaxed text-gray-500 font-sans italic">
                    "{techLayers[activeLayer].description}"
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {techLayers[activeLayer].tech.map((t, idx) => (
                      <span key={idx} className="bg-white border border-gray-200 text-gray-700 px-2 py-0.5 text-[9px] rounded-sm font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Watermark Matrix Grid */}
              <div className="absolute bottom-2 right-2 text-[8px] text-gray-300 uppercase tracking-widest pointer-events-none">
                SABEER-VERSE // COHESION
              </div>
            </div>
          </div>

        </div>

        {/* Timeline Protocol Section */}
        <div className="border-t border-gray-100 pt-32">
          <div className="mb-20">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter kerning-ultra uppercase mt-2">
              TIMELINE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
