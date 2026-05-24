import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, BookOpen, HelpCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SplitText from "@/components/ui/SplitText";
import TiltedCard from "@/components/ui/TiltedCard";
import Image from "next/image";

// Define the membership data
const membershipData = {
  silver: {
    id: "silver",
    name: "Silver",
    title: "Learn AI Tools",
    description: "Understand AI coding ecosystem and build your first AI-assisted app.",
    milestone: "First AI-powered app created.",
    cta: "Start Your Journey",
    image: "/silver.png",
    gradient: "from-slate-300 via-slate-100 to-slate-400",
    glow: "bg-slate-500/20",
    curriculum: [
      { title: "The AI Ecosystem", desc: "Understand LLMs, Prompt Engineering, and the landscape of AI tools." },
      { title: "Cursor & Copilot", desc: "Master the premier AI code editors to write code 10x faster." },
      { title: "UI Generation", desc: "Learn to use v0 and Claude to generate stunning frontend components." },
      { title: "Your First App", desc: "Tie it all together to build and deploy a functional web application." }
    ],
    outcomes: [
      "Complete understanding of the modern AI developer workflow.",
      "Ability to generate and modify code without memorizing syntax.",
      "Confidence to build basic web applications from scratch.",
      "A live, deployed application to show off to friends and recruiters."
    ],
    faqs: [
      { q: "Do I need any prior coding experience?", a: "Not at all. The Silver tier is designed specifically for absolute beginners. We teach you how to use AI to handle the heavy lifting." },
      { q: "How long does it take to complete?", a: "Most students complete the core curriculum and their first app within 2 to 4 weeks, depending on their pace." },
      { q: "What exactly will I build?", a: "You will build a functional, responsive web application (like a personal portfolio or a simple utility tool) and deploy it live to the internet." }
    ]
  },
  gold: {
    id: "gold",
    name: "Gold",
    title: "Build Real AI Apps",
    description: "Learn to build and deploy complex, full-stack AI-powered applications.",
    milestone: "3 real-world apps deployed.",
    cta: "Become App Builder",
    image: "/gold.png",
    gradient: "from-amber-400 via-orange-300 to-amber-600",
    glow: "bg-amber-500/20",
    curriculum: [
      { title: "Full-Stack Architecture", desc: "Master Next.js, database integration (MongoDB/PostgreSQL), and API routes." },
      { title: "AI Integration (RAG)", desc: "Learn Retrieval-Augmented Generation to make AI talk to your custom data." },
      { title: "Vector Databases", desc: "Implement Pinecone/ChromaDB for semantic search and memory." },
      { title: "Enterprise Deployment", desc: "Secure, scale, and deploy robust applications to production environments." }
    ],
    outcomes: [
      "Ability to architect and build complex SaaS applications.",
      "Mastery over integrating OpenAI APIs and custom AI models.",
      "A strong portfolio featuring 3 enterprise-grade applications.",
      "Deep understanding of databases, authentication, and security."
    ],
    faqs: [
      { q: "Should I take Silver before Gold?", a: "If you have absolutely no coding experience, yes. If you understand basic HTML/JS, you can jump straight into Gold." },
      { q: "Will we use real databases?", a: "Yes. You will learn to architect real schemas using modern databases like MongoDB and PostgreSQL." },
      { q: "What kind of apps will I build?", a: "You will build complex systems like AI-powered CRM dashboards, chat applications with PDF knowledge bases, and more." }
    ]
  },
  diamond: {
    id: "diamond",
    name: "Diamond",
    title: "Launch & Monetize",
    description: "Learn freelancing, monetization, and AI startup skills to launch your career.",
    milestone: "Launch monetizable app or earn first income.",
    cta: "Become AI Founder",
    image: "/diamond.png",
    gradient: "from-cyan-400 via-blue-400 to-cyan-600",
    glow: "bg-cyan-500/20",
    curriculum: [
      { title: "Product Strategy & Validation", desc: "How to find profitable SaaS ideas and validate them quickly." },
      { title: "Payments & Monetization", desc: "Integrate Stripe to accept subscriptions and one-time payments." },
      { title: "Freelancing Blueprint", desc: "Strategies to acquire high-paying clients on Upwork and LinkedIn." },
      { title: "Scaling & Leadership", desc: "Architecting for scale and managing technical debt as a solo founder." }
    ],
    outcomes: [
      "A fully functional, monetizable SaaS product ready for users.",
      "The exact blueprint to secure your first freelance clients.",
      "Mastery of the business side of software engineering.",
      "Direct access to our founder network and priority job board placements."
    ],
    faqs: [
      { q: "Do you guarantee I will make money?", a: "We provide the exact blueprints, skills, and tools that we and our successful students have used. Execution and effort are up to you." },
      { q: "Is 1-on-1 mentorship included?", a: "Yes. Diamond members get exclusive, direct access to the founders for technical and strategic guidance." },
      { q: "How long does the Diamond track take?", a: "This is a continuous journey. While the core modules take 4-6 weeks, the mentorship and community support are ongoing as you build your business." }
    ]
  }
};

export default async function MembershipLandingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const plan = membershipData[id as keyof typeof membershipData];

  if (!plan) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Absolute Background Patterns */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0 pointer-events-none" />
      <div className={`absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] blur-[150px] rounded-full pointer-events-none z-0 opacity-40 ${plan.glow}`} />

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Hero Text */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md">
              <Target size={14} className={plan.id === 'silver' ? 'text-slate-300' : plan.id === 'gold' ? 'text-amber-400' : 'text-cyan-400'} />
              <span className={`text-sm font-semibold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r ${plan.gradient}`}>
                {plan.name} Track
              </span>
            </div>
            
            <div className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              <SplitText text={plan.title} tag="h1" delay={40} duration={1.2} />
            </div>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              {plan.description}
            </p>

            <Link
              href={`/claim/${plan.id}`}
              className={`group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] hover:-translate-y-1 hover:shadow-2xl overflow-hidden ${
                plan.id === 'gold' 
                  ? 'bg-gradient-to-b from-amber-400 to-orange-600 text-white shadow-amber-500/50 hover:shadow-amber-500/60'
                  : plan.id === 'diamond'
                  ? 'bg-gradient-to-b from-cyan-400 to-blue-600 text-white shadow-cyan-500/50 hover:shadow-cyan-500/60'
                  : 'bg-gradient-to-b from-slate-200 to-slate-400 text-slate-900 shadow-slate-400/50 hover:shadow-slate-400/60'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {plan.cta} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
          </div>

          {/* Hero Image (TiltedCard) */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] aspect-square rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
               <TiltedCard
                  rotateXRange={12}
                  rotateYRange={12}
                  scaleOnHover={1.05}
                  className="w-full h-full rounded-[32px] overflow-hidden"
               >
                 <div className="relative w-full h-full">
                   <Image
                     src={plan.image}
                     alt={`${plan.name} visuals`}
                     fill
                     className="object-cover"
                     priority
                     sizes="(max-width: 1024px) 100vw, 500px"
                   />
                 </div>
               </TiltedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Bar */}
      <section className="relative z-10 py-10 mt-8 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <CheckCircle2 size={32} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Target Milestone</p>
              <h3 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                {plan.milestone}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Curriculum & Outcomes */}
      <section className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What you will learn</h2>
          <p className="text-gray-400 max-w-2xl text-lg">Master the skills required to dominate the AI ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Curriculum Items */}
          {plan.curriculum.map((item, idx) => (
            <SpotlightCard key={`curr-${idx}`} className="p-8 rounded-3xl bg-[#111827]/60 border border-white/5 flex flex-col h-full" spotlightColor="rgba(255,255,255,0.05)">
              <div className="flex items-center justify-between mb-6">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <BookOpen size={20} className="text-blue-400" />
                </div>
                <span className="text-xs font-bold tracking-widest text-gray-500">MODULE 0{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm flex-1">{item.desc}</p>
            </SpotlightCard>
          ))}
          
          {/* Outcomes Bento (Spans 2 columns if space permits) */}
          <SpotlightCard className="p-8 rounded-3xl bg-[#111827]/60 border border-white/5 flex flex-col lg:col-span-2" spotlightColor="rgba(255,255,255,0.05)">
             <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <Target size={20} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Key Outcomes</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plan.outcomes.map((outcome, idx) => (
                  <div key={`out-${idx}`} className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">{outcome}</span>
                  </div>
                ))}
             </div>
          </SpotlightCard>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 bg-white/[0.01] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Everything you need to know about the {plan.name} track.</p>
          </div>
          <div className="space-y-4">
            {plan.faqs.map((faq, idx) => (
              <SpotlightCard key={`faq-${idx}`} className="p-6 md:p-8 rounded-3xl bg-[#111827]/80 border border-white/5" spotlightColor="rgba(255,255,255,0.03)">
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{faq.a}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 py-32 text-center border-t border-white/5 overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] blur-[150px] rounded-full pointer-events-none opacity-20 ${plan.glow}`} />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to elevate your skills?</h2>
          <p className="text-xl text-gray-400 mb-10">Start your {plan.name} journey today.</p>
          <Link
              href={`/claim/${plan.id}`}
              className={`group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] hover:-translate-y-1 hover:shadow-2xl overflow-hidden ${
                plan.id === 'gold' 
                  ? 'bg-gradient-to-b from-amber-400 to-orange-600 text-white shadow-amber-500/50 hover:shadow-amber-500/60'
                  : plan.id === 'diamond'
                  ? 'bg-gradient-to-b from-cyan-400 to-blue-600 text-white shadow-cyan-500/50 hover:shadow-cyan-500/60'
                  : 'bg-gradient-to-b from-slate-200 to-slate-400 text-slate-900 shadow-slate-400/50 hover:shadow-slate-400/60'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {plan.cta} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
        </div>
      </section>
    </div>
  );
}
