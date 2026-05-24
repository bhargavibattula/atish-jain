"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919989241515"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 text-white shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_10px_40px_rgba(16,185,129,0.6)] transition-all cursor-pointer"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full animate-ping bg-green-400/30 -z-10" />
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      
      {/* Notification Dot */}
      <span className="absolute top-0 right-0 flex h-3.5 w-3.5 md:h-4 md:w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 md:h-4 md:w-4 bg-emerald-500 border-2 border-[#0B0F19]"></span>
      </span>
    </motion.a>
  );
}
