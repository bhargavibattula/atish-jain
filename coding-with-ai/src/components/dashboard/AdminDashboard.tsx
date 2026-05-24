"use client";

import { useState, useEffect } from "react";
import { Session } from "next-auth";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, DollarSign, CreditCard, TrendingUp, Zap, LogOut, FileDown, Search, BarChart2, Clock, Check, X, Trash2, Edit3, ExternalLink, ShieldAlert, CheckCircle, Shield } from "lucide-react";
import { signOut } from "next-auth/react";
import { formatPrice, formatDate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface AdminDashboardProps {
  stats: { totalUsers: number; totalMembers: number; revenue: number };
  allUsers: any[];
  session: Session;
}

export default function AdminDashboard({ stats: initialStats, allUsers, session }: AdminDashboardProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"dashboard" | "analytics" | "users" | "applications">("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [usersList, setUsersList] = useState(allUsers);
  
  // Edit form states
  const [editingUser, setEditingUser] = useState<any | null>(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    whatsappNumber: "",
    college: "",
    degree: "",
    role: "student",
    isActive: true,
  });

  useEffect(() => {
    setUsersList(allUsers);
  }, [allUsers]);

  // Reactive Stats Calculations
  const totalUsersCount = usersList.length;
  const approvedMembersList = usersList.filter((u) => u.membershipStatus === "approved" && u.membership);
  const totalMembersCount = approvedMembersList.length;
  const dynamicRevenue = approvedMembersList.reduce((sum, u) => sum + (u.membership?.price || 0), 0);

  const pendingApplications = usersList.filter((u) => u.membershipStatus === "pending");
  const pendingCount = pendingApplications.length;

  const statCards = [
    { label: "Total Registered Users", value: totalUsersCount, icon: Users, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { label: "Active Memberships", value: totalMembersCount, icon: CreditCard, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { label: "Estimated Revenue", value: formatPrice(dynamicRevenue), icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  ];

  // Filter users based on search query
  const filteredUsers = usersList.filter((user) => {
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
  const recentUsers = usersList.slice(0, 5);

  // 1. Calculate Signups by Month (last 6 months)
  const getSignupTrend = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const signupCounts: { [key: string]: number } = {};
    
    // Initialize last 6 months
    const today = new Date();
    for (let i = 5; i >= 0; i--) {
      const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const label = `${months[d.getMonth()]} ${d.getFullYear().toString().slice(-2)}`;
      signupCounts[label] = 0;
    }

    usersList.forEach((user) => {
      const date = new Date(user.createdAt);
      const label = `${months[date.getMonth()]} ${date.getFullYear().toString().slice(-2)}`;
      if (label in signupCounts) {
        signupCounts[label]++;
      }
    });

    return Object.entries(signupCounts).map(([name, value]) => ({ name, value }));
  };

  const signupData = getSignupTrend();

  // 2. Calculate Membership Distribution
  const getMembershipDistribution = () => {
    let free = 0;
    let silver = 0;
    let gold = 0;
    let diamond = 0;

    usersList.forEach((user) => {
      const type = user.membership?.type;
      if (user.membershipStatus === "approved") {
        if (type === "silver") silver++;
        else if (type === "gold") gold++;
        else if (type === "diamond") diamond++;
      } else {
        free++;
      }
    });

    const total = usersList.length || 1;
    return [
      { name: "Free / Trial", count: free, percentage: Math.round((free / total) * 100) },
      { name: "Silver Membership", count: silver, percentage: Math.round((silver / total) * 100) },
      { name: "Gold Membership", count: gold, percentage: Math.round((gold / total) * 100) },
      { name: "Diamond Membership", count: diamond, percentage: Math.round((diamond / total) * 100) },
    ];
  };

  const membershipDistribution = getMembershipDistribution();

  // 3. Top Colleges
  const getTopColleges = () => {
    const collegeCounts: { [key: string]: number } = {};
    usersList.forEach((user) => {
      if (user.college && user.college.trim()) {
        const col = user.college.trim();
        collegeCounts[col] = (collegeCounts[col] || 0) + 1;
      }
    });

    return Object.entries(collegeCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  };

  const topColleges = getTopColleges();

  const handleApprove = async (id: string) => {
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "approve" }),
      });
      if (!res.ok) throw new Error("Failed to approve");
      toast.success("Membership approved!");
      setUsersList((prev) =>
        prev.map((u) =>
          u._id === id ? { ...u, membershipStatus: "approved" } : u
        )
      );
      router.refresh();
    } catch (err: any) {
      toast.error(err.message || "Approval failed");
    }
  };

  const handleReject = async (id: string) => {
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reject" }),
      });
      if (!res.ok) throw new Error("Failed to reject");
      toast.success("Membership application declined");
      setUsersList((prev) =>
        prev.map((u) =>
          u._id === id ? { ...u, membershipStatus: "rejected" } : u
        )
      );
      router.refresh();
    } catch (err: any) {
      toast.error(err.message || "Rejection failed");
    }
  };

  const handleToggleStatus = async (id: string, currentActive: boolean) => {
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "status", isActive: !currentActive }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      toast.success(`Account ${!currentActive ? "activated" : "deactivated"}`);
      setUsersList((prev) =>
        prev.map((u) => (u._id === id ? { ...u, isActive: !currentActive } : u))
      );
      router.refresh();
    } catch (err: any) {
      toast.error(err.message || "Failed to update status");
    }
  };

  const handleDeleteUser = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user? This cannot be undone.")) return;
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete user");
      toast.success("User deleted permanently");
      setUsersList((prev) => prev.filter((u) => u._id !== id));
      router.refresh();
    } catch (err: any) {
      toast.error(err.message || "Deletion failed");
    }
  };

  const openEditModal = (user: any) => {
    setEditingUser(user);
    setEditForm({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      whatsappNumber: user.whatsappNumber || "",
      college: user.college || "",
      degree: user.degree || "",
      role: user.role || "student",
      isActive: user.isActive !== false,
    });
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;
    try {
      const res = await fetch(`/api/users/${editingUser._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "edit",
          ...editForm,
        }),
      });
      if (!res.ok) throw new Error("Failed to save changes");
      toast.success("User updated successfully");
      setUsersList((prev) =>
        prev.map((u) =>
          u._id === editingUser._id ? { ...u, ...editForm } : u
        )
      );
      setEditingUser(null);
      router.refresh();
    } catch (err: any) {
      toast.error(err.message || "Update failed");
    }
  };

  const exportToCSV = (exportAll = false) => {
    const headers = ["Name", "Email", "Phone", "WhatsApp Number", "College", "Degree", "Role", "Membership Tier", "Approval Status", "Active", "Joined Date"];
    const targetUsers = exportAll ? usersList : filteredUsers;
    const rows = targetUsers.map((user) => [
      user.name,
      user.email,
      user.phone || "—",
      user.whatsappNumber || "—",
      user.college || "—",
      user.degree || "—",
      user.role,
      user.membership ? (user.membership.name || "Active") : "None",
      user.membershipStatus || "none",
      user.isActive !== false ? "Active" : "Blocked",
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
    link.setAttribute("download", `coding_with_ai_${exportAll ? 'all' : 'filtered'}_users_${new Date().toISOString().split("T")[0]}.csv`);
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
            onClick={() => setActiveTab("analytics")}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left ${
              activeTab === "analytics"
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <BarChart2 size={16} />
            Analytics & Reports
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
          <button
            onClick={() => setActiveTab("applications")}
            className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left ${
              activeTab === "applications"
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-3">
              <Clock size={16} />
              <span>Pending Applications</span>
            </div>
            {pendingCount > 0 && (
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-[#0B0F19]">
                {pendingCount}
              </span>
            )}
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
          /* ==================== DASHBOARD OVERVIEW ==================== */
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
                            user.membershipStatus === "approved" && user.membership?.type === "silver"
                              ? "bg-slate-500/10 text-slate-300 border border-slate-500/20"
                              : user.membershipStatus === "approved" && user.membership?.type === "gold"
                              ? "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                              : user.membershipStatus === "approved" && user.membership?.type === "diamond"
                              ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                              : "bg-white/[0.02] text-gray-400 border border-white/[0.06]"
                          }`}>
                            {user.membershipStatus === "approved" && user.membership ? user.membership.name : "Free / Trial"}
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
        ) : activeTab === "analytics" ? (
          /* ==================== ANALYTICS & REPORTS ==================== */
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <p className="text-gray-400 text-sm mb-1 font-medium">Data Analysis</p>
              <h1 className="font-bold text-3xl text-white tracking-tight">Analytics & Reports</h1>
            </motion.div>

            {/* Analytics Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Signups Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl border border-white/[0.06] bg-[#111827]/40 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-white">Monthly Signup Trend</h3>
                  <span className="text-xs text-gray-500">Last 6 Months</span>
                </div>
                <div className="relative h-64 flex items-end justify-between px-2 pt-6">
                  <div className="absolute inset-x-0 top-6 bottom-8 flex flex-col justify-between pointer-events-none opacity-10">
                    <div className="border-t border-dashed border-white w-full" />
                    <div className="border-t border-dashed border-white w-full" />
                    <div className="border-t border-dashed border-white w-full" />
                    <div className="border-t border-dashed border-white w-full" />
                  </div>
                  {signupData.map((data, i) => {
                    const maxVal = Math.max(...signupData.map((d) => d.value)) || 1;
                    const percentHeight = Math.round((data.value / maxVal) * 80) + 5;
                    return (
                      <div key={data.name} className="flex-1 flex flex-col items-center justify-end h-full group relative z-10">
                        <div className="absolute -top-8 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md whitespace-nowrap z-20">
                          {data.value} signups
                        </div>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${percentHeight}%` }}
                          transition={{ delay: i * 0.05, duration: 0.8, ease: "easeOut" }}
                          className="w-8 sm:w-12 bg-gradient-to-t from-blue-600 to-indigo-500 group-hover:from-blue-500 group-hover:to-indigo-400 rounded-t-lg shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all cursor-pointer relative overflow-hidden mt-auto"
                        >
                          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                        <span className="text-xs text-gray-500 mt-2 font-medium h-4 flex-shrink-0">{data.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Memberships Donut Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl border border-white/[0.06] bg-[#111827]/40 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-white">Membership Distribution</h3>
                  <span className="text-xs text-gray-500">Tier Breakdown</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-around gap-6 h-64">
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.03)" strokeWidth="12" />
                      {(() => {
                        let accumulatedPercent = 0;
                        return membershipDistribution.map((item, idx) => {
                          const percent = item.percentage;
                          if (percent === 0) return null;
                          let colorCode = "#6b7280"; // free
                          if (idx === 1) colorCode = "#94a3b8"; // silver
                          else if (idx === 2) colorCode = "#f59e0b"; // gold
                          else if (idx === 3) colorCode = "#06b6d4"; // diamond

                          const offset = -(accumulatedPercent * 2.512);
                          accumulatedPercent += percent;

                          return (
                            <circle
                              key={item.name}
                              cx="50"
                              cy="50"
                              r="40"
                              fill="transparent"
                              stroke={colorCode}
                              strokeWidth="12"
                              strokeDasharray={`${percent * 2.512} 251.2`}
                              strokeDashoffset={offset}
                              className="transition-all duration-1000 ease-in-out"
                              strokeLinecap="round"
                            />
                          );
                        });
                      })()}
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-2xl font-bold text-white">{usersList.length}</span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Total Users</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 w-full sm:w-auto">
                    {membershipDistribution.map((item, idx) => {
                      let colorDot = "bg-gray-500";
                      if (idx === 1) colorDot = "bg-slate-400";
                      else if (idx === 2) colorDot = "bg-amber-500";
                      else if (idx === 3) colorDot = "bg-cyan-500";

                      return (
                        <div key={item.name} className="flex items-center justify-between sm:justify-start gap-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${colorDot}`} />
                            <span className="text-sm font-medium text-gray-400">{item.name}</span>
                          </div>
                          <span className="text-sm font-bold text-white ml-auto sm:ml-4">
                            {item.count} ({item.percentage}%)
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Colleges Bar List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2 p-6 rounded-2xl border border-white/[0.06] bg-[#111827]/40 backdrop-blur-xl"
              >
                <h3 className="font-bold text-lg text-white mb-6">Top Registering Institutions</h3>
                <div className="space-y-4">
                  {topColleges.length > 0 ? (
                    topColleges.map((college, i) => {
                      const maxCount = topColleges[0].count || 1;
                      const percentWidth = Math.round((college.count / maxCount) * 100);
                      return (
                        <div key={college.name} className="space-y-1.5">
                          <div className="flex justify-between text-sm font-medium">
                            <span className="text-gray-300 truncate pr-4">{college.name}</span>
                            <span className="text-white font-bold">{college.count} students</span>
                          </div>
                          <div className="h-2 w-full bg-white/[0.03] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${percentWidth}%` }}
                              transition={{ delay: i * 0.1, duration: 0.6 }}
                              className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                            />
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-gray-500 text-sm py-4">No college data available yet.</p>
                  )}
                </div>
              </motion.div>

              {/* Excel Report Download Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl border border-white/[0.06] bg-[#111827]/40 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">Export Data Reports</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    Download full spreadsheets of your registered users and membership details. You can import these directly into Excel, Google Sheets, or any other reporting tool.
                  </p>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => exportToCSV(true)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all hover:scale-[1.01]"
                  >
                    <FileDown size={16} />
                    Export All Users ({usersList.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("users")}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-semibold text-sm py-3.5 rounded-xl transition-all"
                  >
                    Go to User Management
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        ) : activeTab === "applications" ? (
          /* ==================== PENDING APPLICATIONS VIEW ==================== */
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <p className="text-gray-400 text-sm mb-1">Membership Management</p>
              <h1 className="font-bold text-3xl text-white tracking-tight">Pending Applications</h1>
            </motion.div>

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
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">Requested Tier</th>
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">WhatsApp / Contact</th>
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">Statement / Message</th>
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">Applied Date</th>
                      <th className="px-6 py-4 text-center text-xs text-gray-400 font-semibold tracking-wider uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {pendingApplications.length > 0 ? (
                      pendingApplications.map((user) => (
                        <tr key={user._id} className="hover:bg-white/[0.01] transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-orange-500/10">
                                {user.name?.charAt(0)}
                              </div>
                              <div>
                                <p className="text-sm text-white font-semibold">{user.name}</p>
                                <p className="text-xs text-gray-500">{user.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-300 border border-amber-500/20">
                              {user.membershipTypeRequested || "Diamond"}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {user.whatsappNumber ? (
                              <a
                                href={`https://wa.me/${user.whatsappNumber.replace(/\D/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold transition-all"
                              >
                                {user.whatsappNumber}
                                <ExternalLink size={11} />
                              </a>
                            ) : (
                              <span className="text-sm text-gray-500">—</span>
                            )}
                          </td>
                          <td className="px-6 py-4 max-w-xs">
                            <p className="text-xs text-gray-300 truncate italic" title={user.applicationMessage}>
                              {user.applicationMessage ? `"${user.applicationMessage}"` : "No statement provided."}
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-gray-400 font-medium">{formatDate(user.createdAt)}</span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => handleApprove(user._id)}
                                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white transition-all border border-emerald-500/20 hover:scale-105"
                                title="Approve"
                              >
                                <Check size={16} />
                              </button>
                              <button
                                onClick={() => handleReject(user._id)}
                                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white transition-all border border-red-500/20 hover:scale-105"
                                title="Decline"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="text-center py-12 text-gray-500 text-sm">
                          <CheckCircle size={36} className="text-emerald-500/40 mx-auto mb-3" />
                          No pending applications. All caught up!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        ) : (
          /* ==================== REGISTERED USERS MANAGEMENT VIEW ==================== */
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">User Management</p>
                <h1 className="font-bold text-3xl text-white tracking-tight">All Registered Users</h1>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => exportToCSV(false)}
                  className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-semibold text-sm px-4 py-3 rounded-xl transition-all"
                >
                  <FileDown size={16} />
                  Export Filtered ({filteredUsers.length})
                </button>
                <button
                  onClick={() => exportToCSV(true)}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-sm px-5 py-3 rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all"
                >
                  <FileDown size={16} />
                  Export All ({usersList.length})
                </button>
              </div>
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
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">Status</th>
                      <th className="px-6 py-4 text-left text-xs text-gray-400 font-semibold tracking-wider uppercase">Joined Date</th>
                      <th className="px-6 py-4 text-center text-xs text-gray-400 font-semibold tracking-wider uppercase">Actions</th>
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
                            <div className="flex flex-col gap-0.5 mt-1">
                              {user.phone && <p className="text-xs text-gray-500">Phone: {user.phone}</p>}
                              {user.whatsappNumber && (
                                <a
                                  href={`https://wa.me/${user.whatsappNumber.replace(/\D/g, "")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-emerald-400 flex items-center gap-0.5 hover:underline"
                                >
                                  WhatsApp: {user.whatsappNumber}
                                  <ExternalLink size={8} />
                                </a>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-white font-medium truncate max-w-[180px]" title={user.college}>{user.college || "—"}</p>
                            <p className="text-xs text-gray-500 mt-0.5 truncate max-w-[180px]" title={user.degree}>{user.degree || "—"}</p>
                          </td>
                          <td className="px-6 py-4">
                            {user.membershipStatus === "approved" && user.membership ? (
                              <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${
                                user.membership.type === "silver"
                                  ? "bg-slate-500/10 text-slate-300 border-slate-500/20"
                                  : user.membership.type === "gold"
                                  ? "bg-amber-500/10 text-amber-300 border-amber-500/20"
                                  : "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
                              }`}>
                                {user.membership.name}
                              </span>
                            ) : user.membershipStatus === "pending" ? (
                              <span className="inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-300 border border-amber-500/20 animate-pulse">
                                Pending {user.membershipTypeRequested || "Diamond"}
                              </span>
                            ) : user.membershipStatus === "rejected" ? (
                              <span className="inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-red-500/10 text-red-400 border border-red-500/20">
                                Rejected
                              </span>
                            ) : (
                              <span className="inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/[0.02] text-gray-500 border border-white/[0.06]">
                                None
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                              user.isActive !== false
                                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                                : "bg-red-500/15 text-red-400 border border-red-500/20"
                            }`}>
                              {user.isActive !== false ? "Active" : "Blocked"}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-gray-400 font-medium">{formatDate(user.createdAt)}</span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              {/* Edit Profile */}
                              <button
                                onClick={() => openEditModal(user)}
                                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white transition-all border border-blue-500/20"
                                title="Edit User Details"
                              >
                                <Edit3 size={14} />
                              </button>
                              
                              {/* Toggle Activate / Deactivate (Block) */}
                              <button
                                onClick={() => handleToggleStatus(user._id, user.isActive !== false)}
                                className={`inline-flex items-center justify-center w-8 h-8 rounded-lg border transition-all ${
                                  user.isActive !== false
                                    ? "bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-white border-amber-500/20"
                                    : "bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border-emerald-500/20"
                                }`}
                                title={user.isActive !== false ? "Block User Account" : "Activate User Account"}
                              >
                                <Shield size={14} />
                              </button>

                              {/* Delete Permanently */}
                              <button
                                onClick={() => handleDeleteUser(user._id)}
                                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white transition-all border border-red-500/20"
                                title="Delete Permanently"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="text-center py-8 text-gray-500 text-sm">
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

      {/* Edit User Modal */}
      {editingUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg bg-[#0F172A] border border-white/10 rounded-2xl p-6 shadow-2xl relative"
          >
            <button
              onClick={() => setEditingUser(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
              <Edit3 className="text-blue-400" size={20} />
              Edit User Profile
            </h3>

            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={editForm.name}
                  onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={editForm.email}
                    onChange={(e) => setEditForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-1.5">Phone Number</label>
                  <input
                    type="text"
                    value={editForm.phone}
                    onChange={(e) => setEditForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-1.5">WhatsApp Number</label>
                  <input
                    type="text"
                    value={editForm.whatsappNumber}
                    onChange={(e) => setEditForm(prev => ({ ...prev, whatsappNumber: e.target.value }))}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-1.5">System Role</label>
                  <select
                    value={editForm.role}
                    onChange={(e) => setEditForm(prev => ({ ...prev, role: e.target.value }))}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="student" className="bg-[#0f172a] text-white">Student</option>
                    <option value="admin" className="bg-[#0f172a] text-white">Admin</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-1.5">College / School</label>
                  <input
                    type="text"
                    value={editForm.college}
                    onChange={(e) => setEditForm(prev => ({ ...prev, college: e.target.value }))}
                    className="w-full bg-[#1e293b]/20 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-1.5">Degree / Course</label>
                  <input
                    type="text"
                    value={editForm.degree}
                    onChange={(e) => setEditForm(prev => ({ ...prev, degree: e.target.value }))}
                    className="w-full bg-[#1e293b]/20 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={editForm.isActive}
                  onChange={(e) => setEditForm(prev => ({ ...prev, isActive: e.target.checked }))}
                  className="w-4 h-4 rounded border-white/10 bg-white/[0.02] text-blue-600 focus:ring-0 focus:ring-offset-0"
                />
                <label htmlFor="isActive" className="text-sm font-semibold text-white cursor-pointer select-none">
                  Account Status: Active (Checked)
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-6 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setEditingUser(null)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-semibold text-sm transition-all"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
