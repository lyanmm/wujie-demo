import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0",
		port: 7000,
	},
	base: `${process.env.NODE_ENV === "production" ? "/main/" : ""}`,
	build: {
		outDir: "main",
	},
});
