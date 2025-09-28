import { a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderComponent, d as renderTemplate, c as createAstro, r as renderScript, u as unescapeHTML } from './astro/server_tJGUTV3t.mjs';
import 'kleur/colors';
import { s as styles, a as styles$1, b as styles$2, c as styles$3, d as styles$4, e as styles$6 } from './_slug_.1783ec48_Cp6i02OL.mjs';
import { a as $$Picture, e as $$Icon, $ as $$Grid } from './Grid_DBS8SqEi.mjs';
import clsx from 'clsx';
import { s as slugify, A as ArrowLeft, a as ArrowRight, N as Noposts } from './arrow-left_DM11I3C-.mjs';
import { $ as $$Figure } from './_astro_content_CAQ5_t1n.mjs';
import { s as styles$5 } from './_page_.000ecce2_lomUklzL.mjs';

const imageMobile = new Proxy({"src":"/_astro/hero-mobile.BW0w1q_7.png","width":750,"height":920,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/svetaco/Documents/Astro-my/src/assets/learn/hero-mobile.png";
							}
							
							return target[name];
						}
					});

const imageTablet = new Proxy({"src":"/_astro/hero-tablet.B5epaC9C.png","width":1536,"height":730,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/svetaco/Documents/Astro-my/src/assets/learn/hero-tablet.png";
							}
							
							return target[name];
						}
					});

const imageDesktop = new Proxy({"src":"/_astro/hero-desktop.qGSQJdGn.png","width":2880,"height":952,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/svetaco/Documents/Astro-my/src/assets/learn/hero-desktop.png";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles.hero, "class")}> ${renderComponent($$result, "Picture", $$Picture, { "alt": "bg", "srcMobile": imageMobile.src, "srcTablet": imageTablet.src, "srcDesktop": imageDesktop.src, "class": styles.hero__bg })} <div${addAttribute(styles.hero__content, "class")}> <h1 class="text__heading--h4
      text__heading--h1-lg
      text__heading--h3-md">
Learning
<br class="u-visible u-visible--md u-hidden--lg">
Center
</h1> </div> </div>`;
}, "/Users/svetaco/Documents/Astro-my/src/parts/learn/hero/Hero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://astro-my.vercel.app/");
const $$CategoriesFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CategoriesFilter;
  const { currentCategory, categories } = Astro2.props;
  const uniqueCategories = [...new Set(
    categories.flatMap((cat) => cat.split(",").map((c) => c.trim()))
  )].sort((a, b) => a.localeCompare(b));
  const slugToLabel = Object.fromEntries(uniqueCategories.map((cat) => [slugify(cat), cat]));
  const selectedLabel = currentCategory ? slugToLabel[currentCategory] ?? currentCategory : "Select category";
  return renderTemplate(_a || (_a = __template(["", "<div", '> <button type="button" id="category-button" aria-haspopup="listbox" aria-expanded="false"', "> <span", "> ", " </span> ", " </button> <div", ' id="category-dropdown" hidden role="listbox"> ', ' </div> <button id="clear-filters" type="button" style="display: none;"', ">\nClear\n", ' </button> </div> <script type="application/json" id="category-map">', "<\/script> ", ""])), maybeRenderHead(), addAttribute(styles$1.filter, "class"), addAttribute(styles$1.select__btn, "class"), addAttribute(clsx(
    "text__body--16",
    styles$1.label,
    { [styles$1.selected]: currentCategory }
  ), "class"), selectedLabel, renderComponent($$result, "Icon", $$Icon, { "name": "arrow", "width": 24, "height": 24, "color": "var(--color-gray-800)", "class": styles$1.arrow }), addAttribute(styles$1.dropdown, "class"), uniqueCategories.map((category) => renderTemplate`<a role="option"${addAttribute(styles$1.option, "class")}${addAttribute(`/learn/categories/${slugify(category)}`, "href")}${addAttribute(category === currentCategory, "aria-selected")}${addAttribute(slugify(category), "data-value")} data-option> ${category} </a>`), addAttribute(clsx(
    "text__body--16",
    styles$1.reset
  ), "class"), renderComponent($$result, "Icon", $$Icon, { "name": "close", "width": 20, "height": 20, "color": "var(--color-gray-700)" }), unescapeHTML(JSON.stringify(slugToLabel)), renderScript($$result, "/Users/svetaco/Documents/Astro-my/src/parts/learn/categories-filter/CategoriesFilter.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/svetaco/Documents/Astro-my/src/parts/learn/categories-filter/CategoriesFilter.astro", void 0);

const $$Astro$4 = createAstro("https://astro-my.vercel.app/");
const $$CategoriesList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CategoriesList;
  const { currentCategory, categories } = Astro2.props;
  const uniqueCategories = [...new Set(
    categories.flatMap((cat) => cat.split(",").map((c) => c.trim()))
  )].sort((a, b) => a.localeCompare(b));
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles$2.filter, "class")}> <ul${addAttribute(styles$2.list, "class")} data-list> <li${addAttribute(clsx(
    "text__body--14-md",
    styles$2.item,
    { [styles$2.active]: !currentCategory }
  ), "class")} data-item data-slug="__all__"> <a href="/learn">All articles</a> </li> ${uniqueCategories.map((category) => {
    const slug = slugify(category);
    return renderTemplate`<li${addAttribute(clsx(
      "text__body--14-md",
      styles$2.item,
      { [styles$2.active]: currentCategory === slug }
    ), "class")} data-item${addAttribute(slug, "data-slug")}> <a${addAttribute(`/learn/categories/${slug}`, "href")}> ${category} </a> </li>`;
  })} </ul> </div> ${renderScript($$result, "/Users/svetaco/Documents/Astro-my/src/parts/learn/categories-list/CategoriesList.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/svetaco/Documents/Astro-my/src/parts/learn/categories-list/CategoriesList.astro", void 0);

const $$Astro$3 = createAstro("https://astro-my.vercel.app/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, baseUrl = "/learn" } = Astro2.props;
  const getPageUrl = (page) => {
    const currentUrl = new URL(Astro2.url);
    const queryString = currentUrl.search;
    const pagePath = page === 1 ? baseUrl : `${baseUrl}/page/${page}`;
    return `${pagePath}${queryString}`;
  };
  const getVisiblePages = (current, total) => {
    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    if (current <= 3) {
      return [1, 2, 3, 4, null, total];
    }
    if (current >= total - 2) {
      return [1, null, total - 3, total - 2, total - 1, total];
    }
    return [1, null, current - 1, current, current + 1, null, total];
  };
  return renderTemplate`${maybeRenderHead()}<nav data-pagination${addAttribute(styles$3.pagination, "class")} aria-label="Pagination"> <ul${addAttribute(styles$3.list, "class")}> ${currentPage > 1 && renderTemplate`<li${addAttribute(styles$3.item, "class")}> <a${addAttribute(getPageUrl(currentPage - 1), "href")}${addAttribute(clsx(styles$3.link, styles$3["link--prev"]), "class")} aria-label="Previous page" data-astro-reload> ${renderComponent($$result, "ArrowLeft", ArrowLeft, { "class": clsx(
    styles$3.arrow,
    "arrow-pag"
  ) })} </a> </li>`} ${getVisiblePages(currentPage, totalPages).map((pageNum, index, array) => renderTemplate`<li${addAttribute(styles$3.item, "class")}> ${pageNum === null ? renderTemplate`<button${addAttribute(clsx(styles$3.link, styles$3["link--ellipsis"]), "class")}${addAttribute(`window.location.href='${getPageUrl(
    index === 1 ? currentPage - 1 : currentPage + 1
  )}'`, "onclick")} aria-label="More pages">
...
</button>` : renderTemplate`<a${addAttribute(getPageUrl(pageNum), "href")}${addAttribute(clsx(
    styles$3.link,
    pageNum === currentPage && styles$3["link--active"]
  ), "class")}${addAttribute(`Page ${pageNum}`, "aria-label")}${addAttribute(pageNum === currentPage ? "page" : void 0, "aria-current")} data-astro-reload> ${pageNum} </a>`} </li>`)} ${currentPage < totalPages && renderTemplate`<li${addAttribute(styles$3.item, "class")}> <a${addAttribute(getPageUrl(currentPage + 1), "href")}${addAttribute(clsx(styles$3.link, styles$3["link--next"]), "class")} aria-label="Next page" data-astro-reload> ${renderComponent($$result, "ArrowRight", ArrowRight, { "class": clsx(
    styles$3.arrow,
    "arrow-pag"
  ) })} </a> </li>`} </ul> </nav>`;
}, "/Users/svetaco/Documents/Astro-my/src/parts/learn/pagination/Pagination.astro", void 0);

const $$Astro$2 = createAstro("https://astro-my.vercel.app/");
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { article } = Astro2.props;
  const { title, featuredImage, excerpt, description } = article.data;
  const decodedTitle = decodeURIComponent(title);
  const isUrl = typeof featuredImage === "string";
  const isLocal = typeof featuredImage === "object" && featuredImage && "src" in featuredImage;
  const resolvedUrl = isUrl && featuredImage.startsWith("/wp-content") ? `https://tetrate.io${featuredImage}` : featuredImage;
  const text = (description ?? excerpt ?? "").trim();
  const showText = text.length > 0 && text.toLowerCase() !== decodedTitle.trim().toLowerCase();
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(styles$4.card, "class")}> <a${addAttribute(`/learn/${article.slug}`, "href")}${addAttribute(styles$4.link, "class")}> <div${addAttribute(styles$4.content, "class")}> ${featuredImage && renderTemplate`<div${addAttribute(styles$4.featuredImage, "class")}> ${isUrl ? renderTemplate`<img${addAttribute(resolvedUrl, "src")}${addAttribute(decodedTitle, "alt")} loading="lazy">` : isLocal ? renderTemplate`${renderComponent($$result, "Figure", $$Figure, { "source": featuredImage, "width": "100%", "lightbox": false, "alt": decodedTitle })}` : null} </div>`} <div${addAttribute(styles$4.heading, "class")}> <h3${addAttribute(clsx(
    "text__heading--h6",
    "text__heading--h5-lg",
    "text__heading--h4-md",
    styles$4.title
  ), "class")}> ${decodedTitle} </h3> ${showText && renderTemplate`<p${addAttribute(clsx(
    "text__body--16",
    styles$4.description
  ), "class")}> ${text} </p>`} </div> <span${addAttribute(clsx(
    "text__body--16-semibold",
    styles$4.cta
  ), "class")}${addAttribute({ color: "var(--color-black)" }, "style")}>
Read more
${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "width": 24, "height": 24, "color": "var(--color-orange-500)" })} </span> </div> </a> </article>`;
}, "/Users/svetaco/Documents/Astro-my/src/parts/learn/article-card/ArticleCard.astro", void 0);

const $$Astro$1 = createAstro("https://astro-my.vercel.app/");
const $$SearchInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SearchInput;
  const {
    placeholder = "Search\u2026",
    containerClass = "",
    id = "search-dynamic",
    baseUrl = "/learn/search/1"
  } = Astro2.props;
  const initial = Astro2.url.searchParams.get("q") ?? "";
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(clsx(styles$5.container, containerClass), "class")}${addAttribute(id, "for")}${addAttribute(baseUrl, "data-baseurl")} data-search> <div${addAttribute(styles$5["icon-wrapper"], "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "width": 16, "height": 16, "color": "var(--color-gray-700)", "data-search-icon": true, "class": clsx(
    "icon--search",
    styles$5["search-icon"]
  ) })} ${renderComponent($$result, "Icon", $$Icon, { "name": "arrowClockwise", "width": 16, "height": 16, "color": "var(--color-black)", "data-spinner": true, "class": clsx(
    "icon--search",
    styles$5.spinner
  ) })} </div> <input${addAttribute(id, "id")} name="q" type="search"${addAttribute(placeholder, "placeholder")}${addAttribute(initial, "value")} autocomplete="off"${addAttribute(clsx(
    "text__body--14",
    "text__body--14--lg",
    "text__body--14--md",
    styles$5.input
  ), "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "close", "width": 16, "height": 16, "color": "var(--color-gray-700)", "data-clear-btn": true, "class": clsx(
    "icon--search",
    styles$5["clear-btn"]
  ) })} </label>`;
}, "/Users/svetaco/Documents/Astro-my/src/components/search-input/SearchInput.astro", void 0);

const $$Astro = createAstro("https://astro-my.vercel.app/");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$List;
  const normalizeToString = (field) => {
    if (!field) return "";
    return Array.isArray(field) ? field.join(",") : field.toString();
  };
  const {
    articles,
    currentPage,
    totalPages,
    allCategories,
    currentCategory,
    noQuery,
    hasResults
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Grid", $$Grid, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(styles$6.list, "class")}> <div${addAttribute(clsx(
    "u-hidden--md",
    styles$6.filter
  ), "class")}> <div${addAttribute(styles$6.categories, "class")}> ${allCategories.length > 0 && renderTemplate`${renderComponent($$result2, "CategoriesFilter", $$CategoriesFilter, { "categories": allCategories, "currentCategory": currentCategory })}`} </div> ${renderComponent($$result2, "SearchInput", $$SearchInput, { "placeholder": "Search article...", "containerClass": styles$6.learn__input, "id": "search-input-mobile", "baseUrl": "/learn/search/1" })} </div> <div${addAttribute(styles$6.article, "class")}> <div${addAttribute(clsx(
    "u-hidden",
    "u-visible--md",
    styles$6.filter
  ), "class")}> ${renderComponent($$result2, "SearchInput", $$SearchInput, { "placeholder": "Search article...", "containerClass": styles$6.learn__input, "id": "search-input-desktop", "baseUrl": "/learn/search/1" })} <div${addAttribute(styles$6.categories, "class")}> ${allCategories.length > 0 && renderTemplate`${renderComponent($$result2, "CategoriesList", $$CategoriesList, { "categories": allCategories, "currentCategory": currentCategory })}`} </div> </div> <div${addAttribute(styles$6.grid, "class")}> <div${addAttribute(styles$6.wrapper, "class")}> ${articles.length > 0 && articles.map((article) => renderTemplate`<div data-article${addAttribute(article.data.title?.toLowerCase() ?? "", "data-title")}${addAttribute(article.slug?.toLowerCase() ?? "", "data-slug")}${addAttribute(normalizeToString(article.data.categories).toLowerCase(), "data-categories")}> ${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })} </div>`)} </div> ${!noQuery && !hasResults ? renderTemplate`<div data-noposts${addAttribute(styles$6.noposts, "class")}> ${renderComponent($$result2, "Noposts", Noposts, {})} <h2${addAttribute(clsx(
    "text__heading--h6",
    "text__heading--h6-lg",
    "text__heading--h6-md"
  ), "class")}>
No results found
</h2> <p${addAttribute(clsx(
    "text__body--16",
    "text__body--16--lg",
    "text__body--16--md",
    styles$6.text
  ), "class")}>
Please try adjust your filter criteria.
</p> </div>` : null} <div data-pagination-wrapper> ${totalPages > 1 && renderTemplate`${renderComponent($$result2, "Pagination", $$Pagination, { "data-pagination": true, "currentPage": currentPage, "totalPages": totalPages, "baseUrl": "/learn" })}`} </div> </div> </div> </div> ` })}`;
}, "/Users/svetaco/Documents/Astro-my/src/parts/learn/list/List.astro", void 0);

export { $$Hero as $, $$List as a };
