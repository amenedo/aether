import { motion } from "motion/react";
import { ArrowDown, Brain, Zap, Play, Sparkles } from "lucide-react";

interface HeroProps {
  onExploreClick: (elementId: string) => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 sm:px-12 overflow-hidden"
    >
      {/* Absolute visual highlights */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-[#FF4F00]/5 filter blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 filter blur-[120px] -z-10" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto w-full flex items-stretch">
        
        {/* Left Branding Rail matching Artistic Theme exactly */}
        <aside className="hidden lg:flex w-24 border-r border-[#ffffff]/15 flex-col items-center justify-center gap-12 mr-12 py-12 select-none shrink-0">
          <div className="vertical-rail text-[10px] font-mono text-white/30 uppercase tracking-[0.5em]">
            ESTABLISHED • MMXXVI
          </div>
          <div className="w-[1.5px] h-36 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <div className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
            37.7749° N
          </div>
        </aside>

        {/* Hero Body Content Column Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Typographic Manifesto (Artistic Flair Layout) */}
          <div className="lg:col-span-8 flex flex-col items-start select-none text-left">
            
            {/* Minimalist Tech HUD Badge styled like Artistic Flair design line */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#FF4F00]/50"></span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FF4F00] font-black">
                FUTURE-FORWARD AUTO ENGINE
              </span>
            </div>

            {/* Majestic Hero Title - Display Heavy & Stroke Accent pairing */}
            <h1 className="text-display text-[60px] sm:text-[90px] xl:text-[115px] uppercase mb-8 relative leading-[0.85] flex flex-col items-start select-none">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="block text-white"
              >
                WE SHAPE
              </motion.span>
              
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                className="block text-transparent ml-6 sm:ml-12"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.45)",
                  letterSpacing: "-0.04em"
                }}
              >
                AESTHETICS
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                className="block text-white/95 text-amber-200 font-serif italic font-normal text-[52px] sm:text-[80px] xl:text-[100px] lowercase leading-none"
              >
                via intelligence.
              </motion.span>
            </h1>

            {/* Subtext Paragraph with rich branding explanation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 font-sans text-base sm:text-lg text-white/70 max-w-xl font-light leading-relaxed"
            >
              Bridging the gap between <span className="text-white font-normal italic">artificial intelligence</span> and visceral human experience through world-class branding, design compilations, and immersive visual code.
            </motion.p>

            {/* Action button triggers */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4 items-center"
            >
              <button
                onClick={() => onExploreClick("engine")}
                className="group relative px-8 py-4 bg-white text-black font-mono text-[10px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 hover:bg-[#FF4F00] hover:text-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  RUN ENGINE <Zap className="w-3.5 h-3.5 fill-current" />
                </span>
              </button>

              <button
                onClick={() => onExploreClick("services")}
                className="group px-7 py-4 bg-transparent border border-white/20 rounded-full font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 hover:border-white transition-all duration-300 flex items-center gap-2"
              >
                EXPLORE SPECIMENS <ArrowDown className="w-3.5 h-3.5 text-white/50 group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>

        {/* Right Column: High-Fidelity Interactive HUD Specimen */}
        <div className="lg:col-span-4 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="w-full max-w-[380px] h-[480px] rounded-3xl p-6 glass-panel-premium relative flex flex-col justify-between overflow-hidden group border border-white/10"
          >
            {/* Corner cyber ticks */}
            <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-white/30" />
            <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-white/30" />
            <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-white/30" />
            <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-white/30" />

            {/* Glowing vertical lines in background */}
            <div className="absolute inset-x-8 top-12 bottom-12 border-l border-dashed border-white/5 pointer-events-none" />
            <div className="absolute inset-x-12 top-12 bottom-12 border-r border-dashed border-white/5 pointer-events-none" />

            {/* Header telemetry info */}
            <div className="flex justify-between items-start z-10">
              <div className="flex flex-col">
                <span className="font-mono text-[8px] text-white/30 uppercase tracking-[0.15em]">CORE VISUAL ORBIT</span>
                <span className="font-mono text-xs text-white/80 mt-1 uppercase font-semibold">COGNITIVE_NODE_A1</span>
              </div>
              <span className="font-mono text-[8px] px-2 py-0.5 bg-[#FF4F00]/10 border border-[#FF4F00]/20 rounded text-[#FF4F00] font-semibold tracking-wider">
                LOCK_L3
              </span>
            </div>

            {/* Animated Centerpiece Sphere */}
            <div className="relative w-full h-44 flex items-center justify-center my-6 z-10">
              {/* Spinning outline ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 rounded-full border border-dashed border-white/20 flex items-center justify-center"
              >
                <div className="w-1.5 h-1.5 bg-[#FF4F00] rounded-full absolute -top-[3px]" />
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full absolute -bottom-[3px]" />
              </motion.div>
              
              {/* Outer orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-44 h-44 rounded-full border border-dashed border-white/5 flex items-center justify-center"
              >
                <div className="w-2 h-2 border border-white/30 rounded-full absolute top-8 left-2" />
              </motion.div>

              {/* Glowing fluid sphere inner */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#FF4F00]/40 to-indigo-700/40 border border-white/10 blur-[2px] flex items-center justify-center relative animate-pulse shadow-[0_0_40px_rgba(255,79,0,0.15)] group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-2 rounded-full border border-white/10 bg-black/90 flex items-center justify-center">
                  <Play className="w-5 h-5 text-white/80 fill-white/10 group-hover:scale-110 group-hover:text-amber-300 transition-all cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Bottom telemetry stats panel */}
            <div className="flex flex-col gap-3.5 z-10 pt-2 border-t border-white/5 bg-black/40 p-3 rounded-xl border border-white/5 backdrop-blur-sm">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-white/40">NEURAL CONVECTION</span>
                <span className="text-white font-medium">98.4 Gb/s</span>
              </div>
              <div className="w-full bg-white/5 h-[3px] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "10%" }}
                  animate={{ width: "88%" }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-[#FF4F00] to-cyan-400 rounded-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-white/30 tracking-tight leading-none uppercase">COMPUTE INTEGRITY STATUS</span>
                <span className="font-mono text-[9px] text-[#22C55E] tracking-tight leading-none uppercase">STABLE (99.8%)</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </div>

      {/* Extreme luxury lower coordinate footer inside section */}
      <div className="absolute bottom-6 left-12 right-12 hidden md:flex items-center justify-between text-[10px] font-mono text-white/20 select-none">
        <span>LOC // 32.8940 N // 97.3073 W</span>
        <span>AETHER DESIGN PROTOCOL SEC-4</span>
        <span>EXPERIMENTAL CREATIVE INTELLIGENCE</span>
      </div>
    </section>
  );
}
