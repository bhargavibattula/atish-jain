"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProfileCard from "@/components/ui/ProfileCard";

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
                &quot;You don&apos;t need a perfect background to build a great future.&quot;
              </p>
              <p className="text-[19px] sm:text-[21px] font-medium text-white italic leading-snug">
                &quot;You just need direction, discipline, and the courage to start.&quot;
              </p>
            </div>

            {/* Closing Catchphrase */}
            <p className="text-gray-400 text-lg mb-10">
              Let&apos;s move forward, one step, one skill, one leap at a time.
            </p>

            {/* CTA Button */}
            <div className="flex justify-start">
              <button className="group relative flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-[16px] tracking-wide hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.55)]">
                Resume Learning
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive ProfileCard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <ProfileCard
              name="Atish Jain"
              title="Founder & Mentor"
              handle="atishjain"
              status="20+ Years in Tech"
              contactText="Connect"
              avatarUrl="/atishjainsir.png"
              showUserInfo={true}
              enableTilt={false}
              enableMobileTilt={false}
              onContactClick={() => window.open("https://in.linkedin.com/in/atishjain9", "_blank")}
              behindGlowEnabled={false}
              innerGradient="linear-gradient(145deg, #1e1b4b8c 0%, #3b82f644 100%)"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
