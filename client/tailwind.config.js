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
          primary: "#0530ad",

          secondary: "#FF0000",

          accent: "#00e7e5",

          neutral: "#3c232a",

          "base-100": "#242424",

          info: "#0096ff",

          success: "#00e67c",

          warning: "#f87b00",

          error: "#ff6b88",
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
