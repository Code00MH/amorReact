// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        romanticBlack: "#0a0a0a",
        romanticWine: "#7b1e3c",
        romanticWhite: "#f5f5f5",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        parallax: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fade: "fade 1.5s ease-in-out forwards",
        "slide-up": "slideUp 1s ease-out forwards",
        parallax: "parallax 6s ease-in-out infinite alternate",
      },
      boxShadow: {
        romantic: "0 4px 30px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
