let initialized = false;

export function initCategoryFilter(
  basePath = "/learn",
  defaultText = "Select category"
) {
  const button = document.getElementById("category-button");
  const dropdown = document.getElementById("category-dropdown");
  const clearButton = document.getElementById("clear-filters");

  if (!button || !dropdown) return;

  button.onclick = () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    const newState = !expanded;
    button.setAttribute("aria-expanded", newState.toString());
    dropdown.hidden = !newState;
  };

  dropdown.onclick = (event) => {
    const option = event.target.closest("[role='option']");
    if (!option) return;
    const value = option.getAttribute("data-value");
    const categoryPath = basePath === "/learn" ? "/categories" : "/category";
    const url = value ? `${basePath}${categoryPath}/${value}` : basePath;
    updateContent(url, basePath, defaultText);
    button.setAttribute("aria-expanded", "false");
    dropdown.hidden = true;
  };

  if (clearButton) {
    clearButton.onclick = () => {
      updateContent(basePath, basePath, defaultText);
      const categoriesSpan = document.querySelector("#category-button span");
      if (categoriesSpan) {
        categoriesSpan.textContent = defaultText;
        categoriesSpan.classList.remove("selected");
      }
    };
  }

  toggleClearButtonVisibility(defaultText);

  if (!initialized) {
    document.addEventListener("click", (e) => {
      const btn = document.getElementById("category-button");
      const dd = document.getElementById("category-dropdown");
      if (btn && dd && !btn.contains(e.target) && !dd.contains(e.target)) {
        btn.setAttribute("aria-expanded", "false");
        dd.hidden = true;
      }
    });

    document.addEventListener("keydown", (e) => {
      const dd = document.getElementById("category-dropdown");
      const btn = document.getElementById("category-button");
      if (e.key === "Escape" && dd && dd.hidden === false) {
        btn.setAttribute("aria-expanded", "false");
        dd.hidden = true;
      }
    });
    initialized = true;
  }
}

export function toggleClearButtonVisibility(defaultText = "Select category") {
  const categoriesSpan = document.querySelector("#category-button span");
  const clearButton = document.getElementById("clear-filters");
  if (!clearButton) return;
  const selected = categoriesSpan?.textContent?.trim() !== defaultText;
  clearButton.style.display = selected ? "inline-flex" : "none";
}

export function updateContent(url, basePath, defaultText = "Select category") {
  const categoryMapEl = document.getElementById("category-map");
  const categoryMap = categoryMapEl
    ? JSON.parse(categoryMapEl.textContent)
    : {};

  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const newFilters = doc.querySelector(".filters");
      const newResources = doc.querySelector("[data-articles-wrapper]");
      const currentFilters = document.querySelector(".filters");
      const currentResources = document.querySelector(
        "[data-articles-wrapper]"
      );

      if (newFilters && currentFilters) currentFilters.replaceWith(newFilters);
      if (newResources && currentResources)
        currentResources.replaceWith(newResources);

      window.history.pushState({}, "", url);

      const urlParts = url.split("/");
      const categoryPath = basePath === "/learn" ? "/categories" : "/category";
      const slug = url.includes(`${basePath}${categoryPath}`)
        ? decodeURIComponent(urlParts[urlParts.length - 1])
        : null;
      const label = categoryMap[slug] || defaultText;
      const categoryButtonSpan = document.querySelector(
        "#category-button span"
      );
      if (categoryButtonSpan) {
        categoryButtonSpan.textContent = label;
        categoryButtonSpan.classList.toggle("selected", !!slug);
      }
      toggleClearButtonVisibility(defaultText);

      initCategoryFilter(basePath, defaultText);
      if (window.initSearchInputs) window.initSearchInputs();
    });
}

if (document.readyState !== "loading") {
  initCategoryFilter();
} else {
  document.addEventListener("DOMContentLoaded", initCategoryFilter);
}
document.addEventListener("astro:page-load", initCategoryFilter);

window.initCategoryFilter = initCategoryFilter;
