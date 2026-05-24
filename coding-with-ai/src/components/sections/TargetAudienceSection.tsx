"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, GraduationCap, Code2, Sparkles, Rocket, Target, Briefcase, Zap, Bot } from "lucide-react";

export default function TargetAudienceSection() {
  return (
    <section className="py-24 relative bg-[#0B0F19] overflow-hidden border-t border-white/[0.02]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Messaging Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
          >
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300 tracking-wide uppercase">Who Is This For?</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Build Apps Using AI 🚀 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Even With Little Coding Knowledge
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Learn Coding Faster Using AI Tools, Real Projects & Future-Ready Skills.
          </motion.p>
        </div>

        {/* Target Audiences Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          
          {/* High School Students Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-10 rounded-[32px] bg-[#111827]/80 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden group hover:border-cyan-500/30 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-colors" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                <GraduationCap className="text-blue-400" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">High School Students</h3>
                <p className="text-blue-400 font-medium">Age: 14–18</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-gray-400 font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle size={16} className="text-red-400" /> Pain Points
                </h4>
                <ul className="space-y-3">
                  {['Fear of coding', "Don't know where to start", 'Want to build apps quickly', 'Interested in AI', 'Need practical learning'].map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2 text-sm leading-relaxed">
                      <span className="text-red-500/50 mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-gray-400 font-semibold mb-4 flex items-center gap-2">
                  <Target size={16} className="text-green-400" /> Goals
                </h4>
                <ul className="space-y-3">
                  {['Learn modern skills', 'Build projects', 'Explore AI', 'Create apps'].map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2 text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="text-green-500/70 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Engineering Students Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-10 rounded-[32px] bg-[#111827]/80 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden group hover:border-purple-500/30 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-purple-500/10 transition-colors" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                <Code2 className="text-purple-400" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Engineering Students</h3>
                <p className="text-purple-400 font-medium">Age: 18–24</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-gray-400 font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle size={16} className="text-red-400" /> Pain Points
                </h4>
                <ul className="space-y-3">
                  {['Outdated college syllabus', 'Fear of AI replacing jobs', 'Lack of practical skills', 'No real projects', 'Placement pressure'].map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2 text-sm leading-relaxed">
                      <span className="text-red-500/50 mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-gray-400 font-semibold mb-4 flex items-center gap-2">
                  <Briefcase size={16} className="text-green-400" /> Goals
                </h4>
                <ul className="space-y-3">
                  {['Learn Coding with AI', 'Build portfolio projects', 'Improve placements', 'Freelancing / Startups', 'Future-proof career'].map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2 text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="text-green-500/70 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Core Value Proposition Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] overflow-hidden p-10 md:p-14 text-center border border-white/10 shadow-2xl"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4]/20 via-[#3b82f6]/20 to-[#a855f7]/20 opacity-80 mix-blend-screen" />
          <div className="absolute inset-0 bg-[#0B0F19]/60 backdrop-blur-md" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
              By the end of this journey, you will...
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { text: 'Learn AI-assisted coding', icon: Bot },
                { text: 'Build apps faster', icon: Zap },
                { text: 'Create real projects', icon: Code2 },
                { text: 'Prepare for placements', icon: Briefcase },
                { text: 'Monetize your skills', icon: Rocket }
              ].map((prop, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white font-medium hover:bg-white/10 hover:border-cyan-500/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                >
                  <prop.icon size={20} className="text-cyan-400" />
                  {prop.text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
