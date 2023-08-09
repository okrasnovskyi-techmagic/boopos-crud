/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-slate": "#F8FAFC",
      "primary-btn": "#334155",
      "primary-white": "#F1F5F9",
      white: "#fff",
      "primary-desc": "#64748B",
      "primary-number": "#475569",
      "primary-info": "#F0F9FF",
      "primary-warning": "#FEFCE8",
      "primary-info-text": "#0C4A6E",
      "primary-warning-text": "#713F12",
    },
    extend: {
      screens: {
        lg: "1090px",
      },
    },
  },
  plugins: [],
};
