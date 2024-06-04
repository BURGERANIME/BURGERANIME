import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    /* Screens Configuration By BURGERANIME */
    screens: {
      'sm': '400px',
      // => @media (min-width: 400px) { ... }

      'md': '1168px',
      // => @media (min-width: 1168px) { ... }

      'lg': '1224px',
      // => @media (min-width: 1224px) { ... }

      'xl': '1380px',
      // => @media (min-width: 1380px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  
  plugins: [
    require('daisyui'),
  ],
};
export default config;
