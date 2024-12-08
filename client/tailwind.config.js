/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff00ff",

          secondary: "#00b900",

          accent: "#0000ff",

          neutral: "#2b2b2b",

          "base-100": "#242424",

          info: "#00a1b6",

          success: "#558400",

          warning: "#f94300",

          error: "#ff0033",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
};
