import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BPJnkSgl.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_BjYV4lKw.mjs';
import { s as slugify } from '../../../chunks/arrow-left_BerUHB0T.mjs';
import { $ as $$Layout } from '../../../chunks/Grid_4bd4D1Eq.mjs';
import { $ as $$Hero, a as $$List } from '../../../chunks/List_DRxrE65f.mjs';
import { $ as $$Cta } from '../../../chunks/Cta_Dg8G-uR-.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const ITEMS_PER_PAGE = 9;
  const currentPage = 1;
  const normalizeToArray = (field) => {
    if (!field) return [];
    const value = Array.isArray(field) ? field.join(",") : field.toString();
    return value.split(",").map((c) => c.trim()).filter(Boolean);
  };
  const { slug } = Astro2.params;
  const allArticles = await getCollection("learn", ({ data }) => {
    return data.draft !== true ;
  });
  if (!allArticles || allArticles.length === 0) {
    return new Response(null, { status: 404 });
  }
  const allCategories = [
    ...new Set(allArticles.flatMap(
      (article) => normalizeToArray(article.data.categories)
    ))
  ];
  const category = allCategories.find((c) => slugify(c).toLowerCase() === slug?.toLowerCase());
  if (!category) {
    return new Response(null, { status: 404 });
  }
  const url = new URL(Astro2.request.url);
  const query = (url.searchParams.get("q") ?? "").trim().toLowerCase();
  const isSearching = query.length > 0;
  const filteredArticles = allArticles.filter((article) => {
    const categoriesArray = normalizeToArray(article.data.categories).map((c) => c.trim().toLowerCase());
    const inCategory = categoriesArray.includes(category.toLowerCase());
    if (!inCategory) return false;
    if (!isSearching) return true;
    const title = (article.data.title ?? "").toLowerCase();
    const slug2 = article.slug.toLowerCase();
    const cats = categoriesArray.join(",");
    return title.includes(query) || slug2.includes(query) || cats.includes(query);
  }).sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date).valueOf() : 0;
    const dateB = b.data.date ? new Date(b.data.date).valueOf() : 0;
    return dateB - dateA;
  });
  if (!filteredArticles || filteredArticles.length === 0) {
    return new Response(null, { status: 404 });
  }
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Learning Center", "description": "Tetrate's Learning Center: Discover expert insights, tutorials, and resources to elevate your understanding and implementation. Dive in now!", "headerClass": "nav__with__bg" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<div class="articles-wrapper"> ${renderComponent($$result2, "List", $$List, { "articles": paginatedArticles, "totalPages": totalPages, "currentPage": currentPage, "allCategories": allCategories, "currentCategory": category, "baseUrl": `/learn/categories/${slug}`, "noQuery": !isSearching, "hasResults": filteredArticles.length > 0 })} </div> ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/svetaco/Documents/Astro-my/src/pages/learn/categories/[slug].astro", void 0);
const $$file = "/Users/svetaco/Documents/Astro-my/src/pages/learn/categories/[slug].astro";
const $$url = "/learn/categories/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
