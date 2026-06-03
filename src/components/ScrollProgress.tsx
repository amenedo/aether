import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="scroll-progress-container"
      className="fixed top-0 left-0 w-full h-[2.5px] bg-transparent z-50 pointer-events-none"
    >
      {/* Precision indicator line */}
      <div
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-amber-500 via-[#FF4F00] to-rose-500 transition-all duration-300 ease-out origin-left shadow-[0_0_10px_rgba(255,79,0,0.8),_0_0_20px_rgba(255,79,0,0.3)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
