// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// import cloudflare from '@astrojs/cloudflare';

import db from '@astrojs/db';

import node from '@astrojs/node';


import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), db()],
  output: "static",

  adapter: cloudflare(),
});