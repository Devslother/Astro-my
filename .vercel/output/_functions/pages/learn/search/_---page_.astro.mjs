import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DH2DkwbL.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_BGf8VsMb.mjs';
import { c as $$Layout } from '../../../chunks/Grid_BWtxofxJ.mjs';
import { $ as $$Hero, a as $$List } from '../../../chunks/List_9-QDVv2Q.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://astro-my.vercel.app/");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const ITEMS_PER_PAGE = 9;
  const pageSegments = Astro2.params.page ?? [];
  let currentPage = 1;
  if (pageSegments.length === 0) {
    const url2 = new URL(Astro2.request.url);
    const q = url2.searchParams.get("q");
    return Astro2.redirect(q ? `/learn/search/1?q=${encodeURIComponent(q)}` : `/learn/search/1`);
  }
  const pageNum = parseInt(pageSegments[0]);
  if (!isNaN(pageNum) && pageNum > 0) {
    currentPage = pageNum;
  }
  const url = new URL(Astro2.request.url);
  const query = (url.searchParams.get("q") ?? "").trim().toLowerCase();
  const normalizeToArray = (val) => Array.isArray(val) ? val : val ? [val] : [];
  let allArticles;
  try {
    allArticles = await getCollection("learn");
  } catch (error) {
    console.error("Error getting learn collection:", error);
    return new Response("Failed to load articles", { status: 500 });
  }
  const filteredArticles = allArticles.filter(({ data, slug }) => {
    const title = (data.title ?? "").toLowerCase();
    const cats = normalizeToArray(data.categories).join(" ").toLowerCase();
    return title.includes(query) || slug.toLowerCase().includes(query) || cats.includes(query);
  }).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const noQuery = !query;
  const hasResults = filteredArticles.length > 0;
  const allCategories = [
    ...new Set(allArticles.flatMap((a) => normalizeToArray(a.data.categories)))
  ];
  const total = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageArr = filteredArticles.slice(start, start + ITEMS_PER_PAGE);
  if (currentPage > total && total !== 0) {
    return new Response(null, { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tetrate Search Results", "description": "Search results", "headerClass": "nav__with__bg" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<div data-articles-wrapper class="articles-wrapper"> ${renderComponent($$result2, "List", $$List, { "articles": pageArr, "currentPage": currentPage, "totalPages": total, "allCategories": allCategories, "currentCategory": "", "baseUrl": "/learn/search/1", "noQuery": noQuery, "hasResults": hasResults })} </div> ` })}`;
}, "/Users/svetaco/Documents/Astro-my/src/pages/learn/search/[...page].astro", void 0);

const $$file = "/Users/svetaco/Documents/Astro-my/src/pages/learn/search/[...page].astro";
const $$url = "/learn/search/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
