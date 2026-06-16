import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import Membership from "@/models/Membership"; // Ensure Membership schema is registered
import Course from "@/models/Course";
import Certificate from "@/models/Certificate";
import AdminDashboard from "@/components/dashboard/AdminDashboard";

export const dynamic = "force-dynamic";
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

  // Calculate actual revenue from approved users' memberships
  const revenue = allUsers.reduce((sum: number, u: any) => {
    if (u.membershipStatus === "approved" && u.membership) {
      return sum + (u.membership.price || 0);
    }
    return sum;
  }, 0);

  const stats = {
    totalUsers,
    totalMembers: allUsers.filter((u: any) => u.membershipStatus === "approved" && u.membership).length,
    revenue,
  };

  return (
    <AdminDashboard
      stats={stats}
      allUsers={JSON.parse(JSON.stringify(allUsers))}
      session={JSON.parse(JSON.stringify(session))}
    />
  );
}
