import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, Linkedin, MessageCircle, Send, Facebook, Globe, MapPin, Phone, Mail } from "lucide-react";
import { FaHeart } from "react-icons/fa";

const footerLinks = {
  Platform: [
    { label: "Memberships", href: "/memberships" },
    { label: "Projects", href: "/projects" },
    { label: "AI Tools", href: "/ai-tools" },
    { label: "Community", href: "/community" },
    { label: "Blog", href: "/blog" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/legal" },
    { label: "Terms & Conditions", href: "/legal" },
  ],
  QuickLinks: [
    { label: "Free AI Toolkit", href: "/ai-tools" },
    { label: "Student Dashboard", href: "/student" },
    { label: "Certificates", href: "/student" },
    { label: "Register", href: "/register" },
  ],
  Contact: [
    { label: "+91 9989241515", href: "tel:9989241515", icon: Phone },
    { label: "0883-2474088", href: "tel:08832474088", icon: Phone },
    { label: "ahcareerpvtltd@gmail.com", href: "mailto:ahcareerpvtltd@gmail.com", icon: Mail },
    { label: "Near UCO Bank, Danavai Peta", href: "https://maps.google.com/?q=AH+Career+Pvt+Ltd+Rajamahendravaram+Andhra+Pradesh", icon: MapPin },
    { label: "ahcareer.in", href: "http://ahcareer.in", icon: Globe },
  ],
};

const socials = [
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" },
  { icon: Facebook, href: "https://www.facebook.com/share/18nvUvNp8m/", label: "Facebook", color: "hover:text-blue-500" },
  { icon: Instagram, href: "https://www.instagram.com/ah_career_rajahmundry", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/ahcareer/", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: MessageCircle, href: "tel:9989241515", label: "WhatsApp", color: "hover:text-green-500" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080C14] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Coding With AI Logo" width={36} height={36} className="object-contain rounded-lg" />
              <span className="font-bold text-xl">
                <span className="text-white">Coding</span>
                <span className="gradient-text-blue-purple"> With AI</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Helping students learn AI-assisted coding using modern tools, real projects, and future-ready skills.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-white mb-3">Get free AI coding tips</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white btn-gradient whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${s.color} hover:border-white/30 transition-all duration-200`}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-poppins font-semibold text-white text-sm mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link: any) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-start gap-2"
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.icon && <link.icon size={16} className="mt-0.5 shrink-0" />}
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Coding With AI. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1.5">
            Built with <FaHeart className="text-red-500" size={12} /> by{" "}
            <span className="gradient-text-blue-purple font-semibold">Atish Jain</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
