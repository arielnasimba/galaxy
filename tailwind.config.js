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
        'logo': "url('./assets/images/shared/logo.svg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

