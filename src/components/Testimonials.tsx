import { motion } from 'motion/react';
import { Quote, ArrowUpRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  industry: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Sabeer-Verse did what other groups said was impossible. They re-architected our legacy pipeline into a sub-10ms neural core. Their frontend layout flows like physical water.",
    author: "Elena Rostova",
    role: "VP of Product Engineering",
    organization: "NeuroCore Tech",
    industry: "Synthetic Intelligence"
  },
  {
    quote: "The spatial interface they designed for Sabeer-OS changed our entire design direction. These are not merely digital agencies; they are deeply skilled scientists of future layouts.",
    author: "Marcus Vance",
    role: "Managing Director",
    organization: "Apex Capital Systems",
    industry: "Quantitative Analytics"
  },
  {
    quote: "Their commitment to precision is obsessive. The custom motion and physical physics triggers they coded into our data visualization portal feel physical. Incredible engineering.",
    author: "Siddharth Mehta",
    role: "Founder & CTO",
    organization: "Vortex Labs",
    industry: "Infrastructure Routing"
  }
];

const partners = [
  'NeuroCore', 'Apex Systems', 'Vortex Labs', 'CoreProtocol', 'Aetheric AI'
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-40 bg-white text-black relative overflow-hidden technical-grid">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-brand-blue" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-blue">Endorsements // Validation</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter kerning-ultra uppercase">
              Proven Fidelity
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm md:text-base font-medium leading-relaxed">
            Sabeer-Verse is trusted by elite product founders, executive engineering teams, and visionary technologists worldwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 border border-gray-100 hover:border-gray-300 bg-gray-50/50 hover:bg-white transition-all duration-500 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[380px]"
            >
              <div>
                <div className="text-brand-blue mb-8">
                  <Quote className="w-8 h-8 opacity-40" />
                </div>

                <p className="text-sm md:text-base text-gray-800 font-medium leading-relaxed tracking-tight mb-8">
                  "{test.quote}"
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <div className="font-bold text-gray-900 tracking-tight text-sm md:text-base">
                  {test.author}
                </div>
                <div className="text-xs text-gray-500 font-mono mt-1 flex justify-between items-center">
                  <span>{test.role}, {test.organization}</span>
                  <span className="text-[9px] uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-1.5 py-0.5 font-bold rounded-sm">
                    {test.industry}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Banner */}
        <div className="border-t border-gray-100 pt-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-[10px] font-mono uppercase text-gray-400 tracking-widest">
            TRUSTED PARTNERSHIPS
          </span>
          <div className="flex flex-wrap gap-8 md:gap-16 justify-center items-center">
            {partners.map((partner, idx) => (
              <span
                key={idx}
                className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400 hover:text-brand-blue transition-colors cursor-default"
              >
                // {partner}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
