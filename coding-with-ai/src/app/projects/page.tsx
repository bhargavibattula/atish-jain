import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CTASection from "@/components/sections/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Real AI Apps You'll Build",
  description: "Explore the real-world AI projects you'll build and deploy as part of the Coding With AI program.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="py-16 text-center max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
            Project Showcase
          </span>
          <h1 className="font-poppins font-bold text-5xl text-white mb-4">
            Apps You'll <span className="gradient-text">Build & Own</span>
          </h1>
          <p className="text-gray-400 text-xl">
            Real deployable projects — not toy examples. Add them to your portfolio, impress employers, and monetize them.
          </p>
        </div>
        <ProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
