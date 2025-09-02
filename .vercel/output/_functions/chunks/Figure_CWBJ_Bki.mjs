import { d as createAstro, c as createComponent, b as renderTemplate, m as maybeRenderHead, a as addAttribute, r as renderComponent, s as spreadAttributes } from './astro/server_BorwNW6a.mjs';
import { s as styles } from './_slug_.678c6558_xwuYw9Uh.mjs';
import { b as $$Icon } from './Layout_7tzu6nPn.mjs';
import './index_DfOMS8cV.mjs';
import { $ as $$Image } from './_astro_assets_Ca-MoApp.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro-my.vercel.app/");
const $$Figure = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Figure;
  const {
    source,
    caption,
    index,
    width,
    height
  } = Astro2.props;
  const alt = Astro2.props.alt ?? "Image";
  const lightbox = Astro2.props.lightbox !== false;
  let imageAsset = source;
  const isAstroAsset = imageAsset && imageAsset.src && imageAsset.format;
  isAstroAsset && imageAsset.format !== "svg";
  const isAstroSVG = isAstroAsset && imageAsset.format === "svg";
  const isRemoteSVG = typeof source === "string" && source.match(/\.svg(\?.*)?$/i);
  const isSVG = isAstroSVG || isRemoteSVG;
  function normalizeSrc(s) {
    return typeof s === "string" && s.startsWith("/wp-content") ? `https://tetrate.io${s}` : s;
  }
  const displaySrc = isAstroAsset ? imageAsset.src : normalizeSrc(source);
  const intrinsicWidth = isAstroAsset ? imageAsset.width : 800;
  const intrinsicHeight = isAstroAsset ? imageAsset.height : 600;
  return renderTemplate(_a || (_a = __template(["", '<script type="module">\n  // \u041E\u0431\u0449\u0438\u0439 \u0434\u0435\u043B\u0435\u0433\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043B\u0430\u0439\u0442\u0431\u043E\u043A\u0441\n  document.addEventListener("click", (e) => {\n    const trigger = e.target.closest?.("[data-lightbox-trigger]");\n    const close = e.target.closest?.("[data-lightbox-close]");\n\n    if (trigger) {\n      e.preventDefault();\n      const figure = trigger.closest("figure");\n      const lightbox = figure?.querySelector("[data-lightbox]");\n      if (lightbox) {\n        lightbox.classList.remove("lightbox--closing");\n        lightbox.classList.add("active");\n        document.body.style.overflow = "hidden";\n      }\n    }\n\n    if (close) {\n      e.preventDefault();\n      const lightbox = e.target.closest?.("[data-lightbox]");\n      if (lightbox) {\n        lightbox.classList.add("lightbox--closing");\n        lightbox.classList.remove("active");\n        document.body.style.overflow = "";\n        setTimeout(() => {\n          lightbox.classList.remove("lightbox--closing");\n        }, 300);\n      }\n    }\n  });\n\n  document.addEventListener("keydown", (e) => {\n    if (e.key === "Escape") {\n      const activeLightbox = document.querySelector(".lightbox.active");\n      if (activeLightbox) {\n        activeLightbox.classList.add("lightbox--closing");\n        activeLightbox.classList.remove("active");\n        document.body.style.overflow = "";\n        setTimeout(() => {\n          activeLightbox.classList.remove("lightbox--closing");\n        }, 300);\n      }\n    }\n  });\n<\/script>'])), displaySrc && renderTemplate`${maybeRenderHead()}<figure${addAttribute(styles.figure, "class")}${addAttribute(index, "data-figure-index")}><div${addAttribute(`${styles.imageWrapper} ${!lightbox ? styles.noLightbox : ""}`, "class")}${addAttribute(lightbox ? true : void 0, "data-lightbox-trigger")}>${isAstroAsset && !isSVG ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": source, "alt": alt, "width": intrinsicWidth, "height": intrinsicHeight, "class": styles.image, "quality": 90, "densities": [1, 2], "loading": "lazy" })}` : renderTemplate`<img${addAttribute(displaySrc, "src")}${addAttribute(alt, "alt")}${addAttribute(`${styles.image} ${isSVG ? styles.imageSvg : ""}`, "class")} loading="lazy"${spreadAttributes(!isSVG ? { width: intrinsicWidth, height: intrinsicHeight } : {})}${addAttribute(isSVG ? "width:100%;height:auto;max-width:100%;" : void 0, "style")} draggable="false">`}</div>${caption && renderTemplate`<figcaption${addAttribute(styles.caption, "class")}>${typeof index === "number" ? renderTemplate`<span${addAttribute(styles.index, "class")}>Figure ${index}: </span>` : null}${caption}</figcaption>`}${lightbox && renderTemplate`<div${addAttribute(styles.lightbox, "class")} data-lightbox><div${addAttribute(styles.backdrop, "class")} data-lightbox-close></div>${isAstroAsset && !isSVG ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": source, "alt": alt, "width": intrinsicWidth, "height": intrinsicHeight, "class": styles.lightboxImage, "quality": 100, "densities": [1, 2] })}` : renderTemplate`<img${addAttribute(displaySrc, "src")}${addAttribute(alt, "alt")}${addAttribute(`${styles.lightboxImage} ${isSVG ? styles.imageSvg : ""}`, "class")}${addAttribute(isSVG ? "max-width:95vw;max-height:90vh;width:auto;height:auto;" : void 0, "style")}${spreadAttributes(!isSVG ? { width: intrinsicWidth, height: intrinsicHeight } : {})} draggable="false">`}<button${addAttribute(styles.close, "class")} data-lightbox-close aria-label="Close lightbox">${renderComponent($$result, "Icon", $$Icon, { "name": "close", "width": 24, "height": 24, "color": "currentColor" })}</button></div>`}</figure>`);
}, "/Users/svetaco/Documents/Astro-my/src/components/content/figure/Figure.astro", void 0);

export { $$Figure as $ };
