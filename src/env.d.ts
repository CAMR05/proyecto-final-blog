/// <reference types="astro/client" />

declare module 'astro:content' {
  interface Render {
    'Content.astro': typeof import('../components/Content.astro');
  }
} 