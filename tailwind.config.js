/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-estedad)", ...fontFamily.sans],
      },
      color:{
        greenPrimary: "#417F56",
        natural: "#717171",
        greenThin: "#E5F2E9",
        white:"#FFFFFF",
        black:"#000000"
      }
    },
  },
  plugins: [require("@tailwindcss/forms")(
    {strategy:"class",}
  )],
}
