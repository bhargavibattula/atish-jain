import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import LogoMarquee from "@/components/sections/LogoMarquee";
import WhySection from "@/components/sections/WhySection";
import AIToolsSection from "@/components/sections/AIToolsSection";
import MembershipSection from "@/components/sections/MembershipSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import FounderSection from "@/components/sections/FounderSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

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
        <AIToolsSection />

        {/* Act 3: Show the Path */}
        <MembershipSection />
        <ProjectsSection />

        {/* Act 4: Prove It */}
        <OutcomesSection />
        <FounderSection />
        <TestimonialsSection />

        {/* Act 5: Close the Loop */}
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
