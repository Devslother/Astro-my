import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../../chunks/astro/server_BPJnkSgl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../../chunks/Grid_4bd4D1Eq.mjs';
import { $ as $$Cta } from '../../../../chunks/Cta_D0Ivh2Qc.mjs';
import { $ as $$Hero, a as $$List } from '../../../../chunks/List_DRxrE65f.mjs';
import { s as slugify } from '../../../../chunks/arrow-left_BerUHB0T.mjs';
import { g as getCollection } from '../../../../chunks/_astro_content_BjYV4lKw.mjs';
import { $ as $$ClientRouter } from '../../../../chunks/ClientRouter_B1Myq5Z4.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
async function getStaticPaths() {
  const articles = await getCollection("learn", ({ data }) => {
    return data.draft !== true ;
  });
  const categories = [...new Set(articles.flatMap((article) => normalizeToArray(article.data.categories)))];
  const paths = [];
  for (const category of categories) {
    const categorySlug = slugify(category);
    const articlesInCategory = articles.filter((article) => {
      const articleCategories = normalizeToArray(article.data.categories);
      return articleCategories.includes(category);
    });
    const totalPages = Math.ceil(articlesInCategory.length / ITEMS_PER_PAGE);
    for (let i = 2; i <= totalPages; i++) {
      paths.push({
        params: { slug: categorySlug, page: i.toString() }
      });
    }
  }
  return paths;
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const ITEMS_PER_PAGE2 = 9;
  const normalizeToArray2 = (field) => {
    if (!field) return [];
    const value = Array.isArray(field) ? field.join(",") : field.toString();
    return value.split(",").map((c) => c.trim()).filter(Boolean);
  };
  const { slug, page } = Astro2.params;
  const currentPage = parseInt(page);
  if (currentPage === 1) {
    return Astro2.redirect(`/learn/categories/${slug}`, 301);
  }
  const url = new URL(Astro2.request.url);
  const query = (url.searchParams.get("q") ?? "").trim().toLowerCase();
  const isSearching = query.length > 0;
  const allArticles = await getCollection("learn");
  const allCategories = [...new Set(allArticles.flatMap((article) => normalizeToArray2(article.data.categories)))];
  const currentCategory = allCategories.find(
    (c) => slugify(c) === slug?.toLowerCase()
  );
  if (!currentCategory) {
    return new Response(null, { status: 404, statusText: "Not Found" });
  }
  const filteredArticles = allArticles.filter((article) => {
    const articleCategories = normalizeToArray2(article.data.categories).map((c) => c.toLowerCase());
    const isInCategory = articleCategories.includes(currentCategory.toLowerCase());
    if (!isInCategory) return false;
    if (!isSearching) return true;
    const title = (article.data.title ?? "").toLowerCase();
    const slug2 = article.slug.toLowerCase();
    const cats = articleCategories.join(",");
    return title.includes(query) || slug2.includes(query) || cats.includes(query);
  }).sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE2);
  if (currentPage > totalPages) {
    return new Response(null, { status: 404, statusText: "Not Found" });
  }
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE2;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE2);
  const noQuery = !isSearching;
  const hasResults = filteredArticles.length > 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Learning Center | ${currentCategory} | Page ${currentPage}`, "description": `Page ${currentPage} of articles in the ${currentCategory} category.`, "headerClass": "nav__with__bg" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<div data-articles-wrapper class="articles-wrapper"> ${renderComponent($$result2, "List", $$List, { "articles": paginatedArticles, "totalPages": totalPages, "currentPage": currentPage, "allCategories": allCategories, "currentCategory": currentCategory, "baseUrl": `/learn/categories/${slug}`, "noQuery": noQuery, "hasResults": hasResults })} </div> ${renderComponent($$result2, "Cta", $$Cta, {})}  `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ClientRouter", $$ClientRouter, {})} ` })}` })}`;
}, "/Users/svetaco/Documents/Astro-my/src/pages/learn/categories/[slug]/[page].astro", void 0);
const $$file = "/Users/svetaco/Documents/Astro-my/src/pages/learn/categories/[slug]/[page].astro";
const $$url = "/learn/categories/[slug]/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
