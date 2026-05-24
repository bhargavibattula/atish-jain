"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Brain, Rocket, Briefcase, Target, ChevronLeft, ChevronRight, Check } from "lucide-react";
import BorderGlow from "@/components/ui/BorderGlow";
import TiltedCard from "@/components/ui/TiltedCard";

const capabilities = [
  {
    id: 0,
    icon: <Zap size={28} className="text-blue-400" />,
    title: "10x Build Velocity",
    description: "Write, refactor, and ship production-grade code using AI agents, completely bypassing traditional boilerplate.",
    color: "from-blue-500 to-cyan-400",
    glowColor: "6, 182, 212",
    accentColor: "rgba(59,130,246,0.3)",
    borderColors: ['#3b82f6', '#22d3ee', '#60a5fa'],
    glowColorHSL: "200 80 70",
    visual: (
      <div className="font-mono text-xs text-blue-300 space-y-1.5 p-4 rounded-xl border border-white/5 bg-black/60 shadow-inner">
        <div className="flex items-center justify-between text-gray-500 border-b border-white/5 pb-1.5 mb-2">
          <span>⚡ VELOCITY_AGENT</span>
          <span className="text-[10px] text-blue-400">ACTIVE</span>
        </div>
        <p className="text-gray-400">▶ npx create-agentic-app --ui=dashboard</p>
        <p className="text-cyan-400">✔ Generating React layout... (0.12s)</p>
        <p className="text-cyan-400">✔ Synchronizing DB schemas... (0.08s)</p>
        <p className="text-emerald-400 font-bold">✔ Deploy complete to edge edge-region: lhr1 (12ms)</p>
      </div>
    ),
  },
  {
    id: 1,
    icon: <Brain size={28} className="text-purple-400" />,
    title: "AI-Native Thinking",
    description: "Shift your mindset from syntax memorization to architectural prompt engineering and structural system designs.",
    color: "from-purple-500 to-fuchsia-400",
    glowColor: "168, 85, 247",
    accentColor: "rgba(168,85,247,0.3)",
    borderColors: ['#a855f7', '#e879f9', '#c084fc'],
    glowColorHSL: "280 85 70",
    visual: (
      <div className="font-mono text-xs text-purple-300 space-y-1.5 p-4 rounded-xl border border-white/5 bg-black/60 shadow-inner">
        <div className="flex items-center justify-between text-gray-500 border-b border-white/5 pb-1.5 mb-2">
          <span>🧠 ARCHITECT_FLOW</span>
          <span className="text-[10px] text-purple-400">SYNCED</span>
        </div>
        <div className="p-2 rounded bg-purple-500/5 border border-purple-500/10 text-gray-300">
          <p className="font-bold text-white">Prompt Input:</p>
          <p className="text-[11px] mt-0.5 font-normal">"Link NextAuth session to user schema in schema.prisma with role based permissions"</p>
        </div>
        <p className="text-purple-400">↳ Result: Generated middleware checking JWT role scope.</p>
      </div>
    ),
  },
  {
    id: 2,
    icon: <Rocket size={28} className="text-orange-400" />,
    title: "Silicon Valley Stack",
    description: "Master the exact tools used by elite startups: Next.js, Vercel, Supabase, Tailwind, and OpenAI APIs.",
    color: "from-orange-500 to-rose-400",
    glowColor: "249, 115, 22",
    accentColor: "rgba(249,115,22,0.3)",
    borderColors: ['#f97316', '#fb7185', '#fda4af'],
    glowColorHSL: "20 85 70",
    visual: (
      <div className="p-4 rounded-xl border border-white/5 bg-black/60 shadow-inner">
        <div className="flex items-center justify-between text-gray-500 border-b border-white/5 pb-1.5 mb-3 text-[11px] font-mono">
          <span>🚀 STACK_COMPONENTS</span>
          <span className="text-[10px] text-orange-400">READY</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["Next.js 15", "Supabase DB", "OpenAI API", "Tailwind CSS"].map((tech) => (
            <div key={tech} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-gray-300 font-semibold shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    icon: <Briefcase size={28} className="text-emerald-400" />,
    title: "Placement Readiness",
    description: "Build an undeniable portfolio of live, AI-powered applications that make tech recruiters fight to hire you.",
    color: "from-emerald-500 to-teal-400",
    glowColor: "16, 185, 129",
    accentColor: "rgba(16,185,129,0.3)",
    borderColors: ['#10b981', '#2dd4bf', '#34d399'],
    glowColorHSL: "150 80 70",
    visual: (
      <div className="font-mono text-xs text-emerald-300 space-y-1.5 p-4 rounded-xl border border-white/5 bg-black/60 shadow-inner">
        <div className="flex items-center justify-between text-gray-500 border-b border-white/5 pb-1.5 mb-2">
          <span>💼 PLACEMENT_LOGS</span>
          <span className="text-[10px] text-emerald-400">98% PASS</span>
        </div>
        <div className="space-y-1 text-gray-400 text-[11px]">
          <p>✔ Real-time system design reviews: <span className="text-emerald-400 font-bold">100%</span></p>
          <p>✔ Multi-agent mock pipeline pass: <span className="text-emerald-400 font-bold">100%</span></p>
          <p>✔ Contract & gig pipeline set: <span className="text-emerald-400 font-bold">ACTIVE</span></p>
        </div>
      </div>
    ),
  },
];

export default function WhySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % capabilities.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + capabilities.length) % capabilities.length);
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#0B0F19]">
      {/* Background Lighting */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cinematic Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6"
          >
            <Target size={14} className="text-purple-400" />
            <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">The Transformation</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-3xl"
          >
            Don&apos;t just learn to code. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Learn to engineer.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl font-normal leading-relaxed"
          >
            The old way of learning syntax is dead. We teach you how to architect, build, and deploy like a senior engineer by leveraging AI.
          </motion.p>
        </div>

        {/* 3D Stack Coverflow Deck Layout */}
        <div className="relative max-w-4xl mx-auto py-10 flex flex-col items-center justify-center min-h-[500px]">
          
          {/* Deck Container */}
          <div className="relative w-full max-w-[420px] h-[450px] flex items-center justify-center touch-pan-y perspective-[1000px]">
            <AnimatePresence initial={false}>
              {capabilities.map((cap, index) => {
                // Calculate relative index compared to active
                const relativeIndex = (index - activeIndex + capabilities.length) % capabilities.length;
                
                // Card layering logic
                let zIndex = 10;
                let scale = 0.8;
                let x = 0;
                let opacity = 0;
                let rotateY = 0;
                let pointerEvents: "auto" | "none" = "none";

                if (relativeIndex === 0) {
                  // Center Card (Active)
                  zIndex = 30;
                  scale = 1.0;
                  x = 0;
                  opacity = 1;
                  rotateY = 0;
                  pointerEvents = "auto";
                } else if (relativeIndex === 1) {
                  // Right Card
                  zIndex = 20;
                  scale = 0.85;
                  x = 180; // offset in px
                  opacity = 0.45;
                  rotateY = -25;
                  pointerEvents = "auto";
                } else if (relativeIndex === capabilities.length - 1) {
                  // Left Card
                  zIndex = 20;
                  scale = 0.85;
                  x = -180; // offset in px
                  opacity = 0.45;
                  rotateY = 25;
                  pointerEvents = "auto";
                } else {
                  // Hidden Cards in background
                  zIndex = 10;
                  scale = 0.7;
                  x = 0;
                  opacity = 0;
                  rotateY = 0;
                  pointerEvents = "none";
                }

                // Adjust for mobile viewports
                if (isMobile) {
                  if (relativeIndex === 1) x = 70;
                  else if (relativeIndex === capabilities.length - 1) x = -70;
                }

                return (
                  <motion.div
                    key={cap.id}
                    style={{
                      zIndex,
                      pointerEvents,
                    }}
                    animate={{
                      x,
                      scale,
                      opacity,
                      rotateY,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                    }}
                    drag={relativeIndex === 0 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    className="absolute w-full max-w-[340px] md:max-w-[360px] h-full"
                  >
                    <TiltedCard
                      className="w-full h-full"
                      rotateXRange={12}
                      rotateYRange={12}
                      scaleOnHover={1.0}
                      glareColor={cap.glowColor}
                      showGlare={relativeIndex === 0}
                    >
                      <BorderGlow
                        edgeSensitivity={30}
                        glowColor={cap.glowColorHSL}
                        backgroundColor="rgba(17, 24, 39, 0.75)"
                        borderRadius={28}
                        glowRadius={55}
                        glowIntensity={relativeIndex === 0 ? 0.95 : 0.4}
                        colors={cap.borderColors}
                        className={`w-full h-full p-8 flex flex-col justify-between border border-white/5 backdrop-blur-2xl shadow-2xl transition-all duration-300 ${
                          relativeIndex === 0 ? cap.glow + " border-white/10" : "opacity-80"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-4 mb-6">
                            <div className={`w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform`}>
                              {cap.icon}
                            </div>
                            <span className="text-[10px] tracking-widest font-mono font-bold text-gray-500 uppercase">
                              MODULE 0{cap.id + 1}
                            </span>
                          </div>

                          <h3 className="text-2xl font-black text-white tracking-tight mb-3">
                            {cap.title}
                          </h3>

                          <p className="text-gray-400 text-sm leading-relaxed mb-6 font-normal">
                            {cap.description}
                          </p>
                        </div>

                        {/* Interactive Visual/Console Module */}
                        <div>
                          {cap.visual}
                        </div>
                      </BorderGlow>
                    </TiltedCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center gap-6 mt-12 w-full">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all shadow-md active:scale-95 group"
                aria-label="Previous card"
              >
                <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Selector Pills */}
              <div className="flex gap-2">
                {capabilities.map((cap) => (
                  <button
                    key={cap.id}
                    onClick={() => setActiveIndex(cap.id)}
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-300 relative border border-white/5 ${
                      activeIndex === cap.id
                        ? "bg-purple-500 w-8"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                    aria-label={`Go to card ${cap.id + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all shadow-md active:scale-95 group"
                aria-label="Next card"
              >
                <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Quick Helper Text */}
            <p className="text-xs text-gray-500 font-mono tracking-wide">
              DRAG OR SCROLL CARDS TO BROWSE ECOSYSTEM
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
