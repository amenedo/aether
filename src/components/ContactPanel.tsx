import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Mail, MessageSquare, Compass, Send, Check, AlertTriangle, ShieldAlert } from "lucide-react";
import { InteractiveProposal } from "@/src/types";

interface ContactPanelProps {
  proposalToTransmit: InteractiveProposal | null;
}

export default function ContactPanel({ proposalToTransmit }: ContactPanelProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    brief: proposalToTransmit ? `Transmit core design scheme proposal for: "${proposalToTransmit.conceptTitle}"` : "",
    tier: "PRIME_SCALE"
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Auto update brief if a proposal gets generated from AetherEngine
  useState(() => {
    if (proposalToTransmit) {
      setFormState(prev => ({
        ...prev,
        brief: `Transmitting AETHER conceptual outline: "${proposalToTransmit.conceptTitle}" // Timeline: ${proposalToTransmit.timelineEstimate} // Palette: ${proposalToTransmit.visualPalette.join(", ")}`
      }));
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleTransmity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    setLoading(true);
    // Mimic deep encryption packet verification
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-black border-t border-white/5 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-600/5 filter blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Agency coordinate coordinates details (Col-span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2 text-left">
            <div>
              <span className="font-mono text-xs text-[#FF4F00] uppercase tracking-[0.2em] font-bold flex items-center gap-1.5 mb-4">
                <Compass className="w-4 h-4 animate-spin-slow text-[#FF4F00]" /> INITIATE TRANSMISSION
              </span>
              <h2 className="text-4xl sm:text-5xl font-sans font-extrabold tracking-tight text-white mb-6">
                Start your epochal <br />
                <span className="font-serif italic font-light text-amber-200">evolutionary project.</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/50 font-light leading-relaxed mb-10 max-w-md">
                We accept limited concurrent client projects to guarantee extreme, uncompromising design fidelity and technical excellence. Secure your allocation timeline today.
              </p>
            </div>

            <div className="flex flex-col gap-6 font-mono text-xs text-white/50 pt-6 border-t border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/20 uppercase tracking-widest text-[9px]">PHYSICAL GRID STATION</span>
                  <span className="text-white/80 mt-1 uppercase font-medium">L3 // LEVEL_OFFICE, SAN FRANCISCO // MADRID CORP</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/20 uppercase tracking-widest text-[9px]">DIRECT COAXIAL SHELL</span>
                  <span className="text-white/80 mt-1 uppercase font-medium">INITIATE@AETHERSTUDIO.CO</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FF4F00]/10 border border-[#FF4F00]/20 flex items-center justify-center text-[#FF4F00]">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/20 uppercase tracking-widest text-[9px]">CYBER CRYPTOGRAPHIC ENCRYPTION</span>
                  <span className="text-[#FF4F00]/80 mt-1 uppercase font-semibold">AES_256 GCM SECURE ENDPOINT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Contact Transaction Interactive Form Panel (Col-span 7) */}
          <div className="lg:col-span-7 rounded-2xl p-6 sm:p-10 glass border border-accent relative flex flex-col justify-center">
            <span className="font-mono text-[9px] text-white/20 absolute top-4 right-6 tracking-widest">
              AETHER // COAXIAL_GATE
            </span>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contactForm"
                  onSubmit={handleTransmity}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6 text-left"
                >
                  {proposalToTransmit && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-[#FF4F00]/20 text-[#FEF08A] font-mono text-[11px] leading-relaxed flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>
                        SYSTEM_ATTACHED: Conceptualized portfolio blueprint packet is loaded in secure buffer.
                      </span>
                    </div>
                  )}

                  {/* Top line input row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1.5 ml-1">
                        NAME / COGNITIVE REPRESENTATIVE
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Master Director"
                        value={formState.name}
                        onChange={handleInputChange}
                        className="py-3 px-4 rounded-xl bg-white/5 border border-accent text-white placeholder-white/20 font-sans focus:outline-none focus:border-[#FF4F00] transition-colors"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1.5 ml-1">
                        EMAIL / COAXIAL CONNECTION
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. lead@entity.com"
                        value={formState.email}
                        onChange={handleInputChange}
                        className="py-3 px-4 rounded-xl bg-white/5 border border-accent text-white placeholder-white/20 font-sans focus:outline-none focus:border-[#FF4F00] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1.5 ml-1">
                        ENTITY / CORPORATE MONOLITH
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="e.g. Neuromancer Ltd."
                        value={formState.company}
                        onChange={handleInputChange}
                        className="py-3 px-4 rounded-xl bg-white/5 border border-accent text-white placeholder-white/20 font-sans focus:outline-none focus:border-[#FF4F00] transition-colors"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1.5 ml-1">
                        ALLOCATION EXCLUSIVITY SCALE
                      </label>
                      <select
                        name="tier"
                        value={formState.tier}
                        onChange={handleInputChange}
                        className="py-3 px-4 rounded-xl bg-white/5 border border-accent text-white font-sans focus:outline-none focus:border-[#FF4F00] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="PRIME_SCALE" className="bg-black text-white">PRIME LEVEL (SCALE HIGH)</option>
                        <option value="VIP_RESERVE" className="bg-black text-white">VIP RESERVE (COMPREHENSIVE)</option>
                        <option value="EXPERIMENTAL" className="bg-black text-white">INCUBATION / R&D EXPERIMENTAL</option>
                      </select>
                    </div>
                  </div>

                  {/* Textarea brief pitch */}
                  <div className="flex flex-col">
                    <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1.5 ml-1">
                      PROJECT CONCEPT VECTOR / PITCH BRIEF
                    </label>
                    <textarea
                      name="brief"
                      rows={4}
                      placeholder={proposalToTransmit ? "" : "e.g. Describe your high-performance ambitions, timelines, or key specifications..."}
                      value={formState.brief}
                      onChange={handleInputChange}
                      className="py-3 px-4 rounded-xl bg-white/5 border border-accent text-white placeholder-white/20 font-sans focus:outline-none focus:border-[#FF4F00] transition-colors resize-none text-xs leading-relaxed"
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={loading || !formState.name || !formState.email}
                    className="group w-full py-4.5 bg-gradient-to-r from-amber-500 to-[#FF4F00] text-white font-sans text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(255,79,0,0.2)] hover:scale-[1.01] transition-transform flex items-center justify-center gap-2.5 mt-2"
                  >
                    {loading ? (
                      <>
                        <Compass className="w-4 h-4 animate-spin" /> PACKET ENCRYPTING ...
                      </>
                    ) : (
                      <>
                        TRANSMIT SECURE SPECTRUM PACKET <Send className="w-3.5 h-3.5 fill-current" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="sucessScreen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center p-8 min-h-[350px]"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <Check className="w-6 h-6 animate-[bounce_1s]" />
                  </div>
                  <h4 className="font-sans text-lg font-extrabold text-white uppercase tracking-wider mb-2">
                    TRANSMISSION SUCCESSFUL
                  </h4>
                  <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-semibold mb-4">
                    PACKET_HASH // sha256_{Math.floor(Math.random() * 89999 + 10000)}ae_{idxGenerator()}
                  </p>
                  <p className="font-sans text-xs text-white/50 max-w-sm leading-relaxed mb-6">
                    Your request has bypassed outer proxy routers and resides within our priority queue. A Lead Creative Coordinator will initiate a sensory call within 4-6 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormState({
                        name: "",
                        email: "",
                        company: "",
                        brief: "",
                        tier: "PRIME_SCALE"
                      });
                      setSubmitted(false);
                    }}
                    className="font-mono text-[9px] uppercase tracking-widest px-4 py-2 border border-white/5 rounded text-white/40 hover:text-white hover:border-white/10 transition-colors"
                  >
                    DISCONNECT BUFFER CHANNEL
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

// Simple arbitrary hash index generator for premium look
function idxGenerator() {
  return Math.random().toString(36).substr(2, 6).toUpperCase();
}
