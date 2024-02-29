/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url('./assets/images/home/background-home-desktop.jpg')",
        'crew-desktop': "url('./assets/images/crew/background-crew-desktop.jpg')",
        'tech-desktop': "url('./assets/images/technology/background-technology-desktop.jpg')",
        'destination-desktop': "url('./assets/images/destination/background-destination-desktop.jpg')",

        'home-tablet': "url('./assets/images/home/background-home-tablet.jpg')",
        'crew-tablet': "url('./assets/images/crew/background-crew-tablet.jpg')",
        'tech-tablet': "url('./assets/images/technology/background-technology-tablet.jpg')",
        'destination-tablet': "url('./assets/images/destination/background-destination-tablet.jpg')",

        'home-mobile': "url('./assets/images/home/background-home-mobile.jpg')",
        'crew-mobile': "url('./assets/images/crew/background-crew-mobile.jpg')",
        'tech-mobile': "url('./assets/images/technology/background-technology-mobile.jpg')",
        'destination-mobile': "url('./assets/images/destination/background-destination-mobile.jpg')",

        'logo': "url('./assets/images/shared/logo.svg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

