import { c as createAstro, a as createComponent, g as renderHead, d as renderTemplate } from '../../chunks/astro/server_tJGUTV3t.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-my.vercel.app/");
const prerender = false;
const $$TestCategory = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestCategory;
  const { slug } = Astro2.params;
  const url = new URL(Astro2.request.url);
  return renderTemplate`<html> <head><title>Resources Test</title>${renderHead()}</head> <body> <h1>Resources Category Test</h1> <p>Slug: ${slug || "none"}</p> <p>URL: ${url.toString()}</p> <p>Time: ${(/* @__PURE__ */ new Date()).toISOString()}</p> <h2>Available Categories:</h2> <ul> <li><a href="/resources/category/zero-trust/1">Zero Trust</a></li> <li><a href="/resources/category/service-mesh/1">Service Mesh</a></li> <li><a href="/resources/category/kubernetes/1">Kubernetes</a></li> </ul> </body></html>`;
}, "/Users/svetaco/Documents/Astro-my/src/pages/resources/test-category.astro", void 0);

const $$file = "/Users/svetaco/Documents/Astro-my/src/pages/resources/test-category.astro";
const $$url = "/resources/test-category";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestCategory,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
