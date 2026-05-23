import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name, phone, whatsappNumber, college, degree, membershipType, message } = await req.json();

    if (!whatsappNumber) {
      return NextResponse.json({ error: "WhatsApp number is required" }, { status: 400 });
    }

    if (!membershipType) {
      return NextResponse.json({ error: "Membership type requested is required" }, { status: 400 });
    }

    await connectDB();

    const user = await User.findById(session.user.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update user details & set membership application status
    user.name = name || user.name;
    user.phone = phone || user.phone;
    user.whatsappNumber = whatsappNumber;
    user.college = college || user.college;
    user.degree = degree || user.degree;
    user.membershipStatus = "pending";
    user.membershipTypeRequested = membershipType;
    user.applicationMessage = message || "";
    
    await user.save();

    return NextResponse.json({
      message: "Application submitted successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        whatsappNumber: user.whatsappNumber,
        membershipStatus: user.membershipStatus,
        membershipTypeRequested: user.membershipTypeRequested,
      }
    });
  } catch (error) {
    console.error("Apply membership error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
