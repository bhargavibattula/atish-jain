import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        secondary: "#111827",
        brand: {
          blue: "#3B82F6",
          purple: "#8B5CF6",
          cyan: "#06B6D4",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#9CA3AF",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "typing": "typing 3s steps(30) infinite",
        "border-glow": "border-glow 2s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(59, 130, 246, 0.5)" },
          "50%": { borderColor: "rgba(139, 92, 246, 0.8)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
