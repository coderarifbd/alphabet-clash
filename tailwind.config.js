/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        black: "#010313",
        white: "#ffffff",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        main: "url('../images/background.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
