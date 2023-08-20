/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '1px 2.1px 26.75px ',
      },

      fontFamily: { 
        Regular: ["REGULAR"],
        BOLD:["BOLD"]
      },
    },
  },
  plugins: [],
}

