import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_BPJnkSgl.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_BjYV4lKw.mjs';
import { $ as $$ClientRouter } from '../../../chunks/ClientRouter_B1Myq5Z4.mjs';
import { $ as $$Layout } from '../../../chunks/Grid_4bd4D1Eq.mjs';
import { $ as $$Hero, a as $$List } from '../../../chunks/List_DRxrE65f.mjs';
import { $ as $$Cta } from '../../../chunks/Cta_D0Ivh2Qc.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const POSTS_PER_PAGE = 9;
  const { page } = Astro2.params;
  const currentPage = parseInt(page || "1") || 1;
  const articles = await getCollection("learn", ({ data }) => {
    return data.draft !== true ;
  });
  const normalizeToArray = (field) => {
    if (!field) return [];
    const value = Array.isArray(field) ? field.join(",") : field.toString();
    return value.split(",").map((c) => c.trim()).filter(Boolean);
  };
  const allCategories = [
    ...new Set(articles.flatMap((resource) => normalizeToArray(resource.data.categories)))
  ];
  const filteredArticles = articles.sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date).valueOf() : 0;
    const dateB = b.data.date ? new Date(b.data.date).valueOf() : 0;
    return dateB - dateA;
  });
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredArticles.length / POSTS_PER_PAGE);
  if (currentPage === 1) {
    return Astro2.redirect("/learn");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Learning Center", "description": "Tetrate's Learning Center: Discover expert insights, tutorials, and resources to elevate your understanding and implementation. Dive in now!", "headerClass": "nav__with__bg" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<div data-articles-wrapper class="articles-wrapper"> ${renderComponent($$result2, "List", $$List, { "articles": paginatedArticles, "totalPages": totalPages, "currentPage": currentPage, "allCategories": allCategories, "currentCategory": "", "baseUrl": "/learn", "noQuery": true, "hasResults": true })} </div> ${renderComponent($$result2, "Cta", $$Cta, {})}  `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ClientRouter", $$ClientRouter, {})} ` })}` })}`;
}, "/Users/svetaco/Documents/Astro-my/src/pages/learn/page/[page].astro", void 0);
const $$file = "/Users/svetaco/Documents/Astro-my/src/pages/learn/page/[page].astro";
const $$url = "/learn/page/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
