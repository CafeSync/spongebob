import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), VitePWA({
    manifest: {
      name: "Spongebob PWA",
      short_name: "Spongebob",
      start_url: "/",
      display: "standalone",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      icons: [
        {
          src: "vite.svg",
          sizes: "512x512",
          type: "image/svg+xml"
        }
      ]
    }
  })],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
