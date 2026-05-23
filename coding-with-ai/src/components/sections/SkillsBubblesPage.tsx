"use client";

import SkillsBubbles from "@/components/ui/SkillsBubbles";

const allSkills = [
  // AI Tools
  { label: "ChatGPT", rotation: -6, hoverStyles: { bgColor: "#10a37f", textColor: "#fff" } },
  { label: "Claude 3.5", rotation: 5, hoverStyles: { bgColor: "#d97706", textColor: "#fff" } },
  { label: "Gemini Pro", rotation: -4, hoverStyles: { bgColor: "#4285f4", textColor: "#fff" } },
  { label: "OpenAI API", rotation: 7, hoverStyles: { bgColor: "#10a37f", textColor: "#fff" } },
  // Coding Tools
  { label: "Cursor AI", rotation: -5, hoverStyles: { bgColor: "#3b82f6", textColor: "#fff" } },
  { label: "GitHub Copilot", rotation: 6, hoverStyles: { bgColor: "#6e5494", textColor: "#fff" } },
  { label: "VS Code", rotation: -4, hoverStyles: { bgColor: "#007acc", textColor: "#fff" } },
  { label: "Windsurf", rotation: 7, hoverStyles: { bgColor: "#06b6d4", textColor: "#fff" } },
  // Vibe Coding
  { label: "Bolt.new", rotation: -7, hoverStyles: { bgColor: "#14b8a6", textColor: "#fff" } },
  { label: "v0.dev", rotation: 5, hoverStyles: { bgColor: "#000", textColor: "#fff" } },
  { label: "Replit AI", rotation: -4, hoverStyles: { bgColor: "#f26207", textColor: "#fff" } },
  { label: "Lovable.dev", rotation: 6, hoverStyles: { bgColor: "#ec4899", textColor: "#fff" } },
  // Frontend
  { label: "React.js", rotation: -5, hoverStyles: { bgColor: "#61dafb", textColor: "#111" } },
  { label: "Next.js 15", rotation: 6, hoverStyles: { bgColor: "#000", textColor: "#fff" } },
  { label: "TypeScript", rotation: -4, hoverStyles: { bgColor: "#3178c6", textColor: "#fff" } },
  { label: "Tailwind CSS", rotation: 7, hoverStyles: { bgColor: "#06b6d4", textColor: "#fff" } },
  { label: "Framer Motion", rotation: -6, hoverStyles: { bgColor: "#0055ff", textColor: "#fff" } },
  // More AI
  { label: "Perplexity AI", rotation: 5, hoverStyles: { bgColor: "#20b2aa", textColor: "#fff" } },
  { label: "Midjourney", rotation: -5, hoverStyles: { bgColor: "#1e3a5f", textColor: "#fff" } },
  { label: "DALL·E 3", rotation: 4, hoverStyles: { bgColor: "#412991", textColor: "#fff" } },
  { label: "Whisper AI", rotation: -7, hoverStyles: { bgColor: "#0ea5e9", textColor: "#fff" } },
  { label: "LangChain", rotation: 6, hoverStyles: { bgColor: "#2dd4bf", textColor: "#111" } },
  { label: "Hugging Face", rotation: -3, hoverStyles: { bgColor: "#fbbf24", textColor: "#111" } },
  // Backend
  { label: "Node.js", rotation: -6, hoverStyles: { bgColor: "#5fa04e", textColor: "#fff" } },
  { label: "Python", rotation: 5, hoverStyles: { bgColor: "#3776ab", textColor: "#fff" } },
  { label: "REST APIs", rotation: -4, hoverStyles: { bgColor: "#10b981", textColor: "#fff" } },
  { label: "GraphQL", rotation: 7, hoverStyles: { bgColor: "#e535ab", textColor: "#fff" } },
  { label: "PostgreSQL", rotation: -5, hoverStyles: { bgColor: "#4169e1", textColor: "#fff" } },
  { label: "MongoDB", rotation: 6, hoverStyles: { bgColor: "#47a248", textColor: "#fff" } },
  { label: "Prisma ORM", rotation: -3, hoverStyles: { bgColor: "#2d3748", textColor: "#fff" } },
  { label: "Supabase", rotation: 4, hoverStyles: { bgColor: "#3ecf8e", textColor: "#111" } },
  { label: "Firebase", rotation: -7, hoverStyles: { bgColor: "#ffca28", textColor: "#111" } },
  // More Coding
  { label: "Codeium", rotation: 5, hoverStyles: { bgColor: "#09b6a2", textColor: "#fff" } },
  { label: "Sourcegraph Cody", rotation: -3, hoverStyles: { bgColor: "#a855f7", textColor: "#fff" } },
  { label: "Warp Terminal", rotation: 6, hoverStyles: { bgColor: "#0ea5e9", textColor: "#fff" } },
  { label: "Tabnine", rotation: -4, hoverStyles: { bgColor: "#ca4a1f", textColor: "#fff" } },
  // Vibe Coding continued
  { label: "Tempo Labs", rotation: 7, hoverStyles: { bgColor: "#8b5cf6", textColor: "#fff" } },
  { label: "Create.xyz", rotation: -5, hoverStyles: { bgColor: "#f59e0b", textColor: "#111" } },
  { label: "Framer AI", rotation: 4, hoverStyles: { bgColor: "#0055ff", textColor: "#fff" } },
  { label: "Vercel AI SDK", rotation: -6, hoverStyles: { bgColor: "#111", textColor: "#fff" } },
  { label: "Supabase AI", rotation: 5, hoverStyles: { bgColor: "#3ecf8e", textColor: "#111" } },
  // Frontend continued
  { label: "Zustand", rotation: -3, hoverStyles: { bgColor: "#764abc", textColor: "#fff" } },
  { label: "React Query", rotation: 7, hoverStyles: { bgColor: "#ef4444", textColor: "#fff" } },
  { label: "Shadcn/UI", rotation: -5, hoverStyles: { bgColor: "#18181b", textColor: "#fff" } },
  // DevOps
  { label: "Git & GitHub", rotation: 6, hoverStyles: { bgColor: "#24292f", textColor: "#fff" } },
  { label: "Docker", rotation: -4, hoverStyles: { bgColor: "#2496ed", textColor: "#fff" } },
  { label: "Vercel Deploy", rotation: 5, hoverStyles: { bgColor: "#000", textColor: "#fff" } },
  { label: "CI/CD Pipelines", rotation: -7, hoverStyles: { bgColor: "#2563eb", textColor: "#fff" } },
  { label: "AWS Basics", rotation: 4, hoverStyles: { bgColor: "#ff9900", textColor: "#111" } },
  { label: "Cloudflare", rotation: -3, hoverStyles: { bgColor: "#f38020", textColor: "#fff" } },
  { label: "Linux CLI", rotation: 6, hoverStyles: { bgColor: "#fcc624", textColor: "#111" } },
  { label: "Nginx", rotation: -5, hoverStyles: { bgColor: "#009639", textColor: "#fff" } },
  // AI Engineering
  { label: "Prompt Engineering", rotation: 7, hoverStyles: { bgColor: "#10a37f", textColor: "#fff" } },
  { label: "RAG Systems", rotation: -4, hoverStyles: { bgColor: "#7c3aed", textColor: "#fff" } },
  { label: "Vector Databases", rotation: 5, hoverStyles: { bgColor: "#0ea5e9", textColor: "#fff" } },
  { label: "AI Agents", rotation: -6, hoverStyles: { bgColor: "#f43f5e", textColor: "#fff" } },
  { label: "Fine-Tuning", rotation: 4, hoverStyles: { bgColor: "#a855f7", textColor: "#fff" } },
  { label: "Embeddings", rotation: -3, hoverStyles: { bgColor: "#06b6d4", textColor: "#fff" } },
  { label: "Chatbot Design", rotation: 7, hoverStyles: { bgColor: "#ec4899", textColor: "#fff" } },
  { label: "AI Workflows", rotation: -5, hoverStyles: { bgColor: "#f59e0b", textColor: "#111" } },
  { label: "Redis", rotation: 6, hoverStyles: { bgColor: "#dc382d", textColor: "#fff" } },
];

export default function SkillsBubblesPage() {
  return (
    <section className="py-24 relative bg-[#080C14] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-1/4 -right-40 w-[700px] h-[700px] bg-purple-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold tracking-wide uppercase mb-6">
            Full Curriculum
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Everything you&apos;ll{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              master.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From AI-native tools to production-grade engineering — the complete stack you&apos;ll command.
          </p>
        </div>

        {/* Single flat bubble cloud */}
        <SkillsBubbles
          items={allSkills}
          pillBg="#111827"
          pillColor="#e5e7eb"
        />
      </div>
    </section>
  );
}
