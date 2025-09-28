import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_DH2DkwbL.mjs';
import 'kleur/colors';
import { c as $$Layout } from '../../../chunks/Grid_BWtxofxJ.mjs';
import { $ as $$Cta } from '../../../chunks/Cta_DtiOLuDi.mjs';
import { $ as $$Hero, a as $$List } from '../../../chunks/List_BCs-CvEE.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_BGf8VsMb.mjs';
import { $ as $$ClientRouter } from '../../../chunks/ClientRouter_DHx4b7Fz.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://astro-my.vercel.app/");
const prerender = false;
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const POSTS_PER_PAGE = 9;
  const { page } = Astro2.params;
  const currentPage = parseInt(page);
  const url = new URL(Astro2.request.url);
  const query = url.searchParams.get("q")?.toLowerCase() ?? "";
  if (!query) {
    return Astro2.redirect("/resources");
  }
  const resources = await getCollection(
    "resources",
    ({ data }) => data.draft !== true 
  );
  const normalizeToArray = (field) => Array.isArray(field) ? field : field ? [field] : [];
  const allCategories = [
    ...new Set(resources.flatMap((r) => normalizeToArray(r.data.categories)))
  ];
  const filteredResources = resources.filter((resource) => {
    const title = resource.data.title?.toLowerCase() ?? "";
    const categories = normalizeToArray(resource.data.categories).map((c) => c.toLowerCase()).join(" ");
    return title.includes(query) || categories.includes(query);
  }).sort((a, b) => {
    if (!a.data.date && !b.data.date) return 0;
    if (!a.data.date) return 1;
    if (!b.data.date) return -1;
    return new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf();
  });
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedResources = filteredResources.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredResources.length / POSTS_PER_PAGE);
  const foundResource = resources.find((resource) => resource.slug === "teg-data-sheet");
  const featuredResource = foundResource ?? resources[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resources", "description": "Search our resource center", "headerClass": "nav__with__bg", "bodyClass": "learn-page" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "featuredResource": featuredResource, "allCategories": allCategories, "currentCategory": void 0 })} ${maybeRenderHead()}<div data-articles-wrapper class="articles-wrapper"> ${renderComponent($$result2, "List", $$List, { "resources": paginatedResources, "totalPages": totalPages, "currentPage": currentPage, "baseUrl": "/resources/search" })} </div> ${renderComponent($$result2, "Cta", $$Cta, {})}  `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ClientRouter", $$ClientRouter, {})} ` })}` })}`;
}, "/Users/svetaco/Documents/Astro-my/src/pages/resources/search/[page].astro", void 0);
const $$file = "/Users/svetaco/Documents/Astro-my/src/pages/resources/search/[page].astro";
const $$url = "/resources/search/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
