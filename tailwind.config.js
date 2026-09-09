/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // SoulfulI Reference Style Guide Colors
        "warm-ivory": "#FAF7F2",
        "cream": "#FFF8F5",
        "soft-lavender": "#F5F1FB",
        "lavender": "#EAE1F5",
        "dusty-blush": "#FBF1F5",
        "soft-mauve": "#D8C4D9",
        "mauve": "#704F62",
        "deep-mauve": "#57384A",
        "warm-charcoal": "#1F1B18",
        "soft-beige": "#E8E2DA",
        "muted-gold": "#D4B483",

        // Alias for compatibility
        "ivory": "#FAF7F2",
        "parchment": "#FFFDFB",
        "blush": "#FBF1F5",
        "blush-soft": "#FBF1F5",
        "charcoal": "#1F1B18",
        "charcoal-muted": "#4E4449",
        "gold-subtle": "#D4B483",

        "primary": "#57384A",
        "primary-container": "#704F62",
        "on-primary": "#ffffff",
        "secondary": "#704F62",
        "secondary-container": "#FBF1F5",
        "on-secondary-container": "#704F62",
        "surface": "#FAF7F2",
        "surface-container": "#FFF8F5",
        "surface-container-low": "#FAF7F2",
        "surface-container-high": "#FFF8F5",
        "surface-container-highest": "#EAE1F5",
        "outline-variant": "#E8E2DA",
        "on-surface": "#1F1B18",
        "on-surface-variant": "#4E4449"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "3xl": "1.75rem",
        full: "9999px"
      },
      spacing: {
        "max-width-reading": "68rem",
        "gutter-mobile": "1.25rem",
        "space-3xl": "4.5rem",
        "gutter-desktop": "3rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "max-width-canvas": "84rem",
        "space-2xs": "0.25rem",
        "space-xs": "0.5rem",
        "space-sm": "0.75rem",
        "space-2xl": "3rem",
        "max-width-prose": "44rem",
        "space-4xl": "6rem"
      },
      fontFamily: {
        serif: ["EB Garamond", "serif"],
        sans: ["Manrope", "sans-serif"],
        script: ["EB Garamond", "serif"],
        "headline-md": ["EB Garamond", "serif"],
        "body-sm": ["Manrope", "sans-serif"],
        "headline-sm": ["EB Garamond", "serif"],
        "display-lg-mobile": ["EB Garamond", "serif"],
        "body-lg": ["Manrope", "sans-serif"],
        "label-md": ["Manrope", "sans-serif"],
        "display-lg": ["EB Garamond", "serif"],
        "label-sm": ["Manrope", "sans-serif"],
        "body-md": ["Manrope", "sans-serif"],
        "headline-lg": ["EB Garamond", "serif"],
        "headline-lg-mobile": ["EB Garamond", "serif"],
        "body-xl": ["EB Garamond", "serif"]
      }
    },
  },
  plugins: [],
}
