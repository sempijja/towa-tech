import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
    base: "/towa-tech/", // Set the base path to the name of the repo
    server: {
        host: "::",
        port: 8080,
    },
    plugins: [react()],
    resolve: {
        alias: {
        "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        outDir: "dist",
    },
}));