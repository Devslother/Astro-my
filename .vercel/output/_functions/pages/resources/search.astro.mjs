import { c as createComponent, a as createAstro } from '../../chunks/astro/server_BPJnkSgl.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const url = new URL(Astro2.request.url);
  const query = url.searchParams.get("q");
  if (!query) {
    return Astro2.redirect("/resources");
  }
  return Astro2.redirect(`/resources/search/1?q=${encodeURIComponent(query)}`);
}, "/Users/svetaco/Documents/Astro-my/src/pages/resources/search/index.astro", void 0);

const $$file = "/Users/svetaco/Documents/Astro-my/src/pages/resources/search/index.astro";
const $$url = "/resources/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
