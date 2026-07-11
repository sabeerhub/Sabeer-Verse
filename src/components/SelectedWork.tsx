import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
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
  githubUrl?: string;
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
    url: "https://zero-bank-phi.vercel.app/",
    githubUrl: "https://github.com/sabeerhub"
  },
  {
    title: "FUD Health Management System",
    category: "Healthcare System",
    outcome: "A complete healthcare platform connecting administrators, doctors, pharmacists, and patients in one intelligent system.",
    stack: ["React", "Firebase", "Tailwind CSS"],
    metrics: "LIVE",
    metricsLabel: "Production Status",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1200",
    url: "https://fud-heath.vercel.app/",
    githubUrl: "https://github.com/sabeerhub"
  },
  {
    title: "TimeLux",
    category: "Premium E-Commerce",
    outcome: "Premium e-commerce platform for luxury watches with payment integration and a powerful admin dashboard.",
    stack: ["Next.js", "Supabase", "Korapay", "Tailwind CSS"],
    metrics: "LIVE",
    metricsLabel: "Production Status",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1200",
    url: "https://timeluxy.vercel.app/",
    githubUrl: "https://github.com/sabeerhub"
  },
  {
    title: "Personal Portfolio",
    category: "System Identity",
    outcome: "Official portfolio showcasing my experience, projects, design philosophy, and technical expertise.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    metrics: "LIVE",
    metricsLabel: "Production Status",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
    url: "https://sabeer-ai.vercel.app/",
    githubUrl: "https://github.com/sabeerhub"
  }
];

export default function SelectedWork() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Monitor vertical scroll of the pinned container
  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  // Translate vertical scroll progress into negative horizontal shift
  // With 4 items, moving -75% will show slides 1 to 4 fully
  const xTranslation = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // Calculate active index on scroll change to update the progress indicator
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const slidePercentage = 1 / projects.length;
    const index = Math.min(
      Math.floor(latest / slidePercentage),
      projects.length - 1
    );
    setActiveProjectIndex(index);
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    // Elegant, vertical stacked layout on mobile viewports for perfect usability & performance
    return (
      <section id="work" className="py-24 bg-white text-black relative overflow-hidden technical-grid">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">

          {/* Section Header */}
          <div className="mb-16 flex justify-between items-center">
            <h2 className="text-4xl font-bold tracking-tighter kerning-ultra uppercase">
              WORK
            </h2>
            <div className="text-xs font-mono font-bold text-brand-blue">
              01 - 04
            </div>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="border-b border-gray-100 pb-12 last:border-0"
              >
                {/* Media Column */}
                <div className="relative aspect-[16/10] bg-gray-50 overflow-hidden border border-gray-100 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 text-[9px] font-mono uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                    <span>ID_CODE: SV_0{index + 1}</span>
                  </div>
                </div>

                {/* Meta details */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-blue font-bold">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-black">{project.metrics}</span>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {project.outcome}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono font-bold text-gray-700 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-6">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest font-bold text-black hover:text-brand-blue transition-colors"
                    >
                      Visit Project <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest font-bold text-gray-400 hover:text-brand-blue transition-colors"
                      >
                        GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>
    );
  }

  return (
    <section
      ref={targetRef}
      id="work"
      className="relative h-[400vh] bg-white text-black"
    >
      {/* Sticky screen container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-12">

        {/* Fixed Section Header */}
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex justify-between items-center z-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter kerning-ultra uppercase">
            WORK
          </h2>

          {/* Subtle Project Progress Indicator */}
          <div className="flex items-center gap-6 font-mono text-sm font-bold">
            <span className="text-brand-blue">
              0{activeProjectIndex + 1} / 0{projects.length}
            </span>
            <div className="flex gap-2">
              {projects.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                    idx === activeProjectIndex ? 'bg-brand-blue' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Moving Slider Track */}
        <div className="relative flex-1 flex items-center z-10">
          <motion.div
            style={{ x: xTranslation }}
            className="flex w-[400vw] h-[70vh] items-center"
          >
            {projects.map((project, index) => {
              const isActive = index === activeProjectIndex;
              return (
                <div
                  key={index}
                  className="w-screen h-full flex items-center justify-center px-6 md:px-12"
                >
                  <motion.div
                    animate={isActive ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0.25, scale: 0.96, y: 20 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[1250px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                  >

                    {/* Media Column - Parallax Offset */}
                    <div className="lg:col-span-6 relative aspect-[16/10] bg-gray-50 overflow-hidden border border-gray-100 hover:border-brand-blue/30 transition-all duration-700">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        animate={isActive ? { scale: 1.02 } : { scale: 0.98 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 text-[9px] font-mono uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                        <span>ID_CODE: SV_0{index + 1}</span>
                      </div>
                    </div>

                    {/* Meta Info Column */}
                    <div className="lg:col-span-6 space-y-6 lg:pl-6">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-blue font-bold">
                          {project.category}
                        </span>
                        <div className="text-right">
                          <div className="text-2xl md:text-3xl font-mono font-bold tracking-tight text-black">
                            {project.metrics}
                          </div>
                          <div className="text-[9px] font-mono uppercase text-gray-400 tracking-wider">
                            {project.metricsLabel}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-3xl md:text-5xl font-black tracking-tighter kerning-ultra uppercase text-gray-900">
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

                      {/* Action Links */}
                      <motion.div
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="pt-4 flex items-center gap-8"
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-black hover:text-brand-blue transition-colors cursor-pointer"
                        >
                          Visit Project <ArrowUpRight className="w-4 h-4" />
                        </a>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-gray-400 hover:text-brand-blue transition-colors cursor-pointer"
                          >
                            GitHub <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </motion.div>

                    </div>

                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Floating background grids / light layout lines */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gray-100 z-10 max-w-[1400px] mx-auto" />
      </div>
    </section>
  );
}
