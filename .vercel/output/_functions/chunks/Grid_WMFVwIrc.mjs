import { d as createAstro, c as createComponent, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as renderTemplate, r as renderComponent } from './astro/server_BorwNW6a.mjs';
import 'kleur/colors';
import clsx from 'clsx';
import { s as styles, a as styles$1 } from './agent-operations-director.008f52c0_CMiUcM-c.mjs';

const $$Astro$1 = createAstro("https://astro-my.vercel.app/");
const $$Pattern = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pattern;
  const {
    variant = "gray",
    size = "default",
    stopAtTop = false
  } = Astro2.props;
  const classes = [
    styles.pattern,
    styles[variant],
    styles[size],
    stopAtTop ? styles.patternStopAtTop : ""
  ].join(" ");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/svetaco/Documents/Astro-my/src/components/pattern/Pattern.astro", void 0);

const $$Astro = createAstro("https://astro-my.vercel.app/");
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Grid;
  const {
    variant = "default",
    withPattern = false,
    stopPatternAtTop = false
  } = Astro2.props;
  return renderTemplate`<!-- outside grid -->${maybeRenderHead()}<div${addAttribute(styles$1.grid, "class")}> <!-- top & bottom --> <div${addAttribute(clsx(
    "u-grid-bg",
    "u-grid-bg--top",
    variant === "blue" && "u-grid-bg--blue-primary u-grid-bg--top-0",
    variant === "default" && "u-grid-bg--primary u-grid-bg--top-0",
    variant === "default-offset" && "u-grid-bg--primary u-grid-bg--top-40 u-grid-bg--top-80-lg"
  ), "class")}></div> <div${addAttribute(clsx(
    "u-grid-bg",
    "u-grid-bg--top-thin",
    variant === "blue" && "u-grid-bg--blue-secondary u-grid-bg--top-0",
    variant === "default" && "u-grid-bg--secondary u-grid-bg--top-0",
    variant === "default-offset" && "u-grid-bg--secondary u-grid-bg--top-40 u-grid-bg--top-80-lg"
  ), "class")}></div> <div${addAttribute(clsx(
    "u-grid-bg",
    "u-grid-bg--bottom",
    variant === "blue" && "u-grid-bg--navy-primary",
    variant === "default" && "u-grid-bg--primary",
    variant === "default-offset" && "u-grid-bg--primary"
  ), "class")}></div> <div${addAttribute(clsx(
    "u-grid-bg",
    "u-grid-bg--bottom-thin",
    variant === "blue" && "u-grid-bg--navy-secondary",
    variant === "default" && "u-grid-bg--secondary",
    variant === "default-offset" && "u-grid-bg--secondary"
  ), "class")}></div> <!-- inside grid --> <div${addAttribute(styles$1.inside__grid, "class")}> <!-- LEFT PADDING --> <div${addAttribute(styles$1.leftPadding, "class")}> ${withPattern && renderTemplate`${renderComponent($$result, "Pattern", $$Pattern, { "variant": "gray", "size": "vertical", "stopAtTop": stopPatternAtTop })}`} </div> <!-- MAIN CONTENT --> <div${addAttribute(styles$1.main, "class")}> <!-- left & right --> <div${addAttribute(clsx(
    "u-grid-bg",
    "u-grid-bg--left",
    variant === "blue" && "u-grid-bg--gradient-border u-grid-bg--extended",
    variant === "default" && "u-grid-bg--primary",
    variant === "default-offset" && "u-grid-bg--primary"
  ), "class")}></div> <div${addAttribute(clsx(
    "u-grid-bg",
    "u-grid-bg--left-thin",
    variant === "blue" && "u-grid-bg--gradient-border u-grid-bg--extended",
    variant === "default" && "u-grid-bg--secondary",
    variant === "default-offset" && "u-grid-bg--secondary"
  ), "class")}></div> <div${addAttribute(clsx(
    "u-grid-bg",
    "u-grid-bg--right",
    variant === "blue" && "u-grid-bg--gradient-border u-grid-bg--extended",
    variant === "default" && "u-grid-bg--primary",
    variant === "default-offset" && "u-grid-bg--primary"
  ), "class")}></div> <div${addAttribute(clsx(
    "u-grid-bg",
    "u-grid-bg--right-thin",
    variant === "blue" && "u-grid-bg--gradient-border u-grid-bg--extended",
    variant === "default" && "u-grid-bg--secondary",
    variant === "default-offset" && "u-grid-bg--secondary"
  ), "class")}></div> <!-- dots --> <!-- top-left --> <div${addAttribute(clsx(
    "u-grid-bg-dot",
    "u-grid-bg-dot--large",
    "u-grid-bg-dot--top-left",
    variant === "blue" && "u-grid-bg--blue-primary u-grid-bg--top-0",
    variant === "default" && "u-grid-bg--primary u-grid-bg--top-0",
    variant === "default-offset" && "u-grid-bg--primary u-grid-bg--top-40 u-grid-bg--top-80-lg"
  ), "class")}></div> <div${addAttribute(clsx(
    "u-grid-bg-dot",
    "u-grid-bg-dot--small",
    "u-grid-bg-dot--top-left",
    variant === "blue" && "u-grid-bg--blue-secondary u-grid-bg--top-0",
    variant === "default" && "u-grid-bg--secondary u-grid-bg--top-0",
    variant === "default-offset" && "u-grid-bg--secondary u-grid-bg--top-40 u-grid-bg--top-80-lg"
  ), "class")}></div> <!-- top-right --> <div${addAttribute(clsx(
    "u-grid-bg-dot",
    "u-grid-bg-dot--large",
    "u-grid-bg-dot--top-right",
    variant === "blue" && "u-grid-bg--blue-primary u-grid-bg--top-0",
    variant === "default" && "u-grid-bg--primary u-grid-bg--top-0",
    variant === "default-offset" && "u-grid-bg--primary u-grid-bg--top-40 u-grid-bg--top-80-lg"
  ), "class")}></div> <div${addAttribute(clsx(
    "u-grid-bg-dot",
    "u-grid-bg-dot--small ",
    "u-grid-bg-dot--top-right",
    variant === "blue" && "u-grid-bg--blue-secondary u-grid-bg--top-0",
    variant === "default" && "u-grid-bg--secondary u-grid-bg--top-0",
    variant === "default-offset" && "u-grid-bg--secondary u-grid-bg--top-40 u-grid-bg--top-80-lg"
  ), "class")}></div> <!-- bottom-left --> <div${addAttribute(clsx(
    "u-grid-bg-dot",
    "u-grid-bg-dot--large",
    "u-grid-bg-dot--bottom-left",
    variant === "blue" && "u-grid-bg--navy-primary",
    variant === "default" && "u-grid-bg--primary",
    variant === "default-offset" && "u-grid-bg--primary"
  ), "class")}></div> <div${addAttribute(clsx(
    "u-grid-bg-dot",
    "u-grid-bg-dot--small",
    "u-grid-bg-dot--bottom-left",
    variant === "blue" && "u-grid-bg--navy-secondary",
    variant === "default" && "u-grid-bg--secondary",
    variant === "default-offset" && "u-grid-bg--secondary"
  ), "class")}></div> <!-- bottom-right --> <div${addAttribute(clsx(
    "u-grid-bg-dot",
    "u-grid-bg-dot--large",
    "u-grid-bg-dot--bottom-right",
    variant === "blue" && "u-grid-bg--navy-primary",
    variant === "default" && "u-grid-bg--primary",
    variant === "default-offset" && "u-grid-bg--primary"
  ), "class")}></div> <div${addAttribute(clsx(
    "u-grid-bg-dot",
    "u-grid-bg-dot--small",
    "u-grid-bg-dot--bottom-right",
    variant === "blue" && "u-grid-bg--navy-secondary",
    variant === "default" && "u-grid-bg--secondary",
    variant === "default-offset" && "u-grid-bg--secondary"
  ), "class")}></div> ${renderSlot($$result, $$slots["default"])} <!-- сюда пойдут карточки --> </div> <!-- RIGHT PADDING --> <div${addAttribute(styles$1.rightPadding, "class")}> ${withPattern && renderTemplate`${renderComponent($$result, "Pattern", $$Pattern, { "variant": "gray", "size": "vertical", "stopAtTop": stopPatternAtTop })}`} </div> </div> </div>`;
}, "/Users/svetaco/Documents/Astro-my/src/components/Grid/Grid.astro", void 0);

export { $$Grid as $, $$Pattern as a };
