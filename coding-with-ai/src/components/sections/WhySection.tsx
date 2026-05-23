"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, Brain, Target, Rocket, Briefcase } from "lucide-react";
import BorderGlow from "@/components/ui/BorderGlow";

const capabilities = [
  {
    icon: <Zap size={24} />,
    title: "10x Build Velocity",
    description: "Write, refactor, and ship production-grade code using AI agents, completely bypassing traditional boilerplate.",
    color: "from-blue-500 to-cyan-400",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    alignment: "left",
    glowColorHSL: "200 80 70",
    borderColors: ['#3b82f6', '#22d3ee', '#60a5fa'],
  },
  {
    icon: <Brain size={24} />,
    title: "AI-Native Thinking",
    description: "Shift your mindset from syntax memorization to architectural prompt engineering and problem solving.",
    color: "from-purple-500 to-fuchsia-400",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    alignment: "right",
    glowColorHSL: "280 85 70",
    borderColors: ['#a855f7', '#e879f9', '#c084fc'],
  },
  {
    icon: <Rocket size={24} />,
    title: "Silicon Valley Stack",
    description: "Master the exact tools used by elite startups: Next.js, Vercel, Supabase, Tailwind, and OpenAI APIs.",
    color: "from-orange-500 to-rose-400",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    alignment: "left",
    glowColorHSL: "20 85 70",
    borderColors: ['#f97316', '#fb7185', '#fda4af'],
  },
  {
    icon: <Briefcase size={24} />,
    title: "Placement Readiness",
    description: "Build an undeniable portfolio of live, AI-powered applications that make tech recruiters fight to hire you.",
    color: "from-emerald-500 to-teal-400",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    alignment: "right",
    glowColorHSL: "150 80 70",
    borderColors: ['#10b981', '#2dd4bf', '#34d399'],
  },
];

export default function WhySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-[#0B0F19]">
      {/* Background Lighting */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cinematic Header */}
        <div className="flex flex-col items-center text-center mb-24">
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
            Don't just learn to code. <br/>
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

        {/* Transformation Timeline / Ecosystem */}
        <div className="relative max-w-4xl mx-auto py-10">
          
          {/* Animated Central Core Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          <motion.div 
            style={{ height: pathHeight }}
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 -translate-x-1/2 rounded-full hidden md:block shadow-[0_0_15px_rgba(168,85,247,0.5)] z-0" 
          />

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${cap.alignment === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Panel */}
                <div className={`flex-1 w-full md:w-1/2 ${cap.alignment === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                  <BorderGlow
                    edgeSensitivity={35}
                    glowColor={cap.glowColorHSL}
                    backgroundColor="#11182799"
                    borderRadius={24}
                    glowRadius={40}
                    glowIntensity={0.8}
                    coneSpread={25}
                    animated={true}
                    colors={cap.borderColors}
                    className="group relative transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl backdrop-blur-xl"
                  >
                    <div className="p-8">
                      <div className={`flex items-center gap-4 mb-4 ${cap.alignment === 'right' ? 'justify-start' : 'md:justify-end justify-start'}`}>
                        <div className={`w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 ${cap.glow}`}>
                          {cap.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">{cap.title}</h3>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-lg">
                        {cap.description}
                      </p>
                    </div>
                  </BorderGlow>
                </div>

                {/* Central Node (Desktop only) */}
                <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-[#0A0F1C] border border-white/20 items-center justify-center z-10 relative">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${cap.color} opacity-20 blur-md`} />
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${cap.color} shadow-lg`} />
                </div>
                
                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1 w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
