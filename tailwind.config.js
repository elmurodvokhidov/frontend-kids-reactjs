/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    fontFamily: {
      multfilm: "'Protest Riot', sans-serif"
    },
    screens: {
      tetiris: "0px",
      a06: "350px",
      iPad: "650px",
      hp: "1600px",
      lg: "1900px",
      monitor: "2000px"
    },
    extend: {},
  },
  plugins: [],
}