import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MessageCircle, Send, Users, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Community — Coding With AI" };

export default function CommunityPage() {
  const channels = [
    { icon: MessageCircle, name: "WhatsApp Community", desc: "Daily tips, doubts, and peer support", members: "200+", color: "text-green-400", bg: "bg-green-500/15", border: "border-green-500/20", cta: "Join WhatsApp", href: "#" },
    { icon: Send, name: "Telegram Channel", desc: "AI news, resources, and project ideas", members: "300+", color: "text-blue-400", bg: "bg-blue-500/15", border: "border-blue-500/20", cta: "Join Telegram", href: "https://t.me/+VVgdlVS9giNanSYN" },
    { icon: Users, name: "Discord Server", desc: "Voice rooms, code reviews, and study groups", members: "150+", color: "text-purple-400", bg: "bg-purple-500/15", border: "border-purple-500/20", cta: "Join Discord", href: "#" },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#0B0F19]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              Community
            </span>
            <h1 className="font-poppins font-bold text-5xl text-white mb-4">
              Join Our <span className="gradient-text">AI Coding Community</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Connect with hundreds of students learning AI coding together. Share projects, ask questions, and grow together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {channels.map((c) => (
              <div key={c.name} className={`p-6 rounded-2xl bg-[#111827] border ${c.border} flex flex-col`}>
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
                  <c.icon size={22} className={c.color} />
                </div>
                <h3 className="font-poppins font-bold text-lg text-white mb-2">{c.name}</h3>
                <p className="text-gray-400 text-sm mb-3 flex-1">{c.desc}</p>
                <p className="text-xs text-gray-500 mb-4">{c.members} members</p>
                <a href={c.href}
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border ${c.border} text-sm font-medium text-white hover:bg-white/5 transition-colors`}>
                  {c.cta} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/15 to-purple-500/10 border border-blue-500/20 text-center">
            <Zap size={32} className="text-blue-400 mx-auto mb-4" />
            <h2 className="font-poppins font-bold text-2xl text-white mb-3">Full Community Access with Membership</h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Gold and Diamond members get exclusive access to private channels, weekly live Q&As, code reviews, and direct mentorship.
            </p>
            <Link href="/memberships"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl btn-gradient text-white font-semibold">
              Get Full Access <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
