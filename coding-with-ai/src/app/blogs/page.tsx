import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpenText, Clock, User } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SplitText from "@/components/ui/SplitText";
import { blogsData } from "@/data/blogs";
import { Metadata } from "next";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const metadata: Metadata = {
  title: "AI Engineering Blog & Guides — Coding With AI",
  description: "Stay ahead of the curve with AI-assisted coding tutorials, developer guides, and system architecture articles from founder Atish Jain.",
  keywords: [
    "AI coding blog",
    "atish jain coding blog",
    "learn code with ai articles",
    "cursor ai tutorials",
    "prompt engineering guides",
    "SaaS architecture developer tips",
    "learn how to use Cursor editor",
    "AI-first software development guides",
    "AI coding insights and tutorials",
    "monetize SaaS with AI"
  ]
};

// Force dynamic rendering to always fetch fresh database records
export const revalidate = 0;

export default async function BlogsPage() {
  await connectDB();
  
  let blogs: any[] = [];
  try {
    blogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
    if (blogs.length === 0) {
      console.log("No blogs in DB, seeding static blogs...");
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
      blogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
    }
  } catch (error) {
    console.error("Failed to fetch blogs from database, using static fallback:", error);
    blogs = blogsData;
  }
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Absolute Background Patterns */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0 pointer-events-none" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] blur-[150px] rounded-full pointer-events-none z-0 opacity-30 bg-blue-500/20" />

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md mx-auto">
          <BookOpenText size={14} className="text-cyan-400" />
          <span className="text-sm font-semibold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Insights & Guides
          </span>
        </div>

        <div className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight flex justify-center">
          <SplitText text="The AI Engineering Blog" tag="h1" delay={40} duration={1.2} />
        </div>

        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Master the art of AI development. Read our latest articles on system architecture, code generation, and monetizing your SaaS.
        </p>
      </section>

      {/* Blogs Grid */}
      <section className="relative z-10 py-10 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: any) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`} className="group block h-full">
              <SpotlightCard className="h-full flex flex-col rounded-[24px] bg-[#111827]/60 border border-white/5 overflow-hidden transition-transform duration-500 hover:-translate-y-2" spotlightColor="rgba(6, 182, 212, 0.1)">
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-cyan-300 rounded-full border border-white/10">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {blog.excerpt}
                  </p>

                  <div className="h-px bg-white/10 mb-6" />

                  <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <User size={14} className="text-gray-400" />
                        <span>{blog.author}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-gray-400" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
