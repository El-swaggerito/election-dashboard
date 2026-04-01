
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-high": "#e6e8ea",
        "on-secondary-container": "#5c647a",
        "tertiary": "#000000",
        "background": "#f7f9fb",
        "outline": "#76777d",
        "surface-variant": "#e0e3e5",
        "surface-tint": "#0053db",
        "inverse-on-surface": "#eff1f3",
        "secondary-fixed-dim": "#bec6e0",
        "on-primary-container": "#497cff",
        "on-tertiary": "#ffffff",
        "secondary-fixed": "#dae2fd",
        "surface-container-lowest": "#ffffff",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
        "error": "#ba1a1a",
        "surface-dim": "#d8dadc",
        "surface-container-low": "#f2f4f6",
        "on-background": "#191c1e",
        "on-tertiary-fixed": "#002113",
        "on-primary": "#ffffff",
        "primary-container": "#00174b",
        "error-container": "#ffdad6",
        "secondary": "#565e74",
        "surface-container-highest": "#e0e3e5",
        "tertiary-fixed": "#6ffbbe",
        "on-secondary-fixed": "#131b2e",
        "inverse-surface": "#2d3133",
        "surface-bright": "#f7f9fb",
        "on-tertiary-container": "#009668",
        "on-primary-fixed": "#00174b",
        "on-tertiary-fixed-variant": "#005236",
        "surface": "#f7f9fb",
        "primary-fixed": "#dbe1ff",
        "tertiary-fixed-dim": "#4edea3",
        "on-primary-fixed-variant": "#003ea8",
        "on-secondary-fixed-variant": "#3f465c",
        "secondary-container": "#dae2fd",
        "primary": "#000000",
        "outline-variant": "#c6c6cd",
        "on-surface-variant": "#45464d",
        "primary-fixed-dim": "#b4c5ff",
        "tertiary-container": "#002113",
        "on-secondary": "#ffffff",
        "inverse-primary": "#b4c5ff",
        "on-surface": "#191c1e",
        "surface-container": "#eceef0"
      },
      fontFamily: {
        "headline": ["var(--font-manrope)"],
        "body": ["var(--font-inter)"],
        "label": ["var(--font-inter)"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem", 
        "lg": "0.25rem", 
        "xl": "0.5rem", 
        "full": "0.75rem"
      },
    },
  },
  plugins: [],
};
export default config;
