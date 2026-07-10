import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Activity, Shield, Terminal, ArrowRight, CornerRightDown } from 'lucide-react';

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
    id: 'sabeer-os',
    name: 'Sabeer-OS',
    category: 'System Core',
    tagline: 'The ultimate spatial intelligence framework.',
    description: 'A distributed cognitive operating system built to orchestrate real-time agent workflows across hybrid cloud environments and edge clusters.',
    icon: Cpu,
    metrics: [
      { label: 'Latency', value: '1.2ms', detail: 'Edge-to-core pipeline' },
      { label: 'Concurrency', value: '10M+', detail: 'Simultaneous agent nodes' },
      { label: 'Efficiency', value: '-42%', detail: 'Power consumption reduction' }
    ],
    features: [
      'Autonomous dynamic compute reallocation',
      'Immutable state replication with zero overhead',
      'Real-time neural context streaming',
      'Zero-trust hardware isolation protocol'
    ],
    techSpec: 'Kernel built on Rust / WASM core compiler architecture'
  },
  {
    id: 'pulse-engine',
    name: 'Pulse Engine',
    category: 'Motion & Fluidity',
    tagline: 'Fluid kinetic orchestration for complex systems.',
    description: 'A high-performance animation and physical state engine providing GPU-accelerated motion calculations with natural micro-damping feedback.',
    icon: Activity,
    metrics: [
      { label: 'Frame Rate', value: '120fps', detail: 'Guaranteed render loop' },
      { label: 'Calculations', value: '8.4B', detail: 'Matrix operations/sec' },
      { label: 'Damping', value: '0.001', detail: 'Precision error margin' }
    ],
    features: [
      'Intelligent viewport predictive loading',
      'Spring physics interpolation with custom tension layers',
      'Sub-pixel rendering anti-aliasing engine',
      'Declarative state visual synchronization'
    ],
    techSpec: 'Native WebGL2 / WebGPU state pipeline with parallel thread execution'
  },
  {
    id: 'cognitive-api',
    name: 'Cognitive API',
    category: 'Intelligence Core',
    tagline: 'High-speed programmatic intelligence gateways.',
    description: 'A secure, low-overhead REST/GraphQL API bridging legacy systems with advanced LLMs, vision, and auditory intelligence nodes.',
    icon: Shield,
    metrics: [
      { label: 'Inference', value: '<18ms', detail: 'Context-aware token delivery' },
      { label: 'Security', value: 'E2EE', detail: 'Quantum-resistant tunnels' },
      { label: 'Reliability', value: '99.999%', detail: 'SLA backed global failover' }
    ],
    features: [
      'Self-healing route selection algorithms',
      'Dynamic token allocation and custom tier-throttling',
      'Embedded semantic vector vectorization layer',
      'Automated schema generation and compliance auditing'
    ],
    techSpec: 'HTTP/3 native communication using specialized Go backend clusters'
  }
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-brand-blue animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-blue">Sabeer // Systems</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter kerning-ultra uppercase leading-[0.95]">
              Core <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-blue to-white">Products</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed max-w-sm">
              We design and compile state-of-the-art AI infrastructures. These modular systems power modern enterprises with extreme mechanical precision.
            </p>
          </div>
        </div>

        {/* Product Navigation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Tabs - Column 1 */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <CornerRightDown className="w-3 h-3 text-brand-blue" /> Select System Core
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
                  SPEC_ID: {activeProduct.id.toUpperCase()} // S_VER_19.4
                </div>

                <div className="mb-10">
                  <span className="text-xs font-mono uppercase text-brand-blue tracking-[0.2em] block mb-3">
                    {activeProduct.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter kerning-ultra uppercase mb-4">
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
      </div>
    </section>
  );
}
