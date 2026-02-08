import * as yup from "yup";

// Типизация для reCAPTCHA v3
declare global {
  interface Window {
    grecaptcha: {
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
      ready: (callback: () => void) => void;
    };
  }
}

export default function initRequestForm() {
  // Константы для сообщений об ошибках
  const ERROR_MESSAGES = {
    REQUIRED_FIELD: "Please complete this required field.",
    EMAIL_FORMAT: "Email must be formatted correctly.",
  };

  const schema = yup.object({
    firstname: yup.string().required(ERROR_MESSAGES.REQUIRED_FIELD),
    lastname: yup.string().required(ERROR_MESSAGES.REQUIRED_FIELD),
    email: yup
      .string()
      .email(ERROR_MESSAGES.EMAIL_FORMAT)
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        ERROR_MESSAGES.EMAIL_FORMAT
      )
      .required(ERROR_MESSAGES.REQUIRED_FIELD),
    jobtitle: yup.string().required(ERROR_MESSAGES.REQUIRED_FIELD),
    company: yup.string().required(ERROR_MESSAGES.REQUIRED_FIELD),
  });

  const siteKey = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY || "";

  function load(src: string, attrs: Record<string, string> = {}) {
    const s = document.createElement("script");
    s.src = src;
    Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
    document.head.appendChild(s);
  }

  function ready() {
    if (siteKey) {
      load("//www.google.com/recaptcha/api.js?render=" + siteKey);
    }
    load("https://js.hs-scripts.com/146786678.js", { defer: "true" });

    const form = document.getElementById("pricing-form") as HTMLFormElement;
    const successModal = document.getElementById(
      "success-modal"
    ) as HTMLDialogElement;
    const errorModal = document.getElementById(
      "error-modal"
    ) as HTMLDialogElement;

    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());

        try {
          await schema.validate(data, { abortEarly: false });
        } catch (err) {
          showErrors(err, form);
          return;
        }

        // Check if this is an integration test
        const isIntegrationTest = new URLSearchParams(
          window.location.search
        ).has("integration_test");

        let token: string;
        if (isIntegrationTest) {
          console.log("Integration test: Bypassing reCAPTCHA token generation");
          token = "integration_test_bypass_token";
        } else {
          token = await window.grecaptcha.execute(siteKey, {
            action: "submit_form",
          });
        }

        const payload = {
          portalId: form.dataset.portal,
          formId: form.dataset.form,
          ...data,
          "g-recaptcha-response": token,
          ...(isIntegrationTest ? { integration_test: true } : {}), // Add flag for backend
        };

        try {
          const res = await fetch("/.netlify/functions/requestForm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (!res.ok) throw new Error(String(res.status));

          successModal?.showModal();

          form.reset();

          if (form.dataset.downloadBtn === "true") {
            setTimeout(() => {
              const downloadUrl = form.dataset.download;
              if (downloadUrl) {
                window.open(downloadUrl, "_blank");
              }
            }, 2000);
          }
        } catch (error) {
          errorModal?.showModal();
        }
      });

      form.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        target.setAttribute("data-error", "false");
        const msgBox = target.parentElement?.querySelector(
          "[data-error-message]"
        );
        if (msgBox) msgBox.textContent = "";

        // Валидация email
        if (target.type === "email" && target.value) {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailRegex.test(target.value)) {
            target.setAttribute("data-error", "true");
            if (msgBox) msgBox.textContent = ERROR_MESSAGES.EMAIL_FORMAT;
          }
        }
      });
    }

    // Handle download buttons and links
    document.addEventListener("click", async (e) => {
      const target = e.target as HTMLElement;

      // Не обрабатываю клики на элементах формы (input, select, textarea, label)
      if (target.closest("input, select, textarea, label")) {
        return;
      }

      // Не обрабатываю клики на ссылках с target="_blank" или rel="nofollow" (они должны работать по умолчанию)
      const linkWithTarget = target.closest(
        "a[target='_blank']"
      ) as HTMLAnchorElement;
      const linkWithNofollow = target.closest(
        "a[rel*='nofollow']"
      ) as HTMLAnchorElement;
      if (linkWithTarget || linkWithNofollow) {
        return; // Позволяю ссылке работать по умолчанию
      }

      // Не обрабатываю клики на обычных ссылках (кроме специальных случаев)
      if (target.closest("a[href]") && !target.closest("[data-download]")) {
        const link = target.closest("a[href]") as HTMLAnchorElement;
        // Если это "take me to the download" ссылка - позволяю ей работать по умолчанию
        if (link && link.textContent?.includes("take me to the download")) {
          return; // Не обрабатываю, позволяю ссылке работать по умолчанию
        }
        // Для всех остальных обычных ссылок тоже не обрабатываю
        return;
      }

      // Проверяю, что событие еще не обработано
      if (e.defaultPrevented) {
        return;
      }

      const downloadBtn = target.closest("[data-download]");
      const privacyLink = target.closest(
        'a[href*="privacy"]'
      ) as HTMLAnchorElement;

      // Сначала проверяю privacy ссылки
      if (
        privacyLink &&
        !privacyLink.closest("[data-modal-open], [data-modal-close]") &&
        !privacyLink.href.includes("download")
      ) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = "/privacy";
        return;
      }

      // Затем проверяю download кнопки (но не если это privacy ссылка)
      if (
        downloadBtn &&
        !downloadBtn.closest("[data-modal-open], [data-modal-close]") &&
        !privacyLink
      ) {
        e.preventDefault();
        e.stopPropagation();

        // Проверяю, что форма заполнена перед открытием файла
        const form = document.getElementById("pricing-form") as HTMLFormElement;
        if (form) {
          const formData = Object.fromEntries(new FormData(form).entries());

          try {
            await schema.validate(formData, { abortEarly: false });
            // Форма валидна, можно открыть файл
            const downloadUrl = downloadBtn.getAttribute("data-download");
            if (downloadUrl) {
              window.open(downloadUrl, "_blank");
            }

            // Очищаю форму если это кнопка в модальном окне
            const modal = downloadBtn.closest("dialog");
            if (modal) {
              form.reset();
            }
          } catch (err) {
            // Форма не валидна, показываю ошибки
            showErrors(err, form);
            return;
          }
        }

        return;
      }
    });

    // Очищаю форму при закрытии модального окна
    document.addEventListener("click", (e) => {
      const closeBtn = (e.target as HTMLElement).closest("[data-modal-close]");
      if (closeBtn) {
        const modal = closeBtn.closest("dialog");
        if (modal) {
          const form = document.getElementById(
            "pricing-form"
          ) as HTMLFormElement;
          if (form) {
            form.reset();
          }
        }
      }
    });
  }

  function showErrors(err: any, form: HTMLFormElement) {
    form
      .querySelectorAll("[data-error='true']")
      .forEach((el) => el.setAttribute("data-error", "false"));
    form
      .querySelectorAll("[data-error-message]")
      .forEach((el) => (el.textContent = ""));

    err.inner.forEach((e: any) => {
      if (!e.path) return;
      const field = form.querySelector(`[data-field="${e.path}"]`);
      if (!field) return;

      field.setAttribute("data-error", "true");
      const msgBox = field.parentElement?.querySelector("[data-error-message]");
      if (msgBox) msgBox.textContent = e.message;
    });
  }

  document.readyState === "loading"
    ? document.addEventListener("astro:page-load", ready)
    : ready();
}
