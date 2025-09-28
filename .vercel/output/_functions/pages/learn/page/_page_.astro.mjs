import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_DH2DkwbL.mjs';
import 'kleur/colors';
import { $ as $$ClientRouter } from '../../../chunks/ClientRouter_DHx4b7Fz.mjs';
import { c as $$Layout } from '../../../chunks/Grid_BWtxofxJ.mjs';
import { $ as $$Cta } from '../../../chunks/Cta_DtiOLuDi.mjs';
import { $ as $$Hero, a as $$List } from '../../../chunks/List_9-QDVv2Q.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_BGf8VsMb.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://astro-my.vercel.app/");
const prerender = false;
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const POSTS_PER_PAGE = 9;
  const { page } = Astro2.params;
  const currentPage = parseInt(page);
  let articles;
  try {
    articles = await getCollection("learn", ({ data }) => {
      return true ? data.draft !== true : true;
    });
  } catch (error) {
    console.error("Error getting learn collection:", error);
    return new Response("Failed to load articles", { status: 500 });
  }
  const normalizeToArray = (field) => {
    if (!field) return [];
    return Array.isArray(field) ? field : [field];
  };
  const allCategories = [
    ...new Set(articles.flatMap((resource) => normalizeToArray(resource.data.categories)))
  ];
  const filteredArticles = articles.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredArticles.length / POSTS_PER_PAGE);
  if (currentPage && currentPage === 1) {
    return Astro2.redirect("/learn");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Learning Center", "description": "Tetrate's Learning Center: Discover expert insights, tutorials, and resources to elevate your understanding and implementation. Dive in now!", "headerClass": "nav__with__bg", "bodyClass": "learn-page" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<div data-articles-wrapper class="articles-wrapper"> ${renderComponent($$result2, "List", $$List, { "articles": paginatedArticles, "totalPages": totalPages, "currentPage": currentPage, "allCategories": allCategories, "noQuery": true, "hasResults": true })} </div> ${renderComponent($$result2, "Cta", $$Cta, {})}  `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ClientRouter", $$ClientRouter, {})} ` })}` })}`;
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
