import { motion } from 'motion/react';

const projects = [
  {
    title: "NeuroSystem",
    category: "AI Product Design",
    outcome: "Unified 12 intelligence modules into a single, cohesive neural interface.",
    stack: "React / PyTorch / WebGL",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "Vortex Interface",
    category: "Web Engineering",
    outcome: "Achieved 120fps motion fluidity for a high-performance data visualizer.",
    stack: "Next.js / GSAP / Three.js",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "Core Protocol",
    category: "System Architecture",
    outcome: "Designed a scalable design system for a $2B+ fintech ecosystem.",
    stack: "TypeScript / Tailwind / Storybook",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=2000"
  }
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-40 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter kerning-ultra"
          >
            Selected <br /> Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 max-w-xs font-medium"
          >
            A curated exploration of elite digital craftsmanship and intelligent systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer overflow-hidden aspect-[4/5] bg-gray-50"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-brand-blue/60 transition-colors duration-700" />

              <div className="absolute inset-0 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 mb-2">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white tracking-tighter kerning-ultra mb-4">
                  {project.title}
                </h3>
                <p className="text-sm text-white/90 font-medium leading-relaxed mb-6 max-w-[240px]">
                  {project.outcome}
                </p>
                <div className="pt-6 border-t border-white/20">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-white/50">
                    {project.stack}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
