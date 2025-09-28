import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../../chunks/astro/server_DH2DkwbL.mjs';
import 'kleur/colors';
import { $ as $$ClientRouter } from '../../../../chunks/ClientRouter_DHx4b7Fz.mjs';
import { g as getCollection } from '../../../../chunks/_astro_content_BGf8VsMb.mjs';
import { c as $$Layout } from '../../../../chunks/Grid_BWtxofxJ.mjs';
import { $ as $$Hero, a as $$List } from '../../../../chunks/List_BCs-CvEE.mjs';
import { $ as $$Cta } from '../../../../chunks/Cta_DtiOLuDi.mjs';
import { s as slugify } from '../../../../chunks/arrow-left_DFDgFZ_G.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://astro-my.vercel.app/");
const prerender = false;
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const ITEMS_PER_PAGE = 9;
  const { slug, page } = Astro2.params;
  const currentPage = parseInt(page || "1");
  const url = new URL(Astro2.request.url);
  const query = (url.searchParams.get("q") ?? "").trim().toLowerCase();
  const allResources = await getCollection(
    "resources",
    ({ data }) => data.draft !== true 
  );
  const normalizeToArray = (field) => {
    if (!field) return [];
    return Array.isArray(field) ? field : [field];
  };
  const allCategories = [
    ...new Set(allResources.flatMap(
      (resource) => normalizeToArray(resource.data.categories).map((c) => c.trim())
    ))
  ];
  const category = allCategories.find((c) => slugify(c) === slug?.toLowerCase());
  if (!category) {
    return new Response(null, { status: 404 });
  }
  const featuredResource = allResources.find((resource) => resource.slug === "teg-data-sheet") ?? allResources[0];
  const filteredResources = allResources.filter((resource) => {
    if (resource === featuredResource) return false;
    const resourceCategories = normalizeToArray(resource.data.categories).map((c) => slugify(c.trim()).toLowerCase());
    const isInCategory = resourceCategories.includes(slug.toLowerCase());
    if (!isInCategory) return false;
    if (query) {
      const title = (resource.data.title ?? "").toLowerCase();
      const resourceSlug = resource.slug.toLowerCase();
      return title.includes(query) || resourceSlug.includes(query);
    }
    return true;
  });
  filteredResources.sort((a, b) => (b.data.date?.valueOf() || 0) - (a.data.date?.valueOf() || 0));
  const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedResources = filteredResources.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Resources in ${category}`, "description": "Filtered resources", "headerClass": "nav__with__bg" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "featuredResource": featuredResource, "allCategories": allCategories, "currentCategory": category })} ${maybeRenderHead()}<div data-articles-wrapper class="articles-wrapper"> ${renderComponent($$result2, "List", $$List, { "resources": paginatedResources, "totalPages": totalPages, "currentPage": currentPage, "baseUrl": `/resources/category/${slug}` })} </div> ${renderComponent($$result2, "Cta", $$Cta, {})}  `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ClientRouter", $$ClientRouter, {})} ` })}` })}`;
}, "/Users/svetaco/Documents/Astro-my/src/pages/resources/category/[slug]/[page].astro", void 0);
const $$file = "/Users/svetaco/Documents/Astro-my/src/pages/resources/category/[slug]/[page].astro";
const $$url = "/resources/category/[slug]/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
