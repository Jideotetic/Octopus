import formsPlugin from "@tailwindcss/forms";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arbutus: ["Arbutus", "serif"],
      },
      gridTemplateColumns: {
        rootLayout: "1fr 2fr",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translatex(-100%)",
          },
          "100%": {
            transform: "translatex(100%)",
          },
        },
      },
      animation: {
        slide: "slide 3s linear infinite",
      },
      backgroundImage: {
        octopusBackgroundImage:
          "url('/src/assets/octopus-background-image.jpg')",
        accionBackgroundImage: "url('/src/assets/accion-background-image.jpg')",
      },
    },
  },
  plugins: [formsPlugin],
};
