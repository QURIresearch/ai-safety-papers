module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        denim: {
          50: "#f5fafd",
          100: "#e3f7fc",
          200: "#bceaf9",
          300: "#8ed7f8",
          400: "#50b2f6",
          500: "#2488f4",
          600: "#1964eb",
          700: "#194ecd",
          800: "#163c99",
          900: "#133075",
        },
        royalblue: {
          50: "#f5f9fc",
          100: "#e9f2fc",
          200: "#ceddfa",
          300: "#b0c2fa",
          400: "#8995fa",
          500: "#6067f9",
          600: "#4646f5",
          700: "#3937e1",
          800: "#2d2cb4",
          900: "#24258e",
        },
        flamingo: {
          50: "#f6f7fb",
          100: "#f0ecfa",
          200: "#e2d0f8",
          300: "#d3b1f7",
          400: "#c682f6",
          500: "#b656f5",
          600: "#9837ee",
          700: "#732cd7",
          800: "#5625aa",
          900: "#442085",
        },
        cerise: {
          50: "#fcf9f9",
          100: "#fceff5",
          200: "#fad1eb",
          300: "#f9a9db",
          400: "#f970bf",
          500: "#fa459f",
          600: "#f22978",
          700: "#d2205e",
          800: "#a21a46",
          900: "#7e1637",
        },
        sunset: {
          50: "#fcf9f8",
          100: "#fcf0f0",
          200: "#fad7de",
          300: "#f9b4c1",
          400: "#f97e90",
          500: "#f95262",
          600: "#f03341",
          700: "#cf2638",
          800: "#a11f30",
          900: "#7d1a28",
        },
        mango: {
          50: "#fbf8f3",
          100: "#fcf0e3",
          200: "#f9dec1",
          300: "#f7c18c",
          400: "#f5954b",
          500: "#f46b25",
          600: "#e94718",
          700: "#c5351b",
          800: "#9b2a1e",
          900: "#7b231c",
        },
        carrot: {
          50: "#fbf8f2",
          100: "#fbf3dc",
          200: "#f7e7ad",
          300: "#f2d16c",
          400: "#ecac2d",
          500: "#e68612",
          600: "#d0610b",
          700: "#a6480f",
          800: "#7e3814",
          900: "#622d14",
        },
        orange: {
          50: "#fbfaf4",
          100: "#faf6e0",
          200: "#f5ecae",
          300: "#eed96c",
          400: "#e1b82b",
          500: "#d29410",
          600: "#b26e0a",
          700: "#87530d",
          800: "#633f11",
          900: "#4c3112",
        },
        green: {
          50: "#f7faf8",
          100: "#f1f8ef",
          200: "#def0d6",
          300: "#c1e2b3",
          400: "#84c879",
          500: "#4ba946",
          600: "#34872d",
          700: "#2f692a",
          800: "#284f28",
          900: "#203e23",
        },
        cerulean: {
          50: "#f2f9fb",
          100: "#dff7f9",
          200: "#b8edf2",
          300: "#85deec",
          400: "#40c2e4",
          500: "#1a9fd8",
          600: "#147dc1",
          700: "#1462af",
          800: "#174c73",
          900: "#153d59",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
