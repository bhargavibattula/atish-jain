import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

// GET /api/blogs/[id] - Get a single blog by slug (id)
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectDB();

    const blog = await Blog.findOne({ id });
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ blog });
  } catch (error: any) {
    console.error("Error fetching blog:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT /api/blogs/[id] - Update a blog post (Admin only)
// Note: [id] parameter refers to the unique slug 'id' field of the blog
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();
    const { title, excerpt, content, category, image, readTime, author } = body;

    await connectDB();

    const blog = await Blog.findOne({ id });
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    if (title) blog.title = title;
    if (excerpt) blog.excerpt = excerpt;
    if (content) blog.content = content;
    if (category) blog.category = category;
    if (image) blog.image = image;
    if (readTime) blog.readTime = readTime;
    if (author) blog.author = author;

    await blog.save();

    return NextResponse.json({ blog, message: "Blog updated successfully" });
  } catch (error: any) {
    console.error("Error updating blog:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// DELETE /api/blogs/[id] - Delete a blog post (Admin only)
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    await connectDB();

    const deletedBlog = await Blog.findOneAndDelete({ id });
    if (!deletedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting blog:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
