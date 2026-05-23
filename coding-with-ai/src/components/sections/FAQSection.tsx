"use client";

import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need prior coding knowledge?",
    a: "Absolutely not! Coding With AI is designed for complete beginners. We start from zero and use AI tools to make coding intuitive and fast. Many of our students built their first app with no prior programming experience.",
  },
  {
    q: "Is AI replacing programmers?",
    a: "No — AI is replacing programmers who don't use AI. Developers who leverage AI tools like Cursor AI, GitHub Copilot, and ChatGPT are 10x more productive. We teach you to be that developer. This is the most future-proof skill you can learn.",
  },
  {
    q: "Which AI tools will I learn?",
    a: "You'll get hands-on training with ChatGPT for coding & debugging, Cursor AI for AI-assisted development, GitHub Copilot for autocomplete, Replit AI for browser coding, Claude for reasoning, and Bolt.new for full-stack generation.",
  },
  {
    q: "Is this suitable for high school students?",
    a: "Yes! Our Silver membership is specifically designed for high school students aged 15+. We use simple language, visual explanations, and step-by-step guidance so anyone can follow along.",
  },
  {
    q: "Will I build real apps that work?",
    a: "100% yes. You won't be building toy examples. You'll deploy real, functioning apps — an AI chatbot, a resume analyzer, a portfolio generator — all publicly accessible and ready to show employers or clients.",
  },
  {
    q: "Can I monetize the apps I build?",
    a: "Diamond members get dedicated guidance on freelancing, SaaS fundamentals, and finding their first clients. Many Diamond students have earned their first ₹10k–₹40k within 60 days of completing the program.",
  },
  {
    q: "What support do I get?",
    a: "All members get access to our WhatsApp & Telegram community, weekly live Q&A sessions, and peer code reviews. Gold and Diamond members get priority support and Diamond includes a 1-on-1 session with Atish sir.",
  },
  {
    q: "Is there a refund policy?",
    a: "We offer a 7-day money-back guarantee if you've watched less than 20% of the content and feel the program isn't right for you. We're confident in our quality and want you to feel safe investing.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#080C14]">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <FaQuestionCircle /> Got Questions?
          </span>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-white mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        {/* Shadcn Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#111827] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/5">
                <AccordionTrigger className="text-white hover:text-blue-400 text-base md:text-lg text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-sm md:text-base leading-relaxed pt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
