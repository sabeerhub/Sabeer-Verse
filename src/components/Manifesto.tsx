import { motion } from 'motion/react';

const manifestoLines = [
  "We build systems, not pages.",
  "Design is engineered, not decorated.",
  "Interfaces are intelligence."
];

export default function Manifesto() {
  return (
    <section className="py-40 bg-white px-6 lg:px-0">
      <div className="max-w-[1200px] mx-auto">
        <div className="space-y-12">
          {manifestoLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter kerning-ultra max-w-4xl"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
