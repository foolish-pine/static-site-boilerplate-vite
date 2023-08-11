import fs from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import viteImagemin from "vite-plugin-imagemin";

const metadata = JSON.parse(
	fs.readFileSync(resolve(__dirname, "./src/metadata.json")),
);
const fileNameList = fs.readdirSync(resolve(__dirname, "./src/"));
const htmlFileList = fileNameList.filter((file) => /.html$/.test(file));
const inputFiles = {};
for (let i = 0; i < htmlFileList.length; i++) {
	const file = htmlFileList[i];
	inputFiles[file.slice(0, -5)] = resolve(__dirname, "./src/" + file);
}
export default defineConfig({
	server: {
		host: true,
	},
	root: "./src",
	build: {
		outDir: "../dist",
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					let extType = assetInfo.name.split(".")[1];
					if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
						extType = "fonts";
					}
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						extType = "img";
					}
					return `assets/${extType}/[name][extname]`;
				},
				chunkFileNames: "assets/js/[name].js",
				entryFileNames: "assets/js/[name].js",
			},
			input: inputFiles,
		},
	},
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, "./src/html-components"),
			context(pagePath) {
				return metadata[pagePath];
			},
		}),
		viteImagemin({
			gifsicle: {
				optimizationLevel: 3,
			},
			mozjpeg: {
				quality: 65,
				progressive: true,
			},
			pngquant: {
				quality: [0.65, 0.8],
				speed: 1,
			},
			svgo: {
				plugins: [
					{
						name: "removeViewBox",
					},
				],
			},
		}),
	],
});
