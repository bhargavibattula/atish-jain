export const blogsData = [
  {
    id: "ai-coding-tutorial-cursor",
    title: "How to Build a Full-Stack App in 10 Minutes with Cursor",
    excerpt: "A step-by-step AI coding tutorial to take you from a blank canvas to a deployed application using AI-first code editors.",
    content: `
### The Power of AI Coding
If you are still writing every line of code manually, you are wasting time. With AI editors like Cursor, you act as the architect while the AI acts as the builder.

#### Step 1: Initialize the Project
Simply press \`Ctrl+I\` and prompt: *"Create a Next.js 15 application with Tailwind CSS and Framer Motion."* The AI will generate the boilerplate, configure the \`tailwind.config.ts\`, and set up the layout.

#### Step 2: Generate the UI
Instead of manually typing out div classes, prompt the AI: *"Build a dark-mode hero section with a glowing gradient background and a glassmorphic Call to Action button."* 

#### Step 3: Add the Database
Use Cursor's Composer to integrate Supabase. Prompt: *"Add Supabase authentication and create a schema for user profiles."* It will create the necessary API routes and SQL migrations.

**The result?** What used to take a weekend now takes a coffee break.
    `,
    author: "Atish Jain",
    date: "May 25, 2026",
    category: "AI Coding Tutorials",
    image: "/blogs/blog_cursor_app.png",
    readTime: "5 min read",
  },
  {
    id: "top-5-ai-tools",
    title: "Top 5 AI Tools Every Developer Needs in 2026",
    excerpt: "Discover the ultimate stack of AI tools that will 10x your productivity and streamline your engineering workflow.",
    content: `
The AI ecosystem is moving incredibly fast. Here are the 5 tools you absolutely must have in your toolkit this year:

### 1. Cursor (The Editor)
The undeniable king of AI-first IDEs. It understands your entire codebase and can generate complex, multi-file features.

### 2. v0 by Vercel (UI Generation)
Simply describe the UI you want in plain English, and v0 generates production-ready React components using Tailwind CSS. It is the ultimate cure for CSS headaches.

### 3. Claude 3.5 Sonnet (The Brain)
While GPT-4 is great, Claude 3.5 Sonnet has proven to be the superior model for coding. Its large context window allows you to dump entire documentation pages into it.

### 4. Perplexity AI (Research)
Stop using Google to search for coding bugs. Perplexity searches the web, reads StackOverflow threads, and gives you the exact synthesized answer with citations.

### 5. GitHub Copilot Workspace
For managing pull requests and exploring large legacy codebases, Copilot Workspace acts as an AI pair programmer that sits directly in your repository.
    `,
    author: "Atish Jain",
    date: "May 22, 2026",
    category: "AI Tools",
    image: "/blogs/blog_ai_tools.png",
    readTime: "4 min read",
  },
  {
    id: "survive-ai-takeover",
    title: "How to Future-Proof Your Tech Career Against AI",
    excerpt: "Will AI replace software engineers? Here is the career guidance you need to adapt and thrive in the new economy.",
    content: `
The fear is real: "Will AI replace my job?" The short answer is no. The long answer is: *an engineer using AI will replace an engineer who doesn't.*

### Stop Memorizing Syntax
The value of a software engineer is no longer in remembering how to center a div or write a complex SQL join. The AI knows the syntax better than you do. 

### Focus on Systems Architecture
Your job is now to design systems. How does the frontend communicate with the backend? How do you scale the database? How do you handle security? These are the high-level architectural decisions that AI cannot make for you.

### Develop Domain Expertise
Become an expert in a specific industry (Healthcare, Finance, Real Estate). AI doesn't understand business context or regulatory compliance. If you understand the business problem deeply, you can use AI to build the solution faster than anyone else.
    `,
    author: "Atish Jain",
    date: "May 18, 2026",
    category: "Career Guidance",
    image: "/blogs/blog_career_future.png",
    readTime: "6 min read",
  },
  {
    id: "build-pdf-chat-app",
    title: "Project: Build a 'Chat with PDF' SaaS Application",
    excerpt: "A complete walkthrough of an impressive coding project to add to your portfolio.",
    content: `
If you want to get hired, you need to build things that matter. "To-Do List" apps don't cut it anymore. Today, we are building a SaaS app that lets users upload PDFs and chat with them using RAG (Retrieval-Augmented Generation).

### The Tech Stack
- **Frontend:** Next.js
- **Vector Database:** Pinecone
- **LLM:** OpenAI API
- **File Storage:** AWS S3

### Step 1: Parsing the PDF
When a user uploads a PDF, we use a library like \`pdf-parse\` to extract the text.

### Step 2: Creating Embeddings
We split the extracted text into chunks of 500 words, and send them to OpenAI's \`text-embedding-3-small\` model. We then store these vectors in Pinecone.

### Step 3: The Chat Interface
When the user asks a question, we embed their question, query Pinecone for the most relevant PDF chunks, and send those chunks to GPT-4 as context.

This project proves you understand Full-Stack architecture and AI integrations.
    `,
    author: "Atish Jain",
    date: "May 15, 2026",
    category: "Coding Projects",
    image: "/blogs/blog_pdf_chat.png",
    readTime: "7 min read",
  },
  {
    id: "crack-ai-interviews",
    title: "How to Crack Technical Placements in the AI Era",
    excerpt: "Placement preparation has changed. Here is what FAANG and top startups are looking for right now.",
    content: `
Technical interviews have evolved. While LeetCode is still relevant for some massive corporations, modern tech startups care about something else: **Can you ship?**

### The Take-Home Project
Companies are increasingly giving candidates take-home projects and allowing them to use AI tools like Cursor or Copilot. Why? Because they want to see how fast you can deliver a working product when fully equipped.

### What You Need to Master
1. **API Integrations:** You must know how to quickly read documentation and integrate third-party APIs (Stripe, Twilio, OpenAI).
2. **Database Modeling:** You must be able to design a clean relational database schema.
3. **Debugging:** AI writes code fast, but it also writes bugs fast. Your ability to read AI-generated code and spot security flaws or performance bottlenecks is your most valuable interview skill.

### The Behavioral Round
Be prepared to explain *why* you chose a specific architecture. "Because the AI suggested it" is an instant rejection. You must own the architectural decisions.
    `,
    author: "Atish Jain",
    date: "May 10, 2026",
    category: "Placement Preparation",
    image: "/blogs/blog_placements.png",
    readTime: "5 min read",
  },
  {
    id: "ai-news-simplified",
    title: "AI News Simplified: What Happened This Month?",
    excerpt: "We cut through the hype to bring you the simplified AI news that actually matters to developers.",
    content: `
The AI industry releases new models and tools every week. It's impossible to keep up. Here is a simplified breakdown of what actually matters to you as an engineer.

### 1. Context Windows are Exploding
We now have models that can process millions of tokens at once. This means you no longer need complex chunking strategies for medium-sized codebases. You can literally drag and drop your entire repository into the prompt.

### 2. Open Source is Catching Up
Llama 3 and Mistral are reaching performance levels comparable to proprietary models. For developers, this means you can run powerful AI models locally on your MacBook without paying API fees or worrying about data privacy.

### 3. Agentic Workflows
We are moving from "AI as an autocomplete" to "AI as an agent". Soon, you won't just ask the AI to write a function; you will give it a Jira ticket and it will read the code, write the tests, implement the feature, and open the Pull Request entirely on its own.
    `,
    author: "Atish Jain",
    date: "May 05, 2026",
    category: "AI News Simplified",
    image: "/blogs/blog_ai_news.png",
    readTime: "3 min read",
  }
];
