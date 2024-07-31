/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-glow": "0px 0px 50px red, -0px -0px 50px blue",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
