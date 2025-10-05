import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
    allowedHosts: [
      "1ba0348b-5241-44d4-a0d2-cf5dd0a8cbe9-00-3u1fly39mgk4w.worf.replit.dev",
    ],
  },
});
