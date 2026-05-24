import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, User, Calendar, Clock, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import SplitText from "@/components/ui/SplitText";
import { blogsData } from "@/data/blogs";

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Absolute Background Patterns */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blur-[150px] rounded-full pointer-events-none z-0 opacity-20 bg-cyan-500/20" />

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </Link>

        <div className="mb-8">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full">
            {blog.category}
          </span>
        </div>

        <div className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
          <SplitText text={blog.title} tag="h1" delay={30} duration={1} />
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-medium">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
              {blog.author.charAt(0)}
            </div>
            <span className="text-gray-300">{blog.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative w-full aspect-[21/9] rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent opacity-60" />
        </div>
      </section>

      {/* Article Content */}
      <section className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <article className="prose prose-invert prose-lg md:prose-xl prose-headings:font-bold prose-headings:tracking-tight prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-img:rounded-2xl max-w-none">
          {blog.content.split("\n\n").map((paragraph, index) => {
            // Very simple markdown-like rendering for this mock data
            if (paragraph.startsWith("###")) {
              return <h3 key={index} className="text-3xl text-white mt-12 mb-6">{paragraph.replace("###", "").trim()}</h3>;
            } else if (paragraph.startsWith("####")) {
              return <h4 key={index} className="text-2xl text-gray-200 mt-8 mb-4">{paragraph.replace("####", "").trim()}</h4>;
            } else if (paragraph.startsWith("-")) {
              return (
                <ul key={index} className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
                  {paragraph.split("\n").map((item, i) => (
                    <li key={i}>{item.replace("-", "").trim()}</li>
                  ))}
                </ul>
              );
            } else if (paragraph.trim() !== "") {
              // Handle bold text rendering
              const formattedText = paragraph.split("**").map((part, i) => i % 2 !== 0 ? <strong key={i} className="text-white">{part}</strong> : part);
              return <p key={index} className="text-gray-300 leading-relaxed mb-6">{formattedText}</p>;
            }
            return null;
          })}
        </article>

        {/* Footer CTA */}
        <div className="mt-20 p-8 md:p-10 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />
          <BookOpen size={32} className="text-cyan-400 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to start building?</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Join the community of developers building the future. Get access to premium courses and mentorship.
          </p>
          <Link
            href="/memberships"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1"
          >
            Explore Memberships
          </Link>
        </div>
      </section>
    </div>
  );
}
