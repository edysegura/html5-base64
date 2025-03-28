import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/html5-base64",
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "HTML5 Base64",
        short_name: "Base64",
        description: "HTML5 Base64 Encoder/Decoder",
        theme_color: "#ffffff",
        icons: [
          {
            src: "vite.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "vite.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
});
