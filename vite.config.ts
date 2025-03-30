import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
    base: mode === "production" ? "/towa-tech/" : "/", // Use "/" for local development
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