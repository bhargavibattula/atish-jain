"use client";

import { Session } from "next-auth";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Award, Code2, Users, ArrowRight, TrendingUp, Zap, Star, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { FaRocket } from "react-icons/fa";

interface StudentDashboardProps {
  user: any;
  session: Session;
}

export default function StudentDashboard({ user, session }: StudentDashboardProps) {
  const firstName = session.user?.name?.split(" ")[0] || "Student";

  const stats = [
    {
      label: "Courses Enrolled",
      value: user?.progress?.length || 0,
      icon: BookOpen,
      color: "text-blue-400",
      bg: "bg-blue-500/15",
      border: "border-blue-500/20",
    },
    {
      label: "Certificates Earned",
      value: user?.certificates?.length || 0,
      icon: Award,
      color: "text-yellow-400",
      bg: "bg-yellow-500/15",
      border: "border-yellow-500/20",
    },
    {
      label: "Projects Built",
      value: 0,
      icon: Code2,
      color: "text-purple-400",
      bg: "bg-purple-500/15",
      border: "border-purple-500/20",
    },
    {
      label: "Community Points",
      value: 50,
      icon: Star,
      color: "text-cyan-400",
      bg: "bg-cyan-500/15",
      border: "border-cyan-500/20",
    },
  ];

  const quickLinks = [
    { label: "Browse Courses", href: "/memberships", icon: BookOpen, color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/20" },
    { label: "View Projects", href: "/projects", icon: Code2, color: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/20" },
    { label: "Join Community", href: "/community", icon: Users, color: "from-green-500/20 to-green-500/5", border: "border-green-500/20" },
    { label: "AI Tools", href: "/ai-tools", icon: Zap, color: "from-cyan-500/20 to-cyan-500/5", border: "border-cyan-500/20" },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* Sidebar + content layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-[#080C14] border-r border-white/5 px-4 py-6 fixed left-0 top-0">
          <Link href="/" className="flex items-center gap-2 mb-10 px-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Zap size={15} className="text-white" />
            </div>
            <span className="font-poppins font-bold text-white text-sm">Coding With AI</span>
          </Link>

          <nav className="space-y-1 flex-1">
            {[
              { label: "Dashboard", href: "/student", icon: TrendingUp, active: true },
              { label: "My Courses", href: "/student/courses", icon: BookOpen },
              { label: "Projects", href: "/projects", icon: Code2 },
              { label: "Certificates", href: "/student/certificates", icon: Award },
              { label: "Community", href: "/community", icon: Users },
              { label: "AI Tools", href: "/ai-tools", icon: Zap },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                  item.active
                    ? "bg-blue-500/15 text-blue-400 border border-blue-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 mt-4"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:ml-64 p-6 lg:p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Good to see you back</p>
                <h1 className="font-poppins font-bold text-3xl text-white">
                  Hello, {firstName}!
                </h1>
              </div>
              {/* Membership badge */}
              {user?.membership ? (
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-500/15 border border-yellow-500/30">
                  <Star size={14} className="text-yellow-400" />
                  <span className="text-yellow-400 text-sm font-semibold capitalize">
                    {user.membership.type || "Member"}
                  </span>
                </div>
              ) : (
                <Link
                  href="/memberships"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl btn-gradient text-white text-sm font-semibold"
                >
                  Upgrade Plan
                  <ArrowRight size={14} />
                </Link>
              )}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`p-5 rounded-2xl border ${stat.border} bg-[#111827]`}
              >
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
                  <stat.icon size={18} className={stat.color} />
                </div>
                <p className="font-poppins font-bold text-2xl text-white">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* No membership CTA */}
          {!user?.membership ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-blue-500/15 to-purple-500/10 border border-blue-500/20"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="font-bold text-lg text-white mb-1 flex items-center gap-2">
                    <FaRocket className="text-blue-400" size={18} /> Ready to start building?
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Choose a membership plan to unlock premium courses, coding projects, and live mentorship.
                  </p>
                </div>
                <Link
                  href="/memberships"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl btn-gradient text-white font-semibold text-sm whitespace-nowrap"
                >
                  View Plans <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 p-6 lg:p-8 rounded-2xl bg-[#111827]/40 border border-white/[0.06] backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
                <div>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
                    user.membership.type === "silver"
                      ? "bg-slate-500/10 text-slate-300 border border-slate-500/20"
                      : user.membership.type === "gold"
                      ? "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                      : "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  }`}>
                    {user.membership.title || `${user.membership.type} plan`}
                  </span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">{user.membership.title}</h2>
                  <p className="text-gray-400 text-sm mt-1">{user.membership.description}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Milestone target</p>
                  <p className="text-lg font-bold text-blue-400 mt-0.5">{user.membership.milestone}</p>
                </div>
              </div>

              {/* Modules / Course Curriculum */}
              <div className="mt-8">
                <h3 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                  <BookOpen size={18} className="text-blue-400" />
                  Your Course Curriculum
                </h3>
                
                {user.membership.modules && user.membership.modules.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {user.membership.modules.map((mod: any, index: number) => (
                      <div key={index} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-all">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Module {index + 1}</span>
                            <h4 className="text-sm font-semibold text-white mt-0.5">{mod.title}</h4>
                            <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">{mod.description}</p>
                          </div>
                          <span className="text-[10px] font-semibold text-gray-500 bg-white/5 px-2 py-0.5 rounded-full flex-shrink-0">
                            {mod.videoCount} videos
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No modules available in this membership tier.</p>
                )}
              </div>

              {/* Features List */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <h3 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">Included Perks & Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {user.membership.features?.map((feat: string, i: number) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0">✓</div>
                      <span className="text-xs text-gray-300 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Quick Links */}
          <div className="mb-8">
            <h2 className="font-bold text-lg text-white mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`group flex flex-col items-center gap-3 p-5 rounded-2xl bg-gradient-to-br ${link.color} border ${link.border} hover:scale-[1.03] transition-all duration-200 text-center`}
                  >
                    <link.icon size={22} className="text-white/70 group-hover:text-white transition-colors" />
                    <span className="text-sm text-gray-300 group-hover:text-white font-medium transition-colors">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-2xl bg-[#111827]/40 border border-white/[0.06] backdrop-blur-xl"
            >
              <h3 className="font-bold text-base text-white mb-4">My Courses Progress</h3>
              {user?.progress?.length > 0 ? (
                <div className="space-y-3">
                  {user.progress.slice(0, 3).map((p: any, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                        <BookOpen size={16} className="text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white font-medium">Course {i + 1}</p>
                        <div className="mt-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            style={{ width: `${p.percentage}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{p.percentage}%</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BookOpen size={32} className="text-gray-700 mx-auto mb-3 animate-pulse" />
                  <p className="text-gray-500 text-sm">No active courses started yet.</p>
                  <Link href="/memberships" className="text-blue-400 text-sm hover:underline mt-2 inline-block font-semibold">
                    Browse and purchase memberships →
                  </Link>
                </div>
              )}
            </motion.div>

            {/* Certificates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="p-6 rounded-2xl bg-[#111827]/40 border border-white/[0.06] backdrop-blur-xl"
            >
              <h3 className="font-bold text-base text-white mb-4">My Certificates</h3>
              {user?.certificates?.length > 0 ? (
                <div className="space-y-3">
                  {user.certificates.slice(0, 3).map((cert: any, i: number) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                      <Award size={16} className="text-yellow-400 flex-shrink-0" />
                      <span className="text-sm text-white font-semibold">{cert.courseName || `Certificate ${i + 1}`}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Award size={32} className="text-gray-700 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm">No certificates earned yet.</p>
                  <p className="text-gray-600 text-xs mt-1 leading-relaxed">Complete curriculum modules and score well to unlock official certificates.</p>
                </div>
              )}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
