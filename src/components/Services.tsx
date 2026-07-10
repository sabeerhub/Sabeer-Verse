import { motion } from 'motion/react';
import { ArrowUpRight, Cpu, Code, Layers, Sparkles, Orbit, ShieldCheck, Database, Smartphone, GraduationCap, TrendingUp } from 'lucide-react';

const services = [
  {
    code: '01 // AI_PD',
    title: "AI Product Development",
    description: "Designing and developing autonomous agent architectures and intelligent workflow templates integrated directly into custom systems.",
    features: ['Cognitive multi-modal designs', 'Embedded prompt loops', 'Adaptive intelligence models'],
    icon: Sparkles
  },
  {
    code: '02 // SAAS_DEV',
    title: "SaaS Development",
    description: "Building scalable, multitenant cloud software with modern subscription routing, administrative control modules, and robust structures.",
    features: ['Automated usage meters', 'High-speed secure portals', 'Clean API integrations'],
    icon: Layers
  },
  {
    code: '03 // WEB_DEV',
    title: "Web Application Development",
    description: "Developing complex, high-performance web systems using cutting-edge tools to achieve extreme operational efficiency.",
    features: ['Clean software design', 'Responsive grid structures', 'Custom backend logic'],
    icon: Code
  },
  {
    code: '04 // UI_UX',
    title: "UI/UX Design",
    description: "Handcrafting luxury visual aesthetics and interactive flows based on swiss grids, beautiful layouts, and physical physics.",
    features: ['High-fidelity interactive blueprints', 'Dynamic layout prototypes', 'Premium micro-brand motion'],
    icon: Orbit
  },
  {
    code: '05 // FE_ENG',
    title: "Frontend Engineering",
    description: "Optimizing code compilation, layouts, and frame-rates to deliver instant-loading performance across standard breakpoints.",
    features: ['Constant 120fps motion loops', 'Optimized bundle structures', 'Clean semantic architectures'],
    icon: Cpu
  },
  {
    code: '06 // FB_DEV',
    title: "Firebase Development",
    description: "Configuring serverless databases, realtime synchronization webs, cloud functions, and authentication shields.",
    features: ['Realtime synchronized engines', 'Secure security configurations', 'Scalable serverless endpoints'],
    icon: Database
  },
  {
    code: '07 // FIN_SOL',
    title: "Fintech Solutions",
    description: "Engineering secure transaction nodes, responsive money routing dashboards, and modern online wallet systems.",
    features: ['End-to-end encrypted tunnels', 'Realtime execution meters', 'Payment gateway configuration'],
    icon: ShieldCheck
  },
  {
    code: '08 // HLTH_SYS',
    title: "Healthcare Systems",
    description: "Structuring intelligent operational platform software linking administrators, doctors, and patients cleanly.",
    features: ['Inter-agency workflow routing', 'Secure record modules', 'Highly semantic layouts'],
    icon: Smartphone
  },
  {
    code: '09 // ED_TECH',
    title: "Education Technology",
    description: "Designing intuitive knowledge modules, online class coordination platforms, and intelligent learning systems.",
    features: ['Interactive dynamic cards', 'Student performance tracking', 'Resource management modules'],
    icon: GraduationCap
  },
  {
    code: '10 // PD_STRAT',
    title: "Product Strategy",
    description: "Providing high-fidelity consulting to guide early-stage concepts and businesses into world-class digital systems.",
    features: ['Comprehensive workflow maps', 'Technical execution timelines', 'Optimized market strategies'],
    icon: TrendingUp
  }
];

export default function Services() {
  return (
    <section id="services" className="py-40 bg-white text-black relative overflow-hidden technical-grid">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter kerning-ultra uppercase">
            SERVICES
          </h2>
        </div>

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-white border border-gray-100 hover:border-brand-blue/35 p-10 md:p-12 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[460px] hover:shadow-lg hover:shadow-brand-blue/[0.03] transition-all duration-700"
              >
                {/* Border accent indicator */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-100 group-hover:bg-brand-blue transition-colors duration-700" />

                <div>
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-[10px] font-mono font-bold text-gray-400 group-hover:text-brand-blue transition-colors duration-500">
                      {service.code}
                    </span>
                    <div className="p-2.5 bg-gray-50 text-gray-700 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors duration-500 rounded-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 group-hover:text-black transition-colors mb-4">
                    {service.title}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-500 group-hover:text-gray-700 transition-colors leading-relaxed font-medium mb-8">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="text-[9px] font-mono uppercase text-gray-400 tracking-wider mb-3">
                    Deliverables:
                  </div>
                  <ul className="space-y-1.5 border-t border-gray-100 pt-3">
                    {service.features.map((f, i) => (
                      <li key={i} className="text-[11px] text-gray-500 flex items-center gap-2">
                        <span className="w-1 h-1 bg-brand-blue rounded-full" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Corner link icon */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight className="w-4 h-4 text-brand-blue" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
