"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  rotateXRange?: number;
  rotateYRange?: number;
  scaleOnHover?: number;
  springConfig?: { stiffness: number; damping: number; mass?: number };
  showGlare?: boolean;
  glareColor?: string;
  glareMaxOpacity?: number;
}

export default function TiltedCard({
  children,
  className = "",
  rotateXRange = 15,
  rotateYRange = 15,
  scaleOnHover = 1.05,
  springConfig = { stiffness: 300, damping: 20 },
  showGlare = true,
  glareColor = "ffffff",
  glareMaxOpacity = 0.15,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tracking mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring-based values for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [rotateXRange, -rotateXRange]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-rotateYRange, rotateYRange]), springConfig);

  // Scale spring
  const scaleSpring = useSpring(isHovered ? scaleOnHover : 1, springConfig);

  // Glare position transform
  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useSpring(isHovered ? glareMaxOpacity : 0, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Get normalized mouse position between -0.5 and 0.5
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        scale: scaleSpring,
      }}
      className={`relative cursor-pointer transition-shadow duration-300 ${className}`}
    >
      {/* 3D glare overlay */}
      {showGlare && (
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(${glareColor === "ffffff" ? "255,255,255" : "6,182,212"}, 0.4) 0%, transparent 80%)`,
            opacity: glareOpacity,
            pointerEvents: "none",
            borderRadius: "inherit",
          }}
        />
      )}

      {/* Card Content container */}
      <div style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
