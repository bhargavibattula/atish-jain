"use client";

import { useState } from "react";
import { Session } from "next-auth";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, DollarSign, CreditCard, TrendingUp, Zap, LogOut, FileDown, Search } from "lucide-react";
import { signOut } from "next-auth/react";
import { formatPrice, formatDate } from "@/lib/utils";

interface AdminDashboardProps {
  stats: { totalUsers: number; totalMembers: number; revenue: number };
  allUsers: any[];
  session: Session;
}

export default function AdminDashboard({ stats, allUsers, session }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<"dashboard" | "users">("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const statCards = [
    { label: "Total Registered Users", value: stats.totalUsers, icon: Users, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { label: "Active Memberships", value: stats.totalMembers, icon: CreditCard, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { label: "Admin Account", value: "Active", icon: Zap, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  ];

  // Filter users based on search query
  const filteredUsers = allUsers.filter((user) => {
    const query = searchQuery.toLowerCase();
    return (
      user.name?.toLowerCase().includes(query) ||
      user.email?.toLowerCase().includes(query) ||
      user.phone?.toLowerCase().includes(query) ||
      user.college?.toLowerCase().includes(query) ||
      user.degree?.toLowerCase().includes(query)
    );
  });

  // Take the 5 most recent users for dashboard quick view
  const recentUsers = allUsers.slice(0, 5);

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "College", "Degree", "Role", "Membership Status", "Joined Date"];
    const rows = filteredUsers.map((user) => [
      user.name,
      user.email,
      user.phone || "—",
      user.college || "—",
      user.degree || "—",
      user.role,
      user.membership ? (user.membership.name || "Active") : "None",
      new Date(user.createdAt).toLocaleDateString(),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((val) => `"${String(val).replace(/"/g, '""')}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `coding_with_ai_users_${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-[#080C14] border-r border-white/5 px-4 py-6 fixed left-0 top-0">
        <Link href="/" className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Zap size={15} className="text-white" />
          </div>
          <span className="font-bold text-white text-sm">Admin Panel</span>
        </Link>

        <nav className="space-y-1 flex-1">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left ${
              activeTab === "dashboard"
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <TrendingUp size={16} />
            Dashboard Overview
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left ${
              activeTab === "users"
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Users size={16} />
            All Registered Users
          </button>
        </nav>

        <div className="border-t border-white/5 pt-4">
          <div className="px-3 py-2 mb-2">
            <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase">Signed in as</p>
            <p className="text-sm text-white font-medium truncate mt-0.5">{session.user?.name}</p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all w-full"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-6 lg:p-8">
        {activeTab === "dashboard" ? (
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <p className="text-gray-400 text-sm mb-1">Admin Control Center</p>
              <h1 className="font-bold text-3xl text-white tracking-tight">Dashboard Overview</h1>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {statCards.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`p-6 rounded-2xl border ${stat.border} bg-[#111827]/40 backdrop-blur-xl`}
                >
                  <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-4`}>
                    <stat.icon size={18} className={stat.color} />
                  </div>
                  <p className="font-bold text-3xl text-white tracking-tight">{stat.value}</p>
                  <p className="text-sm text-gray-400 mt-1 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick View Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-[#111827]/40 border border-white/[0.06] overflow-hidden backdrop-blur-xl"
            >
              <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
                <h2 className="font-bold text-lg text-white">Recent Signups</h2>
                <button
                  onClick={() => setActiveTab("users")}
                  className="text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors"
                >
                  View All Users →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.01]">
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">User</th>
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">Role</th>
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">Membership</th>
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {recentUsers.map((user) => (
                      <tr key={user._id} className="hover:bg-white/[0.01] transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-purple-500/10">
                              {user.name?.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm text-white font-semibold">{user.name}</p>
                              <p className="text-xs text-gray-500">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                            user.role === "admin" ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                            user.membership?.type === "silver"
                              ? "bg-slate-500/10 text-slate-300 border border-slate-500/20"
                              : user.membership?.type === "gold"
                              ? "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                              : user.membership?.type === "diamond"
                              ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                              : "bg-white/[0.02] text-gray-400 border border-white/[0.06]"
                          }`}>
                            {user.membership ? user.membership.name : "Free / Trial"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-400 font-medium">{formatDate(user.createdAt)}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        ) : (
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">User Management</p>
                <h1 className="font-bold text-3xl text-white tracking-tight">All Registered Users</h1>
              </div>

              {/* Action Button */}
              <button
                onClick={exportToCSV}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-sm px-5 py-3 rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all"
              >
                <FileDown size={16} />
                Export to Excel
              </button>
            </motion.div>

            {/* Filter / Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search users by name, email, phone, college, degree..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#111827]/40 border border-white/[0.06] rounded-2xl pl-12 pr-4 py-4 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-xl"
              />
            </div>

            {/* Complete Users Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-[#111827]/40 border border-white/[0.06] overflow-hidden backdrop-blur-xl"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.01]">
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">User</th>
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">Contact Info</th>
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">Academic Details</th>
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">Membership</th>
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">Joined Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((user) => (
                        <tr key={user._id} className="hover:bg-white/[0.01] transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-purple-500/10">
                                {user.name?.charAt(0)}
                              </div>
                              <div>
                                <p className="text-sm text-white font-semibold">{user.name}</p>
                                <span className={`inline-flex px-2 py-0.5 mt-1 rounded text-[9px] font-bold uppercase tracking-widest ${
                                  user.role === "admin" ? "bg-red-500/10 text-red-400" : "bg-blue-500/10 text-blue-400"
                                }`}>
                                  {user.role}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-white font-medium">{user.email}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{user.phone || "—"}</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-white font-medium">{user.college || "—"}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{user.degree || "—"}</p>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${
                              user.membership?.type === "silver"
                                ? "bg-slate-500/10 text-slate-300 border-slate-500/20"
                                : user.membership?.type === "gold"
                                ? "bg-amber-500/10 text-amber-300 border-amber-500/20"
                                : user.membership?.type === "diamond"
                                ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
                                : "bg-white/[0.02] text-gray-400 border-white/[0.06]"
                            }`}>
                              {user.membership ? user.membership.name : "Free / Trial"}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-gray-400 font-medium">{formatDate(user.createdAt)}</span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="text-center py-8 text-gray-500 text-sm">
                          No users found matching your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
}
