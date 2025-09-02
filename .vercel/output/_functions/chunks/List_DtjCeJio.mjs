import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderComponent, b as renderTemplate, d as createAstro, u as unescapeHTML, f as renderScript } from './astro/server_BorwNW6a.mjs';
import 'kleur/colors';
import { s as styles, a as styles$1, b as styles$2, c as styles$3, d as styles$4, e as styles$5, f as styles$6 } from './_slug_.1783ec48_DmgT1dFF.mjs';
import { $ as $$Picture, d as createSvgComponent, b as $$Icon } from './Layout_7tzu6nPn.mjs';
import { $ as $$Grid } from './Grid_WMFVwIrc.mjs';
import clsx from 'clsx';
import { $ as $$Figure } from './Figure_CWBJ_Bki.mjs';

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

const Noposts = createSvgComponent({"meta":{"src":"/_astro/no-posts.2S-FXQ57.svg","width":98,"height":105,"format":"svg"},"attributes":{"width":"98","height":"105","fill":"none","viewBox":"0 0 98 105"},"children":"<g filter=\"url(#a)\"><rect width=\"57.866\" height=\"64.35\" x=\"20.066\" y=\"20.596\" fill=\"#CECECE\" fill-opacity=\".6\" rx=\"13.2\" /></g><path fill=\"#FEFEFE\" stroke=\"#EBECEC\" stroke-width=\"1.322\" d=\"M16.661 42.8c0-5.051 0-8.8.243-11.768.242-2.961.721-5.087 1.647-6.904a17.34 17.34 0 0 1 7.577-7.577c1.817-.925 3.943-1.405 6.904-1.647 2.968-.242 6.717-.243 11.768-.243h8.4c5.051 0 8.8 0 11.769.243 2.96.242 5.086.722 6.903 1.647a17.34 17.34 0 0 1 7.577 7.577c.925 1.817 1.405 3.943 1.647 6.904.242 2.968.243 6.717.243 11.768v8.4c0 5.051 0 8.8-.243 11.768-.242 2.961-.722 5.087-1.647 6.904a17.34 17.34 0 0 1-7.577 7.577c-1.817.925-3.943 1.405-6.903 1.647-2.969.242-6.718.243-11.769.243h-8.4c-5.051 0-8.8 0-11.768-.243-2.961-.242-5.087-.722-6.904-1.647a17.34 17.34 0 0 1-7.577-7.577c-.925-1.817-1.405-3.943-1.647-6.904-.242-2.968-.243-6.717-.243-11.768v-8.4Z\" /><path fill=\"#9D9E9F\" d=\"M31.04 32.406c-.063.363-.064.843-.064 1.565v27.546c0 1.08 0 1.62.21 2.033.185.363.48.658.843.843.412.21.952.21 2.033.21h21.334c.418 0 .756 0 1.037-.013-.392.188-.926.222-1.924.277l-21.302 1.188c-1.078.06-1.618.09-2.042-.097a1.929 1.929 0 0 1-.887-.795c-.233-.4-.264-.94-.324-2.017l-1.533-27.504c-.06-1.079-.09-1.618.097-2.041.164-.373.442-.684.794-.89.362-.21.84-.253 1.727-.305Z\" /><path fill=\"#9D9E9F\" d=\"M56.139 29.125c1.08 0 1.62 0 2.033.21.363.185.658.48.843.843.21.412.21.953.21 2.033v27.546c0 1.08 0 1.62-.21 2.033-.185.363-.48.658-.843.843-.413.21-.953.21-2.033.21H35.69c-1.08 0-1.62 0-2.033-.21a1.93 1.93 0 0 1-.843-.843c-.21-.413-.21-.953-.21-2.033V32.21c0-1.08 0-1.62.21-2.033a1.93 1.93 0 0 1 .843-.843c.413-.21.953-.21 2.033-.21H56.14ZM39.205 49.072a1.205 1.205 0 1 0 0 2.41h13.02a1.206 1.206 0 1 0 0-2.41h-13.02Zm0-5.16a1.205 1.205 0 0 0 0 2.41h13.02a1.206 1.206 0 0 0 0-2.41h-13.02Zm0-5.162a1.205 1.205 0 0 0 0 2.411h13.02a1.206 1.206 0 0 0 0-2.411h-13.02Z\" /><path fill=\"white\" d=\"M58.244 61.83c7.84 0 14.197-6.356 14.197-14.197 0-7.841-6.356-14.198-14.197-14.198-7.84 0-14.197 6.357-14.197 14.198 0 7.84 6.356 14.197 14.197 14.197Z\" /><path fill=\"white\" stroke=\"#9D9E9F\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.662\" d=\"M58.159 57.927c5.749 0 10.409-4.66 10.409-10.409 0-5.748-4.66-10.409-10.41-10.409-5.748 0-10.408 4.66-10.408 10.41 0 5.748 4.66 10.408 10.409 10.408Z\" /><path fill=\"#9D9E9F\" d=\"M58.388 41.504c1.115 0 2.01.303 2.686.91.687.595 1.03 1.419 1.03 2.472 0 1.042-.338 1.84-1.014 2.393-.675.542-1.57.813-2.686.813l-.065 1.229h-1.978l-.08-2.712h.723c.933 0 1.652-.123 2.156-.367.504-.245.756-.691.756-1.34 0-.468-.14-.84-.418-1.117-.268-.276-.638-.415-1.11-.415-.494 0-.88.133-1.159.4-.268.265-.402.632-.402 1.1h-2.123c-.011-.649.128-1.228.418-1.739.29-.51.713-.91 1.27-1.196.57-.288 1.234-.431 1.996-.431Zm-1.046 11.63c-.407 0-.745-.123-1.014-.367a1.274 1.274 0 0 1-.386-.942c0-.372.13-.68.386-.925.269-.255.606-.383 1.014-.383.397 0 .724.128.981.383.258.245.386.553.386.925 0 .373-.128.686-.386.942-.257.244-.584.366-.981.366Z\" /><path stroke=\"#9D9E9F\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.662\" d=\"M72.375 62.129 65.5 55.254\" /><defs><filter id=\"a\" width=\"97.467\" height=\"103.95\" x=\".266\" y=\".796\" color-interpolation-filters=\"sRGB\" filterUnits=\"userSpaceOnUse\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" /><feBlend in=\"SourceGraphic\" in2=\"BackgroundImageFix\" mode=\"normal\" result=\"shape\" /><feGaussianBlur result=\"effect1_foregroundBlur_9801_118159\" stdDeviation=\"9.9\" /></filter></defs>"});

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://astro-my.vercel.app/");
const $$CategoriesFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CategoriesFilter;
  const { currentCategory, categories } = Astro2.props;
  const uniqueCategories = [...new Set(
    categories.flatMap((cat) => cat.split(",").map((c) => c.trim()))
  )].sort((a, b) => a.localeCompare(b));
  const categoryMap = Object.fromEntries(
    uniqueCategories.map((cat) => [slugify(cat), cat])
  );
  const slugToLabel = Object.fromEntries(uniqueCategories.map((cat) => [slugify(cat), cat]));
  const selectedLabel = currentCategory ? slugToLabel[currentCategory] ?? currentCategory : "Select category";
  return renderTemplate(_a || (_a = __template(["", "<div", "> <div", '> <button type="button" id="category-button" aria-haspopup="listbox" aria-expanded="false"', "> <span", "> ", " </span> ", " </button> <div", ' id="category-dropdown" hidden role="listbox"> ', ' </div> </div> <button id="clear-filters" type="button" style="display: none;"', ">\nClear\n", ' </button> </div> <script type="application/json" id="category-map">', '<\/script> <script>\n(() => {\n  // \u041E\u0414\u0418\u041D\u0410\u041A\u041E\u0412\u042B\u0419 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u043D\u0430 \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0445!\n  const WRAP_SEL = "[data-articles-wrapper]";\n\n  let currentCategory = "";\n\n  let lastNonSearchUrl =\n  location.pathname.startsWith("/learn/search")\n    ? "/learn"\n    : location.pathname + location.search;\n\n  // slug -> label \u0438\u0437 \u0441\u043A\u0440\u044B\u0442\u043E\u0433\u043E JSON\n  function readCategoryMap() {\n    const el = document.getElementById("category-map");\n    try { return el ? JSON.parse(el.textContent || "{}") : {}; } catch { return {}; }\n  }\n\n  function setButtonLabelFromSlug(slug) {\n    const map  = readCategoryMap();\n    const span = document.querySelector("#category-button span");\n    if (!span) return;\n    span.textContent = slug ? (map[slug] || "Select category") : "Select category";\n  }\n\n  function toggleClear() {\n    const clearBtn = document.getElementById("clear-filters");\n    const span = document.querySelector("#category-button span");\n    if (!clearBtn || !span) return;\n    const hasCategory = span.textContent.trim() !== "Select category";\n    clearBtn.style.display = hasCategory ? "inline-flex" : "none";\n  }\n\n  function extractSlugFromUrl(url) {\n    const path = new URL(url, location.origin).pathname;\n    const m = path.match(/^\\/learn\\/categories\\/([^/]+)/);\n    return m ? decodeURIComponent(m[1]) : "";\n  }\n\n  function replaceArticlesFromHtml(html) {\n    const doc = new DOMParser().parseFromString(html, "text/html");\n    const newWrap = doc.querySelector(WRAP_SEL);\n    const curWrap = document.querySelector(WRAP_SEL);\n    if (!newWrap || !curWrap) return false;\n    curWrap.innerHTML = newWrap.innerHTML;\n    return true;\n  }\n\n  function clearSearchInputs() {\n    ["search-input-mobile", "search-input-desktop"].forEach((id) => {\n      const el = document.getElementById(id);\n      if (el) {\n        el.value = "";\n        // \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0441\u043A\u0440\u0438\u043F\u0442 \u0441\u0430\u043C \u043F\u043E\u0433\u0430\u0441\u0438\u043B /learn/search/\u2026 \u0438 \u043D\u0435 \u043F\u0435\u0440\u0435\u0431\u0438\u043B \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E\n        el.dispatchEvent(new Event("input", { bubbles: true }));\n      }\n    });\n  }\n\n  function updateContent(url) {\n    const scrollY = window.scrollY;\n    fetch(url)\n      .then(res => res.text())\n      .then(html => {\n        if (!replaceArticlesFromHtml(html)) return;\n\n        history.pushState({}, "", url);\n        lastNonSearchUrl = url;\n        if (window.__setLastNonSearchUrl) {\n          window.__setLastNonSearchUrl(url);\n        }\n\n        currentCategory = extractSlugFromUrl(url);\n        setButtonLabelFromSlug(currentCategory);\n        toggleClear();\n\n        // \u0421\u0411\u0420\u041E\u0421 \u041F\u041E\u0418\u0421\u041A\u0410 \u2014 \u043A\u0440\u0438\u0442\u0438\u0447\u043D\u043E, \u0438\u043D\u0430\u0447\u0435 \u0441\u043A\u0440\u0438\u043F\u0442 \u043F\u043E\u0438\u0441\u043A\u0430 \u0442\u0443\u0442 \u0436\u0435 \u0437\u0430\u043F\u0438\u0448\u0435\u0442 /learn/search/?q=\u2026\n        clearSearchInputs();\n\n        // \u0434\u0430\u0442\u044C \u0448\u0430\u043D\u0441 \u0434\u0440\u0443\u0433\u0438\u043C \u0441\u043A\u0440\u0438\u043F\u0442\u0430\u043C \u043F\u0435\u0440\u0435\u0432\u0435\u0441\u0438\u0442\u044C\u0441\u044F\n        document.dispatchEvent(new Event("astro:page-load"));\n\n        window.scrollTo({ top: scrollY, behavior: "instant" });\n      });\n  }\n\n  function bindDropdown() {\n    const btn = document.getElementById("category-button");\n    const dd  = document.getElementById("category-dropdown");\n    if (!btn || !dd || btn.dataset.bound === "1") return;\n    btn.dataset.bound = "1";\n\n    btn.addEventListener("click", (e) => {\n      e.stopPropagation();\n      const open = btn.getAttribute("aria-expanded") === "true";\n      btn.setAttribute("aria-expanded", String(!open));\n      dd.hidden = open;\n    });\n\n    dd.addEventListener("click", (e) => {\n      const a = e.target && e.target.closest ? e.target.closest("[data-option]") : null;\n      if (!a) return;\n      e.preventDefault();\n      const slug = a.getAttribute("data-value") || "";\n      const url  = slug ? `/learn/categories/${slug}` : "/learn";\n      btn.setAttribute("aria-expanded", "false");\n      dd.hidden = true;\n      updateContent(url);\n    });\n\n    document.addEventListener("click", (e) => {\n      const t = e.target;\n      if (!btn.contains(t) && !dd.contains(t)) {\n        btn.setAttribute("aria-expanded", "false");\n        dd.hidden = true;\n      }\n    });\n\n    document.addEventListener("keydown", (e) => {\n      if (e.key === "Escape" && !dd.hidden) {\n        btn.setAttribute("aria-expanded", "false");\n        dd.hidden = true;\n      }\n    });\n  }\n\n  function bindClear() {\n    const clearBtn = document.getElementById("clear-filters");\n    if (!clearBtn || clearBtn.dataset.bound === "1") return;\n    clearBtn.dataset.bound = "1";\n    clearBtn.addEventListener("click", () => {\n      currentCategory = "";\n      setButtonLabelFromSlug("");\n      toggleClear();\n      updateContent("/learn");\n    });\n  }\n\n  function initFromUrl() {\n    currentCategory = extractSlugFromUrl(location.href);\n    setButtonLabelFromSlug(currentCategory);\n    toggleClear();\n  }\n\n  // \u043A\u0430\u043A \u0432 CategoriesList: \u043F\u043E\u0434\u043C\u0435\u043D\u0430 \u043F\u043E popstate\n  function bindPopstate() {\n    window.addEventListener("popstate", () => {\n      const url = location.href;\n      fetch(url)\n        .then(r => r.text())\n        .then(html => {\n          if (!replaceArticlesFromHtml(html)) return;\n          currentCategory = extractSlugFromUrl(url);\n          setButtonLabelFromSlug(currentCategory);\n          toggleClear();\n          document.dispatchEvent(new Event("astro:page-load"));\n        });\n    });\n  }\n\n  function run() {\n    initFromUrl();\n    bindDropdown();\n    bindClear();\n    bindPopstate();\n  }\n\n  document.addEventListener("DOMContentLoaded", run);\n  document.addEventListener("astro:page-load", run);\n})();\n<\/script>'], ["", "<div", "> <div", '> <button type="button" id="category-button" aria-haspopup="listbox" aria-expanded="false"', "> <span", "> ", " </span> ", " </button> <div", ' id="category-dropdown" hidden role="listbox"> ', ' </div> </div> <button id="clear-filters" type="button" style="display: none;"', ">\nClear\n", ' </button> </div> <script type="application/json" id="category-map">', '<\/script> <script>\n(() => {\n  // \u041E\u0414\u0418\u041D\u0410\u041A\u041E\u0412\u042B\u0419 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u043D\u0430 \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0445!\n  const WRAP_SEL = "[data-articles-wrapper]";\n\n  let currentCategory = "";\n\n  let lastNonSearchUrl =\n  location.pathname.startsWith("/learn/search")\n    ? "/learn"\n    : location.pathname + location.search;\n\n  // slug -> label \u0438\u0437 \u0441\u043A\u0440\u044B\u0442\u043E\u0433\u043E JSON\n  function readCategoryMap() {\n    const el = document.getElementById("category-map");\n    try { return el ? JSON.parse(el.textContent || "{}") : {}; } catch { return {}; }\n  }\n\n  function setButtonLabelFromSlug(slug) {\n    const map  = readCategoryMap();\n    const span = document.querySelector("#category-button span");\n    if (!span) return;\n    span.textContent = slug ? (map[slug] || "Select category") : "Select category";\n  }\n\n  function toggleClear() {\n    const clearBtn = document.getElementById("clear-filters");\n    const span = document.querySelector("#category-button span");\n    if (!clearBtn || !span) return;\n    const hasCategory = span.textContent.trim() !== "Select category";\n    clearBtn.style.display = hasCategory ? "inline-flex" : "none";\n  }\n\n  function extractSlugFromUrl(url) {\n    const path = new URL(url, location.origin).pathname;\n    const m = path.match(/^\\\\/learn\\\\/categories\\\\/([^/]+)/);\n    return m ? decodeURIComponent(m[1]) : "";\n  }\n\n  function replaceArticlesFromHtml(html) {\n    const doc = new DOMParser().parseFromString(html, "text/html");\n    const newWrap = doc.querySelector(WRAP_SEL);\n    const curWrap = document.querySelector(WRAP_SEL);\n    if (!newWrap || !curWrap) return false;\n    curWrap.innerHTML = newWrap.innerHTML;\n    return true;\n  }\n\n  function clearSearchInputs() {\n    ["search-input-mobile", "search-input-desktop"].forEach((id) => {\n      const el = document.getElementById(id);\n      if (el) {\n        el.value = "";\n        // \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0441\u043A\u0440\u0438\u043F\u0442 \u0441\u0430\u043C \u043F\u043E\u0433\u0430\u0441\u0438\u043B /learn/search/\u2026 \u0438 \u043D\u0435 \u043F\u0435\u0440\u0435\u0431\u0438\u043B \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E\n        el.dispatchEvent(new Event("input", { bubbles: true }));\n      }\n    });\n  }\n\n  function updateContent(url) {\n    const scrollY = window.scrollY;\n    fetch(url)\n      .then(res => res.text())\n      .then(html => {\n        if (!replaceArticlesFromHtml(html)) return;\n\n        history.pushState({}, "", url);\n        lastNonSearchUrl = url;\n        if (window.__setLastNonSearchUrl) {\n          window.__setLastNonSearchUrl(url);\n        }\n\n        currentCategory = extractSlugFromUrl(url);\n        setButtonLabelFromSlug(currentCategory);\n        toggleClear();\n\n        // \u0421\u0411\u0420\u041E\u0421 \u041F\u041E\u0418\u0421\u041A\u0410 \u2014 \u043A\u0440\u0438\u0442\u0438\u0447\u043D\u043E, \u0438\u043D\u0430\u0447\u0435 \u0441\u043A\u0440\u0438\u043F\u0442 \u043F\u043E\u0438\u0441\u043A\u0430 \u0442\u0443\u0442 \u0436\u0435 \u0437\u0430\u043F\u0438\u0448\u0435\u0442 /learn/search/?q=\u2026\n        clearSearchInputs();\n\n        // \u0434\u0430\u0442\u044C \u0448\u0430\u043D\u0441 \u0434\u0440\u0443\u0433\u0438\u043C \u0441\u043A\u0440\u0438\u043F\u0442\u0430\u043C \u043F\u0435\u0440\u0435\u0432\u0435\u0441\u0438\u0442\u044C\u0441\u044F\n        document.dispatchEvent(new Event("astro:page-load"));\n\n        window.scrollTo({ top: scrollY, behavior: "instant" });\n      });\n  }\n\n  function bindDropdown() {\n    const btn = document.getElementById("category-button");\n    const dd  = document.getElementById("category-dropdown");\n    if (!btn || !dd || btn.dataset.bound === "1") return;\n    btn.dataset.bound = "1";\n\n    btn.addEventListener("click", (e) => {\n      e.stopPropagation();\n      const open = btn.getAttribute("aria-expanded") === "true";\n      btn.setAttribute("aria-expanded", String(!open));\n      dd.hidden = open;\n    });\n\n    dd.addEventListener("click", (e) => {\n      const a = e.target && e.target.closest ? e.target.closest("[data-option]") : null;\n      if (!a) return;\n      e.preventDefault();\n      const slug = a.getAttribute("data-value") || "";\n      const url  = slug ? \\`/learn/categories/\\${slug}\\` : "/learn";\n      btn.setAttribute("aria-expanded", "false");\n      dd.hidden = true;\n      updateContent(url);\n    });\n\n    document.addEventListener("click", (e) => {\n      const t = e.target;\n      if (!btn.contains(t) && !dd.contains(t)) {\n        btn.setAttribute("aria-expanded", "false");\n        dd.hidden = true;\n      }\n    });\n\n    document.addEventListener("keydown", (e) => {\n      if (e.key === "Escape" && !dd.hidden) {\n        btn.setAttribute("aria-expanded", "false");\n        dd.hidden = true;\n      }\n    });\n  }\n\n  function bindClear() {\n    const clearBtn = document.getElementById("clear-filters");\n    if (!clearBtn || clearBtn.dataset.bound === "1") return;\n    clearBtn.dataset.bound = "1";\n    clearBtn.addEventListener("click", () => {\n      currentCategory = "";\n      setButtonLabelFromSlug("");\n      toggleClear();\n      updateContent("/learn");\n    });\n  }\n\n  function initFromUrl() {\n    currentCategory = extractSlugFromUrl(location.href);\n    setButtonLabelFromSlug(currentCategory);\n    toggleClear();\n  }\n\n  // \u043A\u0430\u043A \u0432 CategoriesList: \u043F\u043E\u0434\u043C\u0435\u043D\u0430 \u043F\u043E popstate\n  function bindPopstate() {\n    window.addEventListener("popstate", () => {\n      const url = location.href;\n      fetch(url)\n        .then(r => r.text())\n        .then(html => {\n          if (!replaceArticlesFromHtml(html)) return;\n          currentCategory = extractSlugFromUrl(url);\n          setButtonLabelFromSlug(currentCategory);\n          toggleClear();\n          document.dispatchEvent(new Event("astro:page-load"));\n        });\n    });\n  }\n\n  function run() {\n    initFromUrl();\n    bindDropdown();\n    bindClear();\n    bindPopstate();\n  }\n\n  document.addEventListener("DOMContentLoaded", run);\n  document.addEventListener("astro:page-load", run);\n})();\n<\/script>'])), maybeRenderHead(), addAttribute(styles$1.filter, "class"), addAttribute(styles$1.select, "class"), addAttribute(styles$1.select__btn, "class"), addAttribute(clsx(
    "text__body--16",
    styles$1.label,
    { [styles$1.selected]: currentCategory }
  ), "class"), selectedLabel, renderComponent($$result, "Icon", $$Icon, { "name": "arrow", "width": 24, "height": 24, "color": "var(--color-gray-800)", "class": styles$1.arrow }), addAttribute(styles$1.dropdown, "class"), uniqueCategories.map((category) => renderTemplate`<a role="option"${addAttribute(styles$1.option, "class")}${addAttribute(`/learn/categories/${slugify(category)}`, "href")}${addAttribute(category === currentCategory, "aria-selected")}${addAttribute(slugify(category), "data-value")} data-option> ${category} </a>`), addAttribute(clsx(
    "text__body--16",
    styles$1.reset
  ), "class"), renderComponent($$result, "Icon", $$Icon, { "name": "close", "width": 20, "height": 20, "color": "var(--color-gray-700)" }), unescapeHTML(JSON.stringify(categoryMap)));
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

const ArrowRight = createSvgComponent({"meta":{"src":"/_astro/arrow-right.BjzklPbj.svg","width":17,"height":16,"format":"svg"},"attributes":{"width":"17","height":"16","viewBox":"0 0 17 16","fill":"none"},"children":"\n<path d=\"M7.52344 12L11.5234 8L7.52344 4\" stroke=\"#0A0D0F\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

const ArrowLeft = createSvgComponent({"meta":{"src":"/_astro/arrow-left.DCGo6YBg.svg","width":17,"height":16,"format":"svg"},"attributes":{"width":"17","height":"16","viewBox":"0 0 17 16","fill":"none"},"children":"\n<path d=\"M9.52344 12L5.52344 8L9.52344 4\" stroke=\"#0A0D0F\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

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

export { $$Hero as $, $$List as a, slugify as s };
