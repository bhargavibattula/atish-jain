"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import SplitText from "@/components/ui/SplitText";
import SpotlightCard from "@/components/ui/SpotlightCard";
import TiltedCard from "@/components/ui/TiltedCard";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import BorderGlow from "@/components/ui/BorderGlow";
import SkillsBubbles from "@/components/ui/SkillsBubbles";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Code, 
  Zap, 
  BookOpen, 
  Award, 
  Sparkles, 
  ShieldCheck 
} from "lucide-react";

export default function AboutPage() {
  const storySteps = [
    {
      phase: "Phase 1: The Architect",
      title: "20+ Years in Tech",
      description: "Atish Jain spent two decades designing and architecting complex software pipelines for enterprise systems, leading engineering teams, and solving deep backend challenges.",
      icon: Code,
      color: "from-blue-500 to-indigo-500",
    },
    {
      phase: "Phase 2: The Catalyst",
      title: "Bridging the Real-World Gap",
      description: "He observed a massive disconnect: colleges taught outdated theories while companies demanded modern, hands-on tools. Mentoring became a personal mission to bridge this gap.",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
    },
    {
      phase: "Phase 3: The AI Disruption",
      title: "The Birth of Coding With AI",
      description: "With generative AI, Atish recognized that coding was no longer about memorizing syntax, but about system architecture and prompt engineering. He founded the academy to democratize premium tech building.",
      icon: Zap,
      color: "from-cyan-500 to-teal-500",
    },
  ];

  const coreValues = [
    {
      icon: Award,
      title: "Mentorship Over Syllabus",
      description: "No generic video playlists. Get live direct guidance from a tech veteran who has spent 20+ years building real systems.",
    },
    {
      icon: ShieldCheck,
      title: "AI-First Software Engineering",
      description: "Master Cursor, ChatGPT, and GitHub Copilot to code, debug, and ship features 10x faster than traditional developers.",
    },
    {
      icon: Sparkles,
      title: "Zero to Live Production",
      description: "We don't do toy assignments. Every student builds, databases, connects APIs, and deploys fully functional SaaS projects.",
    },
  ];

  const techStackItems = [
    { label: "Cursor AI 🤖", rotation: 5, hoverStyles: { bgColor: "rgba(6, 182, 212, 0.2)", textColor: "#22d3ee" } },
    { label: "Next.js 15 ⚡", rotation: -6, hoverStyles: { bgColor: "rgba(255, 255, 255, 0.15)", textColor: "#ffffff" } },
    { label: "React 19 ⚛️", rotation: 4, hoverStyles: { bgColor: "rgba(59, 130, 246, 0.2)", textColor: "#60a5fa" } },
    { label: "TypeScript 📘", rotation: -3, hoverStyles: { bgColor: "rgba(37, 99, 235, 0.2)", textColor: "#60a5fa" } },
    { label: "Tailwind CSS 🎨", rotation: 6, hoverStyles: { bgColor: "rgba(6, 182, 212, 0.2)", textColor: "#22d3ee" } },
    { label: "Framer Motion 🎬", rotation: -5, hoverStyles: { bgColor: "rgba(236, 72, 153, 0.2)", textColor: "#f472b6" } },
    { label: "GSAP 🏎️", rotation: 3, hoverStyles: { bgColor: "rgba(132, 204, 22, 0.2)", textColor: "#a3e635" } },
    { label: "MongoDB 🍃", rotation: -4, hoverStyles: { bgColor: "rgba(34, 197, 94, 0.2)", textColor: "#4ade80" } },
    { label: "Supabase ⚡", rotation: 5, hoverStyles: { bgColor: "rgba(234, 179, 8, 0.2)", textColor: "#facc15" } },
    { label: "Git & GitHub 🐙", rotation: -5, hoverStyles: { bgColor: "rgba(255, 255, 255, 0.1)", textColor: "#f3f4f6" } },
    { label: "Node.js 🟢", rotation: 4, hoverStyles: { bgColor: "rgba(34, 197, 94, 0.2)", textColor: "#4ade80" } },
    { label: "LLM Prompting 🪄", rotation: -6, hoverStyles: { bgColor: "rgba(168, 85, 247, 0.2)", textColor: "#c084fc" } },
    { label: "v0.dev 🚀", rotation: 3, hoverStyles: { bgColor: "rgba(6, 182, 212, 0.2)", textColor: "#22d3ee" } },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans overflow-x-hidden relative">
      <Navbar />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] z-0 pointer-events-none" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] blur-[150px] rounded-full pointer-events-none z-0 opacity-20 bg-blue-500/20" />

      {/* Hero Header */}
      <section className="relative z-10 pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-md"
        >
          <Sparkles size={14} className="text-blue-400" />
          <span className="text-xs font-bold tracking-wider uppercase text-blue-400">
            Meet the Visionary
          </span>
        </motion.div>

        <div className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight flex justify-center text-center">
          <SplitText 
            text="Empowering Next-Gen Devs" 
            tag="h1" 
            className="font-extrabold pb-2 inline-block text-center [&_.split-char]:text-transparent [&_.split-char]:bg-clip-text [&_.split-char]:bg-gradient-to-r [&_.split-char]:from-blue-400 [&_.split-char]:via-cyan-400 [&_.split-char]:to-purple-400"
            delay={30} 
            duration={1.0} 
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          We are redefining software engineering education by replacing <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-semibold">dry textbook theory</span> with <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">AI-first, production-level coding workflows</span>.
        </motion.p>
      </section>

      {/* Animated Marquee */}
      <section className="relative z-10 py-6 overflow-hidden bg-transparent">
        <ScrollVelocity
          texts={[
            "REDEFINING CODING EDUCATION ✦ 10X SPEED TO PRODUCTION ✦ CODE WITH AI ✦ MENTORSHIP AT SCALE",
            "CURSOR AI COHORT ✦ BUILD DYNAMIC SAAS APPLICATIONS ✦ MASTER NEXT.JS 15 ✦ DEMOCRATIZING WEB DEV"
          ]}
          velocity={40}
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 font-extrabold uppercase tracking-tight select-none opacity-80"
        />
      </section>

      {/* Founders Journey Section */}
      <section className="relative z-10 py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Motivational Story */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase block mb-3">Our Core Origin</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                From Enterprise Architecture to <span className="gradient-text">Empowering the Heartland</span>
              </h2>
            </div>

            {/* Timeline Steps */}
            <div className="space-y-8">
              {storySteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-gradient-to-br ${step.color} shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform`}>
                    <step.icon size={22} className="text-white" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block">{step.phase}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Inspirational Quote Callout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-[#111827]/40 border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full" />
              <p className="text-lg text-white font-medium italic leading-relaxed relative z-10">
                &quot;The next generation of tech giants won't be built by armies of developers. They will be launched by single builders who have the direction, discipline, and the courage to master AI.&quot;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-500/20 relative">
                  <Image src="/atishjainsir.png" alt="Atish Jain Signature Avatar" fill className="object-cover" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">Atish Jain</span>
                  <span className="text-xs text-blue-400 font-semibold block">Founder, Coding With AI</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Tilted Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <TiltedCard rotateXRange={12} rotateYRange={12} scaleOnHover={1.03} className="w-full max-w-[400px]">
              <BorderGlow
                borderRadius={40}
                backgroundColor="rgba(17, 24, 39, 0.6)"
                colors={['#3B82F6', '#8B5CF6', '#06B6D4']}
                glowIntensity={1.2}
                className="w-full h-full backdrop-blur-xl"
              >
                <div className="relative p-8 flex flex-col items-center text-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Profile Image container */}
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/30 mb-8 shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-gray-900">
                    <Image
                      src="/atishjainsir.png"
                      alt="Atish Jain - Founder & Coach"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">Atish Jain</h3>
                  <p className="text-blue-400 font-bold text-sm mb-4">Founder & Mentor</p>
                  
                  <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 font-semibold tracking-wider uppercase mb-6">
                    20+ Years Tech Veteran
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8 italic">
                    &quot;My goal is to help you skip years of outdated trial and error. Leverage AI, master architecture, and code with absolute speed.&quot;
                  </p>

                  <a
                    href="https://in.linkedin.com/in/atishjain9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide transition-all shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.4)] text-center block"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </BorderGlow>
            </TiltedCard>
          </div>
        </div>
      </section>

      {/* Core values spotlight grid */}
      <section className="relative z-10 py-24 bg-[#080C14] border-t border-b border-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase block mb-3">Our Principles</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">How We Do Things Differently</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <SpotlightCard
                key={idx}
                className="p-8 rounded-[2rem] bg-[#111827]/40 border border-white/5"
                spotlightColor="rgba(59, 130, 246, 0.1)"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <val.icon className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{val.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tech Stack Showcase */}
      <section className="relative z-10 py-24 bg-[#0A0F1C]/40 border-b border-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase block mb-3">Our Ecosystem</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 font-extrabold">Modern AI Stack</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            We replace outdated theoretical textbooks with the exact workflows used by elite modern builders. Hover and interact with the bouncy bubbles below:
          </p>
          <div className="flex justify-center">
            <SkillsBubbles items={techStackItems} pillBg="rgba(255, 255, 255, 0.03)" pillColor="#9ca3af" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase block mb-3">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Connect With Our Team</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have questions about the cohort, curriculum, or dynamic career tracks? We are here to guide you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Phone, title: "Phone Support", details: ["+91 9989241515"], href: "tel:9989241515" },
            { icon: Mail, title: "Email Address", details: ["atishkumarjain@gmail.com"], href: "mailto:atishkumarjain@gmail.com" },
            { icon: Globe, title: "Web Platform", details: ["atishjain.in"], href: "http://atishjain.in" },
            { icon: MapPin, title: "Official Location", details: ["Near UCO Bank, Danavai Peta", "Rajahmundry-533103"], href: "https://maps.google.com/?q=AH+Career+Pvt+Ltd+Rajamahendravaram+Andhra+Pradesh" }
          ].map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group flex flex-col items-center text-center shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <contact.icon size={22} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{contact.title}</h3>
              {contact.details.map((detail, j) => (
                <p key={j} className="text-gray-400 text-sm leading-relaxed">{detail}</p>
              ))}
            </a>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
