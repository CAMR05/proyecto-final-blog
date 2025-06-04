// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://[tu-usuario].github.io/[nombre-repo]",
  base: "/[nombre-repo]",
  outDir: "docs",
  // ... resto de tu configuración
});