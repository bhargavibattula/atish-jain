import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FounderSection from "@/components/sections/FounderSection";
import CTASection from "@/components/sections/CTASection";
import { Metadata } from "next";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

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

        {/* Contact Details Section */}
        <section className="py-20 bg-[#080C14]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We'd love to hear from you. Reach out to us through any of the following channels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Phone, title: "Phone", details: ["+91 9989241515", "0883-2474088"], href: "tel:9989241515" },
                { icon: Mail, title: "Email", details: ["ahcareerpvtltd@gmail.com"], href: "mailto:ahcareerpvtltd@gmail.com" },
                { icon: Globe, title: "Website", details: ["ahcareer.in"], href: "http://ahcareer.in" },
                { icon: MapPin, title: "Location", details: ["Near UCO Bank, Danavai Peta", "Rajamahendravaram, AP 533103"], href: "https://maps.google.com/?q=AH+Career+Pvt+Ltd+Rajamahendravaram+Andhra+Pradesh" }
              ].map((contact, i) => (
                <a key={i} href={contact.href} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <contact.icon size={24} className="text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{contact.title}</h3>
                  {contact.details.map((detail, j) => (
                    <p key={j} className="text-gray-400 text-sm">{detail}</p>
                  ))}
                </a>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
