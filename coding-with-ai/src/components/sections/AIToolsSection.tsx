"use client";

import { motion } from "framer-motion";
import { Cpu, ArrowRight } from "lucide-react";
import ChromaGrid from "@/components/ui/ChromaGrid";

const tools = [
  {
    image: "/tools/cursor-ai.png",
    title: "Cursor AI",
    subtitle: "The AI-native code editor that understands your entire codebase and predicts your next edit.",
    handle: "Code Editor",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://cursor.com",
  },
  {
    image: "/tools/claude-ai.png",
    title: "Claude 3.5",
    subtitle: "Architect complex systems and debug impossible errors with unmatched reasoning.",
    handle: "Deep Reasoning",
    borderColor: "#D97706",
    gradient: "linear-gradient(210deg, #D97706, #000)",
    url: "https://claude.ai",
  },
  {
    image: "/tools/chatgpt.png",
    title: "ChatGPT",
    subtitle: "The frontier AI assistant for brainstorming, code generation, and rapid prototyping.",
    handle: "AI Assistant",
    borderColor: "#10A37F",
    gradient: "linear-gradient(165deg, #10A37F, #000)",
    url: "https://chat.openai.com",
  },
  {
    image: "/tools/bolt-new.png",
    title: "Bolt.new",
    subtitle: "Generate complete, deployable full-stack web applications from a single prompt.",
    handle: "Instant Apps",
    borderColor: "#14B8A6",
    gradient: "linear-gradient(195deg, #14B8A6, #000)",
    url: "https://bolt.new",
  },
  {
    image: "/tools/github-copilot.png",
    title: "GitHub Copilot",
    subtitle: "Real-time code suggestions and autocomplete powered by millions of open-source repos.",
    handle: "Pair Programmer",
    borderColor: "#6E5494",
    gradient: "linear-gradient(225deg, #6E5494, #000)",
    url: "https://github.com/features/copilot",
  },
  {
    image: "/tools/v0-dev.png",
    title: "v0.dev",
    subtitle: "AI-powered UI generation by Vercel — describe a component, get production-ready code.",
    handle: "UI Generator",
    borderColor: "#ffffff",
    gradient: "linear-gradient(135deg, #333, #000)",
    url: "https://v0.dev",
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

        {/* ChromaGrid */}
        <div style={{ minHeight: 600, position: "relative" }}>
          <ChromaGrid
            items={tools}
            radius={350}
            columns={3}
            rows={2}
            damping={0.4}
            fadeOut={0.5}
            ease="power3.out"
          />
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
