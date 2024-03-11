import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/notion-api": {
        target: "https://api.notion.com/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/notion-api/, ""),
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
