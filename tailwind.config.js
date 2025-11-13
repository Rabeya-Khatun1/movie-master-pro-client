
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#e50916",
          "primary-dark": "#b81d24",
          "black": "#221f1f",
          "dark": "#161616",
          "secondary": "#cecfd1",
          "grey": "#f5f5f1",
          "white": "#ffffff",
          "body-fonts": "'Roboto', sans-serif",
          "title-fonts": "'Jost', sans-serif"
        }
      },
      "dark",
      "synthwave"
    ]
  }
}
