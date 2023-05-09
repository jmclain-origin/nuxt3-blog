import type { Config } from "tailwindcss";

export default <Partial<Config>>{
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
      },
    },
  },
};
