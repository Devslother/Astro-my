import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BTlxFey-.mjs';
import { manifest } from './manifest_BoLLa3CJ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/learn/categories/_slug_/_page_.astro.mjs');
const _page2 = () => import('./pages/learn/categories/_slug_.astro.mjs');
const _page3 = () => import('./pages/learn/page/_page_.astro.mjs');
const _page4 = () => import('./pages/learn/search.astro.mjs');
const _page5 = () => import('./pages/learn/search/_---page_.astro.mjs');
const _page6 = () => import('./pages/learn.astro.mjs');
const _page7 = () => import('./pages/learn/_---slug_.astro.mjs');
const _page8 = () => import('./pages/posts/post-1.astro.mjs');
const _page9 = () => import('./pages/posts/post-2.astro.mjs');
const _page10 = () => import('./pages/posts/post-3.astro.mjs');
const _page11 = () => import('./pages/products/agent-operations-director.astro.mjs');
const _page12 = () => import('./pages/products/tetrate-application-gateway.astro.mjs');
const _page13 = () => import('./pages/products/tetrate-istio-subscription.astro.mjs');
const _page14 = () => import('./pages/resources.astro.mjs');
const _page15 = () => import('./pages/solutions/financial-services.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/learn/categories/[slug]/[page].astro", _page1],
    ["src/pages/learn/categories/[slug].astro", _page2],
    ["src/pages/learn/page/[page].astro", _page3],
    ["src/pages/learn/search/index.astro", _page4],
    ["src/pages/learn/search/[...page].astro", _page5],
    ["src/pages/learn/index.astro", _page6],
    ["src/pages/learn/[...slug].astro", _page7],
    ["src/pages/posts/post-1.md", _page8],
    ["src/pages/posts/post-2.md", _page9],
    ["src/pages/posts/post-3.md", _page10],
    ["src/pages/products/agent-operations-director.astro", _page11],
    ["src/pages/products/tetrate-application-gateway.astro", _page12],
    ["src/pages/products/tetrate-istio-subscription.astro", _page13],
    ["src/pages/resources/index.astro", _page14],
    ["src/pages/solutions/financial-services.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1d815c0a-ff67-4006-9279-a10a039452e4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
