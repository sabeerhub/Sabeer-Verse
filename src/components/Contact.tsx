import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/sabeerverse@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Enquiry from Sabeer-Verse Website",
          _template: "table"
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-sabeer-bg relative overflow-hidden" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="h-[1px] w-8 bg-sabeer-primary" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sabeer-primary">Contact Protocol</span>
            </div>

            <h2 id="contact-heading" className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white uppercase leading-[0.9] mb-10">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sabeer-primary to-sabeer-accent">The Future</span>
            </h2>

            <p className="text-gray-400 text-lg font-medium leading-relaxed mb-12 max-w-md">
              Whether you're looking for AI solutions, high-end web systems, or a visionary partnership, our doors are always open.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail size={20} />, label: 'Email', value: 'sabeerverse@gmail.com', href: 'mailto:sabeerverse@gmail.com' },
                { icon: <MapPin size={20} />, label: 'Base', value: 'Global (Remote-First)' },
                { icon: <Phone size={20} />, label: 'Comm', value: '+1 (234) 567-890', href: 'tel:+1234567890' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-sabeer-primary group-hover:scale-110 group-hover:bg-sabeer-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-xl font-bold text-white hover:text-sabeer-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-xl font-bold text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-sabeer-primary/20 to-sabeer-accent/20 rounded-[3rem] blur-2xl opacity-50" />

            <form onSubmit={handleSubmit} className="relative glass p-10 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-8" aria-label="Contact form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-gray-500">Subject Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-sabeer-primary transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-gray-500">Comm Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-sabeer-primary transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-gray-500">Transmission Data</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-sabeer-primary transition-all font-medium resize-none"
                  placeholder="Describe your vision..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-black uppercase tracking-widest rounded-2xl transition-all hover:bg-sabeer-primary hover:text-white disabled:opacity-50 overflow-hidden shadow-2xl shadow-white/5"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitting ? 'Transmitting...' : submitted ? 'Message Received' : 'Initiate Contact'}
                  {!isSubmitting && !submitted && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sabeer-primary to-sabeer-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              {submitted && (
                <p className="text-sabeer-accent text-xs font-black text-center uppercase tracking-widest flex items-center justify-center gap-2">
                  <Sparkles size={14} /> Transmission successful. We will respond shortly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
