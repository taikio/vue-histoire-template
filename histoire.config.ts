import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  plugins: [HstVue()],
  setupFile: "./src/histoire.setup.js",
  defaultStoryProps: {
    autoPropsDisabled: true,
    responsiveDisabled: true,
  },
  tree: {
    groups: [
      {
        id: "adr",
        title: "Arquitecture Decision Records",
      },
      {
        id: "forms",
        title: "Form Components",
      },
    ],
  },
  theme: {
    title: "Design System Example",
    logo: {
      square: "./src/assets/images/logo.png",
      light: "./src/assets/images/logo.png",
      dark: "./src/assets/images/logo.png",
    },
    logoHref: "https://acme.com",
    favicon: "./public/vite.svg",
    colors: {
      gray: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        750: "#323238",
        800: "#27272a",
        850: "#1f1f21",
        900: "#18181b",
        950: "#101012",
      },
      primary: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
    },
  },
});
