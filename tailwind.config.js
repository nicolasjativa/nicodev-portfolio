/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B066FF",
          light: "#C68CFF",
          dark: "#843CEB",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        lexend: ['var(--font-lexend)', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
