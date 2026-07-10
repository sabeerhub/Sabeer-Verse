import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Activity, Shield, Terminal, ArrowRight, CornerRightDown, Laptop, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  icon: any;
  metrics: { label: string; value: string; detail: string }[];
  features: string[];
  techSpec: string;
}

const products: Product[] = [
  {
    id: 'zero-bank',
    name: 'Zero Bank',
    category: 'Fintech Portal',
    tagline: 'AI-powered digital wallet for secure transfers.',
    description: 'A modern banking dashboard supporting transaction logging, secure peer-to-peer transfers, and instant performance metrics tracking.',
    icon: Cpu,
    metrics: [
      { label: 'Latency', value: '1.8ms', detail: 'Realtime balance update' },
      { label: 'Uptime', value: '99.99%', detail: 'Secured on Firebase clusters' },
      { label: 'Status', value: 'LIVE', detail: 'Fully operational' }
    ],
    features: [
      'Asynchronous payment handshake protocols',
      'Encrypted ledger logging',
      'Highly responsive balance charts'
    ],
    techSpec: 'Built on React, Firebase, and Tailwind CSS'
  },
  {
    id: 'fud-health',
    name: 'FUD Health Management System',
    category: 'Healthcare Hub',
    tagline: 'Connect administrators, doctors, and patients.',
    description: 'A complete medical management network linking clinicians, pharmaceutical inventories, patients, and ward administrators in one portal.',
    icon: Activity,
    metrics: [
      { label: 'Workflow Speed', value: 'Instant', detail: 'Realtime syncing operations' },
      { label: 'Sync Delay', value: '0.0s', detail: 'Firestore atomic listeners' },
      { label: 'Status', value: 'LIVE', detail: 'Fully operational' }
    ],
    features: [
      'Multi-role secure routing levels',
      'Dynamic inventory dispatch records',
      'Unified diagnostics scheduler'
    ],
    techSpec: 'Built on React, Firebase, and Tailwind CSS'
  },
  {
    id: 'timelux',
    name: 'TimeLux',
    category: 'E-Commerce Protocol',
    tagline: 'Premium watch marketplace with Korapay payment gateways.',
    description: 'An elite e-commerce layout built for custom-branded watch houses. Coupled with powerful administrators backends and secure checkouts.',
    icon: Shield,
    metrics: [
      { label: 'Checkouts', value: 'Secured', detail: 'Quantum-safe checkout handshakes' },
      { label: 'Payments', value: 'Korapay', detail: 'Integrated instant checkouts' },
      { label: 'Status', value: 'LIVE', detail: 'Fully operational' }
    ],
    features: [
      'Rich custom animations and transition buffers',
      'Dynamic inventory controls and dashboards',
      'Instant responsive layouts'
    ],
    techSpec: 'Built on Next.js, Supabase, Korapay, and Tailwind CSS'
  },
  {
    id: 'sabeer-portfolio',
    name: 'Sabeer Portfolio',
    category: 'System Identity',
    tagline: 'Official Sabeer-Verse experience portal.',
    description: 'An authentic high-fidelity directory displaying my professional experience, credentials, philosophy, and software systems.',
    icon: Laptop,
    metrics: [
      { label: 'Aesthetic', value: 'Premium', detail: 'Minimal swiss design rules' },
      { label: 'Fluidity', value: '120 FPS', detail: 'Framer Motion spring calculations' },
      { label: 'Status', value: 'LIVE', detail: 'Fully operational' }
    ],
    features: [
      'Dynamic project coordinate showcase',
      'Responsive touch grids and transitions',
      'Premium dark/light layout integration'
    ],
    techSpec: 'Built on React, Tailwind CSS, and Framer Motion'
  }
];

const upcomingProducts = [
  { name: 'Spark Chat', tag: 'Realtime AI Messaging' },
  { name: 'Schlverse', tag: 'Academic Intelligence Hub' },
  { name: 'SubmitIV', tag: 'Enterprise Intake Flow' },
  { name: 'Aura Pay', tag: 'Global Transaction Core' }
];

export default function Products() {
  const [activeTab, setActiveTab] = useState<string>(products[0].id);
  const activeProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <section id="products" className="py-40 bg-black text-white relative overflow-hidden technical-grid-dense">
      {/* Decorative Blueprint Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter kerning-ultra uppercase">
            PRODUCTS
          </h2>
        </div>

        {/* Product Navigation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">

          {/* Tabs - Column 1 */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <CornerRightDown className="w-3 h-3 text-brand-blue" /> Choose Live Product
            </div>
            {products.map((product) => {
              const Icon = product.icon;
              const isActive = product.id === activeTab;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`w-full text-left p-6 border transition-all duration-500 flex items-center justify-between group relative overflow-hidden ${
                    isActive
                      ? 'border-brand-blue bg-brand-blue/5'
                      : 'border-white/10 hover:border-white/30 bg-white/[0.02]'
                  }`}
                >
                  {/* Hover visual slide indicator */}
                  <div className={`absolute top-0 left-0 w-1 h-full bg-brand-blue transition-transform duration-500 ${
                    isActive ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                  }`} />

                  <div className="flex items-center gap-4 pl-2">
                    <div className={`p-2 rounded-sm transition-colors duration-500 ${
                      isActive ? 'bg-brand-blue text-black' : 'bg-white/5 text-brand-blue'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-brand-blue/70">
                        {product.category}
                      </span>
                      <h3 className="text-lg font-bold tracking-tight mt-1">{product.name}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pr-2">
                    <ArrowRight className={`w-4 h-4 transition-transform duration-500 ${
                      isActive ? 'translate-x-0 text-brand-blue' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Panel Content - Column 2 */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="border border-white/10 p-8 md:p-12 bg-white/[0.01] backdrop-blur-md relative"
              >
                {/* Tech Grid Matrix Watermark */}
                <div className="absolute top-4 right-4 text-[9px] font-mono text-white/20 tracking-wider">
                  SPEC_ID: {activeProduct.id.toUpperCase()} // S_VER_26.1
                </div>

                <div className="mb-10">
                  <span className="text-xs font-mono uppercase text-brand-blue tracking-[0.2em] block mb-3">
                    {activeProduct.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter kerning-ultra uppercase mb-4 text-white">
                    {activeProduct.name}
                  </h3>
                  <p className="text-lg text-brand-blue font-medium tracking-tight mb-4">
                    {activeProduct.tagline}
                  </p>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                    {activeProduct.description}
                  </p>
                </div>

                {/* Live Real-time Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-white/10 mb-10">
                  {activeProduct.metrics.map((metric, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        {metric.label}
                      </div>
                      <div className="text-3xl font-bold font-mono tracking-tight text-white">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-400 font-medium">
                        {metric.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features & Compilation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-4 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-brand-blue" /> Architectural Highlights
                    </h4>
                    <ul className="space-y-3">
                      {activeProduct.features.map((feature, idx) => (
                        <li key={idx} className="text-xs md:text-sm text-gray-300 flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-between p-6 bg-white/[0.02] border border-white/5">
                    <div>
                      <div className="text-[9px] font-mono text-brand-blue uppercase tracking-widest mb-2">
                        System Compilation Target
                      </div>
                      <p className="text-xs text-gray-400 font-mono leading-relaxed">
                        {activeProduct.techSpec}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-gray-500">
                        STATUS: ACTIVE
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Upcoming Products Subsection */}
        <div className="border-t border-white/10 pt-20">
          <div className="mb-12">
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">ON THE HORIZON</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingProducts.map((p, index) => (
              <div
                key={index}
                className="p-6 border border-white/5 bg-white/[0.01] flex flex-col justify-between aspect-[3/2]"
              >
                <div className="flex justify-between items-start">
                  <Star className="w-5 h-5 text-brand-blue/40" />
                  <span className="text-[9px] font-mono uppercase bg-white/10 text-white px-2 py-0.5 rounded-sm tracking-widest font-bold">
                    Coming Soon
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{p.name}</h4>
                  <p className="text-xs text-gray-500 font-mono">{p.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
