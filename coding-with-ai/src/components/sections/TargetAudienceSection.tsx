"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, GraduationCap, Code2, Sparkles, Rocket, Target, Briefcase, Zap, Bot } from "lucide-react";
import BorderGlow from "@/components/ui/BorderGlow/BorderGlow";

export default function TargetAudienceSection() {
  return (
    <section className="py-24 relative bg-[#0B0F19] overflow-hidden border-t border-white/[0.02]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
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
            className="relative text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]"
          >
            {/* Soft glowing backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-cyan-500/20 blur-[100px] -z-10 rounded-full pointer-events-none" />
            
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-2">
              <span>Build Apps</span>
              <div className="relative inline-flex items-center gap-2 md:gap-4">
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 relative pt-2 pb-4"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  Using AI
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-2xl opacity-40 -z-10 mix-blend-screen mt-2 mb-4" />
                </motion.span>
                <motion.span
                  animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block"
                >
                  <Rocket className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                </motion.span>
              </div>
            </div>
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 mt-2 block">
              Even With <span className="text-gray-100">Little Coding Knowledge</span>
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Learn Coding Faster Using <span className="text-cyan-400 font-semibold">AI Tools</span>, <span className="text-blue-400 font-semibold">Real Projects</span> & <span className="text-purple-400 font-semibold">Future-Ready Skills</span>.
          </motion.p>
        </div>

        {/* Target Audiences Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          
          {/* High School Students Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <BorderGlow 
              className="w-full h-full"
              glowColor="190 90 60"
              edgeSensitivity={40}
              colors={['#38bdf8', '#3b82f6', '#06b6d4']}
              animated={true}
            >
              <div className="relative p-8 md:p-10 h-full rounded-[32px] bg-[#111827]/80 backdrop-blur-xl group transition-colors">
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
              </div>
            </BorderGlow>
          </motion.div>

          {/* Engineering Students Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <BorderGlow 
              className="w-full h-full"
              glowColor="280 90 60"
              edgeSensitivity={40}
              colors={['#c084fc', '#a855f7', '#d946ef']}
              animated={true}
            >
              <div className="relative p-8 md:p-10 h-full rounded-[32px] bg-[#111827]/80 backdrop-blur-xl group transition-colors">
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
              </div>
            </BorderGlow>
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
