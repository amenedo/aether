import { motion } from "motion/react";
import { Command, Sparkles, Disc } from "lucide-react";

interface FooterProps {
  onScrollToElement: (elementId: string) => void;
}

export default function Footer({ onScrollToElement }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#030303] border-t border-accent py-12 px-6 sm:px-12 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Brand Logo & Credits */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer" onClick={() => onScrollToElement("hero")}>
            <Command className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-extrabold tracking-[0.2em] text-white text-sm">AETHER STUDIO</span>
            <span className="font-mono text-[8px] text-white/30 tracking-widest mt-0.5 uppercase">INTELLIGENT SYSTEMS // EXCLUSIVITY GUARANTEED</span>
          </div>
        </div>

        {/* Center: Legal of contemporary look */}
        <div className="text-center font-sans text-xs text-white/35 font-light">
          &copy; {currentYear} AETHER SYSTEMS INC. ALL SCHEMES REGULATED BY PRE-SET EMBEDDING BLUEPRINTS.
        </div>

        {/* Right Side: Awwwards rating mimic */}
        <div className="flex items-center gap-6 font-mono text-[9px] text-white/40">
          <div className="flex flex-col items-end">
            <span className="text-white/20 uppercase tracking-widest">AWARDS COEFFICIENT</span>
            <span className="text-white font-extrabold flex items-center gap-1.5 mt-0.5 tracking-tighter">
              A_STUDIO // 9.98 SCORE
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-amber-200">
            <Sparkles className="w-3 h-3 text-[#FF4F00] animate-pulse" />
            <span>WORLD-CLASS CORE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
