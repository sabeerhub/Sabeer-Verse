import { motion } from 'motion/react';
import { FlaskConical, Sparkles, Zap } from 'lucide-react';

export default function Labs() {
  return (
    <section id="labs" className="py-24 bg-white relative overflow-hidden" aria-labelledby="labs-heading">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sabeer-primary/10 rounded-full blur-[150px] mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-sabeer-primary to-blue-500 mb-8 shadow-xl shadow-sabeer-primary/20"
        >
          <FlaskConical size={48} className="text-white" aria-hidden="true" />
        </motion.div>

        <motion.h2
          id="labs-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-slate-900"
        >
          Sabeer-Verse <span className="text-transparent bg-clip-text bg-gradient-to-r from-sabeer-primary to-blue-500">Labs</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light mb-12"
        >
          Where crazy ideas become cutting-edge realities. Join our experimental playground to test unreleased AI tools and shape the future of technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl shadow-sm">
            <Sparkles className="text-yellow-500" aria-hidden="true" />
            <div className="text-left">
              <h4 className="font-bold uppercase tracking-wider text-sm text-slate-900">Early Access</h4>
              <p className="text-xs text-slate-500">Test beta features</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl shadow-sm">
            <Zap className="text-blue-500" aria-hidden="true" />
            <div className="text-left">
              <h4 className="font-bold uppercase tracking-wider text-sm text-slate-900">Direct Feedback</h4>
              <p className="text-xs text-slate-500">Shape product roadmaps</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <a href="#contact" className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-sabeer-primary text-white font-black uppercase tracking-widest overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-lg shadow-sabeer-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary focus-visible:ring-offset-2">
            <span className="relative z-10 flex items-center gap-2">
              Apply for Labs Access
            </span>
            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
