"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Youtube, Instagram, Linkedin, MapPin, Phone, Globe, Facebook } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#0B0F19]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="font-poppins font-bold text-5xl text-white mb-4">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-gray-400 text-lg">Have a question? We'd love to hear from you.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="bg-[#111827] rounded-2xl border border-white/10 p-7">
              <h2 className="font-poppins font-bold text-xl text-white mb-6">Send a Message</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Your Name</label>
                  <input type="text" placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Email</label>
                  <input type="email" placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Subject</label>
                  <input type="text" placeholder="How can we help?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Message</label>
                  <textarea rows={5} placeholder="Tell us more..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none" />
                </div>
                <button className="w-full py-3 rounded-xl text-white font-semibold btn-gradient flex items-center justify-center gap-2">
                  <Send size={16} /> Send Message
                </button>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "ahcareerpvtltd@gmail.com", href: "mailto:ahcareerpvtltd@gmail.com", color: "text-blue-400", bg: "bg-blue-500/15" },
                { icon: Phone, label: "Phone", value: "+91 9989241515", href: "tel:9989241515", color: "text-green-400", bg: "bg-green-500/15" },
                { icon: Phone, label: "Landline", value: "0883-2474088", href: "tel:08832474088", color: "text-purple-400", bg: "bg-purple-500/15" },
                { icon: MapPin, label: "Address", value: "Near UCO Bank, Danavai Peta, AP 533103", href: "https://maps.google.com/?q=AH+Career+Pvt+Ltd+Rajamahendravaram+Andhra+Pradesh", color: "text-red-400", bg: "bg-red-500/15" },
                { icon: Globe, label: "Website", value: "ahcareer.in", href: "http://ahcareer.in", color: "text-cyan-400", bg: "bg-cyan-500/15" },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon size={20} className={item.color} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </a>
              ))}

              <div className="p-5 rounded-2xl bg-[#111827] border border-white/10">
                <p className="text-gray-400 text-sm mb-3">Follow us on social</p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "https://www.facebook.com/share/18nvUvNp8m/" },
                    { icon: Instagram, href: "https://www.instagram.com/ah_career_rajahmundry" },
                    { icon: Linkedin, href: "https://www.linkedin.com/company/ahcareer/" },
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/15 to-purple-500/10 border border-blue-500/20">
                <p className="text-white font-semibold mb-2">⚡ Quick Response</p>
                <p className="text-gray-400 text-sm">We typically respond within 24 hours on weekdays. For urgent queries, reach us on WhatsApp or Telegram.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
