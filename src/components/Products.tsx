import { motion } from 'motion/react';
import { Terminal, Code, PenTool, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "AI Prompt Generator",
    description: "Craft the perfect prompt for any AI model. Optimize your inputs to get the exact outputs you need, every time.",
    icon: <Terminal size={40} className="text-sabeer-primary" aria-hidden="true" />,
    features: ["Context-aware suggestions", "Multi-model support", "Prompt library"],
    status: "Live"
  },
  {
    id: 2,
    title: "AI Code Explainer",
    description: "Paste complex code snippets and get simple, human-readable explanations. Perfect for learning and debugging.",
    icon: <Code size={40} className="text-sabeer-primary" aria-hidden="true" />,
    features: ["Syntax highlighting", "Line-by-line breakdown", "Multiple languages"],
    status: "Beta"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "Generate high-quality content for websites, social media, and blogs with a single click.",
    icon: <PenTool size={40} className="text-sabeer-primary" aria-hidden="true" />,
    features: ["SEO optimization", "Tone adjustment", "Bulk generation"],
    status: "Coming Soon"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white relative" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            id="products-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-slate-900"
          >
            Our <span className="text-sabeer-primary">Products</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto font-light"
          >
            Discover the tools we've built to supercharge your workflow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-sabeer-surface rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-sabeer-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-6 right-6">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                  product.status === 'Live' ? 'bg-green-500/10 text-green-600 border border-green-500/20' :
                  product.status === 'Beta' ? 'bg-orange-500/10 text-orange-600 border border-orange-500/20' :
                  'bg-slate-500/10 text-slate-600 border border-slate-500/20'
                }`}>
                  {product.status}
                </span>
              </div>
              
              <div className="mb-6 bg-white shadow-sm border border-slate-100 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-slate-900">{product.title}</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-6 h-24">
                {product.description}
              </p>
              
              <ul className="space-y-2 mb-8 border-t border-slate-200 pt-6" aria-label={`Features of ${product.title}`}>
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-700 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-sabeer-primary mr-3" aria-hidden="true"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact"
                aria-label={`Inquire about ${product.title}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 text-slate-900 font-bold uppercase tracking-wider rounded-lg transition-colors group-hover:bg-sabeer-primary group-hover:text-white group-hover:border-sabeer-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sabeer-primary focus-visible:ring-offset-2"
              >
                Request Access <ArrowRight size={18} aria-hidden="true" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
