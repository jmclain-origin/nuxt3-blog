import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e5d6fa",
          200: "#ccadf6",
          300: "#b283f1",
          400: "#995aed",
          500: "#7f31e8",
          600: "#6627ba",
          700: "#4c1d8b",
          800: "#33145d",
          900: "#190a2e",
        },
        secondary: {
          100: "#daffd4",
          200: "#b5ffa9",
          300: "#90ff7e",
          400: "#6bff53",
          500: "#46ff28",
          600: "#38cc20",
          700: "#2a9918",
          800: "#1c6610",
          900: "#0e3308",
        },
        accent: {
          100: "#f8f9e5",
          200: "#f2f3cb",
          300: "#ebeeb2",
          400: "#e5e898",
          500: "#dee27e",
          600: "#b2b565",
          700: "#85884c",
          800: "#595a32",
          900: "#2c2d19",
        },
        backgroundImage: {
          "hero-img": "url(/assets/images/pexels-63703.jpg)",
        },
      },
    },
  },
};
