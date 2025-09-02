import { d as createAstro, c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderComponent, b as renderTemplate, e as renderSlot } from './astro/server_BorwNW6a.mjs';
import 'kleur/colors';
import clsx from 'clsx';
import { s as styles } from './agent-operations-director.41871cb9_BiaiDvZe.mjs';
import { a as $$Button } from './Layout_7tzu6nPn.mjs';

const $$Astro = createAstro("https://astro-my.vercel.app/");
const $$GlowButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GlowButton;
  const {
    containerClassName = "",
    buttonClassName = "",
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(clsx(styles.container, containerClassName), "class")}> <div${addAttribute(clsx(styles.layer, styles.orange), "class")}></div> <div${addAttribute(clsx(styles.layer, styles.white), "class")}></div> ${renderComponent($$result, "Button", $$Button, { "class": clsx(styles.button, buttonClassName), ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div>`;
}, "/Users/svetaco/Documents/Astro-my/src/components/Button/GlowButton.astro", void 0);

export { $$GlowButton as $ };
