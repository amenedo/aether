import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowUpRight, Menu, X, Command, Disc } from "lucide-react";

interface HeaderProps {
  onScrollToElement: (elementId: string) => void;
  activeSection: string;
}

export default function Header({ onScrollToElement, activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Studio" },
    { id: "services", label: "Expertise" },
    { id: "engine", label: "Aether Engine" },
    { id: "portfolio", label: "Specimens" },
    { id: "contact", label: "Initiate" }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-accent py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Luxury Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onScrollToElement("hero")}
        >
          <div className="w-2.5 h-2.5 bg-white rotate-45"></div>
          <span className="text-mono text-[10.5px] font-black uppercase tracking-[0.3em] text-white">
            AETHER / STUDIO
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.slice(0, 4).map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onScrollToElement(item.id)}
                className={`relative font-mono text-[10px] uppercase tracking-[0.15em] transition-opacity duration-300 ${
                  isActive ? "opacity-100 font-bold" : "opacity-60 hover:opacity-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBullet"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FF4F00] rotate-45"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Button / Contact */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:flex items-center gap-4"
        >
          <button
            onClick={() => onScrollToElement("contact")}
            className="px-6 py-2 border border-white/20 rounded-full text-[10px] text-mono uppercase tracking-[0.15em] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Contact
          </button>
        </motion.div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => onScrollToElement("engine")}
            className="font-sans text-[10px] font-bold tracking-wider px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-white"
          >
            CO-CREATE
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 border-b border-white/10 overflow-hidden md:hidden z-30"
          >
            <div className="p-8 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onScrollToElement(item.id);
                    }}
                    className={`py-2 text-left font-sans text-lg font-semibold tracking-widest uppercase ${
                      activeSection === item.id ? "text-[#FF4F00]" : "text-white/60"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono text-white/40">
                  <span>AETHER SYSTEMS INC.</span>
                  <span className="text-[#FF4F00] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] animate-ping" /> ONLINE
                  </span>
                </div>
                
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onScrollToElement("engine");
                  }}
                  className="w-full bg-[#FF4F00] text-white py-3 rounded-xl font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  START ENGINE <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
