"use client";

import { motion } from "framer-motion";
import { TrendingUp, Briefcase, Globe, Rocket, Award, ArrowRight } from "lucide-react";
import BorderGlow from "@/components/ui/BorderGlow";

const outcomes = [
  {
    metric: "92%",
    label: "Placement Rate",
    description: "Students placed within 90 days of completion at top tech companies and startups.",
    icon: <Briefcase size={22} />,
    glowColorHSL: "150 80 60",
    borderColors: ['#10b981', '#14b8a6', '#06b6d4'],
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    viz: (
      <svg className="w-16 h-16 text-emerald-400" viewBox="0 0 36 36">
        <path
          className="text-white/5"
          strokeWidth="3.5"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <motion.path
          initial={{ strokeDasharray: "0, 100" }}
          whileInView={{ strokeDasharray: "92, 100" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="text-emerald-400"
          strokeWidth="3.5"
          strokeDasharray="92, 100"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.5" className="fill-white text-[7px] font-bold font-sans text-center" textAnchor="middle">92%</text>
      </svg>
    )
  },
  {
    metric: "500+",
    label: "Projects Deployed",
    description: "Production-grade AI applications live on the internet, built by our community.",
    icon: <Globe size={22} />,
    glowColorHSL: "200 80 60",
    borderColors: ['#3b82f6', '#06b6d4', '#6366f1'],
    color: "from-blue-400 to-cyan-500",
    shadow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    viz: (
      <div className="flex gap-1.5 items-end h-10 w-20">
        {[40, 60, 45, 80, 55, 95, 70].map((h, idx) => (
          <motion.div
            key={idx}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 * idx, ease: "easeOut" }}
            className="w-2.5 rounded-t bg-gradient-to-t from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
          />
        ))}
      </div>
    )
  },
  {
    metric: "3x",
    label: "Faster Learning",
    description: "Students report learning 3x faster with AI-assisted development compared to traditional bootcamps.",
    icon: <Rocket size={22} />,
    glowColorHSL: "270 80 60",
    borderColors: ['#a855f7', '#d946ef', '#6366f1'],
    color: "from-purple-400 to-fuchsia-500",
    shadow: "shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    viz: (
      <svg className="w-24 h-12 text-purple-400 overflow-visible" viewBox="0 0 100 40">
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          d="M0,35 Q25,35 50,20 T100,5"
          fill="none"
          stroke="url(#purpleGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glowFilter)"
        />
        <defs>
          <linearGradient id="purpleGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <filter id="glowFilter">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    )
  },
  {
    metric: "₹40k+",
    label: "First Freelance Gig",
    description: "Average earning from the first freelance project completed during the Diamond program.",
    icon: <TrendingUp size={22} />,
    glowColorHSL: "35 85 60",
    borderColors: ['#f59e0b', '#f97316', '#ef4444'],
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-[0_0_30px_rgba(251,191,36,0.15)]",
    viz: (
      <div className="relative flex items-center justify-center bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-2 text-xs font-mono font-bold text-amber-300 gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
        <motion.span
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2.5 h-2.5 rounded-full bg-amber-400"
        />
        ACTIVE PAYOUT
      </div>
    )
  },
];

const milestones = [
  { text: "Build your first AI app in Week 1", step: "01", time: "Week 1", desc: "Construct a functional serverless API integrated with OpenAI within 7 days." },
  { text: "Deploy to production by Week 3", step: "02", time: "Week 3", desc: "Push your application live with full auth, db synchronization, and instant edge routing." },
  { text: "Complete portfolio with 5+ projects", step: "03", time: "Week 5", desc: "Build a series of multi-model AI projects showcasing direct enterprise capabilities." },
  { text: "Job-ready with interview prep", step: "04", time: "Week 8", desc: "Refine system design architecture skills and pass live mock AI-pair-programming trials." },
];

export default function OutcomesSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#080C14]">
      {/* Cinematic Lighting */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/3 -right-1/4 w-[800px] h-[800px] rounded-full bg-emerald-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 backdrop-blur-md"
          >
            <Award className="text-emerald-400" size={14} />
            <span className="text-sm font-semibold tracking-wide text-emerald-300 uppercase">Proven Outcomes</span>
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
            Real outcomes from real students. No vanity metrics — just verifiable, career-defining milestones.
          </motion.p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-24">
          {outcomes.map((outcome, i) => {
            const colSpanClass = "md:col-span-3";
            return (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`${colSpanClass} flex`}
              >
                <BorderGlow
                  edgeSensitivity={35}
                  glowColor={outcome.glowColorHSL}
                  backgroundColor="rgba(17, 24, 39, 0.45)"
                  borderRadius={28}
                  glowRadius={50}
                  glowIntensity={1.0}
                  colors={outcome.borderColors}
                  className={`w-full group relative transition-all duration-500 hover:-translate-y-1 backdrop-blur-xl ${outcome.shadow}`}
                >
                  <div className="p-8 md:p-10 flex flex-col justify-between h-full min-h-[220px]">
                    <div className="flex justify-between items-start gap-4 mb-8">
                      <div className="flex gap-5 items-center">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${outcome.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform duration-500 shadow-lg`}>
                          {outcome.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold tracking-wide text-gray-400 uppercase">{outcome.label}</p>
                          <p className="text-4xl md:text-5xl font-black tracking-tight text-white mt-1">
                            {outcome.metric}
                          </p>
                        </div>
                      </div>

                      {/* Integrated Visualization */}
                      <div className="flex-shrink-0">
                        {outcome.viz}
                      </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                      {outcome.description}
                    </p>
                  </div>
                </BorderGlow>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement Pathway — Premium Timeline Board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          <BorderGlow
            edgeSensitivity={35}
            glowColor="270 80 60"
            backgroundColor="rgba(17, 24, 39, 0.3)"
            borderRadius={32}
            glowRadius={60}
            glowIntensity={0.9}
            colors={['#a855f7', '#06b6d4', '#6366f1']}
            className="w-full relative overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.1)]"
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-inner">
                    <Award size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Your Custom Achievement Pathway</h3>
                    <p className="text-sm text-gray-400 mt-0.5">Accelerated 60-day development track to reach senior level fluency</p>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 flex items-center gap-1.5 self-start md:self-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                  DIAMOND TRACKING ACTIVE
                </div>
              </div>

              {/* Enhanced Stepper / Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {/* Horizontal Connector Line */}
                <div className="absolute top-[40px] left-8 right-8 h-0.5 bg-gradient-to-r from-purple-500/40 via-cyan-500/30 to-emerald-500/20 hidden md:block z-0" />

                {milestones.map((milestone, i) => (
                  <motion.div
                    key={milestone.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="relative z-10 flex flex-col items-start p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-white/[0.08] transition-all duration-300 group"
                  >
                    {/* Step Bubble */}
                    <div className="flex justify-between items-center w-full mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/30 to-indigo-600/30 border border-purple-500/20 flex items-center justify-center font-mono text-sm font-black text-purple-300 group-hover:scale-110 transition-transform shadow-md">
                        {milestone.step}
                      </div>
                      <span className="text-xs font-bold text-gray-400 bg-white/5 border border-white/5 rounded-full px-2.5 py-1">
                        {milestone.time}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-purple-300 transition-colors">
                      {milestone.text}
                    </h4>

                    <p className="text-sm text-gray-400 leading-relaxed font-normal">
                      {milestone.desc}
                    </p>

                    <div className="flex items-center gap-1.5 mt-5 text-[11px] font-bold text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Milestone Spec <ArrowRight size={12} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </BorderGlow>
        </motion.div>

      </div>
    </section>
  );
}
