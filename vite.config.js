import { existsSync } from "node:fs";
import { defineConfig } from "vite";
import { resolve } from "node:path";

/**
 * First-run guard: without a generated PDF, Vite's SPA fallback would serve
 * index.html for /nami-shah-cv.pdf. Dev only.
 */
function cvDirectoryPlugin() {
  const rewrite = (req, _res, next) => {
    const path = req.url?.split("?")[0];
    if (path === "/cv" || path === "/cv/") req.url = "/cv/index.html";
    next();
  };
  return {
    name: "cv-directory",
    configureServer(server) {
      server.middlewares.use(rewrite);
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite);
    },
  };
}

function devPdfFallbackPlugin() {
  return {
    name: "dev-pdf-fallback",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = req.url?.split("?")[0];
        if (path !== "/nami-shah-cv.pdf" || existsSync(resolve("public/nami-shah-cv.pdf"))) return next();
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("No PDF yet. Run `npm run build`, then `npm run pdf`.");
      });
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [cvDirectoryPlugin(), devPdfFallbackPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve("index.html"),
        cv: resolve("cv.html"),
      },
    },
  },
});
