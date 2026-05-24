"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, BookOpen, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import SplitText from "@/components/ui/SplitText";
import TiltedCard from "@/components/ui/TiltedCard";
import SpotlightCard from "@/components/ui/SpotlightCard";
import GlareHover from "@/components/ui/GlareHover";
import { blogsData } from "@/data/blogs";
import { use } from "react";
import { motion } from "framer-motion";

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the promise using React's use() hook for client components
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      {/* Aesthetic Backgrounds */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] z-0 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] blur-[200px] rounded-full pointer-events-none z-0 opacity-20 bg-gradient-to-b from-cyan-600/40 to-blue-900/10" />

      {/* Main Content Layout */}
      <div className="relative z-10 pt-32 pb-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors group px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05]">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-16 items-start">
          
          {/* LEFT COLUMN: Article Content */}
          <div className="w-full">
            {/* Title & Meta */}
            <div className="mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 inline-block"
              >
                <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                  {blog.category}
                </span>
              </motion.div>

              <div className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                <SplitText text={blog.title} tag="h1" delay={25} duration={0.8} />
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 text-sm text-gray-400 font-medium"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05]">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold">
                    {blog.author.charAt(0)}
                  </div>
                  <span className="text-gray-300">{blog.author}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05]">
                  <Calendar size={14} className="text-cyan-400" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05]">
                  <Clock size={14} className="text-blue-400" />
                  <span>{blog.readTime}</span>
                </div>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-16 w-full"
            >
               <TiltedCard
                  rotateXRange={6}
                  rotateYRange={6}
                  scaleOnHover={1.02}
                  className="w-full aspect-[21/9] rounded-[32px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10"
               >
                 <div className="relative w-full h-full">
                   <Image
                     src={blog.image}
                     alt={blog.title}
                     fill
                     className="object-cover"
                     priority
                     sizes="(max-width: 1024px) 100vw, 1000px"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent opacity-80" />
                 </div>
               </TiltedCard>
            </motion.div>

            {/* The Article */}
            <motion.article 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="prose prose-invert prose-lg md:prose-xl max-w-none 
                         prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
                         prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-6 prose-h3:text-transparent prose-h3:bg-clip-text prose-h3:bg-gradient-to-r prose-h3:from-white prose-h3:to-gray-400
                         prose-h4:text-2xl prose-h4:mt-10 prose-h4:mb-4 prose-h4:text-cyan-100
                         prose-p:text-gray-300 prose-p:leading-[1.8] prose-p:mb-8
                         prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-a:no-underline prose-a:border-b border-cyan-400/30
                         prose-strong:text-white prose-strong:font-semibold
                         prose-ul:text-gray-300 prose-ul:space-y-3 prose-li:marker:text-cyan-500
                         bg-white/[0.01] border border-white/[0.03] rounded-[32px] p-8 md:p-12 lg:p-16 shadow-2xl backdrop-blur-sm"
            >
              {blog.content.split("\n\n").map((paragraph, index) => {
                
                // Helper to format text with bold, italics, and inline code
                const formatText = (text: string) => {
                  // This is a naive but effective parser for our specific markdown format
                  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
                  return parts.map((part, i) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
                    } else if (part.startsWith("*") && part.endsWith("*")) {
                      return <em key={i} className="text-cyan-200 not-italic font-medium">{part.slice(1, -1)}</em>;
                    } else if (part.startsWith("`") && part.endsWith("`")) {
                      return <code key={i} className="px-1.5 py-0.5 rounded-md bg-black/40 text-cyan-300 font-mono text-sm border border-white/10">{part.slice(1, -1)}</code>;
                    }
                    return part;
                  });
                };

                if (paragraph.startsWith("###")) {
                  return <h3 key={index}>{paragraph.replace("###", "").trim()}</h3>;
                } else if (paragraph.startsWith("#### Step")) {
                  const [heading, ...bodyParts] = paragraph.split("\n");
                  const body = bodyParts.join("\n");
                  const stepNumberMatch = heading.match(/Step (\d+)/);
                  const stepNumber = stepNumberMatch ? stepNumberMatch[1] : "*";
                  const headingText = heading.replace(/#### Step \d+:/, "").trim();

                  return (
                    <div key={index} className="my-12 p-8 md:p-10 rounded-[32px] bg-gradient-to-br from-[#111827] to-[#0A0F1C] border border-cyan-500/20 shadow-[0_15px_40px_-15px_rgba(6,182,212,0.15)] relative overflow-hidden group hover:border-cyan-400/40 transition-all duration-500">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-cyan-400/20 transition-colors duration-500" />
                      
                      {/* Step Badge */}
                      <div className="absolute -left-[1px] top-10 w-1.5 h-16 bg-cyan-400 rounded-r-full shadow-[0_0_15px_rgba(6,182,212,0.8)]" />

                      <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-4 mt-0!">
                        <span className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl font-black shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                          {stepNumber}
                        </span>
                        {headingText}
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-lg mb-0!">
                        {formatText(body)}
                      </p>
                    </div>
                  );
                } else if (paragraph.startsWith("####")) {
                  return <h4 key={index}>{formatText(paragraph.replace("####", "").trim())}</h4>;
                } else if (paragraph.startsWith("-")) {
                  return (
                    <ul key={index}>
                      {paragraph.split("\n").filter(Boolean).map((item, i) => (
                        <li key={i}>{formatText(item.replace("-", "").trim())}</li>
                      ))}
                    </ul>
                  );
                } else if (paragraph.trim() !== "") {
                  return <p key={index}>{formatText(paragraph)}</p>;
                }
                return null;
              })}
            </motion.article>
          </div>

          {/* RIGHT COLUMN: Sidebar */}
          <div className="lg:sticky lg:top-32 flex flex-col gap-8">
            
            {/* Author Box */}
            <SpotlightCard className="p-8 rounded-[32px] bg-[#111827]/80 border border-white/5 flex flex-col items-center text-center" spotlightColor="rgba(255,255,255,0.05)">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 flex items-center justify-center border-4 border-[#0A0F1C] shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                 <span className="text-3xl font-bold text-white">{blog.author.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{blog.author}</h3>
              <p className="text-sm text-gray-400 mb-6">Founder & Lead Instructor at Coding With AI. Teaching engineers how to build and scale SaaS products using modern AI tools.</p>
              <div className="w-full h-px bg-white/10 mb-6" />
              <div className="flex items-center gap-4 text-gray-400">
                <a href="#" className="hover:text-cyan-400 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-cyan-400 transition-colors"><Share2 size={20} /></a>
              </div>
            </SpotlightCard>

            {/* Premium CTA Sidebar */}
            <GlareHover
              width="100%"
              height="350px"
              background="transparent"
              borderRadius="32px"
              borderColor="rgba(255,255,255,0.1)"
              glareColor="#06b6d4"
              glareOpacity={0.15}
              glareAngle={-45}
              glareSize={250}
              className="relative overflow-hidden bg-gradient-to-br from-[#0B1426] to-[#0A0F1C] flex flex-col justify-center items-center text-center p-8 group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full pointer-events-none" />
              
              <BookOpen size={32} className="text-cyan-400 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Master AI Coding</h3>
              <p className="text-sm text-gray-400 mb-8 relative z-10">Stop writing every line manually. Join our membership and build real applications 10x faster.</p>
              
              <Link
                href="/memberships"
                className="relative z-10 w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105"
              >
                View Memberships
              </Link>
            </GlareHover>

          </div>
        </div>
      </div>
    </div>
  );
}
