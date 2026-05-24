"use client";

import { motion } from "framer-motion";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiOpenai, 
  SiGithub, 
  SiVercel, 
  SiSupabase, 
  SiPython, 
  SiDocker, 
  SiPostgresql, 
  SiNodedotjs 
} from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs size={28} />, color: "text-gray-400 hover:text-white" },
  { name: "React", icon: <SiReact size={28} />, color: "text-[#61DAFB] opacity-80 hover:opacity-100" },
  { name: "TypeScript", icon: <SiTypescript size={28} />, color: "text-[#3178C6] opacity-80 hover:opacity-100" },
  { name: "Tailwind", icon: <SiTailwindcss size={28} />, color: "text-[#38B2AC] opacity-80 hover:opacity-100" },
  { name: "ChatGPT", icon: <SiOpenai size={28} />, color: "text-[#10A37F] opacity-80 hover:opacity-100" },
  { name: "GitHub", icon: <SiGithub size={28} />, color: "text-gray-300 hover:text-white" },
  { name: "Vercel", icon: <SiVercel size={28} />, color: "text-white opacity-80 hover:opacity-100" },
  { name: "Supabase", icon: <SiSupabase size={28} />, color: "text-[#3ECF8E] opacity-80 hover:opacity-100" },
  { name: "Python", icon: <SiPython size={28} />, color: "text-[#3776AB] opacity-80 hover:opacity-100" },
  { name: "Docker", icon: <SiDocker size={28} />, color: "text-[#2496ED] opacity-80 hover:opacity-100" },
  { name: "PostgreSQL", icon: <SiPostgresql size={28} />, color: "text-[#336791] opacity-80 hover:opacity-100" },
  { name: "Node.js", icon: <SiNodedotjs size={28} />, color: "text-[#339933] opacity-80 hover:opacity-100" },
];

export default function TechStackMarquee() {
  // Duplicate list to ensure infinite seamless loop
  const duplicatedStack = [...techStack, ...techStack, ...techStack];

  return (
    <div className="py-12 bg-[#0B0F19] relative overflow-hidden">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 text-center mb-8 relative z-10">
        <p className="text-gray-400/80 text-sm font-semibold tracking-wider uppercase">
          THE MODERN AI STACK YOU WILL MASTER
        </p>
      </div>

      {/* Marquee Track */}
      <div className="flex overflow-hidden relative z-10">
        <div className="flex gap-12 sm:gap-16 lg:gap-20 animate-marquee whitespace-nowrap items-center py-4">
          {duplicatedStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className={`flex items-center justify-center transition-all duration-300 ${tech.color}`}
              title={tech.name}
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
