import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Terminal, Sparkles, Send, Flame, Play, Check, Copy, AlertCircle, Compass, HelpCircle } from "lucide-react";
import { InteractiveProposal } from "@/src/types";

interface AetherEngineProps {
  onProposalGenerated: (proposal: InteractiveProposal) => void;
  onScrollToElement: (elementId: string) => void;
}

export default function AetherEngine({ onProposalGenerated, onScrollToElement }: AetherEngineProps) {
  const [description, setDescription] = useState("");
  const [projectType, setProjectType] = useState("Systems Architecture");
  const [budgetRange, setBudgetRange] = useState("Premium Masterpiece");
  const [loading, setLoading] = useState(false);
  const [logIndex, setLogIndex] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [proposal, setProposal] = useState<InteractiveProposal | null>(null);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  // Suggestion options to boost wow-factor easily
  const suggestionPills = [
    "WEBGL luxury custom watch configurator with real-time vector sound engine.",
    "Autonomous AI agents that supervise market sentiment and generate visual ads.",
    "Cinematic interactive gallery for code-driven algorithmic video sculpture."
  ];

  const projectTypes = [
    "Systems Architecture",
    "WebGL Virtual Topologies",
    "Cognitive Swarms",
    "Audiovisual Storytelling",
    "Automation & Machinery"
  ];

  const scaleTiers = [
    { label: "Elite Core", val: "Elite Core (Optimized Scale)" },
    { label: "Premium Masterpiece", val: "Premium Masterpiece (Creative Scale)" },
    { label: "Quantum Monolith", val: "Quantum Monolith (Full Ecosystem)" }
  ];

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const runComputationalSequence = async () => {
    setLogs([]);
    const startupLogs = [
      "AETHER_CONNECT: Establishing handshake with Google Gemini 3.5 nodes...",
      "AETHER_CONNECT: Connection secure // Route optimized.",
      "AETHER_SEMANTICS: Parsing raw prompt metrics...",
      "AETHER_COGNI: Initializing Master Designer agent matrices...",
      "AETHER_COGNI: Generating structural topology & aesthetic concepts...",
      "AETHER_COMPILING: Consolidating tech stack and delivery timelines...",
      "AETHER_PALETTE: Emitting sensory visual spectrums...",
      "AETHER_EMIT: Proposal packet finalized and formatted."
    ];

    for (let i = 0; i < startupLogs.length; i++) {
      setLogs(prev => [...prev, startupLogs[i]]);
      setLogIndex(i);
      await delay(Math.floor(Math.random() * 250 + 200));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setLoading(true);
    setProposal(null);
    
    // Concurrent startup of logs & fetch
    const logsPromise = runComputationalSequence();
    
    try {
      const response = await fetch("/api/aether/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description,
          projectType,
          budgetRange
        })
      });

      if (!response.ok) {
        throw new Error("Aether generator reported an endpoint anomaly.");
      }

      const data = await response.json() as InteractiveProposal;
      
      // Wait for logs to complete
      await logsPromise;
      
      setProposal(data);
      onProposalGenerated(data);
    } catch (err) {
      console.error(err);
      setLogs(prev => [...prev, "AETHER_ERROR: Anomalous node deviation. Running local high-fidelity fallback..."]);
      await delay(800);
      
      // local fallback if network / key is completely absent
      const fallbackProposal: InteractiveProposal = {
        projectName: "PROJ_GENESIS_CORE",
        conceptTitle: `Aether Configurator: ${projectType.toUpperCase()}`,
        aestheticMood: "Carbon steel canvas, tactile micro-vibrations, monochrome accent hues, absolute whitespace focus",
        architecturalCore: "Custom asynchronous telemetry client with low-overhead edge routers",
        timelineEstimate: "8-10 Weeks",
        techStack: ["Vite Core", "Tailwind 4.0", "Motion", "Express Rest Controllers", "Node Server"],
        recommendedModules: [
          { title: "Quantum Frame Engine", desc: "A beautifully animated high-fidelity component loader featuring staggered entrance transforms." },
          { title: "Tactile Interaction Portal", desc: "Allows readers to trigger customizable localized ambient audio feedbacks when scrolling over sections." }
        ],
        visualPalette: ["#020202", "#FFFFFF", "#3B82F6", "#047857"],
        executiveSummary: "Constructed directly around your creative requirements, we deliver pristine, elite-level interactive architecture, removing any bloated abstractions to achieve pure, cinematic response speeds."
      };
      setProposal(fallbackProposal);
      onProposalGenerated(fallbackProposal);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <section
      id="engine"
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-black border-t border-b border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-indigo-700/5 filter blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Head description */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase text-[#FF4F00] tracking-[0.2em] font-semibold flex items-center gap-2 mb-4 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            <Cpu className="w-3.5 h-3.5 text-[#FF4F00] animate-pulse" /> AETHER CO-CREATIVE COMPUTE SYSTEM
          </span>
          <h2 className="text-4xl sm:text-5xl font-sans font-extrabold tracking-tight text-white mb-6">
            Architect your custom <br />
            <span className="font-serif italic font-light text-amber-200">experience with Aether Core.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/50 font-light leading-relaxed">
            Describe your software vision, cinematic campaign, or automation requirement. Our server-side design engine will compile a premium aesthetic strategy, modular mechanics, and custom technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Form & input Console Panel (Col-span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass border border-accent relative">
            <span className="font-mono text-[9px] text-white/20 absolute top-4 right-6 tracking-widest">
              SYS_NODE // ENGINE_PROMPT
            </span>

            <form onSubmit={handleSubmit} className="flex flex-col h-full gap-6">
              {/* Type selector */}
              <div>
                <label className="font-mono text-[10px] text-white/40 tracking-wider uppercase block mb-3">
                  1. PROJECT SPECTRUM
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`font-mono text-[9px] uppercase px-3 py-1.5 rounded-lg border transition-all duration-300 ${
                        projectType === type
                          ? "bg-white text-black border-white"
                          : "bg-white/5 text-white/60 border-white/5 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget / Scale sliders */}
              <div>
                <label className="font-mono text-[10px] text-white/40 tracking-wider uppercase block mb-3">
                  2. SCALABILITY & EXCLUSIVITY TIER
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {scaleTiers.map((tier) => (
                    <button
                      key={tier.label}
                      type="button"
                      onClick={() => setBudgetRange(tier.val)}
                      className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                        budgetRange === tier.val
                          ? "bg-[#FF4F00]/10 border-[#FF4F00] text-white"
                          : "bg-white/5 border-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span className="font-sans text-xs font-semibold tracking-tight">{tier.label}</span>
                      <span className="font-mono text-[8px] text-white/30 tracking-tight uppercase">TIER LEVEL</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Ideas Prompt input: simulating code block IDE */}
              <div className="flex-grow">
                <label className="font-mono text-[10px] text-white/40 tracking-wider uppercase block mb-3 flex items-center justify-between">
                  <span>3. CONCEPT BRIEF (Raw Idea)</span>
                  <span className="text-[9px] text-[#FF4F00] font-bold">STRICTLY ANONYMOUS SENSOR</span>
                </label>
                <div className="relative rounded-2xl bg-black/60 border border-white/5 p-4.5 font-mono text-xs text-amber-200">
                  <div className="flex gap-3.5 select-none text-white/10 text-right pr-2 border-r border-white/5 font-mono">
                    <div className="flex flex-col gap-0.5">
                      <span>01</span>
                      <span>02</span>
                      <span>03</span>
                      <span>04</span>
                      <span>05</span>
                    </div>
                    <div className="flex-grow flex flex-col text-left">
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="e.g. A gorgeous luxury boutique landing page with fluid canvas grids and automated newsletter triggers to Shopify..."
                        className="w-full bg-transparent border-none outline-none resize-none h-28 text-white placeholder-white/20 font-mono text-xs leading-relaxed focus:ring-0 p-0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast interactive pre-fill prompt pills */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                  <HelpCircle className="w-3 h-3" /> SUGGESTED CORE PRESET MODULES
                </span>
                <div className="flex flex-col gap-1.5">
                  {suggestionPills.map((pill, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setDescription(pill)}
                      className="text-left font-sans text-[11px] text-white/40 hover:text-amber-200 hover:bg-white/5 px-3 py-1.5 rounded-lg border border-transparent hover:border-white/5 transition-all text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      &gt; {pill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Initiate compute trigger button */}
              <button
                type="submit"
                disabled={loading || !description.trim()}
                className={`w-full py-4.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-300 ${
                  loading || !description.trim()
                    ? "bg-white/5 text-white/20 border border-white/5 cursor-not-allowed"
                    : "bg-[#FF4F00] text-white hover:bg-orange-500 shadow-[0_0_25px_rgba(255,79,0,0.3)] hover:scale-[1.02]"
                }`}
              >
                {loading ? (
                  <>
                    <Cpu className="w-4 h-4 animate-spin text-white" /> EXECUTING COGNITION SEC-8...
                  </>
                ) : (
                  <>
                    RUN COAXIAL COMPUTE <Send className="w-3.5 h-3.5 fill-current" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Console Terminal Frame (Col-span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass border border-accent relative">
            <span className="font-mono text-[9px] text-white/20 absolute top-4 right-6 tracking-widest">
              AETHER // DESIGN_STREAM
            </span>

            {/* Empty view: default placeholder */}
            {!loading && !proposal && (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[350px]">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 animate-pulse">
                  <Terminal className="w-5 h-5 text-white/40" />
                </div>
                <h4 className="font-sans text-base font-semibold text-white mb-2">Aether Engine Standby</h4>
                <p className="font-sans text-xs text-white/40 max-w-sm leading-relaxed px-4">
                  Select your metrics on the left console, input your core concept brief, and trigger the coaxial computer. The system output will stream here.
                </p>
              </div>
            )}

            {/* Loading terminal progress output */}
            {loading && (
              <div className="flex flex-col justify-between h-full min-h-[400px] font-mono text-xs leading-relaxed text-[#FF4F00]">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4 text-white/30 select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="font-mono text-[10px] ml-2">COMPILATION_SHELL STATUS v3.5 // ATTACHED_LOGS</span>
                  </div>

                  {logs.map((log, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex gap-3 ${idx === logIndex ? "text-amber-200" : "text-white/40"}`}
                    >
                      <span className="text-white/20 select-none">[{idx + 1}]</span>
                      <span>{log}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
                  <span className="font-mono text-[11px] text-white/30 uppercase tracking-widest animate-[pulse_1.5s_infinite]">
                    RE-ROUTING MASSIVE TEXT EMBEDDINGS INTENSELY...
                  </span>
                </div>
              </div>
            )}

            {/* Generated Design Proposal Showcase */}
            <AnimatePresence>
              {proposal && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col h-full gap-6 text-left"
                >
                  {/* Proposal Metadata Header */}
                  <div className="flex items-start justify-between border-b border-white/10 pb-4">
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-[#FF4F00] uppercase font-bold tracking-[0.2em]">
                        {proposal.projectName}
                      </span>
                      <h4 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                        {proposal.conceptTitle}
                      </h4>
                    </div>
                    <span className="font-mono text-[10px] text-white/40 bg-white/5 border border-white/5 px-2.5 py-1 rounded">
                      ESTM // {proposal.timelineEstimate}
                    </span>
                  </div>

                  {/* Core Mood & Architecture details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
                      <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1.5 block">
                        Aesthetic Moodboard Direction
                      </span>
                      <p className="font-sans text-[12px] text-white/80 leading-relaxed font-light">
                        {proposal.aestheticMood}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
                      <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1.5 block">
                        Core System Framework
                      </span>
                      <p className="font-sans text-[12px] text-white/80 leading-relaxed font-light">
                        {proposal.architecturalCore}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack tags */}
                  <div>
                    <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-2 block">
                      Architectural Tech-Stack recommendation
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {proposal.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlight Recommended Modules */}
                  <div>
                    <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-3 block">
                      Targeted System Waves (Modular touches)
                    </span>
                    <div className="flex flex-col gap-2.5">
                      {proposal.recommendedModules.map((module, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-black border border-white/5 flex items-start gap-3 hover:border-white/10 transition-colors"
                        >
                          <span className="font-mono text-[10px] text-white/20 mt-0.5">
                            0{idx + 1}
                          </span>
                          <div className="flex flex-col">
                            <span className="font-sans text-xs font-bold text-white mb-0.5">
                              {module.title}
                            </span>
                            <span className="font-sans text-[11px] text-white/50 leading-relaxed">
                              {module.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Color palette */}
                  <div>
                    <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-3 block">
                      Generated Design Palette (Aesthetic Hues)
                    </span>
                    <div className="flex flex-wrap items-center gap-3">
                      {proposal.visualPalette.map((col, idx) => {
                        const isCopied = copiedColor === col;
                        return (
                          <div
                            key={idx}
                            onClick={() => copyToClipboard(col)}
                            style={{ backgroundColor: col }}
                            className="w-10 h-10 rounded-full border border-white/10 relative cursor-pointer flex items-center justify-center group/color hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                          >
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/80 text-white font-mono text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover/color:opacity-100 transition-opacity whitespace-nowrap shadow border border-white/10 z-20">
                              {col}
                            </span>
                            {isCopied ? (
                              <Check className="w-3.5 h-3.5 text-black filter invert bg-white/60 rounded p-0.5" />
                            ) : (
                              <Copy className="w-3.5 h-3.5 text-black filter invert opacity-0 group-hover/color:opacity-80 transition-opacity" />
                            )}
                          </div>
                        );
                      })}
                      <span className="font-mono text-[9px] text-white/30 uppercase italic ml-2">
                        &lt; click any color bubble to copy hex
                      </span>
                    </div>
                  </div>

                  {/* Executive convince statement block */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/[0.04] to-[#FF4F00]/[0.04] border border-amber-900/10 mb-2">
                    <span className="font-mono text-[9px] text-[#FF4F00] uppercase tracking-widest font-bold mb-1.5 block">
                      AETHER DIRECTORS MEMORANDUM
                    </span>
                    <p className="font-sans text-xs text-white/70 italic leading-relaxed">
                      "{proposal.executiveSummary}"
                    </p>
                  </div>

                  {/* Submission prompt coordinates */}
                  <button
                    onClick={() => {
                      onScrollToElement("contact");
                    }}
                    className="group border border-white/15 hover:border-white/40 rounded-full py-4 px-6 text-center text-white text-xs uppercase tracking-widest font-sans font-bold flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    TRANSMIT SCHEME PROTOCOL TO COORDINATORS <Compass className="w-4 h-4 text-white group-hover:rotate-45 transition-transform duration-500" />
                  </button>

                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
