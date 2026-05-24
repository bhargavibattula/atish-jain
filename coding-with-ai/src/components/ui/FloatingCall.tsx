"use client";

import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCall() {
  return (
    <motion.a
      href="tel:9989241515"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-[100] flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-[0_10px_30px_rgba(6,182,212,0.4)] hover:shadow-[0_10px_40px_rgba(6,182,212,0.6)] transition-all cursor-pointer"
      aria-label="Call us"
    >
      <div className="absolute inset-0 rounded-full animate-ping bg-cyan-400/30 -z-10" style={{ animationDuration: '3s' }} />
      <PhoneCall size={24} />
    </motion.a>
  );
}
