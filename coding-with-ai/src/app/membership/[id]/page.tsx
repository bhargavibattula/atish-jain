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
    title: "AI Coding Starter",
    description: "Learn AI coding ecosystem and tools. Includes 15 videos, 3 bonuses, AI tool walkthroughs, and beginner-friendly guidance.",
    milestone: "Build and run first AI-assisted application.",
    cta: "Start Your AI Journey",
    image: "/silver.png",
    gradient: "from-slate-300 via-slate-100 to-slate-400",
    glow: "bg-slate-500/20",
    curriculum: [
      { title: "Intro & Future", desc: "Introduction to AI coding and the future of programming." },
      { title: "AI Tools Overview", desc: "Overview of AI coding tools, including Free vs Paid tools." },
      { title: "Prompt Engineering", desc: "Prompt engineering basics and using ChatGPT for coding." },
      { title: "Core AI Editors", desc: "Cursor AI basics, GitHub Copilot, and Replit AI integration." },
      { title: "Debugging", desc: "Master AI-assisted debugging for faster issue resolution." }
    ],
    outcomes: [
      "Understand the entire AI coding ecosystem.",
      "Master essential tools like Cursor, Copilot, and ChatGPT.",
      "Learn prompt engineering to generate code effortlessly.",
      "Build and run your first AI-assisted application."
    ],
    faqs: [
      { q: "Do I need any prior coding experience?", a: "Not at all. The Silver tier is designed specifically for absolute beginners. We teach you how to use AI to handle the heavy lifting." },
      { q: "How long does it take to complete?", a: "This is designed to be a 3-day sprint. Most students complete the core 15 videos and build their first app within the first weekend." },
      { q: "What exactly will I build?", a: "You will build and run your very first functional AI-assisted application." }
    ]
  },
  gold: {
    id: "gold",
    name: "Gold",
    title: "AI App Builder Pro",
    description: "Build real-world applications using AI. Deep AI tool training, full project building, and frontend/backend guidance.",
    milestone: "Build and deploy 3 real-world AI applications. (e.g. AI chatbot, Portfolio generator, Resume analyzer)",
    cta: "Build Real AI Apps",
    image: "/gold.png",
    gradient: "from-amber-400 via-orange-300 to-amber-600",
    glow: "bg-amber-500/20",
    curriculum: [
      { title: "Workflow & Frontend", desc: "Master the AI app development workflow and frontend generation." },
      { title: "Backend & APIs", desc: "Build backend APIs and implement advanced AI integrations." },
      { title: "Database Basics", desc: "Integrate database basics and set up automation." },
      { title: "Deployment", desc: "Learn advanced debugging and complete deployment." },
      { title: "Project Building", desc: "End-to-end building of complex AI-powered projects." }
    ],
    outcomes: [
      "Ability to architect and build complex full-stack applications.",
      "Mastery over frontend generation and backend APIs.",
      "Deploy 3 real-world AI applications (Chatbot, Portfolio, Resume Analyzer).",
      "Deep understanding of databases and AI integrations."
    ],
    faqs: [
      { q: "Should I take Silver before Gold?", a: "If you have absolutely no coding experience, yes. If you understand basic development concepts, you can jump straight into Gold." },
      { q: "Will we build real projects?", a: "Yes. You will build and deploy 3 real-world AI applications, including an AI chatbot, portfolio generator, and resume analyzer." },
      { q: "Is deployment covered?", a: "Absolutely. You will learn the entire AI project architecture, from backend APIs and databases to full deployment." }
    ]
  },
  diamond: {
    id: "diamond",
    name: "Diamond",
    title: "AI Founder Diamond",
    description: "Monetize apps and AI skills. Includes monetization training, freelancing guidance, and MVP basics.",
    milestone: "Launch one monetizable app OR earn first income using AI skills.",
    cta: "Launch & Monetize",
    image: "/diamond.png",
    gradient: "from-cyan-400 via-blue-400 to-cyan-600",
    glow: "bg-cyan-500/20",
    curriculum: [
      { title: "Freelancing & Services", desc: "Navigate freelancing platforms and learn how to sell AI services." },
      { title: "Startup Mindset & MVP", desc: "Develop a startup mindset and execute rapid MVP development." },
      { title: "App Monetization", desc: "Strategies for monetizing apps and acquiring clients." },
      { title: "Branding & Audience", desc: "Build a personal brand, grow an audience, and position yourself for internships." }
    ],
    outcomes: [
      "Launch a fully functional, monetizable SaaS product or MVP.",
      "Earn your first income using AI skills.",
      "Master client acquisition and personal career branding.",
      "Navigate freelancing platforms effectively to secure high-paying gigs."
    ],
    faqs: [
      { q: "Do you guarantee I will make money?", a: "We provide the exact monetization training, freelancing guidance, and personal branding tools you need. Execution and effort are up to you." },
      { q: "Is startup strategy included?", a: "Yes. Diamond members get comprehensive MVP development and startup mindset training." },
      { q: "Who is this track for?", a: "It's for anyone looking to monetize their AI skills, land elite internships, build an audience, or start their own SaaS business." }
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
