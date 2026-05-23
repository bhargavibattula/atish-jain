"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import MagicBento from "@/components/ui/MagicBento";

export default function TestimonialsSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0B0F19]">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] mix-blend-screen" />
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] rounded-full bg-blue-600/5 blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cinematic Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-6"
          >
            <Heart size={14} className="text-rose-400" />
            <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Hall of Fame</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6"
          >
            Don't take our word for it. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Look at the results.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl font-normal leading-relaxed"
          >
            Our alumni are building startups, landing elite tech roles, and securing freelance contracts worldwide. Here's what they have to say.
          </motion.p>
        </div>

        {/* Magic Bento Grid reviews */}
        <MagicBento />
      </div>
    </section>
  );
}
