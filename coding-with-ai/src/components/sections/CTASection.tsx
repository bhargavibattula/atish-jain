"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Rocket, ChevronRight } from "lucide-react";
import SplitText from "@/components/ui/SplitText";

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0B0F19] border-t border-white/[0.02]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            animate={{ boxShadow: ["0 0 0px rgba(56,189,248,0)", "0 0 20px rgba(56,189,248,0.5)", "0 0 0px rgba(56,189,248,0)"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-10 backdrop-blur-md"
          >
            <Sparkles size={16} className="text-blue-400" />
            Limited Spots Available
          </motion.div>

          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight flex flex-col items-center justify-center">
            <span className="leading-tight">
              <SplitText text="Start Building Apps" tag="span" delay={30} duration={1} />
            </span>
            <div className="relative inline-flex items-center justify-center gap-2 md:gap-4 mt-0 md:-mt-1">
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 relative pb-2 pt-2"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >
                with AI Today
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-3xl opacity-40 -z-10 mix-blend-screen" />
              </motion.span>
              <motion.span
                animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                <Rocket className="text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] w-10 h-10 md:w-16 md:h-16" />
              </motion.span>
            </div>
          </h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Join <span className="text-white font-bold">500+ students</span> who are already building real apps, landing jobs, and monetizing their AI skills.
            Your journey starts with a single click.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <Link
              href="/register"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-white font-bold text-lg transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] hover:-translate-y-1 hover:shadow-2xl overflow-hidden bg-gradient-to-b from-blue-500 to-indigo-600 shadow-blue-500/40 hover:shadow-blue-500/60"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Coding With AI 
                <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                  <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform stroke-[3]" />
                </div>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
            
            <Link
              href="/memberships"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-white font-semibold border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-lg transition-all text-lg shadow-lg hover:shadow-xl"
            >
              View Memberships
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-14 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-y-4 gap-x-8 text-sm font-medium text-gray-400"
          >
            <span className="flex items-center gap-2.5"><CheckCircle2 className="text-emerald-400" size={18} /> 7-day money-back guarantee</span>
            <span className="flex items-center gap-2.5"><CheckCircle2 className="text-emerald-400" size={18} /> No coding experience needed</span>
            <span className="flex items-center gap-2.5"><CheckCircle2 className="text-emerald-400" size={18} /> Lifetime community access</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
