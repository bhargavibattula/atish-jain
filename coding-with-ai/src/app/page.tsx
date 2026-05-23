import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import LogoMarquee from "@/components/sections/LogoMarquee";
import WhySection from "@/components/sections/WhySection";
import AIToolsSection from "@/components/sections/AIToolsSection";
import MembershipSection from "@/components/sections/MembershipSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProjectsGallerySection from "@/components/sections/ProjectsGallerySection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import FounderSection from "@/components/sections/FounderSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import CurvedLoop from "@/components/ui/CurvedLoop";
import RotatingText from "@/components/ui/RotatingText";
import LogoLoop from "@/components/ui/LogoLoop";
import { 
  SiReact, 
  SiNextdotjs, 
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

const techLogos = [
  { node: <SiNextdotjs className="text-white" />, title: "Next.js" },
  { node: <SiReact className="text-[#61DAFB]" />, title: "React" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS" },
  { node: <SiOpenai className="text-[#10A37F]" />, title: "OpenAI" },
  { node: <SiGithub className="text-white" />, title: "GitHub" },
  { node: <SiVercel className="text-white" />, title: "Vercel" },
  { node: <SiSupabase className="text-[#3ECF8E]" />, title: "Supabase" },
  { node: <SiPython className="text-[#3776AB]" />, title: "Python" },
  { node: <SiDocker className="text-[#2496ED]" />, title: "Docker" },
  { node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL" },
  { node: <SiNodedotjs className="text-[#5FA04E]" />, title: "Node.js" }
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Act 1: Hook & Inspire */}
        <HeroSection />
        <LogoMarquee />

        {/* Act 2: Build Desire */}
        <WhySection />
        <CurvedLoop 
          marqueeText="BUILD WITH AI ✦ MASTER THE ARSENAL ✦ DEPLOY IN SECONDS ✦ BECOME A 10X DEVELOPER ✦ CHATGPT ✦ CLAUDE 3.5 ✦ CURSOR ✦ BOLT.NEW ✦ GITHUB COPILOT ✦"
          speed={3.5}
          curveAmount={0}
          direction="left"
          interactive={true}
        />
        <AIToolsSection />

        {/* Act 3: Show the Path */}
        <MembershipSection />

        {/* Tech Stack LogoLoop */}
        <section className="py-10 bg-[#0B0F19] overflow-hidden border-t border-b border-white/[0.02] relative">
          <div className="max-w-7xl mx-auto px-4 text-center mb-6">
            <p className="text-gray-400/80 text-xs md:text-sm font-semibold tracking-wider uppercase">
              The Modern AI Stack You Will Master
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="left"
              logoHeight={32}
              gap={56}
              fadeOut={true}
              fadeOutColor="#0B0F19"
              scaleOnHover={true}
              pauseOnHover={true}
              ariaLabel="Modern AI Stack"
            />
          </div>
        </section>

        <ProjectsSection />
        <ProjectsGallerySection />

        {/* Act 4: Prove It */}
        <OutcomesSection />
        
        <FounderSection />
        <TestimonialsSection />

        {/* Act 5: Close the Loop */}
        <section className="py-20 relative bg-[#0B0F19] overflow-hidden border-t border-white/[0.02]">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 flex flex-col items-center gap-4 leading-snug md:leading-normal">
              <span className="flex flex-wrap items-center justify-center gap-3">
                Curious about
                <RotatingText
                  texts={["Cohort Schedules?", "AI Mentorship?", "Hands-on Projects?", "Job Placements?", "Tuition Fees?"]}
                  mainClassName="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 text-cyan-400 overflow-hidden justify-center rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.1)] inline-flex items-center align-middle"
                  staggerFrom={"last"}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-visible"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2500}
                />
              </span>
              <span>We've got answers.</span>
            </h2>
            <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
              Find instant answers to the most common questions about our AI cohort programs below.
            </p>
          </div>
        </section>

        <FAQSection />
        <CTASection />

        {/* Cinematic Kinetic Divider - Positioned above footer with reduced sizing */}
        <div className="py-10 bg-[#0B0F19] overflow-hidden border-t border-white/[0.03] flex flex-col gap-4">
          <ScrollVelocity
            texts={[
              "Build with AI // 10x Developer // Silicon Valley // Zero to Production //",
              "Deploy at Lightspeed // Master Prompting // Full Stack Apps // Scale //"
            ]}
            velocity={60}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 font-extrabold uppercase tracking-tight select-none opacity-80"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
