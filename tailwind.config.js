/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "dark-blue": "#050816",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#EDEDED",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        "neon-purple": "#FF00FF",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
          "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
          "gradient-custom-1":
          'linear-gradient(80deg,  #160729 10%, #050816 60%)',
          "gradient-custom-2":
          'linear-gradient(110deg,  #160729 10%, #050816 60%)',
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      content: {
        brush: "url('/src/assets/brush.png')",
        person1: "url('/src/assets/person-1.png')",
        person2: "url('/src/assets/person-2.png')",
        person3: "url('/src/assets/person-3.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}

