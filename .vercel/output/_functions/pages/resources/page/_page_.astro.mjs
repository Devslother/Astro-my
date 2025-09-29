import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_DH2DkwbL.mjs';
import 'kleur/colors';
import { $ as $$ClientRouter } from '../../../chunks/ClientRouter_UhjCRkZP.mjs';
import { c as $$Layout } from '../../../chunks/Grid_CjoLSW0o.mjs';
import { $ as $$Cta } from '../../../chunks/Cta_BdInT2Hy.mjs';
import { $ as $$Hero, a as $$List } from '../../../chunks/List_CXemoBoE.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_DLEUe-IA.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://astro-my.vercel.app");
async function getStaticPaths() {
  const POSTS_PER_PAGE = 9;
  const resources = await getCollection("resources", ({ data }) => {
    return data.draft !== true ;
  });
  const totalPages = Math.ceil((resources.length - 1) / POSTS_PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() }
  }));
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const POSTS_PER_PAGE = 9;
  const { page } = Astro2.params;
  const currentPage = parseInt(page || "1") || 1;
  const resources = await getCollection("resources", ({ data }) => {
    return data.draft !== true ;
  });
  const sortedResources = resources.sort(
    (a, b) => (b.data.date?.valueOf() || 0) - (a.data.date?.valueOf() || 0)
  );
  const normalizeToArray = (field) => {
    if (!field) return [];
    return Array.isArray(field) ? field : [field];
  };
  const allCategories = [
    ...new Set(resources.flatMap((resource) => normalizeToArray(resource.data.categories)))
  ];
  const foundResource = resources.find((resource) => resource.slug === "teg-data-sheet");
  const featuredResource = foundResource ?? resources[0];
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedResources = sortedResources.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedResources.length / POSTS_PER_PAGE);
  if (currentPage === 1) {
    return Astro2.redirect("/resources");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resources", "description": "Browse articles, guides, and more", "headerClass": "nav__with__bg", "bodyClass": "resources-page" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "featuredResource": featuredResource, "allCategories": allCategories, "currentCategory": void 0 })} ${maybeRenderHead()}<div data-resources-wrapper class="resources-wrapper"> ${renderComponent($$result2, "List", $$List, { "resources": paginatedResources, "totalPages": totalPages, "currentPage": currentPage, "baseUrl": "/resources" })} </div> ${renderComponent($$result2, "Cta", $$Cta, {})}  `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ClientRouter", $$ClientRouter, {})} ` })}` })}`;
}, "/Users/svetaco/Documents/Astro-my/src/pages/resources/page/[page].astro", void 0);
const $$file = "/Users/svetaco/Documents/Astro-my/src/pages/resources/page/[page].astro";
const $$url = "/resources/page/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
