import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import Membership from "@/models/Membership";

import Course from "@/models/Course";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();
    const { action, name, email, phone, whatsappNumber, college, degree, role, isActive } = body;

    await connectDB();

    const targetUser = await User.findById(id);
    if (!targetUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (action === "approve") {
      const type = targetUser.membershipTypeRequested || "diamond";
      
      // Find or create the membership details
      let membership = await Membership.findOne({ type });
      if (!membership) {
        membership = await Membership.create({
          title: type.charAt(0).toUpperCase() + type.slice(1),
          type,
          description: `Access to ${type} curriculum and projects`,
          price: type === "silver" ? 99 : type === "gold" ? 199 : 499,
          duration: 365,
          milestone: type === "silver" ? "Build 2 projects" : type === "gold" ? "Build 5 projects" : "Startup launch & placement",
          features: type === "diamond" ? ["Startup blueprints", "CTO guidance"] : ["Live QA", "Discord community"]
        });
      }

      // Find or create a course for this tier
      let course = await Course.findOne({ membership: type });
      if (!course) {
        course = await Course.create({
          title: `Fullstack AI Developer - ${type.toUpperCase()}`,
          description: "Master AI coding with modern tools.",
          thumbnail: "/course-thumbnail.png",
          membership: type,
          isPublished: true,
        });
      }

      targetUser.membership = membership._id;
      targetUser.membershipStatus = "approved";
      targetUser.membershipTypeRequested = null;
      
      if (!targetUser.progress) targetUser.progress = [];
      const hasCourse = targetUser.progress.find((p: any) => p.courseId.toString() === course._id.toString());
      if (!hasCourse) {
        targetUser.progress.push({
          courseId: course._id,
          completedVideos: [],
          percentage: 0,
          lastAccessedAt: new Date()
        });
      }

      await targetUser.save();

      return NextResponse.json({ message: "Membership approved and course access granted", user: targetUser });
    }

    if (action === "reject") {
      targetUser.membershipStatus = "rejected";
      targetUser.membershipTypeRequested = null;
      await targetUser.save();

      return NextResponse.json({ message: "Membership rejected", user: targetUser });
    }

    if (action === "status") {
      targetUser.isActive = isActive !== undefined ? isActive : !targetUser.isActive;
      await targetUser.save();
      return NextResponse.json({ message: `User account ${targetUser.isActive ? "activated" : "deactivated"}`, user: targetUser });
    }

    if (action === "edit") {
      if (name) targetUser.name = name;
      if (email) targetUser.email = email.toLowerCase();
      if (phone !== undefined) targetUser.phone = phone;
      if (whatsappNumber !== undefined) targetUser.whatsappNumber = whatsappNumber;
      if (college !== undefined) targetUser.college = college;
      if (degree !== undefined) targetUser.degree = degree;
      if (role) targetUser.role = role;
      if (isActive !== undefined) targetUser.isActive = isActive;
      
      await targetUser.save();
      return NextResponse.json({ message: "User details updated successfully", user: targetUser });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Update user error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    await connectDB();

    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete user error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
