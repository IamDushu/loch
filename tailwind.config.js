/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F2F2F2",
          200: "rgba(255, 255, 255, 0.68)",
        },
        grey: {
          200: "#CACBCC",
          300: "#B0B1B3",
          900: "#19191A",
        },
      },
      fontFamily: {
        inter: ["Inter"],
      },
      backgroundImage: {
        gradient:
          "radial-gradient(92.19% 89.74% at 22.27% 91.27%, rgba(31, 169, 17, 0.81) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0.00) 100%);",
      },
      dropShadow: {
        text: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
