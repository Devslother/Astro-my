import { c as createComponent, a as createAstro, b as renderTemplate, r as renderComponent, d as addAttribute, m as maybeRenderHead, e as renderScript, u as unescapeHTML, F as Fragment } from './astro/server_BPJnkSgl.mjs';
import 'kleur/colors';
import { b as $$Icon, c as $$Grid } from './Grid_4bd4D1Eq.mjs';
import { s as styles } from './_page_.000ecce2_lomUklzL.mjs';
import clsx from 'clsx';
import { s as styles$1, a as styles$2, b as styles$3, c as styles$4, d as styles$5 } from './_page_.6e316770_guNkrw9w.mjs';
import { $ as $$Figure } from './_astro_content_BjYV4lKw.mjs';
import { s as slugify, A as ArrowLeft, a as ArrowRight, N as Noposts } from './arrow-left_BerUHB0T.mjs';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$5 = createAstro();
const $$ResourcesSearchInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ResourcesSearchInput;
  const {
    placeholder = "Search\u2026",
    containerClass = "",
    id = "search-dynamic",
    baseUrl = "/resources/search/1"
  } = Astro2.props;
  const initial = "";
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "<label", "", "", " data-search> <div", "> ", " ", " </div> <input", ' name="q" type="search"', "", ' autocomplete="off"', "> ", ` </label> <script>
  document.addEventListener('DOMContentLoaded', function() {
    // \u0418\u0449\u0435\u043C input \u0440\u044F\u0434\u043E\u043C \u0441 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u043E\u0447\u0438\u0441\u0442\u043A\u0438
    const clearBtn = document.querySelector('[data-clear-btn]');
    const input = clearBtn?.closest('[data-search]')?.querySelector('input[type="search"]');
    
    if (input && clearBtn) {
      // \u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u043A\u043D\u043E\u043F\u043A\u0443 \u043F\u0440\u0438 \u0432\u0432\u043E\u0434\u0435
      input.addEventListener('input', function() {
        clearBtn.style.display = this.value ? 'block' : 'none';
      });
      
      // \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u043E\u0447\u0438\u0441\u0442\u043A\u0438
      clearBtn.addEventListener('click', function() {
        input.value = '';
        clearBtn.style.display = 'none';
        window.location.href = '/resources';
      });
    }
  });
<\/script>`])), maybeRenderHead(), addAttribute(clsx(styles.container, containerClass), "class"), addAttribute(id, "for"), addAttribute(baseUrl, "data-baseurl"), addAttribute(styles["icon-wrapper"], "class"), renderComponent($$result, "Icon", $$Icon, { "name": "search", "width": 16, "height": 16, "color": "var(--color-gray-700)", "data-search-icon": true, "class": clsx(
    "icon--search",
    styles["search-icon"]
  ) }), renderComponent($$result, "Icon", $$Icon, { "name": "arrowClockwise", "width": 16, "height": 16, "color": "var(--color-black)", "data-spinner": true, "class": clsx(
    "icon--search",
    styles.spinner
  ) }), addAttribute(id, "id"), addAttribute(placeholder, "placeholder"), addAttribute(initial, "value"), addAttribute(clsx(
    "text__body--14",
    "text__body--14--lg",
    "text__body--14--md",
    styles.input
  ), "class"), renderComponent($$result, "Icon", $$Icon, { "name": "close", "width": 16, "height": 16, "color": "var(--color-gray-700)", "data-clear-btn": true, "class": clsx(
    "icon--search",
    styles["clear-btn"]
  ) }));
}, "/Users/svetaco/Documents/Astro-my/src/components/search-input/ResourcesSearchInput.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro();
const $$CategoriesFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CategoriesFilter;
  const { categories, currentCategory } = Astro2.props;
  const uniqueCategories = [...new Set(
    categories.flatMap((cat) => cat.split(",").map((c) => c.trim()))
  )].sort((a, b) => a.localeCompare(b));
  const slugToLabel = Object.fromEntries(uniqueCategories.map((cat) => [slugify(cat), cat]));
  const selectedLabel = currentCategory ? slugToLabel[currentCategory] ?? currentCategory : "Select topic";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<div", '> <button type="button" id="category-button" aria-haspopup="listbox" aria-expanded="false"', "> <span", "> ", " </span> ", " </button> <div", ' id="category-dropdown" hidden role="listbox"> ', ' </div> <button id="clear-filters" type="button" style="display: none;"', ">\nClear\n", ' </button> </div> <script type="application/json" id="category-map">', "<\/script> ", ""])), maybeRenderHead(), addAttribute(styles$1.filter, "class"), addAttribute(styles$1.select__btn, "class"), addAttribute(clsx(
    "text__body--16",
    styles$1.label,
    { [styles$1.selected]: currentCategory && selectedLabel !== "Select topic" }
  ), "class"), selectedLabel, renderComponent($$result, "Icon", $$Icon, { "name": "arrow", "width": 24, "height": 24, "color": "var(--color-gray-800)", "class": styles$1.arrow }), addAttribute(styles$1.dropdown, "class"), uniqueCategories.map((category) => renderTemplate`<a${addAttribute(`/resources/category/${slugify(category)}`, "href")} role="option"${addAttribute(styles$1.option, "class")}${addAttribute(category === currentCategory, "aria-selected")}${addAttribute(slugify(category), "data-value")}> ${category} </a>`), addAttribute(clsx(
    "text__body--16",
    styles$1.reset
  ), "class"), renderComponent($$result, "Icon", $$Icon, { "name": "close", "width": 20, "height": 20, "color": "var(--color-gray-700)" }), unescapeHTML(JSON.stringify(slugToLabel)), renderScript($$result, "/Users/svetaco/Documents/Astro-my/src/parts/resources/categories-filter/CategoriesFilter.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/svetaco/Documents/Astro-my/src/parts/resources/categories-filter/CategoriesFilter.astro", void 0);

const $$Astro$3 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const { featuredResource, allCategories = [], currentCategory } = Astro2.props;
  if (!featuredResource) {
    throw new Error("Missing `featuredResource` prop in Hero");
  }
  const {
    data: { title, featuredImage, categories, hubspotFormId },
    slug
  } = featuredResource;
  const decodedTitle = decodeURIComponent(title);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles$2.hero, "class")}> <div${addAttribute(styles$2.container, "class")}> <div${addAttribute(styles$2.heading, "class")}> <h1${addAttribute(clsx(
    "text__heading--h4",
    "text__heading--h3-lg",
    "text__heading--h3-md",
    styles$2.title
  ), "class")}>
Tetrate Resources
</h1> <div${addAttribute(styles$2.filter, "class")}> <div${addAttribute(styles$2.categories, "class")}> ${allCategories.length > 0 && renderTemplate`${renderComponent($$result, "CategoriesFilter", $$CategoriesFilter, { "categories": allCategories, "currentCategory": currentCategory })}`} </div> ${renderComponent($$result, "ResourcesSearchInput", $$ResourcesSearchInput, { "placeholder": "Enter keywords...", "containerClass": styles$2.resource__input, "baseUrl": "/resources/search/1" })} </div> </div> <a${addAttribute(`/resources/${slug}`, "href")}${addAttribute(styles$2.resource__card, "class")}> <div${addAttribute(styles$2.featuredImage, "class")}> ${featuredImage && renderTemplate`${renderComponent($$result, "Figure", $$Figure, { "source": featuredImage, "alt": decodedTitle, "width": 800, "height": 400, "lightbox": false, "loading": "eager" })}`} </div> <div${addAttribute(styles$2.content, "class")}> <span${addAttribute(clsx(
    "text__body--14-medium",
    styles$2.tag
  ), "class")}>
Featured
</span> <h2${addAttribute(clsx(
    "text__heading--h6",
    "text__heading--h3-lg",
    "text__heading--h4-md",
    styles$2.title
  ), "class")}> ${decodedTitle} </h2> <div${addAttribute(clsx(
    "text__body--16-medium",
    "text__body--16-semibold-lg",
    "text__body--16-medium-md",
    styles$2.cta
  ), "class")}>
Learn more
${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "width": 24, "height": 24, "color": "var(--color-white)" })} </div> </div> </a> </div> </section>`;
}, "/Users/svetaco/Documents/Astro-my/src/parts/resources/hero/Hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, baseUrl, query } = Astro2.props;
  const getPageUrl = (page) => {
    let pagePath;
    const isCategoryPage = baseUrl.includes("/category/");
    if (page === 1) {
      pagePath = baseUrl;
    } else {
      if (isCategoryPage) {
        pagePath = `${baseUrl}/${page}`;
      } else {
        pagePath = `${baseUrl}/page/${page}`;
      }
    }
    if (query) {
      return `${pagePath}?${query}`;
    }
    const currentUrl = new URL(Astro2.url);
    const searchParams = currentUrl.searchParams.toString();
    if (searchParams) {
      return `${pagePath}?${searchParams}`;
    }
    return pagePath;
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
  ) })} </a> </li>`} ${getVisiblePages(currentPage, totalPages).map((pageNum, index) => renderTemplate`<li${addAttribute(styles$3.item, "class")}> ${pageNum === null ? renderTemplate`<button${addAttribute(clsx(styles$3.link, styles$3["link--ellipsis"]), "class")}${addAttribute(`window.location.href='${getPageUrl(
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
}, "/Users/svetaco/Documents/Astro-my/src/parts/resources/pagination/Pagination.astro", void 0);

const $$Astro$1 = createAstro();
const $$ResourceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResourceCard;
  const { resource } = Astro2.props;
  if (!resource) {
    throw new Error("Resource not found");
  }
  const { title, featuredImage, categories, date, description } = resource.data;
  const decodedTitle = decodeURIComponent(title);
  const dateObj = date ? new Date(date) : null;
  const formattedDate = dateObj ? dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }) : null;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(styles$4.card, "class")}> <a${addAttribute(`/resources/${resource.slug}`, "href")}${addAttribute(styles$4.link, "class")}> ${featuredImage && renderTemplate`<div${addAttribute(styles$4.card__image, "class")}> <img${addAttribute(featuredImage, "src")} loading="lazy"${addAttribute(decodedTitle, "alt")}${addAttribute(styles$4.image, "class")}> </div>`} <div${addAttribute(styles$4.content, "class")}> <div${addAttribute(styles$4.meta, "class")}> ${categories && renderTemplate`<div${addAttribute(styles$4.category, "class")}>${categories}</div>`} ${formattedDate && dateObj && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div${addAttribute(styles$4.metadivider, "class")}></div> <time${addAttribute(styles$4.date, "class")}${addAttribute(dateObj.toISOString(), "datetime")}> ${formattedDate} </time> ` })}`} </div> <h3${addAttribute(clsx(
    "text__heading--h6",
    "text__heading--h5-lg",
    "text__heading--h6-md",
    styles$4.title
  ), "class")}> ${decodedTitle} </h3> <p${addAttribute(clsx(
    "text__body--14",
    "text__body--12-md",
    "text__body--14-lg",
    styles$4.excerpt
  ), "class")}> ${description ?? "Explore this resource to learn more."} </p> <span${addAttribute(clsx(
    "text__body--16-semibold",
    styles$4.cta
  ), "class")}${addAttribute({ color: "var(--color-black)" }, "style")}>
Start now
${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "width": 24, "height": 24, "color": "var(--color-orange-500)" })} </span> </div> </a> </article>`;
}, "/Users/svetaco/Documents/Astro-my/src/parts/resources/resources-card/ResourceCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$List;
  const normalizeToString = (field) => {
    if (!field) return "";
    return Array.isArray(field) ? field.join(",") : field.toString();
  };
  const {
    resources,
    currentPage,
    totalPages,
    baseUrl
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", ' <script>\n	(() => {\n		const cards = document.querySelectorAll("[data-post]");\n		const input = document.getElementById("search-dynamic");\n\n		if (!input) return;\n\n		function handleSearch(query) {\n			const q = query.toLowerCase();\n			let matchesFound = false;\n\n			cards.forEach((card) => {\n				const title = card.dataset.title ?? "";\n				const slug = card.dataset.slug ?? "";\n				const categories = card.dataset.categories ?? "";\n\n				const matches =\n					title.includes(q) ||\n					slug.includes(q) ||\n					categories.includes(q);\n\n				card.style.display = matches ? "" : "none";\n				if (matches) matchesFound = true;\n			});\n\n			const noPosts = document.querySelector("[data-noposts]");\n			if (noPosts) {\n				noPosts.style.display = matchesFound ? "none" : "block";\n			}\n		}\n\n		input.addEventListener("input", (e) => {\n			handleSearch(e.target.value);\n		});\n	})();\n<\/script>'])), renderComponent($$result, "Grid", $$Grid, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(styles$5.list, "class")}> <div${addAttribute(styles$5.container, "class")}> ${resources.length > 0 ? resources.map((resource) => renderTemplate`<div data-post${addAttribute(resource.data.title?.toLowerCase() ?? "", "data-title")}${addAttribute(resource.slug?.toLowerCase() ?? "", "data-slug")}${addAttribute(normalizeToString(resource.data.categories).toLowerCase(), "data-categories")}> ${renderComponent($$result2, "ResourceCard", $$ResourceCard, { "resource": resource })} </div>`) : renderTemplate`<div${addAttribute(styles$5.noposts, "class")} data-noposts> ${renderComponent($$result2, "Noposts", Noposts, {})} <h2${addAttribute(clsx(
    "text__heading--h6",
    "text__heading--h6-lg",
    "text__heading--h6-md"
  ), "class")}>
No results found
</h2> <p${addAttribute(clsx(
    "text__body--16",
    "text__body--16--lg",
    "text__body--16--md",
    styles$5.text
  ), "class")}>
Please try adjust your filter criteria.
</p> </div>`} </div> <div data-pagination-wrapper> ${totalPages > 1 && renderTemplate`${renderComponent($$result2, "Pagination", $$Pagination, { "data-pagination": true, "currentPage": currentPage, "totalPages": totalPages, "baseUrl": baseUrl })}`} </div> </div> ` }));
}, "/Users/svetaco/Documents/Astro-my/src/parts/resources/list/List.astro", void 0);

export { $$Hero as $, $$List as a };
