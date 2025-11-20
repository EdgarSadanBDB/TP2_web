import { defineConfig } from "vite";

export default defineConfig({
  base: "/TP2_web/", 
  build: {
    outDir: "dist",  
    assetsDir: "assets", 
    sourcemap: false, 
    minify: "esbuild", 
  },
});
