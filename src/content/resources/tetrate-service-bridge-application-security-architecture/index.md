---




title: "Tetrate Service Bridge Application Security Architecture"
featuredImage: "/images/resources/tetrate-service-bridge-security-cover.webp"
description: "Tetrate provides trusted connectivity and control for AI. Empower developers while safeguarding the business. Built atop the proven Envoy proxy & Envoy AI Gateway."
categories: ["resources"]
excerpt: "Tetrate provides trusted connectivity and control for AI. Empower developers while safeguarding the business. Built atop the proven Envoy proxy & Envoy AI Gateway."
hubspotFormId: "7f1d96ff-237b-4d1d-a917-a02f67894a1a"
modalFormId: "7f1d96ff-237b-4d1d-a917-a02f67894a1a"
modalFormLinkText: "Get CVE Alerts and Patches"
downloadLink: "https://7637559.fs1.hubspotusercontent-na1.net/hubfs/7637559/Resources%20and%20PDFs/White%20Papers/Tetrate%20Service%20Bridge%20Application%20Security%20Architecture.pdf"
useHubspotEmbed: true
---

![Post Image](/images/resources/tetrate-service-bridge-security-cover.webp)


Many enterprises and government agencies strive to achieve a zero trust architecture, recognizing that traditional perimeter-based security is no longer sufficient in today’s threat landscape. The zero trust mindset acknowledges that attackers could potentially infiltrate any network. Therefore, the focus shifts to containing and mitigating attacks both spatially and temporally. To achieve this at runtime, you need to be performing at minimum five checks on every hop between components in your infrastructure:

1.  Encryption in transit
2.  Service authentication
3.  Service to service authorization
4.  End-user authentication
5.  End-user to resource authorization

In addition to these runtime checks, we need the ability to monitor the system continuously to ensure policy is being enforced and to respond to changes on demand by updating policy.

Tetrate Service Bridge (TSB) uses the Istio service mesh to manage your application’s traffic. As a dedicated infrastructure layer, the service mesh is an invaluable security tool for modern applications. The service mesh’s sidecar intercepts all traffic in and out of your applications, where it acts as a universal policy enforcement point. This allows the service mesh – which centrally manages a fleet of your applications’ sidecars – to become the modern cloud native security kernel (NIST SP 800-204B).

The sidecar is able to enforce security and traffic policies, as well as generate telemetry to allow operators to close the loop on policy changes: they can author a change, observe its effect on the runtime and make additional changes as needed – all in a real time feedback control loop. In other words, the mesh provides the capabilities to implement the runtime controls needed to achieve a zero trust posture.