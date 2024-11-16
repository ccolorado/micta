import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        one: "#320c2e",
        two: "#79d0bc",
        three: "#49313e",
        four: "#3a7276",
        five: "#b15c31",
        drop: "#777",
        background: "#333",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;


				