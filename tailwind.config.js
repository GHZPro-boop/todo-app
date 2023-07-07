/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        desktop_image: "url(./src/assets/desktop.jpg)",
        mobile_image: "url(./src/assets/phone.jpg)",
      }
    },
  },
  plugins: [],
}

