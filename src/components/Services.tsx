import { motion } from 'motion/react';

const services = [
  {
    title: "AI Product Design",
    description: "Architecting intelligent interfaces that bridge the gap between human intent and machine execution."
  },
  {
    title: "Web Experience Engineering",
    description: "Developing high-performance, cinematic digital environments with unmatched technical precision."
  },
  {
    title: "Creative Systems Architecture",
    description: "Building scalable design languages and systemic frameworks for future-facing brands."
  },
  {
    title: "Brand Identity for Tech Companies",
    description: "Crafting digital-first identities that communicate elite engineering and visionary intent."
  },
  {
    title: "High-performance Frontend Systems",
    description: "Optimizing every frame and interaction for fluid, GPU-accelerated digital storytelling."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-40 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-brand-blue mb-20"
        >
          Systems // Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-12 md:p-16 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[400px] hover:bg-brand-blue transition-colors duration-700"
            >
              <h3 className="text-3xl md:text-4xl font-bold tracking-tighter kerning-ultra group-hover:text-white transition-colors duration-700 max-w-[250px]">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-500 group-hover:text-white/80 transition-colors duration-700 max-w-sm font-medium leading-relaxed">
                {service.description}
              </p>

              <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
