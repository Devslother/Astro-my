---
title: "Zero Trust Architecture White Paper"
description: "Tetrate provides trusted connectivity and control for AI. Empower developers while safeguarding the business. Built atop the proven Envoy proxy & Envoy AI Gateway."
featuredImage: "/images/resources/ZTA-White-Paper-Cover.BmuTkzJc.png"
categories: ["resources"]
excerpt: "Tetrate provides trusted connectivity and control for AI. Empower developers while safeguarding the business. Built atop the proven Envoy proxy & Envoy AI Gateway."
---

![Post Image](/.netlify/images?url=_astro%2FZTA-White-Paper-Cover.BmuTkzJc.png&w=612&h=792&q=100)

![Post Image](/.netlify/images?url=_astro%2FZTA-White-Paper-Cover.BmuTkzJc.png&w=612&h=792&q=100) ×

document.addEventListener("click", (e) => { const trigger = e.target.closest("\[data-lightbox-trigger\]"); const close = e.target.closest("\[data-lightbox-close\]"); if (trigger) { e.preventDefault(); const figure = trigger.closest("figure"); const lightbox = figure?.querySelector("\[data-lightbox\]"); if (lightbox) { lightbox.classList.remove("lightbox--closing"); lightbox.classList.add("active"); document.body.style.overflow = "hidden"; } } if (close) { e.preventDefault(); const lightbox = e.target.closest("\[data-lightbox\]"); if (lightbox) { lightbox.classList.add("lightbox--closing"); lightbox.classList.remove("active"); document.body.style.overflow = ""; setTimeout(() => { lightbox.classList.remove("lightbox--closing"); }, 300); } } }); // Close lightbox on ESC key document.addEventListener("keydown", (e) => { if (e.key === "Escape") { const activeLightbox = document.querySelector(".lightbox.active"); if (activeLightbox) { activeLightbox.classList.add("lightbox--closing"); activeLightbox.classList.remove("active"); document.body.style.overflow = ""; setTimeout(() => { activeLightbox.classList.remove("lightbox--closing"); }, 300); } } });

[Zero trust security](/learn/zero-trust/what-is-zero-trust-security/) is getting a lot of attention—and for good reason. It’s a paradigm shift in security architectures that addresses significant problems with protecting the highly dynamic, distributed systems driving today’s cloud-native applications.

But, zero trust is more than just authentication and encryption on the wire. In this white paper, Zack Butcher—Tetrate founding engineer and co-author of [NIST SP 800-204a, “Building Secure Microservices-based Applications Using Service-Mesh Architecture”](https://csrc.nist.gov/pubs/sp/800/204/a/final)— offers an overview of Zero Trust for microservices applications and why a service mesh is the best way to implement it.