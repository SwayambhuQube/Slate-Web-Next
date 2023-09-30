import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          "sidebar-text": "var(--color-sidebar-text)",
          "sidebar-icon-hover": "var( --color-sidebar-icon-hover)",
        },
      },
      backgroundColor: {
        skin: {
          "sidebar-bg": "var( --color-sidebar-bg)",
        },
      },
      borderColor: {
        skin: {
          "sidebar-underline": "var( --color-sidebar-underline)",
        },
      },

      fontFamily: {
        sans: ["var(--font-Commissioner)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
