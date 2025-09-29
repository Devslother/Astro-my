import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_BPJnkSgl.mjs';
import 'kleur/colors';
import { s as styles } from './index.93b52579_hdH-d1mE.mjs';
import { c as $$Grid, a as $$Picture, f as $$Button } from './Grid_4bd4D1Eq.mjs';
import { $ as $$GlowButton } from './GlowButton_DFtT2w9N.mjs';
import clsx from 'clsx';
import { T as TopLeftDesktop, a as TopLeftTablet, b as TopLeftMobile, B as BottomRighttDesktop, c as BottomRightTablet, d as BottomRightMobile, I as Image } from './logo_Q8L2Ax-g.mjs';

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles.cta, "class")}> ${renderComponent($$result, "Grid", $$Grid, { "withPattern": true, "stopPatternAtTop": true, "variant": "default-offset" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Picture", $$Picture, { "alt": "top-left", "srcMobile": TopLeftMobile.src, "srcTablet": TopLeftTablet.src, "srcDesktop": TopLeftDesktop.src, "class": styles.TopLeft })} ${renderComponent($$result2, "Picture", $$Picture, { "alt": "bottom-right", "srcMobile": BottomRightMobile.src, "srcTablet": BottomRightTablet.src, "srcDesktop": BottomRighttDesktop.src, "class": styles.BottomRight })} <div${addAttribute(styles.content, "class")}> ${renderComponent($$result2, "Image", Image, { "class": styles.logo })} <h5${addAttribute(clsx(
    "text__heading--h5",
    "text__heading--h2-lg",
    "text__heading--h4-md"
  ), "class")}>
Ready to
<span${addAttribute({ color: "var(--color-orange-500)" }, "style")}>
enhance your network
</span> <br class="u-hidden u-visible--md u-visible--lg">
with more intelligence?
</h5> <div${addAttribute(styles.btncontainer, "class")}> ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary", "size": "lg", "class": "text__body--16-semibold", "href": "https://tetrate.io/contact/demo-request/" }, { "default": ($$result3) => renderTemplate`
Request a demo
` })} ${renderComponent($$result2, "GlowButton", $$GlowButton, { "variant": "primary", "size": "lg", "buttonClassName": "text__body--16-semibold", "href": "https://tetrate.io/contact/pricing-request/" }, { "default": ($$result3) => renderTemplate`
Pricing Request
` })} </div> </div> ` })} </div>`;
}, "/Users/svetaco/Documents/Astro-my/src/parts/home/cta/Cta.astro", void 0);

export { $$Cta as $ };
