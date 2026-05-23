import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FounderSection from "@/components/sections/FounderSection";
import CTASection from "@/components/sections/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Coding With AI",
  description: "Meet Atish Jain — 20+ years of experience helping students build real-world apps with AI tools.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="py-16 text-center max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Our Story
          </span>
          <h1 className="font-poppins font-bold text-5xl text-white mb-4">
            About <span className="gradient-text">Coding With AI</span>
          </h1>
          <p className="text-gray-400 text-xl">
            A mission to make AI-powered coding accessible to every student in India.
          </p>
        </div>
        <FounderSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
