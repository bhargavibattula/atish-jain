import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import ClaimForm from "@/components/dashboard/ClaimForm";

export default async function ClaimMembershipPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect(`/register`);
  }

  await connectDB();
  const dbUser = await User.findById(session.user.id);
  if (!dbUser) {
    redirect("/login");
  }

  const initialUser = {
    name: dbUser.name || "",
    email: dbUser.email || "",
    phone: dbUser.phone || "",
    college: dbUser.college || "",
    degree: dbUser.degree || "",
    whatsappNumber: dbUser.whatsappNumber || "",
  };

  return (
    <ClaimForm tierId={id} initialUser={initialUser} />
  );
}
