import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  extend: {
    colors: {
      selectionColor: "hsl(209,100%,97%)",
      darkbodyColor: "hsl(216,100%,4%)",
      darkSelectionColor: "hsl(211,100%,12%)",
      primaryColor: "hsl(209,87%,21%)",
      primaryColorLight: "hsl(209,74%,45%)",
      textColor: "#DDD",
      secondaryColor: "red",
    },
    container: {
      center: true,

      padding: { DEFAULT: "10px", md: "30px" },
    },
  },
  plugins: [tailwindcss(), react()],
});
