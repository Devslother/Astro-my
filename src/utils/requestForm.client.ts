import * as yup from "yup";

// Типизация для grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

export default function initRequestForm() {
  const schema = yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    jobtitle: yup.string().required(),
    company: yup.string().required(),
  });

  const siteKey = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY || "";

  function ready() {
    load("//www.google.com/recaptcha/api.js?render=" + siteKey);
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
          const res = await fetch("/api/requestForm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (!res.ok) throw new Error(String(res.status));

          successModal?.showModal();
          form.reset();

          if (form.dataset.downloadBtn === "true") {
            setTimeout(
              () => window.open(form.dataset.download, "_blank"),
              2000
            );
          }
        } catch {
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
      });
    }
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

  function load(src: string, attrs: Record<string, string> = {}) {
    const s = document.createElement("script");
    s.src = src;
    Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
    document.head.appendChild(s);
  }

  document.readyState === "loading"
    ? document.addEventListener("astro:page-load", ready)
    : ready();
}
