import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://soyjesusrivas.com',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
