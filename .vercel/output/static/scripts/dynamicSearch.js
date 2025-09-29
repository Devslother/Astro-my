(() => {
  const DEBOUNCE_MS = 700;
  let timer = null;

  if (!window.__lastNonSearchUrl) {
    window.__lastNonSearchUrl = location.pathname.startsWith("/learn/search")
      ? "/learn"
      : location.pathname + location.search;
  }
  window.__setLastNonSearchUrl = (url) => {
    window.__lastNonSearchUrl = url;
  };

  function updateResults(query, input) {
    toggleIcons(input, "loading");

    const baseUrl = input.closest("[data-search]")?.dataset.baseurl;

    // не создаю URL заранее
    let fetchUrl;
    if (!query) {
      // При очистке поиска всегда возвращаемся на главную страницу /learn
      fetchUrl = new URL(baseUrl || "/learn", location.origin);
    } else {
      fetchUrl = new URL(baseUrl || "/learn/search/1", location.origin);
      fetchUrl.searchParams.set("q", query);
    }

    fetch(fetchUrl.href)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        const newWrapper =
          doc.querySelector("[data-articles-wrapper]") ||
          doc.querySelector(".articles-wrapper");
        const noPosts = doc.querySelector("[data-noposts]");
        const currentWrapper =
          document.querySelector("[data-articles-wrapper]") ||
          document.querySelector(".articles-wrapper");
        const currentNoPosts = document.querySelector("[data-noposts]");

        const cursorPos = input.selectionStart ?? input.value.length;

        if (newWrapper) {
          currentWrapper.replaceWith(newWrapper);
          if (currentNoPosts) currentNoPosts.style.display = "none";
          // переинициализирую поисковые инпуты
          window.initSearchInputs && window.initSearchInputs();
          // даю знать другим скриптам (категории и т.п.)
          document.dispatchEvent(new Event("astro:page-load"));
        } else {
          currentWrapper.innerHTML = "";
          if (currentNoPosts && noPosts) {
            currentNoPosts.innerHTML = noPosts.innerHTML;
            currentNoPosts.style.display = "block";
          }
        }

        window.history.replaceState(
          {},
          "",
          fetchUrl.pathname + fetchUrl.search
        );
        // Сохраняем URL только если это не страница поиска и не главная страница
        if (
          !fetchUrl.pathname.startsWith("/learn/search") &&
          fetchUrl.pathname !== "/learn"
        ) {
          window.__lastNonSearchUrl = fetchUrl.pathname + fetchUrl.search;
        } else if (fetchUrl.pathname === "/learn") {
          // Сбрасываем сохраненный URL при возврате на главную
          window.__lastNonSearchUrl = null;
        }

        toggleIcons(input, "ready");

        requestAnimationFrame(() => {
          const newInput = document.querySelector(`#${input.id}`);
          if (newInput) {
            newInput.focus();
            newInput.setSelectionRange(cursorPos, cursorPos);
          }
        });
      })
      .catch((err) => {
        console.error("Search-error:", err);
        toggleIcons(input, "ready");
      });
  }

  window.initSearchInputs = function initSearchInputs() {
    document
      .querySelectorAll("[data-search] input[type='search']")
      .forEach((input) => {
        const clearBtn = input
          .closest("[data-search]")
          ?.querySelector("[data-clear-btn]");
        if (!input || !clearBtn) return;

        clearBtn.style.display = input.value ? "block" : "none";
        input.oninput = () => {
          toggleIcons(input, "ready");
          const val = input.value.trim();
          clearBtn.style.display = val ? "block" : "none";

          clearTimeout(timer);
          timer = setTimeout(() => updateResults(val, input), DEBOUNCE_MS);
        };
        clearBtn.onclick = () => {
          input.value = "";
          clearBtn.style.display = "none";
          input.focus();
          updateResults("", input); // пустая строка – остаюсь на текущем /learn или /learn/categories/<slug>
        };
      });
  };

  function toggleIcons(input, state) {
    const root = input.closest("[data-search]");
    if (!root) return;
    const clearBtn = root.querySelector("[data-clear-btn]");
    const spinner = root.querySelector("[data-spinner]");
    const searchIcon = root.querySelector("[data-search-icon]");

    if (state === "loading") {
      if (searchIcon) searchIcon.style.display = "none";
      if (spinner) spinner.style.display = "block";
      if (clearBtn) clearBtn.style.display = "none";
    }
    if (state === "ready") {
      if (searchIcon) searchIcon.style.display = "block";
      if (spinner) spinner.style.display = "none";
      if (clearBtn) clearBtn.style.display = input.value ? "block" : "none";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSearchInputs);
  } else {
    initSearchInputs();
  }
  document.addEventListener("astro:page-load", initSearchInputs);
})();
