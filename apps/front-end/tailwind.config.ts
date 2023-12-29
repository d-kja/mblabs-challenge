import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#0F0F0F", // 70% opacity
        border: "#424242",
        accent: "#E9FF1A",
        danger: "#FF5964",
        warning: "#FFFF99",
        success: "#05FF00",
        class: {
          biologia: "#CC4090",
          artes: "#05A2C2",
          geografia: "#C26719",
          sociologia: "#9B19C2",
        },
      },
      textColor: {
        primary: "#ECEDEE",
        secondary: "#6D6D6D",
      },
    },
  },
  plugins: [],
};
export default config;
