import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_tJGUTV3t.mjs';
import 'kleur/colors';
import { c as $$Layout } from '../../../chunks/Grid_DBS8SqEi.mjs';
import { $ as $$Cta } from '../../../chunks/Cta_DbZD441L.mjs';
import { $ as $$Hero, a as $$List } from '../../../chunks/List_C680U_kN.mjs';
import { s as slugify } from '../../../chunks/arrow-left_DM11I3C-.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_CAQ5_t1n.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://astro-my.vercel.app/");
const prerender = false;
async function getStaticPaths() {
  const articles = await getCollection("learn", ({ data }) => {
    return data.draft !== true ;
  });
  const categories = [
    ...new Set(articles.flatMap(
      (article) => normalizeToArray(article.data.categories).flatMap((cat) => cat.split(",").map((c) => c.trim()))
    ))
  ];
  return categories.map((category) => ({
    params: { slug: slugify(category).toLowerCase() }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const ITEMS_PER_PAGE = 9;
  const currentPage = 1;
  const normalizeToArray2 = (field) => {
    if (!field) return [];
    return Array.isArray(field) ? field : [field];
  };
  const allArticles = await getCollection("learn");
  const allCategories = [
    ...new Set(allArticles.flatMap(
      (article) => normalizeToArray2(article.data.categories).flatMap((cat) => cat.split(",").map((c) => c.trim()))
    ))
  ];
  const { slug } = Astro2.params;
  const category = allCategories.find((c) => slugify(c) === slug.toLowerCase());
  if (!category) throw new Error(`No category found for slug: ${slug}`);
  const url = new URL(Astro2.request.url);
  const query = (url.searchParams.get("q") ?? "").trim().toLowerCase();
  const isSearching = query.length > 0;
  const filteredArticles = allArticles.filter((article) => {
    const categoriesArray = normalizeToArray2(article.data.categories).flatMap((cat) => cat.split(",").map((c) => c.trim().toLowerCase()));
    const inCategory = categoriesArray.includes(category.toLowerCase());
    if (!inCategory) return false;
    if (!isSearching) return true;
    const title = (article.data.title ?? "").toLowerCase();
    const slug2 = article.slug.toLowerCase();
    const cats = categoriesArray.join(",");
    return title.includes(query) || slug2.includes(query) || cats.includes(query);
  }).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const noQuery = !isSearching;
  const hasResults = filteredArticles.length > 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Learning Center", "description": "Tetrate's Learning Center: Discover expert insights, tutorials, and resources to elevate your understanding and implementation. Dive in now!", "headerClass": "nav__with__bg" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<div data-articles-wrapper class="articles-wrapper"> ${renderComponent($$result2, "List", $$List, { "articles": paginatedArticles, "totalPages": totalPages, "currentPage": currentPage, "allCategories": allCategories, "currentCategory": category, "baseUrl": `/learn/category/${slug}`, "noQuery": noQuery, "hasResults": hasResults })} </div> ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/svetaco/Documents/Astro-my/src/pages/learn/categories/[slug].astro", void 0);
const $$file = "/Users/svetaco/Documents/Astro-my/src/pages/learn/categories/[slug].astro";
const $$url = "/learn/categories/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
