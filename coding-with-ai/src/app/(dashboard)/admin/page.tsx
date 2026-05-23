import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import AdminDashboard from "@/components/dashboard/AdminDashboard";

export const metadata = { title: "Admin Dashboard" };

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") redirect("/login?error=unauthorized");

  await connectDB();

  const [totalUsers, totalMembers, recentUsers] = await Promise.all([
    User.countDocuments(),
    User.countDocuments({ membership: { $exists: true } }),
    User.find().select("-password").sort({ createdAt: -1 }).limit(10).lean(),
  ]);

  const stats = {
    totalUsers,
    totalMembers,
    revenue: 0,
  };

  return (
    <AdminDashboard
      stats={stats}
      recentUsers={JSON.parse(JSON.stringify(recentUsers))}
      session={session}
    />
  );
}
