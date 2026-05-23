import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import "@/models/Membership"; // Ensure Membership schema is registered
import "@/models/Certificate"; // Ensure Certificate schema is registered
import StudentDashboard from "@/components/dashboard/StudentDashboard";

export const metadata = { title: "Student Dashboard" };

export default async function StudentDashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  await connectDB();
  const user = await User.findById(session.user.id)
    .populate("membership")
    .populate("certificates")
    .lean();

  return <StudentDashboard user={JSON.parse(JSON.stringify(user))} session={session} />;
}
