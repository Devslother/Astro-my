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

export default function initSubscribeForm() {
  // Validation schema
  const schema = yup.object({
    email: yup
      .string()
      .required("Please complete this required field.")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email must be formatted correctly."
      ),
  });

  // reCAPTCHA site key
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

    const form = document.getElementById("subscribe-form") as HTMLFormElement;
    const successBox = document.getElementById(
      "subscribe-success"
    ) as HTMLElement;
    const errorBox = document.getElementById("subscribe-error") as HTMLElement;
    const errorMsgBox = document.querySelector(
      ".input__error__message"
    ) as HTMLElement;
    const submitBtn = form.querySelector(
      "button[type='submit']"
    ) as HTMLButtonElement;

    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());

        hideAllMessages();

        try {
          await schema.validate(data, { abortEarly: false });
        } catch (err) {
          if (err?.inner) {
            const msg = err.inner[0]?.message ?? "Invalid email";
            errorMsgBox.textContent = msg;
          }
          return;
        }

        try {
          const token = siteKey
            ? await window.grecaptcha.execute(siteKey, {
                action: "submit_form",
              })
            : "no-recaptcha";

          const hutk = document.cookie
            .split("; ")
            .find((c) => c.startsWith("hubspotutk="))
            ?.split("=")[1];

          const hsContext = {
            hutk,
            pageUri: window.location.href,
            pageName: document.title,
          };

          const payload = {
            portalId: form.dataset.portal,
            formId: form.dataset.form,
            ...data,
            "g-recaptcha-response": token,
            hs_context: JSON.stringify(hsContext),
          };

          const res = await fetch("/.netlify/functions/subscribeForm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (!res.ok) throw new Error(String(res.status));

          form.classList.add("hidden");
          successBox.classList.remove("hidden");
          form.reset();
        } catch (err) {
          console.error("Subscribe form error:", err);
          errorBox.classList.remove("hidden");
        } finally {
          if (submitBtn) submitBtn.disabled = false;
        }
      });

      form.addEventListener("input", () => {
        hideAllMessages();
      });

      function hideAllMessages() {
        errorMsgBox.textContent = "";
        successBox.classList.add("hidden");
        errorBox.classList.add("hidden");
      }
    }
  }

  document.readyState === "loading"
    ? document.addEventListener("astro:page-load", ready, { once: true })
    : ready();
}
