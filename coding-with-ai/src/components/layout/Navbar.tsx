"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, LogOut, User, LayoutDashboard, Home, Award, Briefcase, Bot, Users, PhoneCall } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Dock from "@/components/ui/Dock";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Memberships", href: "/memberships" },
  { label: "Projects", href: "/projects" },
  { label: "AI Tools", href: "/ai-tools" },
  { label: "Community", href: "/community" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const dockItems = [
    {
      icon: (
        <div className="relative flex flex-col items-center justify-center">
          <Home size={20} className={pathname === "/" ? "text-cyan-400" : "text-gray-300"} />
          {pathname === "/" && (
            <span className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
          )}
        </div>
      ),
      label: "Home",
      onClick: () => router.push("/"),
    },
    {
      icon: (
        <div className="relative flex flex-col items-center justify-center">
          <Award size={20} className={pathname === "/memberships" ? "text-cyan-400" : "text-gray-300"} />
          {pathname === "/memberships" && (
            <span className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
          )}
        </div>
      ),
      label: "Memberships",
      onClick: () => router.push("/memberships"),
    },
    {
      icon: (
        <div className="relative flex flex-col items-center justify-center">
          <Briefcase size={20} className={pathname === "/projects" ? "text-cyan-400" : "text-gray-300"} />
          {pathname === "/projects" && (
            <span className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
          )}
        </div>
      ),
      label: "Projects",
      onClick: () => router.push("/projects"),
    },
    {
      icon: (
        <div className="relative flex flex-col items-center justify-center">
          <Bot size={20} className={pathname === "/ai-tools" ? "text-cyan-400" : "text-gray-300"} />
          {pathname === "/ai-tools" && (
            <span className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
          )}
        </div>
      ),
      label: "AI Tools",
      onClick: () => router.push("/ai-tools"),
    },
    {
      icon: (
        <div className="relative flex flex-col items-center justify-center">
          <Users size={20} className={pathname === "/community" ? "text-cyan-400" : "text-gray-300"} />
          {pathname === "/community" && (
            <span className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
          )}
        </div>
      ),
      label: "Community",
      onClick: () => router.push("/community"),
    },
    {
      icon: (
        <div className="relative flex flex-col items-center justify-center">
          <PhoneCall size={20} className={pathname === "/contact" ? "text-cyan-400" : "text-gray-300"} />
          {pathname === "/contact" && (
            <span className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
          )}
        </div>
      ),
      label: "Contact Us",
      onClick: () => router.push("/contact"),
    },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`max-w-6xl mx-auto rounded-full pointer-events-auto transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-[#0A0F1C]/70 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-2 px-4"
            : "bg-transparent py-4 px-0"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10 pl-2">
            <div className="flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <Image src="/logo.png" alt="Coding With AI Logo" width={isScrolled ? 36 : 48} height={isScrolled ? 36 : 48} className="object-contain rounded-lg transition-all duration-500" priority />
            </div>
            <span className={`font-bold transition-all duration-500 ${isScrolled ? 'text-base' : 'text-lg'}`}>
              <span className="text-white">Coding</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500"> With AI</span>
            </span>
          </Link>

          {/* Desktop Nav Links replaced by Dock in the center */}
          <div className="hidden lg:flex items-center justify-center relative w-[420px] h-12">
            <Dock
              items={dockItems}
              panelHeight={40}
              baseItemSize={32}
              magnification={48}
              distance={100}
              className="navbar-dock"
            />
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4 pr-2">
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white shadow-inner group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all">
                    {session.user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <ChevronDown size={14} className="text-gray-400 group-hover:text-white transition-colors" />
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 mt-3 w-56 rounded-2xl bg-[#0A0F1C]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden p-1.5"
                    >
                      <Link
                        href={session.user?.role === "admin" ? "/admin" : "/student"}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <LayoutDashboard size={16} className="text-cyan-400" />
                        Dashboard
                      </Link>
                      <Link
                        href="/student/profile"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <User size={16} className="text-blue-400" />
                        Profile
                      </Link>
                      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-1.5" />
                      <button
                        onClick={() => { signOut(); setUserMenuOpen(false); }}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
                      >
                        <LogOut size={16} />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="relative group px-6 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:scale-105 transition-transform duration-300 ease-out" />
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    Join Now
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                  </span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden mt-4"
            >
              <div className="flex flex-col gap-1 p-4 rounded-3xl bg-[#0A0F1C]/95 backdrop-blur-2xl border border-white/10 shadow-2xl">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-2xl transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="h-px bg-white/5 my-2 mx-5" />
                
                {session ? (
                  <div className="flex flex-col gap-2 p-2">
                    <Link
                      href={session.user?.role === "admin" ? "/admin" : "/student"}
                      className="w-full text-center px-5 py-3 rounded-2xl text-sm font-semibold text-white bg-white/5 border border-white/10"
                      onClick={() => setMobileOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="w-full text-center px-5 py-3 rounded-2xl text-sm font-semibold text-red-400 border border-red-500/20 hover:bg-red-500/10 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 p-2">
                    <Link
                      href="/login"
                      className="w-full text-center px-5 py-3 rounded-2xl text-sm font-medium text-gray-300 hover:bg-white/5"
                      onClick={() => setMobileOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/register"
                      className="w-full text-center px-5 py-3 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600"
                      onClick={() => setMobileOpen(false)}
                    >
                      Join Now
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>

    </>
  );
}
