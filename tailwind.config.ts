import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#fbfbff",
      pinkBackground: "#e7e5ff",
      magentaBackground: "#e7e5ff",
      text: "#2d2b5c",
      title: "#1a1930",
      subtitle: "#1a1930",
      button: "#6259ea",
      footerText: "#fbfbff",
      footerBackground: "#1a1930",
      buttonBackground: "#ffffff91",
    },
    extend: {
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
