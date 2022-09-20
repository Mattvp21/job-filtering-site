module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryCyan: "hsl(180, 29%, 50%)",
        backgroundLightCyan: "hsl(180, 52%, 96%)",
        filteringLightCyan: "hsl(180, 31%, 95%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      backgroundImage: {
        "mobile-header-image": "url(./images/bg-header-mobile.svg)",
        "desktop-header-image": "url(./images/bg-header-desktop.svg)",
      },
      screens: {
        'sm': '640px',
        'md': '1024px',
        'lg': '1280px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        "league-spartan": ["LEAGUE-SPARTAN", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
