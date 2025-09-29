export { renderers } from '../../renderers.mjs';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitMap = /* @__PURE__ */ new Map();
function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1e3;
  const maxRequests = 10;
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  if (record.count >= maxRequests) {
    return false;
  }
  record.count++;
  return true;
}
const POST = async ({ request }) => {
  try {
    const clientIP = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(clientIP)) {
      return new Response(
        JSON.stringify({
          message: "Too many requests. Please try again later."
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const data = await request.json();
    const {
      portalId,
      formId,
      email,
      firstname,
      lastname,
      jobtitle,
      company,
      "g-recaptcha-response": recaptchaToken,
      integration_test: isIntegrationTest,
      hs_context
    } = data;
    const maskedEmail = email ? `${email.split("@")[0]}@***` : void 0;
    console.log("requestForm called with data:", {
      portalId,
      formId,
      email: maskedEmail,
      isIntegrationTest,
      hasRecaptchaToken: !!recaptchaToken,
      clientIP
    });
    if (!portalId || !formId) {
      return new Response(
        JSON.stringify({ message: "Missing portalId or formId" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return new Response(JSON.stringify({ message: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const requiredFields = { firstname, lastname, jobtitle, company };
    const missingFields = Object.entries(requiredFields).filter(([_, value]) => !value || value.trim() === "").map(([key, _]) => key);
    if (missingFields.length > 0) {
      return new Response(
        JSON.stringify({
          message: `Missing required fields: ${missingFields.join(", ")}`
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const recaptchaSecret = "";
    const captchaDisabled = !recaptchaSecret || isIntegrationTest;
    if (!captchaDisabled) ; else {
      console.log("Integration test: Bypassing reCAPTCHA validation on server");
    }
    const fields = [
      { name: "email", value: email.trim() },
      { name: "firstname", value: firstname.trim() },
      { name: "lastname", value: lastname.trim() },
      { name: "jobtitle", value: jobtitle.trim() },
      { name: "company", value: company.trim() }
    ].filter((field) => field.value);
    let context = hs_context;
    if (!context) {
      const cookies = request.headers.get("cookie");
      const hutk = cookies?.split("; ").find((c) => c.startsWith("hubspotutk="))?.split("=")[1];
      context = {
        hutk,
        pageUri: request.headers.get("referer") || "",
        pageName: ""
      };
    }
    let parsedContext;
    try {
      parsedContext = typeof context === "string" ? JSON.parse(context) : context;
    } catch (e) {
      console.warn("Invalid hs_context JSON, using fallback:", e);
      parsedContext = {
        pageUri: request.headers.get("referer") || "",
        pageName: ""
      };
    }
    const payload = {
      fields,
      context: parsedContext
    };
    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
    console.log("Submitting to HubSpot:", {
      hubspotUrl,
      fields: fields.length,
      clientIP
    });
    const res = await fetch(hubspotUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      const status = res.status;
      const errorText = await res.text();
      console.error("HubSpot error:", {
        status,
        errorText: errorText.substring(0, 500),
        // Limit log size
        clientIP
      });
      const safeStatus = status >= 400 && status < 500 ? status : 502;
      const message = status === 400 ? "Invalid form data." : status === 403 ? "Captcha verification failed." : status === 404 ? "Form not found." : status === 409 ? "Duplicate submission." : status === 429 ? "Too many requests. Please try again later." : "Upstream service error. Please try again later.";
      return new Response(JSON.stringify({ message }), {
        status: safeStatus,
        headers: { "Content-Type": "application/json" }
      });
    }
    console.log("HubSpot submission successful", { clientIP });
    return new Response(
      JSON.stringify({ message: "Form submitted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Vercel API route error:", error);
    return new Response(JSON.stringify({ message: "Failed to submit form" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
