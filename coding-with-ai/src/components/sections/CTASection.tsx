"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FaRocket, FaCheckCircle } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080C14] to-[#0B0F19]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <Sparkles size={14} className="animate-pulse" />
            Limited Spots Available
          </div>

          <h2 className="font-poppins font-bold text-5xl sm:text-6xl text-white mb-6 leading-tight flex flex-col items-center justify-center gap-2">
            Start Building Apps
            <span className="gradient-text flex items-center justify-center gap-4">
              with AI Today <FaRocket className="text-blue-500" size={36} />
            </span>
          </h2>

          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 500+ students who are already building real apps, landing jobs, and monetizing their AI skills.
            Your journey starts with a single click.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="group flex items-center gap-2 px-10 py-4 rounded-xl text-white font-bold btn-gradient text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              Join Coding With AI
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/memberships"
              className="flex items-center gap-2 px-10 py-4 rounded-xl text-white font-semibold border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all text-lg"
            >
              View Memberships
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> 7-day money-back guarantee</span>
            <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> No coding experience needed</span>
            <span className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Lifetime community access</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
