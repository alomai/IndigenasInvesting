/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",    // if you have any files in root app folder
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // if you have any files in root components folder
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'], // Make Roboto the default sans font
      },
    },
  },
  plugins: [],
}
