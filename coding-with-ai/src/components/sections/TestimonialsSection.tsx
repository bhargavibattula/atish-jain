"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import { FaRocket } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Placed at Tech Startup",
    content: "I had zero coding experience. After the accelerator track, I built and deployed a complete AI chatbot in 3 weeks. Got placed with an 8 LPA offer. This isn't just a course, it's a career launchpad.",
    rating: 5,
    project: "AI Chatbot Platform",
    initials: "PS",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Rahul Verma",
    role: "Freelance Engineer",
    content: "Learning ChatGPT and Cursor together is a cheat code. My first automated application is live and I've already secured three freelance clients using the exact architecture blueprints provided.",
    rating: 5,
    project: "Portfolio Generator",
    initials: "RV",
    color: "from-purple-500 to-fuchsia-400",
  },
  {
    name: "Ananya Patel",
    role: "SaaS Founder",
    content: "The Founder Track changed my trajectory. The 1-on-1 architecture sessions helped me launch my first product. We hit $1k MRR in month two. Unbelievable value.",
    rating: 5,
    project: "AI Resume ATS",
    initials: "AP",
    color: "from-emerald-500 to-teal-400",
  },
  {
    name: "Karthik R.",
    role: "Software Engineer",
    content: "The AI projects I built here got me shortlisted at 4 tier-one companies. Interviewers were genuinely shocked I built a full RAG pipeline as a student.",
    rating: 5,
    project: "Smart RAG System",
    initials: "KR",
    color: "from-orange-500 to-rose-400",
  },
  {
    name: "Sneha Iyer",
    role: "Full Stack Developer",
    content: "I was intimidated by system design, but the way Atish explains complex AI infrastructure makes it so simple. The Discord community alone is worth the investment.",
    rating: 5,
    project: "AI Notes Synthesizer",
    initials: "SI",
    color: "from-indigo-500 to-blue-400",
  },
  {
    name: "Mohit Kumar",
    role: "Indie Hacker",
    content: "Made ₹40k from my first freelance AI project. The monetization strategies and exact contract templates provided are pure gold. Best investment of my career.",
    rating: 5,
    project: "Client AI Integration",
    initials: "MK",
    color: "from-violet-500 to-purple-400",
  },
];

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

        {/* Cinematic Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col p-8 rounded-[24px] bg-[#111827]/40 backdrop-blur-xl border border-white/[0.05] hover:bg-[#111827]/80 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              
              <Quote size={32} className="text-white/10 mb-6 group-hover:text-white/20 transition-colors" />

              <p className="text-gray-300 text-base leading-relaxed mb-8 flex-1 font-medium group-hover:text-white transition-colors">
                "{t.content}"
              </p>

              <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold tracking-wide shadow-inner`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-tight">{t.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Built badge floating inside */}
              <div className="absolute top-8 right-8 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-xs font-semibold text-gray-400 group-hover:text-white group-hover:bg-white/[0.08] transition-all">
                <FaRocket className="text-blue-400" size={12} /> Built: {t.project}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
