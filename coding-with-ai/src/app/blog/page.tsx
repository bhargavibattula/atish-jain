import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Blog — AI Coding Tutorials & Tips" };

const posts = [
  { title: "How to Build an AI Chatbot with Next.js and OpenAI in 2025", category: "AI Projects", readTime: "8 min", date: "Dec 2024", gradient: "from-blue-500/20 to-cyan-500/10", border: "border-blue-500/20" },
  { title: "Top 5 AI Coding Tools Every Developer Must Know", category: "AI Tools", readTime: "5 min", date: "Dec 2024", gradient: "from-purple-500/20 to-pink-500/10", border: "border-purple-500/20" },
  { title: "Prompt Engineering for Developers: The Complete Guide", category: "AI Coding Tutorials", readTime: "12 min", date: "Nov 2024", gradient: "from-orange-500/20 to-red-500/10", border: "border-orange-500/20" },
  { title: "How AI is Changing Software Development in India", category: "Future Careers", readTime: "6 min", date: "Nov 2024", gradient: "from-green-500/20 to-teal-500/10", border: "border-green-500/20" },
  { title: "Building a Resume Analyzer with Claude AI and React", category: "AI Projects", readTime: "10 min", date: "Oct 2024", gradient: "from-cyan-500/20 to-blue-500/10", border: "border-cyan-500/20" },
  { title: "Cursor AI vs GitHub Copilot: Which Should You Use?", category: "AI Tools", readTime: "7 min", date: "Oct 2024", gradient: "from-violet-500/20 to-purple-500/10", border: "border-violet-500/20" },
];

const categories = ["All", "AI Coding Tutorials", "AI Tools", "AI Projects", "Placement Guidance", "Future Careers"];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              Blog
            </span>
            <h1 className="font-poppins font-bold text-5xl text-white mb-4">
              AI Coding <span className="gradient-text">Tutorials & Tips</span>
            </h1>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button key={cat} className={`px-4 py-1.5 rounded-full text-sm transition-all ${cat === "All" ? "bg-blue-500 text-white" : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <article key={i} className={`group p-6 rounded-2xl bg-gradient-to-br ${post.gradient} border ${post.border} hover:scale-[1.02] transition-all duration-300 flex flex-col cursor-pointer`}>
                <div className="h-36 rounded-xl bg-white/5 border border-white/10 mb-5 flex items-center justify-center">
                  <span className="text-4xl opacity-40">📝</span>
                </div>
                <span className="text-xs text-blue-400 font-medium mb-2">{post.category}</span>
                <h2 className="font-poppins font-bold text-base text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors flex-1">{post.title}</h2>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <Clock size={12} /> {post.readTime} read · {post.date}
                  </div>
                  <ArrowRight size={14} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
