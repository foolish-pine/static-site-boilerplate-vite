import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");

export default defineConfig({
  server: {
    host: true,
    open: true,
  },
  root,
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        home: resolve(root, "index.html"),
        about: resolve(root, "about.html"),
      },
    },
  },
});
