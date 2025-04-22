/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // very important
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#1c1e20",
        foggrey: "#2a2d2e",
        leafgreen: "#22c55e",
        cardwhite: "#f8f9fa",
        lighttext: "#d1d5db",
        darkgreen: "#14532d",
      },
    },
  },
  plugins: [],
};
