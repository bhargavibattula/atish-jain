import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const difficulty = searchParams.get("difficulty");
    const category = searchParams.get("category");

    const query: Record<string, string> = {};
    if (difficulty) query.difficulty = difficulty;
    if (category) query.category = category;

    const projects = await Project.find(query).sort({ featured: -1, createdAt: -1 });
    return NextResponse.json({ projects });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectDB();
    const project = await Project.create(body);
    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
