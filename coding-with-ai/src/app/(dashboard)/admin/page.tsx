import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import Membership from "@/models/Membership"; // Ensure Membership schema is registered
import AdminDashboard from "@/components/dashboard/AdminDashboard";

export const metadata = { title: "Admin Dashboard" };

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") redirect("/login?error=unauthorized");

  await connectDB();

  const [totalUsers, totalMembers, allUsers] = await Promise.all([
    User.countDocuments(),
    User.countDocuments({ membership: { $exists: true, $ne: null } }),
    User.find()
      .populate("membership")
      .select("-password")
      .sort({ createdAt: -1 })
      .lean(),
  ]);

  const stats = {
    totalUsers,
    totalMembers,
    revenue: 0, // Placeholder or calculated if required
  };

  return (
    <AdminDashboard
      stats={stats}
      allUsers={JSON.parse(JSON.stringify(allUsers))}
      session={session}
    />
  );
}
