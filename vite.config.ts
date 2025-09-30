import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3333,
  },
  ssr: {
    // Ensure the generated Prisma client (which is CommonJS) is not bundled
    // into Vite's ESM SSR build. Externalizing it lets Node require the
    // CJS output at runtime and avoids "exports is not defined" errors.
    external: ["src/generated/prisma", "@prisma/client"],
  },
  plugins: [
    tsConfigPaths(),
    tanstackStart(),
    // react's vite plugin must come after start's vite plugin
    viteReact(),
  ],
});
