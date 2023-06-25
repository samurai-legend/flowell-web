/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },

      minsm: { min: "640px" },
      minmd: { min: "768px" },
      minlg: { min: "1024px" },
      minxl: { min: "1280px" },
      min2xl: { min: "1536px" },
    },

    extend: {
      colors: {
        primary: "#170a31",
        "primary-2": "#8EB1F4",
        white: "#ffffff",
        "secondary-1": "#4cdfff",
        "secondary-2": "#f1f4fc",
        grey: "#9b9b9b",
      },
    },

    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {
      fontSmoothing: ["hover", "focus"],
      fontSize: ["hover", "focus"],
      fontStyle: ["hover", "focus"],
      fontWeight: ["hover", "focus"],
      animation: ["hover", "focus"],
    },
  },

  plugins: [],
};
