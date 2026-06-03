import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

export default function SpaceBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate relative mouse percentage
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="space-background"
      ref={containerRef}
      className="fixed inset-0 w-full h-full bg-[#050505] overflow-hidden -z-50 select-none pointer-events-none noise-overlay"
    >
      {/* Radial center highlight representing gradient-radial from Artistic Flair specs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#121212_0%,_#050505_100%)] opacity-85" />

      {/* Dynamic Grid Overlay showing elegant depth */}
      <div 
        className="absolute inset-0 grid-overlay opacity-25 animate-grid-slide"
        style={{
          transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px) scale(1.02)`,
          transition: "transform 0.8s cubic-bezier(0.1, 0.8, 0.2, 1)"
        }}
      />

      {/* Atmospheric Glowing Nebula Spotlight Nodes (Artistic Flair match) */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full filter blur-[120px] opacity-15 bg-blue-500 -top-[10%] -right-[10%]"
        style={{
          transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)`,
          transition: "transform 1.2s cubic-bezier(0.1, 0.8, 0.2, 1)"
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full filter blur-[100px] opacity-15 bg-orange-500 -bottom-[10%] -left-[10%]"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          transition: "transform 1.5s cubic-bezier(0.1, 0.8, 0.2, 1)"
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full filter blur-[130px] opacity-10 bg-indigo-500/20 bottom-10 left-1/4"
        style={{
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * 30}px)`,
          transition: "transform 1.8s cubic-bezier(0.1, 0.8, 0.2, 1)"
        }}
      />

      {/* Cybernetic Grid Line Highlights */}
      <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-[#050505] to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-[#050505] to-transparent z-10" />

      {/* Subtle random dust particles */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(15)].map((_, i) => {
          const delay = i * 0.7;
          const duration = 10 + i * 2;
          const left = `${(i * 7) % 100}%`;
          const top = `${(i * 13) % 100}%`;
          const size = (i % 3) + 1;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left,
                top,
                width: size,
                height: size,
                filter: "drop-shadow(0 0 4px rgba(255,255,255,0.8))"
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, (i % 2 === 0 ? 30 : -30), 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
