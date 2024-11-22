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
        spruce: "#1F513F",
        dark: "#1C1C1A",
        sound: "#13352C",
        sagebrush: "#ACB4A2",
        moss: "#BFB33E",
        salmonberry: "#E74F3D",
        redCedar: "#C7370F",
        birch: "#E8EOCE",
        natural: "#F4F2ED",
        info: "#1b437e",
        link: "#406eb5",
        linkActive: "#0b2d60",
        borderPrimary: "#dcd6cb",
        borderSecondary: "#928b80",
        inverse: "#f9f8f6",
        buttonDark: "#4e4d49",
        palette: "#f7f5f3",
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
