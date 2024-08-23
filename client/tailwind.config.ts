import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        FormModal: "0 5px 30px 10px rgba(255,255,255,0.4)",
      },
      colors: {
        PrimaryBackgroundColor: "#000000",
        SecondaryBackgroundColor: "#1f1f1f",
      },
    },
  },
  plugins: [],
};
export default config;
