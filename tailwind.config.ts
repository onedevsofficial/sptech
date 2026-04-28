import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        bg: "#F7F8FC",
        ink: {
          DEFAULT: "#0A0E1F",
          soft: "#1A1F35",
        },
        muted: "#535B70",
        line: "#E4E7EE",
        // Deep navy for dark sections; pairs with the logo's blue mark.
        brand: {
          DEFAULT: "#0A1A4A",
          50: "#EEF2FF",
          100: "#D8E1FF",
          600: "#1747D6",
          700: "#1240B8",
          900: "#06112E",
        },
        // The vibrant electric blue from the SP TECH logo. Used for CTAs.
        accent: {
          DEFAULT: "#1E5BFF",
          hover: "#1747D6",
          soft: "#E8EEFF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tightest: "-0.03em",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(10,26,74,0.04), 0 8px 24px -12px rgba(10,26,74,0.14)",
        cta: "0 10px 24px -10px rgba(30,91,255,0.55)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(.2,.7,.2,1) both",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
