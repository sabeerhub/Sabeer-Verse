import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Calendar, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'AI Product Design',
    budget: '$30K - $70K',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate high-fidelity network handshake and database replication latency
    setTimeout(() => {
      setStatus('success');
      // Reset after success
      setFormState({
        name: '',
        email: '',
        service: 'AI Product Design',
        budget: '$30K - $70K',
        message: ''
      });
    }, 1800);
  };

  const services = [
    'AI Product Design',
    'Web Experience Engineering',
    'Creative Systems Architecture',
    'Brand Identity for Tech',
    'High-performance Frontend'
  ];

  const budgets = [
    '$15K - $30K',
    '$30K - $70K',
    '$70K+'
  ];

  return (
    <section id="contact" className="py-40 bg-brand-blue text-white relative overflow-hidden technical-grid-dense">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue via-black/10 to-brand-blue pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Headline Column */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/70 mb-4 block">
                Let's Build // Communication
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter kerning-ultra uppercase leading-[0.85] text-white">
                Start a <br /> project
              </h2>
            </div>

            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-sm font-medium">
              Ready to construct a high-performance system? Complete the form to establish a secure intelligence handshake with Sabeer-Verse.
            </p>

            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-sm text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest">EMAIL DEPT</div>
                  <a href="mailto:hello@sabeer-verse.com" className="text-base md:text-lg font-bold hover:underline">
                    hello@sabeer-verse.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-sm text-white">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest">SCHEDULE</div>
                  <button className="text-base md:text-lg font-bold hover:underline text-left">
                    Book Architectural Call
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white text-black p-8 md:p-12 shadow-2xl relative">

            {/* Corner Decorative Specs */}
            <div className="absolute top-4 right-4 text-[9px] font-mono text-gray-400 tracking-wider">
              PROTOCOL_SECURE: SSL/WSS
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
                  <h3 className="text-3xl font-bold tracking-tight uppercase kerning-ultra">Handshake Initiated</h3>
                  <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
                    Sabeer-Verse systems received your corporate dossier. Our coordination engine is scheduling your architecture review session. Expected dispatch <span className="font-mono text-brand-blue font-bold">&lt; 2 hrs</span>.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-xs font-mono uppercase tracking-widest font-bold border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Reset Connection
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                        Full Name / corporate agent
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
                        Corporate Email
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

                  {/* Row 2: Service Selector */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                      Target System / Capabilities
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

                  {/* Row 3: Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                      Project Allocation Pool
                    </label>
                    <div className="flex gap-4">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormState({ ...formState, budget: b })}
                          className={`flex-1 text-center py-3 text-xs font-mono border transition-all duration-300 ${
                            formState.budget === b
                              ? 'border-brand-blue bg-brand-blue/5 text-brand-blue font-bold'
                              : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: Brief Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                      Project Brief / Architectural Specs
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 focus:border-brand-blue px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                      placeholder="Explain what scalable design protocols or custom AI integrations your system needs..."
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
                      <span>Validation Failure: Please fill in all system specs accurately.</span>
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
                        <span>Compiling payload schemas...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit System Request</span>
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
