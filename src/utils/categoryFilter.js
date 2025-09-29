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
        // Нахожу и удаляю класс selected по частичному совпадению
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

  // Показываем кнопку Clear если выбрана категория
  clearButton.style.display = selected ? "inline-flex" : "none";
}

export function updateContent(url, basePath, defaultText = "Select category") {
  const categoryMapEl = document.getElementById("category-map");
  const categoryMap = categoryMapEl
    ? JSON.parse(categoryMapEl.textContent)
    : {};

  // Проверяем, является ли URL страницей поиска
  const isSearchPage = url.includes("/search/");

  fetch(url)
    .then((res) => {
      return res.text();
    })
    .then((html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      // Ищем фильтры по более широким селекторам
      const newFilters = doc.querySelector("[class*='filter']");
      const newResources =
        doc.querySelector("[data-articles-wrapper]") ||
        doc.querySelector(".articles-wrapper");

      const currentFilters = document.querySelector("[class*='filter']");
      const currentResources =
        document.querySelector("[data-articles-wrapper]") ||
        document.querySelector(".articles-wrapper");

      if (newFilters && currentFilters) {
        // Вместо replaceWith, заменяем только содержимое
        currentFilters.innerHTML = newFilters.innerHTML;
      }
      if (newResources && currentResources) {
        currentResources.replaceWith(newResources);
      }

      // Переинициализируем поисковые поля после замены контента - убрано, вызываем в конце

      window.history.pushState({}, "", url);

      // Определяем категорию только если это не страница поиска
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

        // Находим класс selected по частичному совпадению (CSS modules)
        const selectedClass = Array.from(categoryButtonSpan.classList).find(
          (cls) => cls.includes("selected")
        );

        if (label === defaultText) {
          // Убираем класс selected если это defaultText
          if (selectedClass) {
            categoryButtonSpan.classList.remove(selectedClass);
          }
        } else {
          // Добавляем класс selected если это не defaultText
          if (!selectedClass) {
            // Находим класс label для добавления selected
            const labelClass = Array.from(categoryButtonSpan.classList).find(
              (cls) => cls.includes("label")
            );
            if (labelClass) {
              // Добавляем selected к имени класса label (CSS modules)
              const selectedClassName = labelClass.replace("label", "selected");
              categoryButtonSpan.classList.add(selectedClassName);
            }
          }
        }
      }

      // Повторно инициализируем фильтры после обновления контента
      initCategoryFilter(basePath, defaultText);
      if (window.initSearchInputs) window.initSearchInputs();

      // Обновляем видимость кнопки Clear после полной инициализации
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
