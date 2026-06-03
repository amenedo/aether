import { useState, useEffect } from "react";
import SpaceBackground from "./components/SpaceBackground";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import ScrollReveal from "./components/ScrollReveal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import AetherEngine from "./components/AetherEngine";
import PortfolioGallery from "./components/PortfolioGallery";
import ContactPanel from "./components/ContactPanel";
import Footer from "./components/Footer";
import { InteractiveProposal } from "./types";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [proposalToTransmit, setProposalToTransmit] = useState<InteractiveProposal | null>(null);

  // Smooth scroll helper
  const handleScrollToElement = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(elementId);
    }
  };

  // Intersection Observer to highlight Header tabs on scroll
  useEffect(() => {
    const sections = ["hero", "services", "engine", "portfolio", "contact"];
    const observers = sections.map((secId) => {
      const el = document.getElementById(secId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(secId);
          }
        },
        { threshold: 0.25, rootMargin: "-80px 0px -20% 0px" }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  return (
    <div id="aether-studio-core" className="min-h-screen relative font-sans text-white/90 selection:bg-white/10 select-none">
      {/* Precision scroll position tracking with light blooming accent */}
      <ScrollProgress />

      {/* Reactive circular high-fidelity ambient cursor */}
      <CustomCursor />

      {/* Spectacular interactive galaxy layer background */}
      <SpaceBackground />

      {/* Luxury dynamic Header */}
      <Header
        onScrollToElement={handleScrollToElement}
        activeSection={activeSection}
      />

      {/* Main Experience layout */}
      <main className="relative z-10">
        
        {/* Kinetic typography Hero section */}
        <Hero onExploreClick={handleScrollToElement} />

        {/* Asymmetric Services bento grid */}
        <ScrollReveal id="services" parallaxOffset={20}>
          <ServicesGrid />
        </ScrollReveal>

        {/* Interactive Co-creative Prompt Intelligence compiler */}
        <ScrollReveal id="engine" parallaxOffset={35}>
          <AetherEngine
            onProposalGenerated={(proposal) => setProposalToTransmit(proposal)}
            onScrollToElement={handleScrollToElement}
          />
        </ScrollReveal>

        {/* Dynamic specimens of fine digital engineering portal */}
        <ScrollReveal id="portfolio" parallaxOffset={25}>
          <PortfolioGallery />
        </ScrollReveal>

        {/* Premium call transmission gate form */}
        <ScrollReveal id="contact" parallaxOffset={30}>
          <ContactPanel proposalToTransmit={proposalToTransmit} />
        </ScrollReveal>

      </main>

      {/* Luxury coordinate score rate index Footer */}
      <Footer onScrollToElement={handleScrollToElement} />
    </div>
  );
}
