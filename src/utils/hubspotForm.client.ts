function isIntegrationTest(): boolean {
  const urlParams = new URLSearchParams(window.location.search);
  const hasTestParam = urlParams.has("integration_test");
  const isCorrectDomain =
    window.location.hostname === "localhost" || // локальная разработка
    window.location.hostname.endsWith(".vercel.app"); // деплой на Vercel

  console.log("Integration test check:", {
    hasTestParam,
    hostname: window.location.hostname,
    isCorrectDomain,
    fullUrl: window.location.href,
  });

  return hasTestParam && isCorrectDomain;
}

export default function initHubspotForm(portalId: string, formId: string) {
  console.log("portalId", portalId);

  // Check if this is an integration test
  const skipCaptcha = isIntegrationTest();
  if (skipCaptcha) {
    console.log("Integration test mode: CAPTCHA will be disabled");
  }

  const formConfig = {
    portalId,
    formId,
    target: "#hubspot-form-container",
    region: "eu1",
    ...(skipCaptcha && {
      // Configuration options for integration testing
      onFormReady: function () {
        console.log("Integration test: Form loaded");

        // Try to remove or disable CAPTCHA elements after form loads
        setTimeout(() => {
          const captchaElements = document.querySelectorAll(
            '.g-recaptcha, .h-captcha, [class*="captcha"], [id*="captcha"]'
          );
          captchaElements.forEach((el) => {
            console.log("Integration test: Removing CAPTCHA element", el);
            (el as HTMLElement).style.display = "none";
            // Optionally remove entirely: el.remove();
          });

          // Mock reCAPTCHA token for form submission
          if (window.grecaptcha) {
            window.grecaptcha.execute = () =>
              Promise.resolve("test_token_integration_bypass");
            console.log("🤖 Integration test: Mocked reCAPTCHA token");
          }
        }, 1000);
      },
      onFormSubmit: function () {
        console.log(
          "Integration test: Form submitted without CAPTCHA validation"
        );
        return true; // Allow submission to proceed
      },
      // Additional options to bypass validation
      onFormSubmitted: function () {
        console.log("Integration test: Form submission completed");
      },
    }),
  };

  if (!(window as any).hbspt) {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.onload = () => {
      (window as any).hbspt.forms.create(formConfig);
    };
    document.head.appendChild(script);
  } else {
    (window as any).hbspt.forms.create(formConfig);
  }
}
