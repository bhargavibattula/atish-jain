import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIToolsSection from "@/components/sections/AIToolsSection";
import CTASection from "@/components/sections/CTASection";
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
        <div className="py-16 text-center max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            AI Toolkit
          </span>
          <h1 className="font-poppins font-bold text-5xl text-white mb-4">
            The Complete <span className="gradient-text">AI Dev Stack</span>
          </h1>
          <p className="text-gray-400 text-xl">
            Master the exact AI tools that top developers and companies use to build, ship, and scale faster.
          </p>
        </div>
        <AIToolsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
