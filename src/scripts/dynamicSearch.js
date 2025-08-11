(() => {
  const DEBOUNCE_MS = 700;
  let timer = null;

  function updateResults(query, input) {
    toggleIcons(input, "loading");

    const baseUrl = input.closest("[data-search]")?.dataset.baseurl;
    let fetchUrl = new URL(baseUrl, location.origin);
    if (query) fetchUrl.searchParams.set("q", query);

    fetch(fetchUrl.href)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        const newWrapper = doc.querySelector("[data-articles-wrapper]");
        const noPosts = doc.querySelector("[data-noposts]");
        const currentWrapper = document.querySelector(
          "[data-articles-wrapper]"
        );
        const currentNoPosts = document.querySelector("[data-noposts]");

        const cursorPos = input.selectionStart ?? input.value.length;

        if (newWrapper) {
          currentWrapper.replaceWith(newWrapper);
          if (currentNoPosts) currentNoPosts.style.display = "none";
          window.initSearchInputs && window.initSearchInputs();
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
          updateResults("", input);
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

  if (document.readyState !== "loading") initSearchInputs();
  document.addEventListener("astro:page-load", initSearchInputs);
})();
