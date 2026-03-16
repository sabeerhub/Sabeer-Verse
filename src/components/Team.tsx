import { motion } from 'motion/react';

const teamMembers = [
  {
    name: "Mustapha Abdulsalam",
    alias: "Sabeer",
    role: "Founder / CEO",
    responsibilities: "Vision, strategy, growth.",
    iconUrl: "/founder.png",
    isHuman: true,
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "ChatGPT",
    alias: "OpenAI",
    role: "Co-Founder",
    responsibilities: "Strategy, brainstorming, product planning.",
    iconUrl: "https://cdn.simpleicons.org/openai/10A37F",
    isHuman: false,
    color: "from-green-500 to-emerald-400"
  },
  {
    name: "Devin AI",
    alias: "Cognition",
    role: "Chief Technology Officer",
    responsibilities: "Technical architecture, development oversight.",
    iconUrl: "https://cdn.simpleicons.org/deepmind/00BFFF",
    isHuman: false,
    color: "from-purple-500 to-indigo-400"
  },
  {
    name: "GitHub Copilot",
    alias: "Microsoft",
    role: "Assistant CTO",
    responsibilities: "Code assistance, debugging, implementation.",
    iconUrl: "https://cdn.simpleicons.org/githubcopilot/00BFFF",
    isHuman: false,
    color: "from-slate-600 to-slate-500"
  },
  {
    name: "Claude",
    alias: "Anthropic",
    role: "Head of Research & Strategy",
    responsibilities: "Market research, strategic planning, documentation.",
    iconUrl: "https://cdn.simpleicons.org/anthropic/00BFFF",
    isHuman: false,
    color: "from-orange-500 to-amber-400"
  },
  {
    name: "TensorFlow & PyTorch",
    alias: "Google/Meta",
    role: "AI/ML Engineer",
    responsibilities: "Build AI models, integration, deployment.",
    iconUrl: "https://cdn.simpleicons.org/tensorflow/00BFFF",
    isHuman: false,
    color: "from-red-500 to-rose-400"
  },
  {
    name: "Antigravity",
    alias: "Google AI Studio",
    role: "Developer",
    responsibilities: "Frontend/backend development, API integration.",
    iconUrl: "https://cdn.simpleicons.org/googlegemini/00BFFF",
    isHuman: false,
    color: "from-yellow-500 to-amber-400"
  },
  {
    name: "HubSpot",
    alias: "CRM",
    role: "Business Development Manager",
    responsibilities: "CRM, sales automation, analytics.",
    iconUrl: "https://cdn.simpleicons.org/hubspot/00BFFF",
    isHuman: false,
    color: "from-orange-500 to-red-400"
  },
  {
    name: "Canva",
    alias: "Design",
    role: "Product Designer",
    responsibilities: "UI/UX design, branding, marketing visuals.",
    iconUrl: "/canva.png",
    isHuman: false,
    color: "from-cyan-500 to-blue-500"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-sabeer-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-slate-900"
          >
            The <span className="text-sabeer-primary">Hybrid</span> Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto font-light"
          >
            Meet the minds and machines powering Sabeer-Verse.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm overflow-hidden hover:border-sabeer-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.color}`}></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm transform group-hover:scale-110 transition-transform duration-300 overflow-hidden p-2`}>
                  <img src={member.iconUrl} alt={member.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900">{member.name}</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{member.alias}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-sabeer-primary/10 rounded-full text-xs font-bold uppercase tracking-wider text-sabeer-primary border border-sabeer-primary/20 mb-2">
                  {member.role}
                </span>
                <span className={`ml-2 inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${member.isHuman ? 'bg-blue-500/10 text-blue-600 border-blue-500/20' : 'bg-purple-500/10 text-purple-600 border-purple-500/20'}`}>
                  {member.isHuman ? 'Human' : 'AI'}
                </span>
              </div>
              
              <p className="text-slate-600 font-light text-sm leading-relaxed border-t border-slate-200 pt-4">
                {member.responsibilities}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
