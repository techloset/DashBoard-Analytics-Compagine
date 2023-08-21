/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': ' 0px 27.1px 67.75px #0000000d',
      },
      boxShadow: {
        '2xs': ' 0px 20px 50px #dbe0f880',
      },
      

      fontFamily: { 
        Regular: ["REGULAR"],
        BOLD:["BOLD"]
      },
    },
  },
  plugins: [],
}

