"use client";

import { Session } from "next-auth";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, DollarSign, CreditCard, TrendingUp, Zap, BookOpen, Code2, Settings, LogOut, Award } from "lucide-react";
import { signOut } from "next-auth/react";
import { formatPrice, formatDate } from "@/lib/utils";

interface AdminDashboardProps {
  stats: { totalUsers: number; totalMembers: number; revenue: number };
  recentUsers: any[];
  session: Session;
}

export default function AdminDashboard({ stats, recentUsers, session }: AdminDashboardProps) {
  const statCards = [
    { label: "Total Users", value: stats.totalUsers, icon: Users, color: "text-blue-400", bg: "bg-blue-500/15", border: "border-blue-500/20", change: "+12% this month" },
    { label: "Total Revenue", value: formatPrice(stats.revenue), icon: DollarSign, color: "text-green-400", bg: "bg-green-500/15", border: "border-green-500/20", change: "+8% this month" },
    { label: "Paid Members", value: stats.totalMembers, icon: CreditCard, color: "text-purple-400", bg: "bg-purple-500/15", border: "border-purple-500/20", change: "+15% this month" },
    { label: "Avg Revenue/User", value: stats.totalUsers > 0 ? formatPrice(stats.revenue / stats.totalUsers) : "₹0", icon: TrendingUp, color: "text-cyan-400", bg: "bg-cyan-500/15", border: "border-cyan-500/20", change: "Per user" },
  ];

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: TrendingUp, active: true },
    { label: "Users", href: "/admin/users", icon: Users },
    { label: "Courses", href: "/admin/courses", icon: BookOpen },
    { label: "Memberships", href: "/admin/memberships", icon: Award },
    { label: "Projects", href: "/admin/projects", icon: Code2 },
    { label: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-[#080C14] border-r border-white/5 px-4 py-6 fixed left-0 top-0">
        <Link href="/" className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Zap size={15} className="text-white" />
          </div>
          <span className="font-poppins font-bold text-white text-sm">Admin Panel</span>
        </Link>

        <nav className="space-y-1 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                item.active
                  ? "bg-red-500/15 text-red-400 border border-red-500/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/5 pt-4">
          <div className="px-3 py-2 mb-2">
            <p className="text-xs text-gray-500">Signed in as</p>
            <p className="text-sm text-white font-medium truncate">{session.user?.name}</p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all w-full"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 lg:ml-64 p-6 lg:p-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <p className="text-gray-400 text-sm mb-1">Admin Control Center</p>
          <h1 className="font-poppins font-bold text-3xl text-white">Dashboard</h1>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((stat, i) => (
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
              <p className="text-xs text-green-400 mt-1">{stat.change}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl bg-[#111827] border border-white/10 overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <h2 className="font-poppins font-bold text-base text-white">Recent Users</h2>
            <Link href="/admin/users" className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
              View all →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="px-6 py-3 text-left text-xs text-gray-500 font-medium">User</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 font-medium">Role</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 font-medium">Membership</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500 font-medium">Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentUsers.map((user) => (
                  <tr key={user._id} className="hover:bg-white/2 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                          {user.name?.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm text-white font-medium">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        user.role === "admin" ? "bg-red-500/15 text-red-400" : "bg-blue-500/15 text-blue-400"
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-400">{user.membership ? "Active" : "—"}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-400">{formatDate(user.createdAt)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
