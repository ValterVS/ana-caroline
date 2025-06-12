import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/dia-dos-namorados-main",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
