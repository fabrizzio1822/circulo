/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}", // Para archivos en la raíz
  ],
  theme: {
    extend: {
      colors:{
        turquesa: "#0784B2",
        lila: "#62539F",
      }
    },
  },
  plugins: [],
}

