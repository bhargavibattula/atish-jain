import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "Coding With AI — Build Apps Using AI",
    template: "%s | Coding With AI",
  },
  description:
    "Helping high school & engineering students build real-world applications using AI — even with little coding knowledge. Learn ChatGPT, Cursor AI, GitHub Copilot, and more.",
  keywords: [
    "AI coding",
    "learn coding with AI",
    "ChatGPT coding",
    "Cursor AI",
    "GitHub Copilot",
    "AI programming",
    "coding bootcamp India",
    "build apps with AI",
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
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coding With AI",
    description: "Build real apps using AI tools.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0F19",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-white antialiased">
        <Providers>
          {children}
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
