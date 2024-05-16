/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      fontFamily: {
        'Kaisei Opti': ["Kaisei Opti"]
      }
    },
  },
  plugins: [],
  corePlugins: {
    transitionProperty: true,
    transitionDuration: true,
    transitionTimingFunction: true,
    transitionDelay: true,
    animation: true,
  },
}

