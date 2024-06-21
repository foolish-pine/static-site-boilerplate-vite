import fs from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

const metadata = JSON.parse(
  fs.readFileSync(resolve(__dirname, "./src/metadata.json")),
);
const fileNames = fs.readdirSync(resolve(__dirname, "./src/"));
const htmlFiles = fileNames.filter((file) => /.html$/.test(file));
const input = {};
for (let i = 0; i < htmlFiles.length; i++) {
  const file = htmlFiles[i];
  input[file.slice(0, -5)] = resolve(__dirname, "./src/" + file);
}
export default defineConfig({
  server: {
    host: true,
    open: true,
  },
  root: "./src",
  build: {
    rollupOptions: {
      input,
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "./src/html-components"),
      context(pagePath) {
        return metadata[pagePath];
      },
    }),
  ],
});
