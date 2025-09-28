import type { APIRoute } from "astro";

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 10; // max 10 requests per 15 minutes

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

export const POST: APIRoute = async ({ request }) => {
  try {
    // Rate limiting
    const clientIP =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(clientIP)) {
      return new Response(
        JSON.stringify({
          message: "Too many requests. Please try again later.",
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" },
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
      hs_context,
    } = data;

    // Mask sensitive data in logs
    const maskedEmail = email ? `${email.split("@")[0]}@***` : undefined;
    console.log("requestForm called with data:", {
      portalId,
      formId,
      email: maskedEmail,
      isIntegrationTest,
      hasRecaptchaToken: !!recaptchaToken,
      clientIP,
    });

    // Validate required fields
    if (!portalId || !formId) {
      return new Response(
        JSON.stringify({ message: "Missing portalId or formId" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    if (!email || !EMAIL_REGEX.test(email)) {
      return new Response(JSON.stringify({ message: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Validate required form fields
    const requiredFields = { firstname, lastname, jobtitle, company };
    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value || value.trim() === "")
      .map(([key, _]) => key);

    if (missingFields.length > 0) {
      return new Response(
        JSON.stringify({
          message: `Missing required fields: ${missingFields.join(", ")}`,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Skip CAPTCHA validation for integration tests
    // первые три строки добавлены, потому что нет ключей reCAPTCHA
    const recaptchaSecret = import.meta.env.RECAPTCHA_SECRET_KEY;
    const captchaDisabled = !recaptchaSecret || isIntegrationTest;

    if (!captchaDisabled) {
      //if (!isIntegrationTest) { – убираю, т.к. нет ключей reCAPTCHA
      if (!recaptchaToken) {
        return new Response(
          JSON.stringify({ message: "Missing reCAPTCHA token" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      const recaptchaSecret = import.meta.env.RECAPTCHA_SECRET_KEY;
      if (!recaptchaSecret) {
        return new Response(
          JSON.stringify({ message: "Missing reCAPTCHA secret on server" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      const recaptchaRes = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: recaptchaSecret,
            response: recaptchaToken,
          }),
        }
      );

      const recaptchaJson = await recaptchaRes.json();

      if (!recaptchaJson.success || recaptchaJson.score < 0.5) {
        console.warn("reCAPTCHA failed:", {
          success: recaptchaJson.success,
          score: recaptchaJson.score,
          clientIP,
        });
        return new Response(
          JSON.stringify({
            message: "Failed to validate Captcha. Please try again.",
          }),
          {
            status: 403,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    } else {
      console.log("Integration test: Bypassing reCAPTCHA validation on server");
    }

    // Prepare form fields for HubSpot
    const fields = [
      { name: "email", value: email.trim() },
      { name: "firstname", value: firstname.trim() },
      { name: "lastname", value: lastname.trim() },
      { name: "jobtitle", value: jobtitle.trim() },
      { name: "company", value: company.trim() },
    ].filter((field) => field.value); // Only include fields with values

    // Safe JSON parsing for hs_context
    let context = hs_context;
    if (!context) {
      const cookies = request.headers.get("cookie");
      const hutk = cookies
        ?.split("; ")
        .find((c) => c.startsWith("hubspotutk="))
        ?.split("=")[1];
      context = {
        hutk,
        pageUri: request.headers.get("referer") || "",
        pageName: "",
      };
    }

    let parsedContext: Record<string, any>;
    try {
      parsedContext =
        typeof context === "string" ? JSON.parse(context) : context;
    } catch (e) {
      console.warn("Invalid hs_context JSON, using fallback:", e);
      parsedContext = {
        pageUri: request.headers.get("referer") || "",
        pageName: "",
      };
    }

    const payload = {
      fields,
      context: parsedContext,
    };

    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    console.log("Submitting to HubSpot:", {
      hubspotUrl,
      fields: fields.length,
      clientIP,
    });

    const res = await fetch(hubspotUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const status = res.status; // реальный статус HubSpot
      const errorText = await res.text();
      console.error("HubSpot error:", {
        status,
        errorText: errorText.substring(0, 500), // Limit log size
        clientIP,
      });

      // Маппинг статусов на «чистые» ответы клиенту
      const safeStatus = status >= 400 && status < 500 ? status : 502; // 4xx — прокидываем, 5xx — 502 Bad Gateway

      const message =
        status === 400
          ? "Invalid form data."
          : status === 403
          ? "Captcha verification failed."
          : status === 404
          ? "Form not found."
          : status === 409
          ? "Duplicate submission."
          : status === 429
          ? "Too many requests. Please try again later."
          : "Upstream service error. Please try again later.";

      return new Response(JSON.stringify({ message }), {
        status: safeStatus,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("HubSpot submission successful", { clientIP });

    return new Response(
      JSON.stringify({ message: "Form submitted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Vercel API route error:", error);
    return new Response(JSON.stringify({ message: "Failed to submit form" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
