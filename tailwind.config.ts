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
        // MAGNOLIA:
        spruce: "#59692c",
        // BLACKBOARD:
        dark: "#303439",
        // MAGNOLIA DARK:
        magnoliaDark: "#414920",
        sagebrush: "#B3B89C",
        // BRIGHT DAYS:
        moss: "#ccb137",
        salmonberry: "#C05B31",
        // BOSQUE
        redCedar: "#a04303",
        // LINEN:
        natural: "#f3f1e9",
        link: "#406eb5",
        linkActive: "#0b2d60",
        borderPrimary: "#dcd6cb",
        borderSecondary: "#928b80",
        inverse: "#f9f8f6",
        buttonDark: "#4e4d49",
        // TRUE WHITE:
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
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
