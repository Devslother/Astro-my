import { c as createAstro, a as createComponent, b as addAttribute, r as renderScript, d as renderTemplate } from './astro/server_tJGUTV3t.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://astro-my.vercel.app/");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/svetaco/Documents/Astro-my/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/svetaco/Documents/Astro-my/node_modules/astro/components/ClientRouter.astro", void 0);

export { $$ClientRouter as $ };
