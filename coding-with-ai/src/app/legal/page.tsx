import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import { Shield, FileText } from "lucide-react";

export const metadata: Metadata = { title: "Legal & Privacy — Coding With AI" };

export default function LegalPage() {
  const privacyData = [
    { title: "1. Information We Collect", body: "We collect information you provide when creating an account (name, email, password), payment information processed securely via Razorpay/Stripe, and usage data such as courses accessed and progress." },
    { title: "2. How We Use Your Information", body: "We use collected data to provide and improve our educational services, process payments, send course updates and important communications, and personalize your learning experience." },
    { title: "3. Data Security", body: "We implement industry-standard security measures including encrypted passwords (bcrypt), secure HTTPS connections, and protected API routes. Payment data is handled exclusively by our payment processors and never stored on our servers." },
    { title: "4. Third-Party Services", body: "We use Google OAuth for authentication, Razorpay and Stripe for payment processing, and MongoDB Atlas for database hosting. Each service has its own privacy policy." },
    { title: "5. Your Rights", body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us at privacy@codingwithai.in. We will respond within 30 days." },
    { title: "6. Cookies", body: "We use essential session cookies for authentication and preference cookies to improve your experience. No advertising cookies are used." },
    { title: "7. Contact", body: "For privacy-related questions, contact us at privacy@codingwithai.in or through our Contact page." },
  ];

  const termsData = [
    { title: "1. Acceptance of Terms", body: "By accessing or using the Coding With AI platform, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services." },
    { title: "2. Membership & Access", body: "Membership grants personal, non-transferable access to course content. Sharing account credentials or course materials with others is strictly prohibited and may result in account termination." },
    { title: "3. Payment & Refunds", body: "All payments are processed securely. We offer a 7-day money-back guarantee for members who have accessed less than 20% of their course content. Refunds are not available after this period or beyond the usage threshold." },
    { title: "4. Intellectual Property", body: "All course content, materials, videos, and platform code are the intellectual property of Coding With AI. You may not reproduce, distribute, or create derivative works without written permission." },
    { title: "5. User Conduct", body: "You agree not to share, pirate, or redistribute course content; attempt to hack or disrupt the platform; use the platform for any unlawful purpose; or harass other community members." },
    { title: "6. Disclaimer", body: "Course outcomes such as job placement, income earned, or project success are examples and not guarantees. Results vary based on individual effort, background, and market conditions." },
    { title: "7. Modifications", body: "We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the updated terms." },
    { title: "8. Contact", body: "For questions about these terms, contact us at legal@codingwithai.in." },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080C14] pt-32 pb-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Legal Information</h1>
            <p className="text-gray-400 text-lg">Privacy Policy & Terms and Conditions</p>
          </div>

          <div className="space-y-12">
            {/* Privacy Policy */}
            <section className="p-8 md:p-10 rounded-3xl bg-[#0e1322]/80 border border-white/[0.05] backdrop-blur-md">
              <div className="flex items-center gap-4 mb-10 border-b border-white/[0.05] pb-6">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Shield size={28} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">Privacy Policy</h2>
                  <p className="text-sm text-gray-500">Last updated: December 2024</p>
                </div>
              </div>
              
              <div className="space-y-8">
                {privacyData.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xl font-semibold text-gray-100 mb-3">{section.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{section.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Terms and Conditions */}
            <section className="p-8 md:p-10 rounded-3xl bg-[#0e1322]/80 border border-white/[0.05] backdrop-blur-md">
              <div className="flex items-center gap-4 mb-10 border-b border-white/[0.05] pb-6">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <FileText size={28} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">Terms & Conditions</h2>
                  <p className="text-sm text-gray-500">Last updated: December 2024</p>
                </div>
              </div>
              
              <div className="space-y-8">
                {termsData.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xl font-semibold text-gray-100 mb-3">{section.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{section.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
