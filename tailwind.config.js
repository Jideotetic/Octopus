/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arbutus: ["Arbutus", "serif"],
      },
      gridTemplateColumns: {
        rootLayout: "365px 1fr",
      },
    },
  },
  plugins: [],
};
