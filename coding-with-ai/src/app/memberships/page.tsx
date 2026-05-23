import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MembershipSection from "@/components/sections/MembershipSection";
import CTASection from "@/components/sections/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memberships — Choose Your AI Coding Path",
  description: "Silver, Gold, Diamond — choose the membership that matches your goals and start building real AI apps.",
};

export default function MembershipsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="py-16 text-center max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-4">
            Membership Plans
          </span>
          <h1 className="font-poppins font-bold text-5xl text-white mb-4">
            Choose Your <span className="gradient-text">Learning Path</span>
          </h1>
          <p className="text-gray-400 text-xl">
            Every plan is designed to take you from where you are to where you want to be — faster, with AI.
          </p>
        </div>
        <MembershipSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
