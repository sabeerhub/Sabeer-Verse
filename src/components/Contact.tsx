import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI Product Development',
    message: '',
    timeline: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setFormState({
        name: '',
        email: '',
        company: '',
        service: 'AI Product Development',
        message: '',
        timeline: ''
      });
    }, 1800);
  };

  const services = [
    'AI Product Development',
    'SaaS Development',
    'Web Applications',
    'UI/UX Design',
    'Frontend Engineering',
    'Firebase Development'
  ];

  return (
    <section id="contact" className="py-40 bg-brand-blue text-white relative overflow-hidden technical-grid-dense">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue via-black/10 to-brand-blue pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Headline Column */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter kerning-ultra uppercase leading-[0.85] text-white">
                CONTACT
              </h2>
            </div>

            <div className="space-y-4 pt-6">
              <a
                href="mailto:hello@sabeer-verse.com"
                className="w-full sm:w-auto text-center border border-white/30 hover:border-white text-white font-mono uppercase tracking-widest text-xs font-bold py-4 px-8 inline-flex items-center justify-center gap-2 group transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/sabeerhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-white/20 hover:border-white text-white font-mono uppercase tracking-widest text-xs font-bold py-3.5 px-6 inline-flex items-center justify-center gap-2 group transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub</span>
                </a>
                <a
                  href="https://sabeer-verse.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-white/20 hover:border-white text-white font-mono uppercase tracking-widest text-xs font-bold py-3.5 px-6 inline-flex items-center justify-center gap-2 group transition-all"
                >
                  <span>Start a Project</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white text-black p-8 md:p-12 shadow-2xl relative">

            {/* Corner Title Block */}
            <div className="absolute top-4 right-4 text-[9px] font-mono text-gray-400 tracking-wider uppercase font-bold">
              Contact Form
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="inline-flex p-4 bg-emerald-50 text-emerald-500 rounded-full">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight uppercase kerning-ultra">Message Sent</h3>
                  <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you for reaching out. Sabeer-Verse has received your message and we will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-xs font-mono uppercase tracking-widest font-bold border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    New Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-brand-blue px-4 py-3 text-sm focus:outline-none transition-colors"
                        placeholder="Mustapha Abdulsalam"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-brand-blue px-4 py-3 text-sm focus:outline-none transition-colors"
                        placeholder="mustapha@sabeer-verse.com"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company and Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                        Company (Optional)
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-brand-blue px-4 py-3 text-sm focus:outline-none transition-colors"
                        placeholder="Sabeer-Verse"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="timeline" className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                        Timeline (Optional)
                      </label>
                      <input
                        id="timeline"
                        type="text"
                        value={formState.timeline}
                        onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-brand-blue px-4 py-3 text-sm focus:outline-none transition-colors"
                        placeholder="e.g. 3 months"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Selector */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                      Services
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[160px] overflow-y-auto border border-gray-100 p-2">
                      {services.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setFormState({ ...formState, service: srv })}
                          className={`text-left px-4 py-3 text-xs border font-mono transition-all duration-300 flex justify-between items-center ${
                            formState.service === srv
                              ? 'border-brand-blue bg-brand-blue/5 text-brand-blue font-bold'
                              : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
                          }`}
                        >
                          <span>{srv}</span>
                          {formState.service === srv && (
                            <span className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: Project Details Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 focus:border-brand-blue px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project, your goals, and how Sabeer-Verse can help."
                    />
                  </div>

                  {/* Validation feedback block */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 text-red-600 text-xs font-mono flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>Please fill in all required fields accurately.</span>
                    </motion.div>
                  )}

                  {/* Submit Trigger Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full text-center py-4 bg-black hover:bg-brand-blue text-white hover:text-black text-xs font-mono uppercase tracking-widest font-bold transition-all duration-500 flex justify-center items-center gap-2 group"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-brand-blue" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Start a Conversation</span>
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
