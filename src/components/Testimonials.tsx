import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const partners = [
  'Zero Bank', 'TimeLux', 'FUD Health', 'Sabeer Portfolio'
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
              Trusted by Early Users & Partners
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm md:text-base font-medium leading-relaxed">
            Sabeer-Verse is trusted by early adopters, platform clients, and collaborative networks globally.
          </p>
        </div>

        {/* Testimonial Placeholder Card */}
        <div className="max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-300 transition-all duration-500 text-center space-y-6"
          >
            <div className="text-brand-blue flex justify-center mb-2">
              <Quote className="w-12 h-12 opacity-30" />
            </div>

            <p className="text-lg md:text-2xl text-gray-800 font-medium leading-relaxed tracking-tight">
              "More success stories are coming as Sabeer-Verse continues to launch products and work with clients worldwide."
            </p>

            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              Sabeer-Verse Development Log // Verified Release Pipeline
            </div>
          </motion.div>
        </div>

        {/* Partners Banner */}
        <div className="border-t border-gray-100 pt-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-[10px] font-mono uppercase text-gray-400 tracking-widest">
            CORE PLATFORM PARTNERSHIPS
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
