/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/src/assets/hemoImg.jpg)",
      },
      colors: {
        mainColor: '#ffdf00', 
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
