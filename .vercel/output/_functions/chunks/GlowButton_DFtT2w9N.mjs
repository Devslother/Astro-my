import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate, g as renderSlot } from './astro/server_BPJnkSgl.mjs';
import 'kleur/colors';
import clsx from 'clsx';
import { s as styles } from './agent-operations-director.04dc6e18_BiaiDvZe.mjs';
import { f as $$Button } from './Grid_4bd4D1Eq.mjs';

const $$Astro = createAstro();
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
