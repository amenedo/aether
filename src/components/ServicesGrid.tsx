import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Brain, Cpu, Film, Compass, Share2, Layers, Binary } from "lucide-react";
import { Service } from "@/src/types";

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: "ai",
      title: "Artificial Intelligence",
      tagline: "Autonomous Agent Swarms",
      description: "We deploy custom generative neural pipelines, cognitive agent lattices, and semantic vector routing architectures that transform businesses into intelligent operations.",
      skills: ["Language Synthesis", "Prompt Engineering", "Semantic Vectors", "Deep Embedding Pipeline", "Autonomous Multi-Agents"],
      color: "#FF4F00",
      bgGradient: "from-[#FF4F00]/10 via-[#FF4F00]/5 to-transparent",
      visualType: "nodes"
    },
    {
      id: "web",
      title: "Web Engineering",
      tagline: "High-Fidelity Virtual Topologies",
      description: "Elite web development pushing performance limits. We engineer fluid responsive client-only experiences, ultra-performance custom servers, and real-time WebGL interfaces.",
      skills: ["Vite & React 19", "Three.js Canvas", "Express Middleware", "Extreme SEO Optimizations", "Edge Network Slicing"],
      color: "#06B6D4",
      bgGradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
      visualType: "pulse"
    },
    {
      id: "design",
      title: "Digital Design & Branding",
      tagline: "Contemporary Swiss Art Direction",
      description: "Crafting iconic corporate identities that convey premium prestige. We pair radical modern layout design with high-end typography, negative space rhythm, and luxury logos.",
      skills: ["Brand Systems Design", "Awwwards-grade UI/UX", "Editorial Print & Type", "Layout Architecture", "Aesthetic Moodboarding"],
      color: "#F59E0B",
      bgGradient: "from-amber-500/10 via-amber-500/5 to-transparent",
      visualType: "orbit"
    },
    {
      id: "film",
      title: "Cinematic Showcase & Film",
      tagline: "Spectacular Audiovisual Storytelling",
      description: "Producing stunning, broadcast-grade video and interactive motion graphics. We deliver high-fidelity visual assets, sound synthesis landscapes, and cinematic storytelling.",
      skills: ["Premium Motion Design", "Soundscapes Synthesis", "Cubic Bezier Curves", "Dynamic Stream Compression", "Lottie Vector Animations"],
      color: "#EC4899",
      bgGradient: "from-pink-500/10 via-pink-500/5 to-transparent",
      visualType: "grid"
    },
    {
      id: "automation",
      title: "Workflow Automation",
      tagline: "Seamless Business Mechanics",
      description: "Connecting disparate ecosystems into robust high-performance automated streams. Replacing repetitive structural actions with precise code operations.",
      skills: ["Distributed Webhooks", "CRM Sync Networks", "Task Swarms", "Automated Assets Creation", "Database Stream Hooks"],
      color: "#8B5CF6",
      bgGradient: "from-violet-500/10 via-violet-500/5 to-transparent",
      visualType: "pulse"
    },
    {
      id: "interactive",
      title: "Interactive R&D Projects",
      tagline: "Experimental Immersive Frontiers",
      description: "Building custom sensory experiences that surprise and amaze. We cross-engineer hardware APIs, camera gesture trackers, and reactive physical sensors with digital art.",
      skills: ["Gesture Processing", "Device Orientation APIs", "Sensory Installation Art", "Web Audio Oscillators", "Kinetic Physics Canvas"],
      color: "#10B981",
      bgGradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      visualType: "orbit"
    }
  ];

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#FF4F00]/1 blur-[150px] -z-10 rounded-full top-1/2 left-1/4 w-[350px] h-[350px]" />
      
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <div className="flex flex-col items-start max-w-2xl">
            <span className="font-mono text-xs uppercase text-[#FF4F00] tracking-[0.2em] font-semibold flex items-center gap-2 mb-4">
              <Compass className="w-4 h-4 animate-spin-slow text-[#FF4F00]" /> CORE EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-5xl font-sans font-extrabold tracking-tight text-white leading-tight">
              Bridging radical creativity <br />
              <span className="font-serif italic font-light text-white/60">and computational mastery.</span>
            </h2>
          </div>
          <div className="flex flex-col text-left md:text-right max-w-md">
            <p className="font-mono text-xs text-white/40 leading-relaxed uppercase tracking-wider">
              [ SERVICES DIRECTORY SECNO. 12 ]
              <br />
              EPICS ARE DESIGNED FROM PRINCIPLE. WE REJECT TEMPLATES IN FAVOR OF CUSTOM MATHEMATICAL PRECISION.
            </p>
          </div>
        </div>

        {/* Bento Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative h-[425px] rounded-2xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 border border-accent bg-[#0a0a0a]/40 backdrop-blur-md glass"
                whileHover={{ y: -8, borderColor: "rgba(255, 255, 255, 0.35)" }}
              >
                {/* Background ambient gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-b ${service.bgGradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                {/* Grid Overlay inside card */}
                <div className="absolute inset-0 grid-overlay opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none -z-10" />

                {/* Visual Accent Element depending on service visualType */}
                <div className="absolute -right-12 -top-12 w-44 h-44 opacity-20 group-hover:opacity-45 transition-all duration-700 pointer-events-none blur-[4px]">
                  {service.visualType === "nodes" && (
                    <div className="relative w-full h-full animate-[spin_30s_linear_infinite]">
                      <div className="absolute w-2 h-2 rounded-full bg-[#FF4F00] top-1/4 left-1/4 transform scale-110 shadow-[0_0_10px_#FF4F00]" />
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-white top-2/3 left-1/2" />
                      <div className="absolute w-1 h-1 rounded-full bg-white top-1/2 left-3/4" />
                      <svg className="w-full h-full stroke-white/10 fill-none" viewBox="0 0 100 100">
                        <line x1="25" y1="25" x2="50" y2="66" strokeWidth="0.5" />
                        <line x1="50" y1="66" x2="75" y2="50" strokeWidth="0.5" />
                        <line x1="25" y1="25" x2="75" y2="50" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="30" strokeWidth="0.3" strokeDasharray="3,3" />
                      </svg>
                    </div>
                  )}

                  {service.visualType === "pulse" && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border border-cyan-400/20 relative flex items-center justify-center animate-[ping_3s_ease-in-out_infinite]">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/10" />
                      </div>
                    </div>
                  )}

                  {service.visualType === "orbit" && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full border border-amber-300/10 border-dashed animate-[spin_12s_linear_infinite]" />
                      <div className="w-16 h-16 rounded-full border border-white/5 absolute" />
                      <div className="w-2 h-2 rounded-full bg-amber-400 absolute top-10" />
                    </div>
                  )}

                  {service.visualType === "grid" && (
                    <div className="w-full h-full grid grid-cols-4 gap-2.5 p-4 rotate-12">
                      {[...Array(16)].map((_, idx) => (
                        <div key={idx} className="w-4.5 h-4.5 bg-pink-500/5 rounded border border-pink-500/10 group-hover:scale-105 transition-transform" />
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Top: Identifier HUD and Title */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] text-white/30 tracking-[0.15em] uppercase">
                      SYS // EXP_0{index + 1}
                    </span>
                    
                    {/* Unique iconography icon matches */}
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white transition-colors duration-300">
                      {service.id === "ai" && <Brain className="w-4 h-4" />}
                      {service.id === "web" && <Cpu className="w-4 h-4" />}
                      {service.id === "design" && <Layers className="w-4 h-4" />}
                      {service.id === "film" && <Film className="w-4 h-4" />}
                      {service.id === "automation" && <Binary className="w-4 h-4" />}
                      {service.id === "interactive" && <Sparkles className="w-4 h-4" />}
                    </div>
                  </div>

                  <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase block mb-1">
                    {service.tagline}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight leading-none mb-4 group-hover:text-amber-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-[13px] text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Card Bottom: Specific technological capsules */}
                <div className="pt-6 border-t border-accent bg-gradient-to-t from-black/20 to-transparent">
                  <div className="flex flex-wrap gap-1.5">
                    {service.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[9px] px-2.5 py-1 rounded-full bg-white/5 border border-accent text-white/40 hover:text-white hover:border-white/30 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                    {service.skills.length > 3 && (
                      <span className="font-mono text-[9px] px-2.5 py-1 rounded-full bg-white/5 border border-accent text-white/30">
                        +{service.skills.length - 3} MORE
                      </span>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
