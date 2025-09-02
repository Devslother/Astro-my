import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BorwNW6a.mjs';
import 'kleur/colors';
import { c as $$Layout } from '../chunks/Layout_7tzu6nPn.mjs';
import { g as getCollection } from '../chunks/_astro_content_UKccoAbA.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const resources = await getCollection("resources");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resources", "data-astro-cid-fmgelhwa": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-fmgelhwa> <div class="container" data-astro-cid-fmgelhwa> <h1 data-astro-cid-fmgelhwa>Resources</h1> <p data-astro-cid-fmgelhwa>Welcome to our resources section.</p> ${resources.length > 0 ? renderTemplate`<div class="resources-grid" data-astro-cid-fmgelhwa> ${resources.map((resource) => renderTemplate`<div class="resource-card" data-astro-cid-fmgelhwa> <h3 data-astro-cid-fmgelhwa>${resource.data.title}</h3> ${resource.data.description && renderTemplate`<p data-astro-cid-fmgelhwa>${resource.data.description}</p>`} ${resource.data.date && renderTemplate`<p class="date" data-astro-cid-fmgelhwa>${new Date(resource.data.date).toLocaleDateString()}</p>`} </div>`)} </div>` : renderTemplate`<p data-astro-cid-fmgelhwa>No resources available yet.</p>`} </div> </main> ` })} `;
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
