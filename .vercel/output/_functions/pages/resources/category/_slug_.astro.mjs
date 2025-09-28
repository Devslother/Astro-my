import { c as createAstro, a as createComponent } from '../../../chunks/astro/server_tJGUTV3t.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://astro-my.vercel.app/");
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { slug } = Astro2.params;
  return Astro2.redirect(`/resources/category/${slug}/1`);
}, "/Users/svetaco/Documents/Astro-my/src/pages/resources/category/[slug]/index.astro", void 0);

const $$file = "/Users/svetaco/Documents/Astro-my/src/pages/resources/category/[slug]/index.astro";
const $$url = "/resources/category/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
