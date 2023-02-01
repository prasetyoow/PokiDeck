/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rock: "rgb(148, 81, 81)",
        ghost: "rgb(247, 247, 247)",
        electric: "rgb(255, 255, 161)",
        bug: "#F6D6A7",
        poison: "#E0A7F6",
        fairy: "rgba(255, 192, 203, 0.863)",
        fire: "#FBE3DF",
        grass: "#E2F9E1",
        water: "#E0F1FD",
        normal: "#A8A77A",
        ice: "#96D9D6",
        ground: "#E2BF65",
        psychic: "#F95587",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
      },
    },
  },
  plugins: [],
};
