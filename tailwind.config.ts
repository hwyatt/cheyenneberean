import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bobby: ["var(--font-bobby)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          accent: "#1F4061",
          primary: "#0097FA",
          secondary: "#D3E9FD",
        },
      },
      {
        kids: {
          primary: "#D45D0D", // Burnt Orange
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
