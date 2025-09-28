import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../../chunks/astro/server_tJGUTV3t.mjs';
import 'kleur/colors';
import { $ as $$ClientRouter } from '../../../../chunks/ClientRouter_xEeMg09M.mjs';
import { g as getCollection } from '../../../../chunks/_astro_content_CAQ5_t1n.mjs';
import { c as $$Layout } from '../../../../chunks/Grid_DBS8SqEi.mjs';
import { $ as $$Hero, a as $$List } from '../../../../chunks/List_Dv5ayJLh.mjs';
import { $ as $$Cta } from '../../../../chunks/Cta_DbZD441L.mjs';
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
  let allResources;
  try {
    allResources = await getCollection(
      "resources",
      ({ data }) => true ? data.draft !== true : true
    );
  } catch (error) {
    console.error("Error getting resources collection:", error);
    return new Response("Failed to load resources", { status: 500 });
  }
  const normalizeToArray = (field) => {
    if (!field) return [];
    return Array.isArray(field) ? field : [field];
  };
  const allCategories = [
    ...new Set(allResources.flatMap(
      (resource) => normalizeToArray(resource.data.categories).map((c) => c.trim())
    ))
  ];
  const category = allCategories.find(
    (c) => c.trim().toLowerCase().replace(/\s+/g, "-") === slug?.toLowerCase()
  );
  if (!category) {
    return new Response(null, { status: 404 });
  }
  const featuredResource = allResources.find((resource) => resource.slug === "teg-data-sheet") ?? allResources[0];
  const filteredResources = allResources.filter((resource) => {
    if (resource === featuredResource) return false;
    const resourceCategories = normalizeToArray(resource.data.categories).map((c) => c.trim().toLowerCase().replace(/\s+/g, "-"));
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
