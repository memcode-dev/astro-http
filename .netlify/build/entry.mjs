import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CQiXjI7-.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/clients/_clientid_.astro.mjs');
const _page3 = () => import('./pages/api/clients.astro.mjs');
const _page4 = () => import('./pages/api/get-person.json.astro.mjs');
const _page5 = () => import('./pages/api/posts/_slug_.astro.mjs');
const _page6 = () => import('./pages/api/posts.astro.mjs');
const _page7 = () => import('./pages/blog.astro.mjs');
const _page8 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page9 = () => import('./pages/rss.xml.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/clients/[clientId].ts", _page2],
    ["src/pages/api/clients/index.ts", _page3],
    ["src/pages/api/get-person.json.ts", _page4],
    ["src/pages/api/posts/[slug].ts", _page5],
    ["src/pages/api/posts/index.ts", _page6],
    ["src/pages/blog/index.astro", _page7],
    ["src/pages/blog/[...slug].astro", _page8],
    ["src/pages/rss.xml.js", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cd659405-a7c8-4a33-9e30-941e17802321"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
