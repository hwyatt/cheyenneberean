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
      colors: {
        // spruce: "#1F513F",
        // MAGNOLIA:
        spruce: "#6b7d39",
        // dark: "#1C1C1A",
        // BLACKBOARD:
        dark: "#303439",
        // MAGNOLIA DARK:
        magnoliaDark: "#59692c",
        sagebrush: "#ACB4A2",
        // moss: "#BFB33E",
        // BRIGHT DAYS:
        moss: "#ccb137",
        salmonberry: "#E74F3D",
        // redCedar: "#C7370F",
        // BOSQUE
        redCedar: "#a04303",
        // natural: "#F4F2ED",
        // LINEN:
        natural: "#f3f1e9",
        link: "#406eb5",
        linkActive: "#0b2d60",
        borderPrimary: "#dcd6cb",
        borderSecondary: "#928b80",
        inverse: "#f9f8f6",
        buttonDark: "#4e4d49",
        // palette: "#f7f5f3",
        // TRUEW WHITE:
        palette: "#f5f6f2",
        body: "#0c0b08bf",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {},
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
