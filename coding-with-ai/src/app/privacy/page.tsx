import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy — Coding With AI" };

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#0B0F19]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <h1 className="font-poppins font-bold text-4xl text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-400 mb-10">Last updated: December 2024</p>

          {[
            { title: "1. Information We Collect", body: "We collect information you provide when creating an account (name, email, password), payment information processed securely via Razorpay/Stripe, and usage data such as courses accessed and progress." },
            { title: "2. How We Use Your Information", body: "We use collected data to provide and improve our educational services, process payments, send course updates and important communications, and personalize your learning experience." },
            { title: "3. Data Security", body: "We implement industry-standard security measures including encrypted passwords (bcrypt), secure HTTPS connections, and protected API routes. Payment data is handled exclusively by our payment processors and never stored on our servers." },
            { title: "4. Third-Party Services", body: "We use Google OAuth for authentication, Razorpay and Stripe for payment processing, and MongoDB Atlas for database hosting. Each service has its own privacy policy." },
            { title: "5. Your Rights", body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us at privacy@codingwithai.in. We will respond within 30 days." },
            { title: "6. Cookies", body: "We use essential session cookies for authentication and preference cookies to improve your experience. No advertising cookies are used." },
            { title: "7. Contact", body: "For privacy-related questions, contact us at privacy@codingwithai.in or through our Contact page." },
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
