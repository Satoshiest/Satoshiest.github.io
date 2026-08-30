import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site (Satoshiest.github.io) は root 配信なので base は不要
export default defineConfig({
  site: 'https://satoshiest.github.io',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
