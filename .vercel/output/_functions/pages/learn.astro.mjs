import { a as createComponent, e as renderComponent, d as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_DH2DkwbL.mjs';
import 'kleur/colors';
import { $ as $$ClientRouter } from '../chunks/ClientRouter_UhjCRkZP.mjs';
import { c as $$Layout } from '../chunks/Grid_CjoLSW0o.mjs';
import { $ as $$Cta } from '../chunks/Cta_BdInT2Hy.mjs';
import { $ as $$Hero, a as $$List } from '../chunks/List_iizjq26u.mjs';
import { g as getCollection } from '../chunks/_astro_content_DLEUe-IA.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const ITEMS_PER_PAGE = 9;
  const currentPage = 1;
  const allArticles = (await getCollection("learn")).sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
  const normalizeToArray = (field) => {
    if (!field) return [];
    const value = Array.isArray(field) ? field.join(",") : field.toString();
    return value.split(",").map((c) => c.trim()).filter(Boolean);
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
