"use client";

import Link from "next/link";
import { ArrowLeft, Home, BookOpen } from "lucide-react";
import FuzzyText from "@/components/ui/FuzzyText";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#0B0F19] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Animated Fuzzy 404 Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 select-none cursor-pointer"
        >
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.6}
            enableHover={true}
            fuzzRange={25}
            color="#ffffff"
            fontSize="clamp(5rem, 15vw, 12rem)"
            fontWeight={900}
            direction="both"
            glitchMode={true}
            glitchInterval={2500}
            glitchDuration={300}
          >
            404
          </FuzzyText>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4"
        >
          Lost in hyperspace?
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-sm"
        >
          The page you are looking for doesn't exist, has been moved, or is still compiling under lightspeed.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full sm:w-auto h-12 px-6 rounded-xl bg-white text-black font-semibold text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-white/5"
          >
            <Home size={16} />
            Go Back Home
          </Link>
          <Link
            href="/memberships"
            className="flex items-center justify-center gap-2 w-full sm:w-auto h-12 px-6 rounded-xl bg-[#111827]/80 backdrop-blur-xl border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
          >
            <BookOpen size={16} />
            View Memberships
          </Link>
        </motion.div>
      </div>

      {/* Floating coordinates indicator */}
      <div className="absolute bottom-6 left-6 text-[10px] font-mono text-gray-600 tracking-wider">
        SYS_STATUS: ERR_NOT_FOUND // PORT_3001
      </div>
    </div>
  );
}
