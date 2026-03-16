import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
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
    <section id="contact" className="py-24 bg-sabeer-surface relative" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-slate-900">
              Get in <span className="text-sabeer-primary">Touch</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12 font-light">
              Ready to build the future? Whether you're a developer, creator, or business looking to integrate AI, we're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white border border-slate-200 shadow-sm rounded-2xl flex items-center justify-center group-hover:border-sabeer-primary/50 transition-colors" aria-hidden="true">
                  <Mail className="text-sabeer-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-1">Email Us</h4>
                  <a href="mailto:sabeerverse@gmail.com" className="text-xl font-medium text-slate-900 hover:text-sabeer-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary rounded-md px-1 -ml-1">sabeerverse@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white border border-slate-200 shadow-sm rounded-2xl flex items-center justify-center group-hover:border-sabeer-primary/50 transition-colors" aria-hidden="true">
                  <MapPin className="text-sabeer-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-1">Location</h4>
                  <p className="text-xl font-medium text-slate-900">Global (Remote-First)</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white border border-slate-200 shadow-sm rounded-2xl flex items-center justify-center group-hover:border-sabeer-primary/50 transition-colors" aria-hidden="true">
                  <Phone className="text-sabeer-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-1">Call Us</h4>
                  <a href="tel:+1234567890" className="text-xl font-medium text-slate-900 hover:text-sabeer-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary rounded-md px-1 -ml-1">+1 (234) 567-890</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-slate-600 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  aria-required="true"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sabeer-primary focus:border-transparent transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-slate-600 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  aria-required="true"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sabeer-primary focus:border-transparent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-slate-600 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  aria-required="true"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sabeer-primary focus:border-transparent transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                aria-live="polite"
                className={`w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold uppercase tracking-wider overflow-hidden rounded-xl transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary focus-visible:ring-offset-2 ${
                  error ? 'bg-red-500 shadow-red-500/20' : 'bg-sabeer-primary shadow-sabeer-primary/20'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : error ? 'Error! Try Again' : 'Send Message'}
                  {!isSubmitting && !submitted && !error && <Send size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />}
                </span>
                {!error && <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sabeer-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />}
              </button>
              {submitted && (
                <p className="text-green-600 text-sm font-medium text-center mt-4">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
              {error && (
                <p className="text-red-500 text-sm font-medium text-center mt-4">
                  Oops! Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
