import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Toaster } from "react-hot-toast";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import FloatingCall from "@/components/ui/FloatingCall";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800", "900"], 
  variable: "--font-poppins",
  display: "swap" 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codingwithai.in"),
  title: {
    default: "Coding With AI — Learn Code With AI from Atish Jain",
    template: "%s | Coding With AI by Atish Jain",
  },
  description:
    "Learn to Code with AI! Master AI-assisted coding and build real-world applications under the guidance of Atish Jain (20+ years of tech experience). Course covers Cursor AI, ChatGPT, and GitHub Copilot.",
  keywords: [
    "Atish Jain",
    "Atish Jain coding",
    "Atish Jain AI coding",
    "Atish Jain code with AI",
    "Atish Jain coding with AI",
    "Atish Jain mentor",
    "Atish Jain software engineer",
    "Atish Jain AH Career",
    "AH Career Atish Jain",
    "Code with AI",
    "Coding with AI",
    "learn code with AI",
    "how to code with AI",
    "AI-assisted coding course",
    "AI programming training",
    "Cursor AI coding course",
    "ChatGPT developer training",
    "GitHub Copilot bootcamp",
    "build apps with AI",
    "learn Next.js and React with AI",
    "AI developer bootcamps in India",
    "AI SaaS builder course",
    "artificial intelligence coding tutorial",
    "prompt engineering for developers",
    "future of software development with AI",
    "Cursor AI editor tutorial",
    "v0.dev React UI generator",
    "Bolt.new full-stack development",
    "Claude 3.5 Sonnet coding mentor",
    "build SaaS from scratch with AI",
    "prompt engineering for software engineers",
    "best coding classes with AI in Andhra Pradesh",
    "AI software developer transition",
    "AI tools for web development course"
  ],
  authors: [{ name: "Atish Jain", url: "https://www.linkedin.com/in/atish-jain" }],
  creator: "Atish Jain",
  publisher: "Coding With AI",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://codingwithai.in",
    siteName: "Coding With AI",
    title: "Coding With AI — Build Apps Using AI with Atish Jain",
    description:
      "Learn to Code with AI and build real-world software applications from scratch under the mentorship of veteran software developer Atish Jain.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Coding With AI by Atish Jain Banner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coding With AI — Code with AI by Atish Jain",
    description: "Learn to build real-world apps using ChatGPT, Cursor, and Copilot with veteran mentor Atish Jain.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Coding With AI",
  "url": "https://codingwithai.in",
  "logo": "https://codingwithai.in/logo.png",
  "description": "Helping students, software engineers, and developers learn how to code with AI and build real-world applications using tools like ChatGPT, Cursor AI, and GitHub Copilot under mentor Atish Jain.",
  "sameAs": [
    "https://www.facebook.com/share/18nvUvNp8m/",
    "https://www.instagram.com/ah_career_rajahmundry",
    "https://www.linkedin.com/company/ahcareer/",
    "https://www.linkedin.com/in/atish-jain"
  ],
  "founder": {
    "@type": "Person",
    "name": "Atish Jain",
    "jobTitle": "Founder & Mentor",
    "url": "https://www.linkedin.com/in/atish-jain",
    "sameAs": [
      "https://www.linkedin.com/in/atish-jain"
    ]
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9989241515",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": "English"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="bg-background text-white antialiased font-inter">
        <Providers>
          {children}
          <FloatingWhatsApp />
          <FloatingCall />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#111827",
                color: "#fff",
                border: "1px solid rgba(59,130,246,0.3)",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
