import { d as createAstro, c as createComponent, a as addAttribute, f as renderScript, b as renderTemplate, r as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_BorwNW6a.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { c as $$Layout } from '../chunks/Layout_7tzu6nPn.mjs';
import { $ as $$Cta } from '../chunks/Cta_CQMAX1Bj.mjs';
import { $ as $$Hero, a as $$List } from '../chunks/List_DtjCeJio.mjs';
import { g as getCollection } from '../chunks/_astro_content_UKccoAbA.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-my.vercel.app/");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/svetaco/Documents/Astro-my/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/svetaco/Documents/Astro-my/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const ITEMS_PER_PAGE = 9;
  const currentPage = 1;
  const allArticles = (await getCollection("learn")).sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
  const normalizeToArray = (field) => {
    if (!field) return [];
    return Array.isArray(field) ? field : [field];
  };
  const allCategories = [
    ...new Set(allArticles.flatMap((article) => normalizeToArray(article.data.categories)))
  ];
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedArticles = allArticles.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allArticles.length / ITEMS_PER_PAGE);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Learning Center", "description": "Tetrate's Learning Center: Discover expert insights, tutorials, and resources to elevate your understanding and implementation. Dive in now!", "headerClass": "nav__with__bg", "bodyClass": "learn-page" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<div data-articles-wrapper class="articles-wrapper"> ${renderComponent($$result2, "List", $$List, { "articles": paginatedArticles, "totalPages": totalPages, "currentPage": currentPage, "allCategories": allCategories, "currentCategory": "", "baseUrl": "/learn", "noQuery": true, "hasResults": true })} </div> ${renderComponent($$result2, "Cta", $$Cta, {})}  `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ClientRouter", $$ClientRouter, {})} ` })}` })}`;
}, "/Users/svetaco/Documents/Astro-my/src/pages/learn/index.astro", void 0);

const $$file = "/Users/svetaco/Documents/Astro-my/src/pages/learn/index.astro";
const $$url = "/learn";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
