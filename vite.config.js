import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        contact: "./contact.html",
        // ...
        // List all files you want in your build
      },
    },
  },
});
