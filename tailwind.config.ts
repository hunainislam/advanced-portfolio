import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": { max: "1200px" }, // Custom screen for max-width: 1200px
        "2xl": { max: "992px" }, // Custom screen for max-width: 992px
        "max-810": { max: "810px" }, // Custom screen for max-width: 810px
        "max-768": { max: "768px" }, // Custom screen for max-width: 768px
        "max-600": { max: "600px" }, // Custom screen for max-width: 600px
        "max-450": { max: "450px" }, // Custom screen for max-width: 450px
        "max-400": { max: "400px" }, // Custom screen for max-width: 400px
      },
      keyframes: {
        "show-header": {
          // "0%": { visibility: "hidden", opacity: "0" },
          "100%": { visibility: "visible", opacity: "1" },
        },
        "show-bars": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "hide-bars": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        "show-content": {
          "100%": {
            visibility: "visible",
            opacity: "1",
            overflow: "auto",
          },
        },
        "display-text": {
          "25%, 100%": {
            display: "none",
          },
        },
        "fill-text": {
          "10%, 100%": { width: "0" },
          "70%, 90%": { width: "100%" },
        },
      },
      animation: {
        "show-header": "show-header 1.5s linear forwords",
        "hide-bars": "hide-bars .5s ease-in-out both;",
        "show-bars": "show-bars .5s ease-in-out both",
        "show-content": "show-content 1.5s linear forwards;",
        "display-text": "display-text 16s linear infinite",
        "fill-text": "fill-text 4s linear infinite",
      },
      fontSize: {
        "responsive-lg": "clamp(3.5rem, 10vw, 5.5rem)",
      },
      height: {
        inherit: "inherit",
      },
      colors: {
        bgcolor: "#1f242d",
        secondbgcolor: "#323946",
        maincolor: "#7cf03d",
        whitecolor: "#fff",
        disabledcolor: "#fff3",
      },
    },
  },
  plugins: [
    function (pluginApi: any) {
      const { addUtilities } = pluginApi as {
        addUtilities: (
          utilities: Record<string, Record<string, string>>
        ) => void;
      };

      addUtilities({
        ".animation-delay": {
          animationDelay: "calc(.1s * var(--i))",
        },
        ".animation-thin": {
          "-webkit-text-stroke": "0.07rem text-maincolor",
        },
        ".animation-delay-dynamic": {
          "animation-delay": "calc(-4s * var(--i))",
        },
        ".animation-section": {
          "animation-delay": "1.6s",
        },
      });
    },
  ],
};
export default config;
