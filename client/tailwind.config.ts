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
        FormModal: "0 5px 30px 5px rgba(255,255,255,0.4)",
      },
      colors: {
        PrimaryBackgroundColor: "#000000",
        SecondaryBackgroundColor: "#1f1f1f",
        ModalPrimaryTextColor: "#FFFFFF",
        ModalSecondaryTextColor: "#c1c1c1",
        ModalRingColor: "#555555",
        ModalBackgroundColor: "#2a2a2a",
      },
    },
  },
  plugins: [],
};
export default config;
