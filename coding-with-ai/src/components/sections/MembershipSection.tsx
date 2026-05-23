"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Gem } from "lucide-react";

const memberships = [
  {
    id: "silver",
    name: "Silver",
    tagline: "The Foundation",
    description: "Begin your journey into AI-assisted development. Master the core tools and build your first production-ready application.",
    image: "/silver.png",
    gradient: "from-[#94A3B8] via-[#CBD5E1] to-[#94A3B8]",
    cardBg: "bg-[#111827]/40",
    borderColor: "border-white/[0.06] hover:border-slate-500/30",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(148,163,184,0.06)]",
    features: [
      "Access to Core AI Curriculum",
      "Build 2 Real-World Projects",
      "Discord Community Access",
      "Weekly Live QA Sessions",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    tagline: "The Accelerator",
    description: "Scale your skills to a professional level. Learn complex system architecture, vector databases, and full-stack deployment.",
    image: "/gold.png",
    gradient: "from-[#F59E0B] via-[#FBBF24] to-[#F59E0B]",
    cardBg: "bg-[#111827]/40",
    borderColor: "border-white/[0.06] hover:border-amber-500/30",
    glowColor: "group-hover:shadow-[0_0_35px_rgba(245,158,11,0.08)]",
    popular: true,
    features: [
      "Everything in Silver, plus:",
      "Advanced RAG & LLM Engineering",
      "Build 5 Enterprise-grade Projects",
      "Resume & Portfolio Review",
      "1-on-1 Mentorship (Monthly)",
    ],
  },
  {
    id: "diamond",
    name: "Diamond",
    tagline: "The Founder Track",
    description: "For future CTOs and Founders. Build scalable SaaS products, master technical leadership, and prepare for elite placements.",
    image: "/diamond.png",
    gradient: "from-[#06B6D4] via-[#38BDF8] to-[#06B6D4]",
    cardBg: "bg-[#111827]/40",
    borderColor: "border-white/[0.06] hover:border-cyan-500/30",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]",
    features: [
      "Everything in Gold, plus:",
      "Startup Architecture Blueprints",
      "Mock Technical Interviews",
      "Direct Founder Access",
      "Priority Job Board Placement",
    ],
  },
];

export default function MembershipSection() {
  return (
    <section className="py-32 relative bg-[#0B0F19] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6"
          >
            <Gem size={14} className="text-amber-400" />
            <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">The Evolution</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-4xl"
          >
            Your path to becoming an <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
              elite tech founder.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl font-normal leading-relaxed"
          >
            We don&apos;t sell courses. We offer a transformational journey designed to elevate you from beginner to highly recruited engineer.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {memberships.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group flex flex-col ${tier.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {/* Popular glow ring */}
              {tier.popular && (
                <div className="absolute -inset-[1px] rounded-[24px] bg-gradient-to-b from-amber-400/30 via-amber-500/10 to-transparent blur-sm pointer-events-none z-10" />
              )}

              <div
                className={`relative flex-1 flex flex-col rounded-[24px] border ${tier.borderColor} ${tier.cardBg} backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${tier.glowColor}`}
              >
                {/* Course Banner Image */}
                <div className="relative w-full h-44 overflow-hidden bg-slate-950 z-0">
                  <Image
                    src={tier.image}
                    alt={`${tier.name} Tier Banner`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority={i === 1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent z-10" />
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col justify-between relative z-20">
                  <div>
                    {/* Header: Tier name & Popular Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/[0.08] bg-white/[0.02]">
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${tier.gradient}`}>
                          {tier.name}
                        </span>
                      </span>
                      {tier.popular && (
                        <span className="text-[11px] font-bold text-amber-400 tracking-wider uppercase">
                          Most Selected
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                      {tier.tagline}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6 text-[14px]">
                      {tier.description}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-white/5 mb-6" />

                    {/* Features */}
                    <div className="space-y-3.5 mb-8">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/item">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/[0.02] border border-white/[0.06]">
                            <Check size={10} className="text-emerald-400" strokeWidth={3} />
                          </div>
                          <span className="text-sm text-gray-300 font-medium group-hover/item:text-white transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div>
                    <Link
                      href={`/claim/${tier.id}`}
                      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        tier.popular
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:scale-[1.01]"
                          : "bg-white/[0.04] text-white border border-white/10 hover:bg-white/[0.08] hover:border-white/20"
                      }`}
                    >
                      Apply for {tier.name}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
