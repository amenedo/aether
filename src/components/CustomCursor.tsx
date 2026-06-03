import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [snapTarget, setSnapTarget] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const realX = e.clientX;
      const realY = e.clientY;
      setMousePosition({ x: realX, y: realY });

      const targetEl = e.target as HTMLElement | null;
      if (targetEl) {
        const interactiveEl = targetEl.closest(
          "button, a, input, select, textarea, [role='button'], .cursor-pointer"
        );
        if (interactiveEl) {
          const rect = interactiveEl.getBoundingClientRect();
          setSnapTarget({
            // Calculate center of target for magnetic attraction point
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
            width: rect.width,
            height: rect.height,
          });
          setIsHovered(true);
        } else {
          setSnapTarget(null);
          setIsHovered(false);
        }
      }

      if (!isVisible) setIsVisible(true);
    };

    const handleScroll = () => {
      // Temporarily break magnetic snaps on scroll to prevent cursor flying away
      setSnapTarget(null);
      setIsHovered(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", updatePosition, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  // Magnetic coordinate blending: pulls outer ring 82% of the way to center, inner pin 58% of the way to center
  const outerX = snapTarget ? snapTarget.x + (mousePosition.x - snapTarget.x) * 0.18 : mousePosition.x;
  const outerY = snapTarget ? snapTarget.y + (mousePosition.y - snapTarget.y) * 0.18 : mousePosition.y;

  const innerX = snapTarget ? snapTarget.x + (mousePosition.x - snapTarget.x) * 0.42 : mousePosition.x;
  const innerY = snapTarget ? snapTarget.y + (mousePosition.y - snapTarget.y) * 0.42 : mousePosition.y;

  // Elastic sizing configurations matching the sleek Artistic theme
  const outerSize = isHovered ? 52 : 24;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        id="custom-cursor-glow"
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-screen opacity-80"
        animate={{
          x: outerX - outerSize / 2,
          y: outerY - outerSize / 2,
          width: outerSize,
          height: outerSize,
          backgroundColor: isHovered ? "rgba(255, 79, 0, 0.12)" : "rgba(255, 255, 255, 0.01)",
          borderColor: isHovered ? "#FF4F00" : "rgba(255, 255, 255, 0.4)",
          borderWidth: isHovered ? "1.5px" : "1px",
          scale: isHovered ? 1.25 : 1,
          boxShadow: isHovered 
            ? "0 0 20px rgba(255, 79, 0, 0.6), inset 0 0 10px rgba(255, 79, 0, 0.25)" 
            : "0 0 5px rgba(255, 255, 255, 0.1)",
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 24,
          mass: 0.5,
        }}
      />
      {/* Inner Pin Dot */}
      <motion.div
        id="custom-cursor-pin"
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          backgroundColor: "#FF4F00",
          boxShadow: "0 0 8px rgba(255, 79, 0, 0.9)"
        }}
        animate={{
          x: innerX - 3,
          y: innerY - 3,
          scale: isHovered ? 0.6 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 650,
          damping: 28,
          mass: 0.25
        }}
      />
    </>
  );
}
