import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIToolsSection from "@/components/sections/AIToolsSection";
import SkillsBubblesPage from "@/components/sections/SkillsBubblesPage";
import TechStackMarquee from "@/components/sections/TechStackMarquee";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools — Master the Future Dev Stack",
  description: "Learn ChatGPT, Cursor AI, GitHub Copilot, Replit AI, Claude, and Bolt.new — the complete AI developer toolkit.",
};

export default function AIToolsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <AIToolsSection />
        <TechStackMarquee />
        <SkillsBubblesPage />
      </main>
      <Footer />
    </>
  );
}
