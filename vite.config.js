import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    host: true,
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@icons": path.resolve(__dirname, "./src/icons"),
      "@components": path.resolve(__dirname, "./src/app/components"),
      "@pages": path.resolve(__dirname, "./src/app/pages"),
      "@fonts": path.resolve(__dirname, "./src/fonts"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@api": path.resolve(__dirname, "./src/app/api"),
      "@app": path.resolve(__dirname, "./src/app"),
    },
  },
});
