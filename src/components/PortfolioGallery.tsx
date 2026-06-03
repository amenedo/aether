import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShowcaseProject } from "@/src/types";
import { ArrowUpRight, ShieldCheck, Film, Box, FileClock, Hourglass } from "lucide-react";

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const categories = ["ALL", "INTELLIGENCE", "EXPERIMENT", "FILM & ART", "BRAND"];

  const specimens: ShowcaseProject[] = [
    {
      id: "specimen-01",
      title: "PROJ_NEURAL_TOPOGRAPHY",
      category: "INTELLIGENCE",
      client: "Cortex Global Corp",
      year: "2026",
      description: "Distributed LLM Agent cluster configured to restructure legacy corporate databases, generating live visual topology graphs in real-time.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=640&auto=format&fit=crop",
      videoPlaceholderColor: "bg-orange-950/20",
      tags: ["Semantic Vectors", "FastAPI Core", "Multi-Agent Cluster", "ThreeJS Renderer"],
      accentColor: "#FF4F00",
      metrics: [
        { label: "COGNITIVE SPEED", value: "85ms" },
        { label: "AUTONOMOUS DEPTH", value: "98.2%" }
      ]
    },
    {
      id: "specimen-02",
      title: "LUMINOUS_CAMPAIGN_4.0",
      category: "FILM & ART",
      client: "Veloce Automobiles",
      year: "2025",
      description: "Cinematic, fully code-integrated promotional experience for an elite electric mechanical vehicle, with synchronized low-latency reactive audio soundscapes.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=640&auto=format&fit=crop",
      videoPlaceholderColor: "bg-cyan-950/20",
      tags: ["Cinematic Production", "WebGL Shader Shifting", "Sound Synthesis", "GSAP Scroll"],
      accentColor: "#06B6D4",
      metrics: [
        { label: "STORYTELLING RET.", value: "96FPS" },
        { label: "PARTICLES DEPTH", value: "4.2M" }
      ]
    },
    {
      id: "specimen-03",
      title: "AMORPHOUS_SHADERS",
      category: "EXPERIMENT",
      client: "Nouveau National Art",
      year: "2286",
      description: "An interactive, web-audio sensory canvas allowing individuals to warp a continuous mathematical liquid field using cursor coordinates or physical gestures.",
      image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=640&auto=format&fit=crop",
      videoPlaceholderColor: "bg-pink-950/20",
      tags: ["Vertex Shader Coding", "Web Audio Oscillator", "Device Gyro APIs", "Physics Canvas"],
      accentColor: "#EC4899",
      metrics: [
        { label: "GESTURE RESOLVEMENT", value: "1.2ms" },
        { label: "AUDIO LATENCY", value: "0" }
      ]
    },
    {
      id: "specimen-04",
      title: "SYSTEM_CHRONO_HUD",
      category: "BRAND",
      client: "Aether Premium Watches",
      year: "2026",
      description: "Complete design layout system, premium typography pairings, and tactile brand coordinates defining a mechanical, ultra-luxury watch release.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=640&auto=format&fit=crop",
      videoPlaceholderColor: "bg-amber-950/20",
      tags: ["Modular Style Sheet", "Swiss Editorial Layout", "Luxury Typography", "Custom Monospaces"],
      accentColor: "#F59E0B",
      metrics: [
        { label: "PRESTIGE COEFFICIENT", value: "9.9" },
        { label: "GRID FIDELITY", value: "100%" }
      ]
    }
  ];

  const filteredSpecimens = selectedCategory === "ALL"
    ? specimens
    : specimens.filter(s => s.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-[#050505] overflow-hidden"
    >
      <div className="absolute top-10 right-0 w-[300px] h-[300px] rounded-full bg-pink-600/5 filter blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Head */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col items-start max-w-2xl text-left">
            <span className="font-mono text-xs text-[#FF4F00] uppercase tracking-[0.2em] font-bold flex items-center gap-1.5 mb-4">
              <ShieldCheck className="w-4 h-4 text-[#FF4F00]" /> STUDIO SPECIMENS & ARCHIVES
            </span>
            <h2 className="text-4xl sm:text-5xl font-sans font-extrabold tracking-tight text-white leading-tight">
              A curated catalog <br />
              <span className="font-serif italic font-light text-white/50">of innovative digital sculpture.</span>
            </h2>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-[9px] uppercase px-4 py-2.5 rounded-full border tracking-widest transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-white text-black border-white"
                    : "bg-white/5 text-white/60 border-white/5 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Portfolio Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredSpecimens.map((proj, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="group rounded-2xl overflow-hidden glass border border-accent p-6 flex flex-col justify-between h-[530px] relative transition-all duration-500 hover:border-white/30"
                >
                  {/* Visual Background image overlay when hovered */}
                  <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-[1.5s] ease-out pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" />
                  </div>

                  {/* Corner aesthetic coordinates */}
                  <div className="flex justify-between items-start z-10 select-none">
                    <div className="flex flex-col">
                      <span className="font-mono text-[8px] text-white/30 uppercase tracking-[0.2em]">{proj.category} SPECIMEN</span>
                      <span className="font-mono text-xs text-[#FF4F00] font-bold mt-1 uppercase">{proj.id} // SEC_D4</span>
                    </div>
                    <span className="font-mono text-[9px] text-white/40 tracking-wider bg-black/40 px-2 py-1.5 rounded border border-accent">
                      YEAR_{proj.year}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="z-10 mt-auto pt-16">
                    <span className="font-mono text-[10px] text-white/55 uppercase tracking-[0.15em] block mb-1">
                      CLIENT // {proj.client}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-white tracking-tight uppercase leading-tight flex items-center justify-between">
                      {proj.title}
                      <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#FF4F00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </h3>
                    <p className="font-sans text-[13px] text-white/50 leading-relaxed font-light mt-4 mb-6 group-hover:text-white/80 transition-colors">
                      {proj.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[9px] px-2.5 py-1 rounded bg-black/60 border border-accent text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Custom Metrics Benchmarks HUD container */}
                    <div className="grid grid-cols-2 gap-4 border-t border-accent pt-4 bg-black/30 p-2.5 rounded-xl border border-accent">
                      {proj.metrics?.map((metric, mIdx) => (
                        <div key={mIdx} className="flex flex-col">
                          <span className="font-mono text-[8px] text-white/30 uppercase tracking-widest">
                            {metric.label}
                          </span>
                          <span
                            className="font-mono text-xs uppercase font-extrabold tracking-tight mt-1"
                            style={{ color: proj.accentColor }}
                          >
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
