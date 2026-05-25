"use client";

import Link from "next/link";
import { ArrowLeft, Home, BookOpen, Bot, Sparkles, RefreshCw } from "lucide-react";
import FuzzyText from "@/components/ui/FuzzyText";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NotFound() {
  const [compileProgress, setCompileProgress] = useState(0);
  const [compileStatus, setCompileStatus] = useState("System idle. Awaiting command.");
  const [compiling, setCompiling] = useState(false);

  const compilationSteps = [
    "Spinning up Docker containers...",
    "Downloading more virtual RAM...",
    "Injecting caffeine into mainframes...",
    "Querying ChatGPT for page instructions...",
    "Rerouting DNS queries directly to the moon...",
    "Compilation complete! 404 Still Exists 🥲"
  ];

  const handleCompile = () => {
    if (compiling) return;
    setCompiling(true);
    setCompileProgress(0);
    setCompileStatus("Initializing compiler sequence...");

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setCompileProgress(step * 20);
      setCompileStatus(compilationSteps[step - 1]);

      if (step >= 5) {
        clearInterval(interval);
        setTimeout(() => {
          setCompileStatus(compilationSteps[5]);
          setCompiling(false);
        }, 1000);
      }
    }, 850);
  };

  return (
    <div className="min-h-screen w-full bg-[#0B0F19] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background grids and glowing blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
        
        {/* Floating robot icon */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8 p-5 rounded-3xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 relative"
        >
          <Bot size={44} className="animate-pulse" />
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-2 right-2 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-[#0B0F19]"
          />
        </motion.div>

        {/* Animated Fuzzy 404 Header with customized gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 select-none cursor-pointer"
        >
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.6}
            enableHover={true}
            fuzzRange={25}
            gradient={["#3B82F6", "#8B5CF6", "#06B6D4"]}
            fontSize="clamp(5rem, 15vw, 10rem)"
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
          className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 pb-1"
        >
          Lost in Hyperspace?
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-sm"
        >
          The page you are looking for has vanished into a <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-semibold">digital black hole</span> or is still compiling under <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">lightspeed</span>.
        </motion.p>

        {/* Cute Interactive Manual Compiler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mb-8 w-full p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 relative overflow-hidden backdrop-blur-md text-left"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full pointer-events-none" />
          <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-2">
            <RefreshCw size={14} className={compiling ? "animate-spin text-cyan-400" : "text-gray-400"} />
            Manual Browser Compiler
          </h3>
          <p className="text-[11px] text-gray-500 mb-4">
            If you believe this route is correct, trigger a client-side rebuild attempt:
          </p>

          {/* Progress bar */}
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-3.5 relative border border-white/[0.03]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${compileProgress}%` }}
              transition={{ ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"
            />
          </div>

          <div className="text-[11px] font-mono mb-4 text-cyan-400/90 min-h-[16px] truncate">
            {`> ${compileStatus}`}
          </div>

          <button
            onClick={handleCompile}
            disabled={compiling}
            className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              compiling
                ? "bg-white/5 text-gray-600 border border-white/5 cursor-not-allowed"
                : "bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 active:scale-[0.98]"
            }`}
          >
            {compiling ? "Compiling source files..." : "Execute Rebuild"}
          </button>
        </motion.div>

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
        SYS_STATUS: ERR_NOT_FOUND // PORT_3000
      </div>
    </div>
  );
}
