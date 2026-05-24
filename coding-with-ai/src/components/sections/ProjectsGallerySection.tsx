"use client";

import { motion } from "framer-motion";
import CircularGallery from "@/components/ui/CircularGallery";

export default function ProjectsGallerySection() {
  const galleryItems = [
    {
      image: "/projects/saas-analytics.png",
      text: "Analytics Dashboard",
    },
    {
      image: "/projects/saas-crm.png",
      text: "Modern CRM Platform",
    },
    {
      image: "/projects/saas-ecommerce.png",
      text: "E-Commerce Admin",
    },
    {
      image: "/projects/saas-ai.png",
      text: "AI Command Center",
    },
  ];

  return (
    <section className="py-24 relative bg-[#0B0F19] overflow-hidden border-t border-white/[0.03]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-gray-300 uppercase">3D Interactive Exhibition</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Experience Our Projects in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">3D Space</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 max-w-xl mx-auto"
          >
            Click and drag, or scroll to interact with the carousel. See the clean, AI-engineered application interfaces in motion.
          </motion.p>
        </div>

        {/* Gallery Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[480px] md:h-[550px] w-full rounded-3xl bg-[#0e1322]/50 border border-white/[0.05] overflow-hidden backdrop-blur-sm"
        >
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#e2e8f0"
            borderRadius={0.05}
            font="bold 28px Inter"
            scrollSpeed={2.5}
            scrollEase={0.03}
          />
        </motion.div>
      </div>
    </section>
  );
}
