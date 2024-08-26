/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF2E17",
        secondary: "#2C2E35",
      },
      borderColor: {
        main: "#CCCCCC",
      },
      boxShadow: {
        main: "0px 0px 12px 0px #00000040",
      },
      backgroundImage: {
        main: "linear-gradient(180deg, #FFFFFF 40%, #EAEAEA 100%)",
        "red-gradient": "linear-gradient(180deg, #FF2E17 0%, #991C0E 100%)",
      },
    },
  },
  plugins: [],
};
