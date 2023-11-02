/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F2F2F2",
          200: "rgba(255, 255, 255, 0.68)",
          500: "#1D2129",
        },
        grey: {
          50: "rgba(229, 229, 230, 0.50)",
          200: "#CACBCC",
          300: "#B0B1B3",
          400: "#96979A",
          900: "#19191A",
        },
      },
      fontFamily: {
        inter: ["Inter"],
      },
      backgroundImage: {
        gradient:
          "radial-gradient(92.19% 89.74% at 22.27% 91.27%, rgba(31, 169, 17, 0.81) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0.00) 100%);",
        linear:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 100%);",
        cardlinear:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 27.5%, rgba(22, 93, 255, 0.16) 157.71%, #FFF);",
      },
      dropShadow: {
        text: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        card: "0px 0.7px 0.7px 0px rgba(0, 0, 0, 0.04), 0px 2.8px 7px 0px rgba(0, 0, 0, 0.04);",
      },
    },
  },
  plugins: [],
};
