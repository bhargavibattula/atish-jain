import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions — Coding With AI" };

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#0B0F19]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <h1 className="font-poppins font-bold text-4xl text-white mb-3">Terms & Conditions</h1>
          <p className="text-gray-400 mb-10">Last updated: December 2024</p>

          {[
            { title: "1. Acceptance of Terms", body: "By accessing or using the Coding With AI platform, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services." },
            { title: "2. Membership & Access", body: "Membership grants personal, non-transferable access to course content. Sharing account credentials or course materials with others is strictly prohibited and may result in account termination." },
            { title: "3. Payment & Refunds", body: "All payments are processed securely. We offer a 7-day money-back guarantee for members who have accessed less than 20% of their course content. Refunds are not available after this period or beyond the usage threshold." },
            { title: "4. Intellectual Property", body: "All course content, materials, videos, and platform code are the intellectual property of Coding With AI. You may not reproduce, distribute, or create derivative works without written permission." },
            { title: "5. User Conduct", body: "You agree not to share, pirate, or redistribute course content; attempt to hack or disrupt the platform; use the platform for any unlawful purpose; or harass other community members." },
            { title: "6. Disclaimer", body: "Course outcomes such as job placement, income earned, or project success are examples and not guarantees. Results vary based on individual effort, background, and market conditions." },
            { title: "7. Modifications", body: "We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the updated terms." },
            { title: "8. Contact", body: "For questions about these terms, contact us at legal@codingwithai.in." },
          ].map((section) => (
            <section key={section.title} className="mb-8">
              <h2 className="font-poppins font-bold text-xl text-white mb-3">{section.title}</h2>
              <p className="text-gray-400 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
