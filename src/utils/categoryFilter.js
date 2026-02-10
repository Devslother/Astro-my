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
        const selectedClass = Array.from(categoriesSpan.classList).find((cls) =>
          cls.includes("selected")
        );
        if (selectedClass) {
          categoriesSpan.classList.remove(selectedClass);
        }
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

  if (!clearButton || !categoriesSpan) return;

  const currentText = categoriesSpan.textContent?.trim();
  const selected = currentText !== defaultText;

  clearButton.style.display = selected ? "inline-flex" : "none";
}

export function updateContent(url, basePath, defaultText = "Select category") {
  const categoryMapEl = document.getElementById("category-map");
  const categoryMap = categoryMapEl
    ? JSON.parse(categoryMapEl.textContent)
    : {};

  const isSearchPage = url.includes("/search/");

  fetch(url)
    .then((res) => {
      return res.text();
    })
    .then((html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const newFilters = doc.querySelector("[class*='filter']");
      const newResources =
        doc.querySelector("[data-articles-wrapper]") ||
        doc.querySelector(".articles-wrapper");

      const currentFilters = document.querySelector("[class*='filter']");
      const currentResources =
        document.querySelector("[data-articles-wrapper]") ||
        document.querySelector(".articles-wrapper");

      if (newFilters && currentFilters) {
        currentFilters.innerHTML = newFilters.innerHTML;
      }
      if (newResources && currentResources) {
        currentResources.replaceWith(newResources);
      }

      window.history.pushState({}, "", url);

      let label = defaultText;
      if (!isSearchPage) {
        const urlParts = url.split("/");
        const categoryPath =
          basePath === "/learn" ? "/categories" : "/category";
        const slug = url.includes(`${basePath}${categoryPath}`)
          ? decodeURIComponent(urlParts[urlParts.length - 1])
          : null;
        label = categoryMap[slug] || defaultText;
      }

      const categoryButtonSpan = document.querySelector(
        "#category-button span"
      );
      if (categoryButtonSpan) {
        categoryButtonSpan.textContent = label;

        const selectedClass = Array.from(categoryButtonSpan.classList).find(
          (cls) => cls.includes("selected")
        );

        if (label === defaultText) {
          if (selectedClass) {
            categoryButtonSpan.classList.remove(selectedClass);
          }
        } else {
          if (!selectedClass) {
            const labelClass = Array.from(categoryButtonSpan.classList).find(
              (cls) => cls.includes("label")
            );
            if (labelClass) {
              const selectedClassName = labelClass.replace("label", "selected");
              categoryButtonSpan.classList.add(selectedClassName);
            }
          }
        }
      }

      initCategoryFilter(basePath, defaultText);
      if (window.initSearchInputs) window.initSearchInputs();

      setTimeout(() => {
        toggleClearButtonVisibility(defaultText);
      }, 100);
    });
}

if (document.readyState !== "loading") {
  initCategoryFilter();
} else {
  document.addEventListener("DOMContentLoaded", initCategoryFilter);
}
document.addEventListener("astro:page-load", initCategoryFilter);

window.initCategoryFilter = initCategoryFilter;
