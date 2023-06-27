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
        primary: "#15EEE1",
        "primary-2": "#27D7CC",
        "secondary-1": "#524E95",
        "secondary-2": "#353185",
        gray: "#3E3E3E",
        "light-gray": "#F4F9FE",
        white: "#ffffff",
      },
      fontSize: {
        h1: "2rem",
        h2: "2rem",
        h3: "1.375rem",
        h4: "1.125rem",
        h5: "1rem",
        h6: "0.875rem",
        body: "0.875rem",
        caption: "0.75rem",
        "medium-body": "1rem",
        "large-body": "1.5rem",
      },
      opacity: {
        89: "0.89",
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
      scale: ["responsive", "hover", "focus", "active", "group-hover"],
      transform: ["responsive", "hover", "focus"],
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      rotate: ['responsive', 'hover', 'focus', 'active'],
    },
  },

  plugins: [
    function ({ addBase, config }) {
      addBase({
        h1: {
          fontWeight: config("theme.fontWeight.medium"),
          color: config("theme.colors.gray"),
          // '@apply opacity-89': {}
        },
        h2: {
          fontWeight: config("theme.fontWeight.medium"),
          color: config("theme.colors.gray"),
        },
        h3: {
          fontWeight: config("theme.fontWeight.medium"),
          color: config("theme.colors.gray"),
        },
        h4: {
          fontWeight: config("theme.fontWeight.medium"),
          color: config("theme.colors.gray"),
        },
        h5: {
          fontWeight: config("theme.fontWeight.medium"),
          color: config("theme.colors.gray"),
        },
        h6: {
          fontWeight: config("theme.fontWeight.medium"),
          color: config("theme.colors.gray"),
        },
        body: {
          fontWeight: config("theme.fontWeight.normal"),
          color: config("theme.colors.gray"),
          "@apply opacity-89": {},
        },
        caption: {
          fontWeight: config("theme.fontWeight.normal"),
          color: config("theme.colors.gray"),
          "@apply opacity-89": {},
        },
        "medium-body": {
          fontWeight: config("theme.fontWeight.normal"),
          color: config("theme.colors.gray"),
          "@apply opacity-89": {},
        },
        "large-body": {
          fontWeight: config("theme.fontWeight.medium"),
          color: config("theme.colors.gray"),
          "@apply opacity-89": {},
        },
      });
    },
  ],
};
