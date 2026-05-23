import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Membership from "@/models/Membership";

export async function GET() {
  try {
    await connectDB();
    const memberships = await Membership.find({ isActive: true }).sort({ price: 1 });
    return NextResponse.json({ memberships });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectDB();
    const membership = await Membership.create(body);
    return NextResponse.json({ membership }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
