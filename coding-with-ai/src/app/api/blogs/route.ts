import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { blogsData } from "@/data/blogs";

// GET /api/blogs - Get all blogs (seeds database if empty)
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    
    let blogs = await Blog.find({}).sort({ createdAt: -1 });
    
    // If the database has 0 blogs, seed the database with current static blogs
    if (blogs.length === 0) {
      console.log("No blogs found in database. Seeding static blogs...");
      const formattedBlogs = blogsData.map((blog) => ({
        id: blog.id,
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        author: blog.author,
        date: blog.date || new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
        category: blog.category,
        image: blog.image,
        readTime: blog.readTime,
      }));
      
      await Blog.insertMany(formattedBlogs);
      blogs = await Blog.find({}).sort({ createdAt: -1 });
    }
    
    return NextResponse.json({ blogs });
  } catch (error: any) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST /api/blogs - Create a new blog post (Admin only)
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, excerpt, content, category, image, readTime, author, id } = body;

    if (!title || !excerpt || !content || !category || !image || !id) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await connectDB();

    // Check for unique id slug
    const existingBlog = await Blog.findOne({ id });
    if (existingBlog) {
      return NextResponse.json({ error: "A blog with this URL slug/ID already exists" }, { status: 400 });
    }

    const newBlog = await Blog.create({
      id: id.toLowerCase().replace(/[^a-z0-9-_]/g, ""),
      title,
      excerpt,
      content,
      category,
      image,
      readTime: readTime || "5 min read",
      author: author || session.user.name || "Atish Jain",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
    });

    return NextResponse.json({ blog: newBlog }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating blog:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
