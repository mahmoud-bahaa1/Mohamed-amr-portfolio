export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#4d4d4d",
        "primary-light": "#999",
      },
      animation: {
        "gradient-spin": "gradient-spin 4s linear infinite",
        "gradient-fade": "gradient-fade 24s ease-in-out infinite",
      },
      keyframes: {
        "gradient-spin": {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        "gradient-fade": {
          "0%, 100%": { opacity: "0" },
          "20%, 80%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
