"use client";

import { motion } from "framer-motion";

const companies = [
  {
    name: "Google",
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.578-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 5.92 1 1 5.92 1 12s4.92 11 11.24 11c6.59 0 10.97-4.63 10.97-11.17 0-.75-.08-1.32-.17-1.545H12.24z"/>
      </svg>
    ),
    textColor: "text-white",
  },
  {
    name: "Meta",
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.011 3.69 9.154 8.5 9.878v-6.987H7.938v-2.891H10.5V9.789c0-2.54 1.514-3.938 3.82-3.938 1.105 0 2.26.197 2.26.197v2.484H15.31c-1.26 0-1.652.782-1.652 1.583v1.89h2.8l-.448 2.89H13.66v6.988C18.31 21.154 22 17.01 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
    textColor: "text-[#1877F2]",
  },
  {
    name: "Netflix",
    logo: (
      <span className="text-xl font-black tracking-tighter text-[#E50914] font-sans">NETFLIX</span>
    ),
  },
  {
    name: "Amazon",
    logo: (
      <span className="text-xl font-bold tracking-tight text-white font-sans flex items-baseline">
        amazon<span className="text-amber-500 text-xs">.in</span>
      </span>
    ),
  },
  {
    name: "Apple",
    logo: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.01 2.96 1.12.09 2.27-.58 2.94-1.39z"/>
      </svg>
    ),
    textColor: "text-white",
  },
  {
    name: "Microsoft",
    logo: (
      <div className="flex items-center gap-1.5 font-semibold text-white">
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
          <div className="bg-[#F25022] w-1.5 h-1.5"></div>
          <div className="bg-[#7FBA00] w-1.5 h-1.5"></div>
          <div className="bg-[#00A4EF] w-1.5 h-1.5"></div>
          <div className="bg-[#FFB900] w-1.5 h-1.5"></div>
        </div>
        <span>Microsoft</span>
      </div>
    ),
  },
];

export default function LogoMarquee() {
  // Duplicate list to ensure infinite seamless loop
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="py-12 bg-[#0B0F19] relative overflow-hidden">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 text-center mb-8 relative z-10">
        <p className="text-gray-400/80 text-sm font-semibold tracking-wider uppercase">
          Trusted by Learners Working At Top Companies Like
        </p>
      </div>

      {/* Marquee Track */}
      <div className="flex overflow-hidden relative z-10">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center justify-center px-10 py-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] backdrop-blur-sm min-w-[200px] h-16 text-gray-300 hover:text-white hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className={company.textColor || "text-white"}>
                {company.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
