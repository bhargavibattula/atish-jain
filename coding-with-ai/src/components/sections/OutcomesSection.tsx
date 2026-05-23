"use client";

import { motion } from "framer-motion";
import { TrendingUp, Briefcase, Globe, Rocket, Award, Users, CheckCircle } from "lucide-react";
import { FaChartLine } from "react-icons/fa";

const outcomes = [
  {
    metric: "92%",
    label: "Placement Rate",
    description: "Students placed within 90 days of completion at top tech companies and startups.",
    icon: <Briefcase size={22} />,
    color: "from-emerald-400 to-teal-500",
    glow: "shadow-[0_0_40px_rgba(16,185,129,0.25)]",
  },
  {
    metric: "500+",
    label: "Projects Deployed",
    description: "Production-grade AI applications live on the internet, built by our community.",
    icon: <Globe size={22} />,
    color: "from-blue-400 to-cyan-500",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.25)]",
  },
  {
    metric: "3x",
    label: "Faster Learning",
    description: "Students report learning 3x faster with AI-assisted development compared to traditional bootcamps.",
    icon: <Rocket size={22} />,
    color: "from-purple-400 to-fuchsia-500",
    glow: "shadow-[0_0_40px_rgba(168,85,247,0.25)]",
  },
  {
    metric: "₹40k+",
    label: "First Freelance Gig",
    description: "Average earning from the first freelance project completed during the Diamond program.",
    icon: <TrendingUp size={22} />,
    color: "from-amber-400 to-orange-500",
    glow: "shadow-[0_0_40px_rgba(251,191,36,0.25)]",
  },
];

const milestones = [
  { text: "Build your first AI app in Week 1", icon: <CheckCircle size={16} /> },
  { text: "Deploy to production by Week 3", icon: <CheckCircle size={16} /> },
  { text: "Complete portfolio with 5+ projects", icon: <CheckCircle size={16} /> },
  { text: "Job-ready with interview prep", icon: <CheckCircle size={16} /> },
];

export default function OutcomesSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#080C14]">
      {/* Cinematic Lighting */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/3 -right-1/4 w-[800px] h-[800px] rounded-full bg-emerald-600/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <FaChartLine className="text-emerald-400" size={14} />
            <span className="text-sm font-medium tracking-wide text-emerald-300 uppercase">Proven Results</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-4xl"
          >
            Our students don&apos;t just learn. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
              They transform.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl font-normal leading-relaxed"
          >
            Real outcomes from real students. No vanity metrics — just verifiable, life-changing results.
          </motion.p>
        </div>

        {/* Metrics Grid — Staggered Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative p-8 md:p-10 rounded-[28px] bg-[#111827]/50 backdrop-blur-xl border border-white/[0.05] hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-1 ${outcome.glow} overflow-hidden`}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${outcome.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700`} />
              
              {/* Top subtle edge light */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${outcome.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {outcome.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className={`text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${outcome.color} tracking-tighter`}>
                      {outcome.metric}
                    </span>
                    <span className="text-lg font-semibold text-white">{outcome.label}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                    {outcome.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Pathway — Premium Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-[32px] bg-[#111827]/30 backdrop-blur-xl border border-white/[0.05] relative overflow-hidden">
            {/* Background shimmer */}
            <div className="absolute inset-0 animate-shimmer pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                  <Award size={18} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Your Achievement Pathway</h3>
                  <p className="text-sm text-gray-400">What your first 30 days look like</p>
                </div>
              </div>

              <div className="space-y-4">
                {milestones.map((milestone, i) => (
                  <motion.div
                    key={milestone.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300 group"
                  >
                    <div className="text-emerald-400 group-hover:scale-110 transition-transform">
                      {milestone.icon}
                    </div>
                    <span className="text-gray-300 font-medium text-base group-hover:text-white transition-colors">
                      {milestone.text}
                    </span>
                    <div className="ml-auto px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                      Week {i + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
