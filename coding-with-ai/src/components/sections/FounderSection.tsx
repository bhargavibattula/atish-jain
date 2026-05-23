"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";


export default function FounderSection() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#0B0F19]">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content & Storytelling (takes 7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Title */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              <span className="text-gray-500">Your Coach,</span> Not<br />Just A Creator
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-[17px] sm:text-[18px] text-gray-400 leading-relaxed font-normal mb-8 max-w-2xl">
              <p>
                Hey, I'm Atish Jain, Founder & Mentor of Coding With AI.
              </p>
              <p>
                I began my journey in technology decades ago, architecting scalable enterprise systems, optimizing complex data flows, and leading engineering teams. Over the past 20+ years, I have helped guide hundreds of developers to transition from absolute beginners to industry-ready engineering professionals.
              </p>
              <p>
                Today, I lead Coding With AI full-time—a platform born from passion, persistence, and the relentless drive to make high-end, AI-native software development accessible to every ambitious student in India.
              </p>
            </div>

            {/* Quote Box */}
            <div className="mb-10 pl-6 border-l-2 border-blue-500/80 space-y-2">
              <p className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Remember:</p>
              <p className="text-[19px] sm:text-[21px] font-medium text-white italic leading-snug">
                "You don't need a perfect background to build a great future."
              </p>
              <p className="text-[19px] sm:text-[21px] font-medium text-white italic leading-snug">
                "You just need direction, discipline, and the courage to start."
              </p>
            </div>

            {/* Closing Catchphrase */}
            <p className="text-gray-400 text-lg mb-10">
              Let's move forward, one step, one skill, one leap at a time.
            </p>

            {/* Glowing Blue/Purple CTA Button matching site theme */}
            <div className="flex justify-start">
              <button className="group relative flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-[16px] tracking-wide hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.55)]">
                Resume Learning
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Image with Floating Badges (takes 5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] aspect-[10/12] rounded-[32px] overflow-hidden bg-[#111827] border border-white/5 shadow-2xl">
              
              {/* Grid pattern background inside container */}
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

              {/* Atish Jain Sir Portrait Image */}
              <Image
                src="/atishjainsir.png"
                alt="Atish Jain"
                fill
                className="object-cover object-top z-10 transition-transform duration-700 hover:scale-105"
                priority
              />

              {/* Dark Gradient Overlays for Seamless Fade to Background */}
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0B0F19] to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B0F19] to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-[#0B0F19] to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-1/12 bg-gradient-to-b from-[#0B0F19] to-transparent z-20 pointer-events-none" />
            </div>

            {/* Floating Credentials Badge 1 (AH Career style) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] left-0 sm:left-[-10px] md:left-[-20px] lg:left-[-40px] z-30 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#161B26]/85 backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              <Briefcase size={16} className="text-blue-400" />
              <span className="text-[13px] font-semibold text-white tracking-wide">
                Founder of AH Career
              </span>
            </motion.div>

            {/* Floating Credentials Badge 2 (Company/Platform logo style) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[48%] left-4 sm:left-[10px] md:left-0 lg:left-[-20px] z-30 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#161B26]/85 backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              <div className="relative w-4 h-4 rounded-md overflow-hidden bg-white/10 flex items-center justify-center">
                <Image
                  src="/image.png"
                  alt="Coding With AI Logo"
                  width={14}
                  height={14}
                  className="object-contain"
                />
              </div>
              <span className="text-[13px] font-semibold text-white tracking-wide">
                Founder, Coding With AI
              </span>
            </motion.div>

            {/* Floating Credentials Badge 3 (Experience/Mentorship style) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-[76%] left-[10px] sm:left-[0px] md:left-[-10px] lg:left-[-30px] z-30 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#161B26]/85 backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              <GraduationCap size={16} className="text-orange-400" />
              <span className="text-[13px] font-semibold text-white tracking-wide">
                20+ Years Mentoring Developers
              </span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
