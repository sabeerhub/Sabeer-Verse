import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  outcome: string;
  stack: string[];
  metrics: string;
  metricsLabel: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Zero Bank",
    category: "Fintech Solution",
    outcome: "AI-powered digital wallet for secure money transfers, transaction history, and modern banking experience.",
    stack: ["React", "Firebase", "Tailwind CSS"],
    metrics: "LIVE",
    metricsLabel: "Production Status",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    url: "https://zero-bank-phi.vercel.app/"
  },
  {
    title: "FUD Health Management System",
    category: "Healthcare System",
    outcome: "A complete healthcare platform connecting administrators, doctors, pharmacists, and patients in one intelligent system.",
    stack: ["React", "Firebase", "Tailwind CSS"],
    metrics: "LIVE",
    metricsLabel: "Production Status",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1200",
    url: "https://fud-heath.vercel.app/"
  },
  {
    title: "TimeLux",
    category: "Premium E-Commerce",
    outcome: "Premium e-commerce platform for luxury watches with payment integration and a powerful admin dashboard.",
    stack: ["Next.js", "Supabase", "Korapay", "Tailwind CSS"],
    metrics: "LIVE",
    metricsLabel: "Production Status",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1200",
    url: "https://timeluxy.vercel.app/"
  },
  {
    title: "Personal Portfolio",
    category: "System Identity",
    outcome: "Official portfolio showcasing my experience, projects, design philosophy, and technical expertise.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    metrics: "LIVE",
    metricsLabel: "Production Status",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
    url: "https://sabeer-ai.vercel.app/"
  }
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-40 bg-white text-black relative overflow-hidden technical-grid">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter kerning-ultra uppercase">
            WORK
          </h2>
        </div>

        {/* Projects Column Layout */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-gray-100 pb-20 last:border-0 last:pb-0"
            >

              {/* Product Media Column - Col 1 */}
              <div className="lg:col-span-6 relative aspect-[16/10] bg-gray-50 overflow-hidden border border-gray-100 group-hover:border-brand-blue/30 transition-all duration-700">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />

                {/* Micro tech overlay */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 text-[9px] font-mono uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                  <span>ID_CODE: SV_0{index + 1}</span>
                </div>
              </div>

              {/* Product Meta Column - Col 2 */}
              <div className="lg:col-span-6 space-y-6 lg:pl-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-blue font-bold">
                    {project.category}
                  </span>

                  {/* Floating Metric Badge */}
                  <div className="text-right">
                    <div className="text-2xl md:text-3xl font-mono font-bold tracking-tight text-black">
                      {project.metrics}
                    </div>
                    <div className="text-[9px] font-mono uppercase text-gray-400 tracking-wider">
                      {project.metricsLabel}
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl md:text-5xl font-black tracking-tighter kerning-ultra uppercase text-gray-900 group-hover:text-black transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                  {project.outcome}
                </p>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-[9px] font-mono uppercase text-gray-400 tracking-wider mb-3">
                    System Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-bold text-gray-700 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-black hover:text-brand-blue group-hover:text-brand-blue transition-colors cursor-pointer"
                  >
                    Visit Project <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
