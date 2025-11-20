import { defineConfig } from "vite";

export default defineConfig({
  base: "http://localhost:5173/TP2_web", 
  build: {
    outDir: "dist",  
    assetsDir: "assets", 
    sourcemap: false, 
    minify: "esbuild", 
  },
});
