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
        <ProjectsSection />
        <ProjectsGallerySection />

        {/* Act 4: Prove It */}
        <OutcomesSection />
        
        <FounderSection />
        <TestimonialsSection />

        {/* Act 5: Close the Loop */}
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
