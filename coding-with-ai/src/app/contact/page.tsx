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
                { icon: Mail, label: "Email", value: "atishkumarjain@gmail.com", href: "mailto:atishkumarjain@gmail.com", color: "text-blue-400", bg: "bg-blue-500/15" },
                { icon: Phone, label: "Phone", value: "+91 9989241515", href: "tel:9989241515", color: "text-green-400", bg: "bg-green-500/15" },

                { icon: MapPin, label: "Address", value: "Near UCO Bank, Danavai Peta, Rajahmundry-533103", href: "https://maps.google.com/?q=AH+Career+Pvt+Ltd+Rajamahendravaram+Andhra+Pradesh", color: "text-red-400", bg: "bg-red-500/15" },
                { icon: Globe, label: "Website", value: "atishjain.in", href: "http://atishjain.in", color: "text-cyan-400", bg: "bg-cyan-500/15" },
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
                    { icon: Facebook, href: "https://www.facebook.com/atishkumarjain/" },
                    { icon: Instagram, href: "https://www.instagram.com/atishjain_official/" },
                    { icon: Linkedin, href: "https://in.linkedin.com/in/atishjain9" },
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

          {/* Map Embed Section for SEO and user guidance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-14 bg-[#111827] rounded-3xl border border-white/10 p-6 sm:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div>
                <h2 className="font-poppins font-bold text-2xl text-white">Find Us on the Map</h2>
                <p className="text-gray-400 text-sm mt-1">Visit our campus for in-person counseling and training sessions.</p>
              </div>
              <a
                href="https://maps.google.com/?q=AH+Career+Pvt+Ltd+Rajamahendravaram+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all text-center inline-flex items-center justify-center gap-2"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl relative shadow-[0_0_50px_rgba(59,130,246,0.1)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.773539958742!2d81.789098!3d17.0102127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3f892a00c6d%3A0xe5a36395b05a611d!2sAH%20Career%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716656799000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[350px] md:min-h-[450px] rounded-2xl border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
