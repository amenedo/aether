import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  parallaxOffset?: number; // Distance in px to shift content
}

export default function ScrollReveal({
  children,
  id,
  className = "",
  parallaxOffset = 30,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll position of the section relative to the viewport window
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate smooth parallax translation using spring physics for ultra-fluid response
  const yRange = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset]);
  const yTransform = useSpring(yRange, {
    stiffness: 75,
    damping: 20,
    mass: 0.2,
  });

  // Subtle opacity scaling as sections approach viewport boundaries (cinematic reveal)
  const opacityRange = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.75, 1, 1, 0.75]
  );
  const opacityTransform = useSpring(opacityRange, {
    stiffness: 100,
    damping: 25,
  });

  return (
    <div
      id={id ? `reveal-${id}` : undefined}
      ref={containerRef}
      className={`relative w-full ${className}`}
    >
      {/* Decoupled Entrance Layer: Handles the clean, 1st-time entry fade up smoothly */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1.0,
          ease: [0.16, 1, 0.3, 1], // Custom cinematic bezier curve
        }}
        className="w-full h-full"
      >
        {/* Scroll Interaction Layer: Applies parallax and opacity relative to viewport scroll progress */}
        <motion.div
          id={id ? `motion-content-${id}` : undefined}
          style={{
            y: yTransform,
            opacity: opacityTransform,
          }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
