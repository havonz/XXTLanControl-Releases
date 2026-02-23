import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://havonz.github.io',
  base: '/XXTLanControl-Releases',
  output: 'static',
  integrations: [tailwind()]
});
