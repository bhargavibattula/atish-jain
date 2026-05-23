"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight, Layout, TerminalSquare, Video, FileText, Database } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot Platform",
    description: "A full-stack ChatGPT clone powered by OpenAI's streaming API, vector databases for memory, and secure user authentication.",
    techStack: ["Next.js 14", "OpenAI API", "Pinecone", "Tailwind"],
    category: "LLM App",
    icon: <TerminalSquare size={20} />,
    color: "from-blue-600/40 to-cyan-500/10",
    shadow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
  },
  {
    title: "AI ATS Resume Analyzer",
    description: "An automated hiring tool that parses PDFs, extracts skills using LLMs, and scores resumes against job descriptions in real-time.",
    techStack: ["React", "FastAPI", "Claude 3", "AWS"],
    category: "Career Tech",
    icon: <FileText size={20} />,
    color: "from-purple-600/40 to-fuchsia-500/10",
    shadow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]",
  },
  {
    title: "Smart Vision Attendance",
    description: "Computer vision application that detects faces, verifies identities via a deep learning model, and logs attendance directly to a database.",
    techStack: ["Python", "OpenCV", "TensorFlow", "Node.js"],
    category: "Computer Vision",
    icon: <Video size={20} />,
    color: "from-rose-600/40 to-orange-500/10",
    shadow: "group-hover:shadow-[0_0_40px_rgba(244,63,94,0.3)]",
  },
  {
    title: "AI Portfolio Generator",
    description: "Generate a fully responsive, animated developer portfolio website from a single prompt or LinkedIn PDF export.",
    techStack: ["Next.js", "GPT-4o", "Framer Motion"],
    category: "Developer Tools",
    icon: <Layout size={20} />,
    color: "from-emerald-600/40 to-teal-500/10",
    shadow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]",
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-32 relative bg-[#0B0F19] overflow-hidden">
      {/* Cinematic Lighting */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">impossible.</span>
            </h2>
            <p className="text-xl text-gray-400 font-normal leading-relaxed">
              We don't do "hello world". You will engineer, deploy, and own production-grade AI applications that stand out to top tech recruiters.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] text-white font-medium transition-all"
            >
              Explore all projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Cinematic Project Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-[32px] bg-[#111827]/40 backdrop-blur-xl border border-white/[0.05] overflow-hidden transition-all duration-500 hover:-translate-y-2 ${project.shadow}`}
            >
              {/* Glass Mockup Area */}
              <div className="relative h-64 w-full bg-[#0A0F1C] border-b border-white/[0.05] overflow-hidden flex items-end justify-center pt-8 px-8">
                <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                
                {/* Abstract UI Device Mockup */}
                <div className="relative w-full max-w-md h-full bg-[#111827] rounded-t-2xl border-t border-x border-white/10 shadow-2xl transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500 ease-out flex flex-col overflow-hidden">
                  <div className="h-8 bg-white/[0.02] border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  <div className="flex-1 p-4 flex flex-col gap-3">
                    <div className="w-3/4 h-4 rounded bg-white/5" />
                    <div className="w-full h-20 rounded bg-white/[0.02]" />
                    <div className="flex gap-2">
                      <div className="w-1/3 h-8 rounded bg-white/5" />
                      <div className="w-1/3 h-8 rounded bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                    {project.icon}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-xs font-semibold tracking-wide text-gray-400">
                    {project.category}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-xs text-gray-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-white/[0.05]">
                  <button className="flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    <Github size={16} /> Source Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
