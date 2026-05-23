"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal, Sparkles, Command, Zap, Play, Code2, Bot } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import LightRays from "@/components/ui/LightRays/LightRays";
import SplitText from "@/components/ui/SplitText";
import ShapeGrid from "@/components/ui/ShapeGrid";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Typing effect state
  const [codeText, setCodeText] = useState("");
  const fullCode = `function generateAIApp(idea) {
  const stack = ["Next.js", "AI", "Tailwind"];
  
  return {
    architecture: "Serverless",
    design: "World-class SaaS",
    status: "Deploying..."
  };
}`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= fullCode.length) {
        setCodeText(fullCode.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, [fullCode]);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#0B0F19] flex items-center">
      {/* Immersive Particle Background */}
      <div className="absolute inset-0 z-0">
        <ShapeGrid
          speed={0.4}
          squareSize={48}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.025)"
          hoverFillColor="rgba(6, 182, 212, 0.15)"
          shape="hexagon"
          hoverTrailAmount={6}
          className="absolute inset-0 z-0 pointer-events-none"
        />

        {/* WebGL Light Rays Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#06b6d4"
            raysSpeed={0.8}
            lightSpread={1.5}
            rayLength={2.5}
            pulsating={false}
            fadeDistance={1.0}
            saturation={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.02}
            distortion={0.05}
          />
        </div>

        {/* Holographic Glowing Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-600/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Column: Copy & CTA */}
          <motion.div style={{ y, opacity }} className="flex flex-col items-start text-left pt-10 lg:pt-0">
            {/* Startup Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-md relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <Zap size={14} className="text-cyan-400 animate-pulse" />
              <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">The Future of Coding</span>
            </motion.div>

            {/* Massive Heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5rem] font-bold text-white tracking-tight mb-8 leading-[1.05] flex flex-col items-start">
              <SplitText
                text="Build software"
                className="text-white block text-left"
                delay={50}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="left"
                tag="span"
                animateOnMount={true}
                overflow="visible"
                display="block"
              />
              <span className="relative inline-block mt-2 pb-3">
                <span className="relative z-10">
                  <SplitText
                    text="at lightspeed."
                    className="inline-block text-left [&_.split-char]:text-transparent [&_.split-char]:bg-clip-text [&_.split-char]:bg-gradient-to-r [&_.split-char]:from-cyan-400 [&_.split-char]:to-blue-500"
                    delay={55}
                    duration={0.8}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    textAlign="left"
                    tag="span"
                    animateOnMount={true}
                    overflow="visible"
                    display="inline-block"
                  />
                </span>
                <span className="absolute inset-0 blur-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 -z-10" />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-lg leading-relaxed font-medium"
            >
              Master AI-assisted development. We transform ambitious students into elite engineers capable of building Silicon Valley-grade applications in days, not months.
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
            >
              <Link
                href="/register"
                className="group relative flex items-center justify-center gap-3 w-full sm:w-auto h-14 px-8 rounded-full bg-white text-black font-semibold text-base transition-all duration-300 hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Start Building Free
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <button className="group relative flex items-center justify-center gap-3 w-full sm:w-auto h-14 px-8 rounded-full bg-[#111827]/80 backdrop-blur-xl border border-white/10 text-white font-semibold transition-all hover:bg-white/5 hover:border-white/20">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <Play size={14} className="ml-0.5" fill="currentColor" />
                </div>
                Watch Product Tour
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Layered UI Panels */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[600px] w-full mt-12 lg:mt-0 perspective-1000"
          >
            {/* The Main Editor Panel */}
            <div className="absolute inset-0 lg:right-[-10%] lg:left-[10%] top-[10%] bottom-[10%] rounded-[24px] border border-white/[0.08] bg-[#0A0F1C]/80 backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,0.2)] overflow-hidden z-10 transform lg:rotate-y-[-10deg] lg:rotate-x-[5deg] transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0">

              {/* Editor Header */}
              <div className="h-12 border-b border-white/[0.05] bg-white/[0.02] flex items-center px-4 gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-3 py-1 rounded-md bg-black/40 border border-white/5 text-[11px] text-gray-400 font-mono flex items-center gap-2">
                    <Terminal size={12} className="text-cyan-400" /> index.tsx
                  </div>
                </div>
              </div>

              {/* Editor Body (Live Typing Simulation) */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
                <div className="flex">
                  <div className="text-gray-600 select-none pr-4 text-right border-r border-white/5 mr-4 flex flex-col gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <span key={n}>{n}</span>)}
                  </div>
                  <div className="text-gray-300 whitespace-pre">
                    <span className="text-purple-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-300">App</span>() {'{\n'}
                    {'  '} <span className="text-cyan-400">const</span> app = <span className="text-blue-300">{codeText}</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-white align-middle ml-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating AI Chatbot Assistant Layer */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 1, delay: 1 } }}
              className="absolute -bottom-6 -left-6 lg:left-0 z-20 w-72 rounded-2xl border border-white/10 bg-[#111827]/90 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              <div className="p-4 border-b border-white/5 bg-gradient-to-r from-purple-500/10 to-transparent flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">AI Assistant</p>
                  <p className="text-[10px] text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Online
                  </p>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300">
                  I've analyzed your architecture. Should I automatically deploy the serverless functions to Vercel?
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 rounded-lg bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                    Yes, deploy
                  </button>
                  <button className="flex-1 py-1.5 rounded-lg bg-white/5 text-gray-400 text-xs font-medium border border-white/5 hover:bg-white/10 transition-colors">
                    Review first
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Floating Code Snippet Layer */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: [0, 15, 0], opacity: 1 }}
              transition={{ y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }, opacity: { duration: 1, delay: 1.5 } }}
              className="absolute top-10 -right-6 lg:-right-12 z-0 p-4 rounded-2xl border border-white/10 bg-[#0A0F1C]/60 backdrop-blur-md shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-yellow-400" />
                <span className="text-xs font-bold text-gray-300">Performance Optimized</span>
              </div>
              <div className="h-1.5 w-32 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "98%" }}
                  transition={{ duration: 2, delay: 2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-green-400 to-cyan-400"
                />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
