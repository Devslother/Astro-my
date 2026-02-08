import type { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
  try {
    const data = JSON.parse(event.body || "{}");
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

    console.log("requestForm called with data:", {
      portalId,
      formId,
      email,
      isIntegrationTest,
      hasRecaptchaToken: !!recaptchaToken,
    });

    if (!portalId || !formId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing portalId or formId" }),
      };
    }

    // Skip CAPTCHA validation for integration tests
    if (!isIntegrationTest) {
      if (!recaptchaToken) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: "Missing reCAPTCHA token" }),
        };
      }

      const recaptchaSecret = process.env.RECAPTCHA_SECRET;
      if (!recaptchaSecret) {
        return {
          statusCode: 500,
          body: JSON.stringify({
            message: "Missing reCAPTCHA secret on server",
          }),
        };
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
        console.warn("reCAPTCHA failed:", recaptchaJson);
        return {
          statusCode: 403,
          body: JSON.stringify({
            message: "Failed to validate Captcha. Please try again.",
          }),
        };
      }
    } else {
      console.log(
        "🤖 Integration test: Bypassing reCAPTCHA validation on server"
      );
    }

    // Prepare form fields for HubSpot
    const fields = [
      { name: "email", value: email },
      { name: "firstname", value: firstname },
      { name: "lastname", value: lastname },
      { name: "jobtitle", value: jobtitle },
      { name: "company", value: company },
    ].filter((field) => field.value); // Only include fields with values

    let context = hs_context;

    if (!context) {
      const hutk = event.headers.cookie
        ?.split("; ")
        .find((c) => c.startsWith("hubspotutk="))
        ?.split("=")[1];
      context = {
        hutk,
        pageUri: event.headers.referer || "",
        pageName: "",
      };
    }

    const payload = {
      fields,
      context: typeof context === "string" ? JSON.parse(context) : context,
    };

    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    console.log("🔍 Submitting to HubSpot:", {
      hubspotUrl,
      fields: fields.length,
    });

    const res = await fetch(hubspotUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("HubSpot error:", text);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "HubSpot form submission failed" }),
      };
    }

    console.log("✅ HubSpot submission successful");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully" }),
    };
  } catch (error) {
    console.error("Netlify function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to submit form" }),
    };
  }
};

export { handler };
