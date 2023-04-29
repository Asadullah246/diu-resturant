/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/src/assets/home.jpg)", 
      },
      colors: {
        mainColor: '#ffdf00',
        secondary:'#DC9814',
      },
    },

  },
  plugins: [require("daisyui")],
  // plugins: [
  //   require("@headlessui/react"),
  //   require("daisyui"),
  //   // ...
  // ],
};
