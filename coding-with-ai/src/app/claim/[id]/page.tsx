import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import Membership from "@/models/Membership";

export default async function ClaimMembershipPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect(`/register`);
  }

  await connectDB();
  
  // Find the requested membership tier from DB
  const membership = await Membership.findOne({ type: id });
  
  if (membership) {
    // Assign to user
    await User.findByIdAndUpdate(session.user.id, {
      $set: { membership: membership._id }
    });
  } else {
    // If memberships aren't seeded in DB, just create a dummy one and assign
    const newMembership = await Membership.create({
      title: id.charAt(0).toUpperCase() + id.slice(1),
      type: id,
      description: "Claimed membership",
      price: 0,
      duration: 365,
      milestone: "Start your journey",
    });
    await User.findByIdAndUpdate(session.user.id, {
      $set: { membership: newMembership._id }
    });
  }

  // Redirect to dashboard with success message
  redirect("/student?claim=success");
}
