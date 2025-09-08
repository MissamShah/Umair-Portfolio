/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#09131f",       
        secondary: "#140533",      
        tertiary: "#30475E",       
        "black-100": "#30475E",    
        "black-200": "#1ad989" ,
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "10px 10px 19px #181b1e, -10px -10px 19px #2a2d32",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
