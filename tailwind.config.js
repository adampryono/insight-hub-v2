module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}", "../src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        background: {
          navigation_bar__footer: "var(--background_navigation_bar__footer)",
          section: "var(--background_section)",
        },
        'black-900': '#000000', 
        blue: { 900: "var(--blue_900)" },
        blue_gray: { 50: "var(--blue_gray_50)", 100: "var(--blue_gray_100)", "50_19": "var(--blue_gray_50_19)" },
        gray: {
          300: "var(--gray_300)",
          500: "var(--gray_500)",
          600: "var(--gray_600)",
          "600_19": "var(--gray_600_19)",
        },
        indigo: { 50: "var(--indigo_50)", 900: "var(--indigo_900)", a100: "var(--indigo_a100)" },
        linear_1: "var(--linear_1)",
        pink: { 100: "var(--pink_100)", 300: "var(--pink_300)" },
        purple: { 400: "var(--purple_400)", a100: "var(--purple_a100)" },
        teal: { 300: "var(--teal_300)", "300_01": "var(--teal_300_31)" },
        white: {
          a700_33: "var(--white_a700_33)",
          a700_7f: "var(--white_a700_7f)",
          white_1: "var(--white_white_1)",
          white_5: "var(--white_white_5)",
        },
      },
      boxShadow: { bs: "0 4px 10px 0 #0000001e" },
      backgroundImage: { gradient: "linear-gradient(123deg, #62bdde, #44babd,#3ba2c3,#2b2b67)" },
      fontFamily: { plusjarkartasans: "Plus Jakarta Sans", poppins: "Poppins", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
