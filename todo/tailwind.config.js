/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "rgb(123, 94, 238)",
        customBlue: "rgb(35,83,123)",
      },
    },
  },
  plugins: [],
};
