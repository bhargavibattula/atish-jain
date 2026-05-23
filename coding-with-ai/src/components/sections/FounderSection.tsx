"use client";

import { motion } from "framer-motion";
import { Award, Users, Code2, Rocket, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Users, value: "500+", label: "Engineers Mentored" },
  { icon: Code2, value: "20+", label: "Years Shipping Code" },
  { icon: Rocket, value: "50+", label: "Products Launched" },
  { icon: Award, value: "100%", label: "Placement Focus" },
];

export default function FounderSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0B0F19]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Cinematic Portrait Framing */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Inner container with overflow-hidden for the image styling */}
              <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
                
                {/* Premium Founder Photo */}
                <div className="w-full h-full bg-[#111827] flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                  <Image
                    src="/atishjainsir.png"
                    alt="Atish Jain"
                    fill
                    className="object-cover object-top z-20 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-30 opacity-90" />
                </div>
              </div>

              {/* Floating Credibility Indicators - Outside overflow-hidden so it's fully visible */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -right-6 lg:-right-12 z-30 p-5 rounded-2xl bg-[#0A0F1C]/90 backdrop-blur-xl border border-white/10 shadow-2xl"
              >
                <Quote size={24} className="text-blue-400 mb-2 opacity-50" />
                <p className="text-sm text-gray-300 font-medium italic">"Coding is a superpower. <br/> AI is the multiplier."</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content & Storytelling */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6 text-sm font-medium tracking-wide text-blue-400 uppercase">
              The Architect
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Meet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Atish Jain
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-normal mb-10">
              <p>
                With over two decades of engineering experience, Atish has architected systems, scaled applications, and mentored hundreds of developers to transition from absolute beginners to highly paid professionals.
              </p>
              <p>
                Now, he's bringing Silicon Valley's most guarded secret to ambitious students: <span className="text-white font-medium">the ability to build entire software ecosystems single-handedly using Artificial Intelligence.</span>
              </p>
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((s, idx) => (
                <div key={s.label} className="group flex flex-col p-5 rounded-[20px] bg-[#111827]/40 border border-white/[0.05] hover:bg-[#111827]/80 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <s.icon size={18} className="text-blue-400" />
                    </div>
                  </div>
                  <p className="font-bold text-2xl text-white tracking-tight mb-1">{s.value}</p>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              Read the full story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
