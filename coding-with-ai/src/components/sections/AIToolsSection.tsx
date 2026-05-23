"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Code2, Cpu, ArrowRight, Zap, Bot } from "lucide-react";

const tools = [
  {
    name: "Cursor AI",
    tagline: "The AI Code Editor",
    description: "Experience the next evolution of coding. Cursor understands your entire codebase, predicting your next edit before you even type it.",
    icon: <Terminal size={22} />,
    gradient: "from-blue-500 to-indigo-500",
    glowColor: "rgba(59,130,246,0.15)",
    colSpan: "lg:col-span-2",
    features: ["Codebase Indexing", "Smart Rewrites", "Terminal Copilot"],
  },
  {
    name: "Claude 3.5",
    tagline: "Deep Reasoning",
    description: "Architect complex systems and debug impossible errors with Claude's unmatched reasoning capabilities.",
    icon: <Bot size={22} />,
    gradient: "from-purple-500 to-fuchsia-500",
    glowColor: "rgba(168,85,247,0.15)",
    colSpan: "lg:col-span-1",
    features: ["Architecture", "Logic", "Context"],
  },
  {
    name: "Bolt.new",
    tagline: "Instant Full-Stack",
    description: "Generate complete, deployable web applications from a single prompt directly in your browser.",
    icon: <Zap size={22} />,
    gradient: "from-cyan-500 to-teal-500",
    glowColor: "rgba(6,182,212,0.15)",
    colSpan: "lg:col-span-1",
    features: ["Zero Setup", "Auto-Deploy", "Full-Stack"],
  },
  {
    name: "GitHub Copilot",
    tagline: "Your AI Pair Programmer",
    description: "Write code faster with real-time suggestions and autocomplete powered by millions of open-source repositories.",
    icon: <Code2 size={22} />,
    gradient: "from-gray-400 to-gray-500",
    glowColor: "rgba(156,163,175,0.15)",
    colSpan: "lg:col-span-2",
    features: ["Autocomplete", "Chat", "Inline Fixes"],
  },
];

export default function AIToolsSection() {
  return (
    <section className="py-32 relative bg-[#0B0F19] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] pointer-events-none" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6"
          >
            <Cpu size={14} className="text-cyan-400" />
            <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">The Arsenal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6"
          >
            Tools of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">future.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl font-normal leading-relaxed"
          >
            We don&apos;t teach outdated syntax. You&apos;ll master the exact AI-native development stack used by elite Silicon Valley engineering teams.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative ${tool.colSpan}`}
            >
              <div
                className="relative h-full rounded-[24px] border border-white/[0.06] overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(180deg, rgba(17,24,39,0.6) 0%, rgba(17,24,39,0.3) 100%)`,
                  boxShadow: `0 0 0 0 transparent`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 40px ${tool.glowColor}`;
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 0 transparent';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                }}
              >
                {/* Top gradient accent line */}
                <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${tool.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />

                {/* Hover gradient fill */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700`} />

                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Top row: icon + tagline */}
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tool.gradient} bg-opacity-10 flex items-center justify-center text-white shadow-lg`}
                      style={{ background: `linear-gradient(135deg, ${tool.glowColor}, transparent)` }}
                    >
                      {tool.icon}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-semibold tracking-wider text-gray-400 uppercase group-hover:text-white group-hover:border-white/10 transition-all duration-300">
                      {tool.tagline}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      {tool.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors text-[15px]">
                      {tool.description}
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map(feature => (
                        <span key={feature} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-gray-400 font-medium group-hover:border-white/10 group-hover:text-gray-300 transition-all duration-300">
                          <Sparkles size={10} className="opacity-40" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <a href="/ai-tools" className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Explore the full AI toolkit
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
