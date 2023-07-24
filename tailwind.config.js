/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/bg.png')",
      },
      colors: {
        "primary-black": "#333333",
        "light-gray": "#cccccc",
        "dark-gray": "#666666",
        secondary: "#D6F5D6",
        primary: "#003B5C",
        primary75: "#406C85",
        primary50: "#809DAE",
        primary25: "#BFCED6",
        accent: "#FF6F61",
        accent75: "#FF9F8C",
        success: "#5CB85C",
        warning: "#F0AD4E",
        danger: "#D9534F",
        info: "#5BC0DE",
        extra: "#C5A3FF",
      },
      fontSize: {
        display: [
          "96px",
          {
            lineHeight: "115px",
            letterSpacing: "2px",
            fontWeight: "700",
          },
        ],
        h1: [
          "72px",
          {
            lineHeight: "80px",
            letterSpacing: "-2px",
            fontWeight: "800",
          },
        ],
        h2: [
          "56px",
          {
            lineHeight: "64px",
            letterSpacing: "-1px",
            fontWeight: "800",
          },
        ],
        h3: [
          "40px",
          {
            lineHeight: "48px",
            fontWeight: "800",
          },
        ],
        h4: [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "700",
            letterSpacing: "1px",
          },
        ],
        h5: [
          "16px",
          {
            lineHeight: "32px",
            fontWeight: "400",
            letterSpacing: "3px",
          },
        ],
        "label-large": [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        "label-small": [
          "10px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        label: [
          "12px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        body: [
          "16px",
          {
            lineHeight: "32px",
            fontWeight: "400",
          },
        ],
        "body-small": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "body-large": [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: "400",
          },
        ],
      },
      boxShadow: {
        elevation1: " 0px 2px 4px 0px rgba(0, 0, 0, 0.12)",
        elevation2: " 0px 3px 6px 0px rgba(0, 0, 0, 0.16)",
        elevation3: " 0px 6px 10px 0px rgba(0, 0, 0, 0.25)",
        elevation4: " 0px 8px 12px 0px rgba(0, 0, 0, 0.30)",
      },
      keyframes: {
        "accordion-open": {
          "0%": {
            maxHeight: "64px",
          },
          "100%": {
            maxHeight: "var(--accordion-height)",
          },
        },
        "accordion-close": {
          "0%": {
            maxHeight: "var(--accordion-height)",
          },
          "100%": {
            maxHeight: "64px",
          },
        },
        "alert-open": {
          "0%": {
            transform: "translateY(100%)",

            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",

            opacity: 1,
          },
        },
        "alert-close": {
          "0%": {
            transform: "translateY(0)",

            opacity: 1,
          },
          "100%": {
            transform: "translateY(100%)",

            opacity: 0,
          },
        },
      },
      animation: {
        "accordion-open": "accordion-open 0.1s ease-in-out",
        "accordion-close": "accordion-close 0.1s ease-in-out",
        "alert-open": "alert-open 0.3s forwards",
        "alert-close": "alert-close 0.3s forwards",
      },
    },
  },
  plugins: [],
};
