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
    default: "Coding With AI — Build Real-World Apps Using AI",
    template: "%s | Coding With AI",
  },
  description:
    "Learn AI-assisted coding and build real-world applications even with little coding knowledge. Master tools like ChatGPT, Cursor AI, and GitHub Copilot to accelerate your career.",
  keywords: [
    "AI coding",
    "learn coding with AI",
    "ChatGPT coding",
    "Cursor AI",
    "GitHub Copilot",
    "AI programming",
    "coding bootcamp India",
    "build apps with AI",
    "future-proof career"
  ],
  authors: [{ name: "Atish Jain" }],
  creator: "Coding With AI",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://codingwithai.in",
    siteName: "Coding With AI",
    title: "Coding With AI — Build Apps Using AI",
    description:
      "Learn AI-assisted coding and build real-world apps even with little coding knowledge.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Coding With AI Banner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coding With AI",
    description: "Build real apps using AI tools. Learn AI coding from experts.",
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
  "description": "Helping high school & engineering students build real-world applications using AI.",
  "sameAs": [
    "https://www.facebook.com/share/18nvUvNp8m/",
    "https://www.instagram.com/ah_career_rajahmundry",
    "https://www.linkedin.com/company/ahcareer/"
  ],
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
