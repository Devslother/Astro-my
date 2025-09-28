import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderComponent, d as renderTemplate, f as renderSlot } from './astro/server_DH2DkwbL.mjs';
import 'kleur/colors';
import clsx from 'clsx';
import { s as styles } from './agent-operations-director.6b76a26e_BiaiDvZe.mjs';
import { b as $$Button } from './Grid_BWtxofxJ.mjs';

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
