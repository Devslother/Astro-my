import { a as createComponent, e as renderComponent, d as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_DH2DkwbL.mjs';
import 'kleur/colors';
import { c as $$Layout } from '../chunks/Grid_CjoLSW0o.mjs';
import { $ as $$Cta } from '../chunks/Cta_BdInT2Hy.mjs';
import { $ as $$Hero, a as $$List } from '../chunks/List_DuAcWGHx.mjs';
import { g as getCollection } from '../chunks/_astro_content_C7ilPGdO.mjs';
import { $ as $$ClientRouter } from '../chunks/ClientRouter_UhjCRkZP.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const ITEMS_PER_PAGE = 9;
  const currentPage = 1;
  const resources = await getCollection(
    "resources",
    ({ data }) => data.draft !== true 
  );
  const filteredResources = resources.sort((a, b) => {
    if (!a.data.date && !b.data.date) return 0;
    if (!a.data.date) return 1;
    if (!b.data.date) return -1;
    return new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf();
  });
  const normalizeToArray = (field) => {
    if (!field) return [];
    const value = Array.isArray(field) ? field.join(",") : field.toString();
    return value.split(",").map((c) => c.trim()).filter(Boolean);
  };
  const allCategories = [
    ...new Set(resources.flatMap((resource) => normalizeToArray(resource.data.categories)))
  ];
  const foundResource = resources.find((resource) => resource.slug === "teg-data-sheet");
  const featuredResource = foundResource ?? resources[0];
  const resourcesWithoutFeatured = filteredResources.filter(
    (resource) => resource !== featuredResource
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedResources = resourcesWithoutFeatured.slice(startIndex, endIndex);
  const totalPages = Math.ceil(resourcesWithoutFeatured.length / ITEMS_PER_PAGE);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resources for Kubernetes Ingress and Enterprise Istio Support", "description": "Access Tetrate's extensive resources covering everything from microservices security to service mesh technology. Stay informed with our diverse range of articles, whitepapers, and guides.", "headerClass": "nav__with__bg", "bodyClass": "learn-page" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "featuredResource": featuredResource, "allCategories": allCategories, "currentCategory": void 0 })} ${maybeRenderHead()}<div data-articles-wrapper class="articles-wrapper"> ${renderComponent($$result2, "List", $$List, { "resources": paginatedResources, "totalPages": totalPages, "currentPage": currentPage, "baseUrl": "/resources" })} </div> ${renderComponent($$result2, "Cta", $$Cta, {})}  `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ClientRouter", $$ClientRouter, {})} ` })}` })}`;
}, "/Users/svetaco/Documents/Astro-my/src/pages/resources/index.astro", void 0);
const $$file = "/Users/svetaco/Documents/Astro-my/src/pages/resources/index.astro";
const $$url = "/resources";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
