/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: [
      {
        tourboxthemes: {
          primary: '#FECC00',
          secondary: '#000000',


          neutral: "#3D4451",

          "base-100": "#FFFFFF",
        }
      }
    ]
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
