---
title: "Zero Trust, FIPS and FedRAMP for Kubernetes and Cloud Native Applications"
featuredImage: "/images/resources/zero-trust-fips-cover.png"
description: "Tetrate provides trusted connectivity and control for AI. Empower developers while safeguarding the business. Built atop the proven Envoy proxy & Envoy AI Gateway."
date: "2024-11-28T00:00:00.000Z"
categories: ["zero trust"]
excerpt: "Tetrate provides trusted connectivity and control for AI. Empower developers while safeguarding the business. Built atop the proven Envoy proxy & Envoy AI Gateway."
hubspotFormId: "dc7e3dbc-8c2f-4855-873b-3072f4941816"
modalFormId: "dc7e3dbc-8c2f-4855-873b-3072f4941816"
modalFormLinkText: "Get CVE Alerts and Patches"
downloadLink: "https://7637559.fs1.hubspotusercontent-na1.net/hubfs/7637559/Primer%20on%20Zero%20Trust%20and%20FIPS%20for%20Cloud%20Native%20Applications/Tetrate%20Primer%20on%20Zero%20Trust%20and%20FIPS%20for%20Cloud%20Native%20Applications.pdf"
useHubspotEmbed: true
---

![Post Image](/images/resources/Zero-Trust-FIPS-and-FedRAMP-for-Cloud-Native-Applications.ZNsUaInf.jpg)

## [](#executive-summary)Executive Summary

- Enterprise information security architecture has become increasingly important as information systems have evolved into critical business assets.
- Zero trust network architecture is emerging as a **preferred approach** for enterprises to secure both their traditional and modern, cloud-native applications. A key component of zero trust architecture is **encryption in transit**.
- The Istio service mesh acts as a **security kernel** for distributed applications and serves as the foundation of a zero trust architecture, including providing comprehensive encryption in transit between system components.
- Tetrate offers the first **FIPS-verified distribution** of Istio specifically designed for organizations requiring [FedRAMP](/blog/new-guide-to-zero-trust-fips-and-fedramp-for-cloud-native-applications-from-tetrate/) authorization and other organizations in regulated environments where the stock builds of Istio and Envoy aren’t suitable.
- The Federal Information Processing Standards (FIPS) are the **information security standards** for the U.S. federal government. Information systems built and run by federal agencies, contractors, and vendors are required to adhere to FIPS.
- FIPS is also widely regarded as a set of robust and trustworthy security standards that is often **adopted by private sector organizations**.
- The National Institute of Standards and Technology (NIST), the standards body responsible for defining FIPS, runs a program (CMVP) to validate that cryptographic modules adhere to FIPS standards and are suitable for use in U.S. federal agency information systems. Those modules are said to be **_FIPS validated_**. Software certified by a CMVP-accredited laboratory as using FIPS-validated modules correctly is said to be **_FIPS verified_**.
- Tetrate offers a 100% upstream distribution of Istio and Envoy called [**Tetrate Istio Distro (TID)**](/tetrate-istio-subscription/) that is the first to be FIPS verified.

## [](#why-information-security-architecture-is-important)Why Information Security Architecture Is Important

Information security architecture has become increasingly important as information systems have evolved into critical business assets. Cyber crime [has reached industrial scale](https://www.csoonline.com/article/572923/the-strange-business-of-cybercrime.html) at the same time that business-critical functionality is growing more  sophisticated and powerful.

That power comes with greater complexity: there are more pieces and parts that need to communicate with each other over networks and more places where those components and users can operate outside the traditional data center and fortified network perimeter. These pieces, parts, people, places—and their access to each other—must all be secured.

Traditional security architecture has long followed the paradigm of a strong fortified perimeter with more permissive access to internal systems once a user has been authenticated, authorized, and let through the castle gates.The complexity of modern, cloud-native applications and associated risk to critical business assets and reputation has prompted many organizations (and [the U.S. federal government](/blog/us-government-endorses-zero-trust-architecture-for-security/)) to re-think their information security architecture from the ground up.

## [](#zero-trust-architecture-is-the-future-of-enterprise-network-security)Zero Trust Architecture Is the Future of Enterprise Network Security

Traditional network security relies on a strong defensive perimeter around a trusted internal network to keep bad actors out and sensitive data in. In an increasingly complex networking environment, maintaining a robust perimeter is increasingly difficult.

Zero trust network architecture [is emerging as a preferred approach](/blog/us-government-endorses-zero-trust-architecture-for-security/) for enterprises to secure both their traditional and modern, cloud-native applications. Zero trust network architecture inverts the assumptions of perimeter security. In a zero trust network, every resource is protected internally as if it were exposed to the open internet.

Zack Butcher, Tetrate founding engineer and co-author of [the NIST standards for microservices securit](/blog/nist-standards-for-zero-trust-the-sp-800-204-series/)[y](/blog/nist-standards-for-zero-trust-the-sp-800-204-series/), identifies the following minimum five core runtime requirements for a zero trust architecture:

1.  Communication within the system, with end-users, and with external systems should be encrypted (also known as encryption in transit) to ensure authenticity, integrity, and privacy;
2.  All service-to-service communication should be mutually authenticated;
3.  All service-to-service communication should be mutually authorized;
4.  All end-user communication should be authenticated;
5.  All end-user communication should be authorized.

As a dedicated infrastructure layer, the Istio service mesh acts as a security kernel for distributed applications that satisfies all five of these requirements. When we’re talking about FIPS, we’re solely focused on the first requirement: encryption in transit.

## [](#istio-and-zero-trust-in-a-fedramp-environment)Istio and Zero Trust in a FedRAMP Environment

### [](#what-is-fedramp)What Is FedRAMP?

The Federal Risk and Authorization Management Program (FedRAMP)  is a U.S. government-wide program that standardizes the security assessment, authorization and continuous monitoring processes for cloud products and services used by federal agencies. FedRAMP was established to ensure that cloud solutions meet specific security requirements and standards to protect sensitive government data.

Cloud service providers (CSPs) seeking to work with federal agencies must go through a rigorous assessment and authorization process to achieve a FedRAMP Authorization. This process involves a comprehensive security evaluation and documentation of how the cloud service meets specific security controls and requirements.

Once a cloud service has been granted a FedRAMP Authorization, it means that it has met the security standards required to serve federal government agencies, making it easier for agencies to adopt and use these cloud services while maintaining data security and compliance. FedRAMP helps ensure the protection of sensitive government information while promoting the adoption of modern cloud technologies within the federal government.

### [](#fedramp-and-nist-sp-800-53)FedRAMP and NIST SP 800-53

FedRAMP builds upon the security standards established by the National Institute of Standards and Technology (NIST) in its Special Publication  (SP) 800-53. NIST SP 800-53 provides a comprehensive catalog of security controls and control enhancements that federal agencies can use to secure their information systems and protect sensitive data.

FedRAMP takes the security controls from NIST SP 800-53 and provides a framework for how CSPs should implement them in the context of cloud services. When a cloud service provider achieves FedRAMP Authorization, it means that their cloud offering has been assessed and found to comply with the specific security requirements outlined in both NIST SP 800-53 and FedRAMP.

### [](#fedramp-is-now-law)FedRAMP Is Now Law

In December 2022, the [FedRAMP Authorization Act](https://www.congress.gov/117/bills/hr7776/BILLS-117hr7776enr.pdf#page=1055) was signed as part of the FY23 National Defense Authorization Act (NDAA). The Act codifies the FedRAMP program as the authoritative standardized approach to security assessment and authorization for cloud computing products and services that process unclassified federal information.

## [](#whats-new-in-fedramp-rev-5)What’s New in FedRAMP Rev. 5

There are different revisions of NIST SP 800-53, with each revision introducing updates and improvements to the security controls framework. The latest revision, Rev. 5, [finalized in 2020](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final), applies to new FedRAMP authorizations starting May 30, 2023.

_Note: FedRAMP authorizations already in the_ initiation _or_ continuous monitoring _phase prior to May 30, 2023_ [_may continue to use Rev. 4 baselines_](https://www.fedramp.gov/assets/resources/documents/FedRAMP_Baselines_Rev5_Transition_Guide.pdf)_, but must identify the delta between their current Rev. 4 implementation and the Rev. 5 requirements plus develop plans to address that delta._

Broadly, here’s what’s new in Rev. 5:

- **Expansion to 20 control families**  (from 18 in Rev. 4), with some controls being restructured and renumbered. The control families are also realigned to better match current security threats and technology trends.
- **Expansion of scope to include privacy controls** in addition to security controls to reflect the growing importance of privacy protection in information systems.
- **Greater emphasis on supply chain risk management** and includes controls related to software supply chain security, reflecting the increasing importance of securing the software development and distribution process.
- **Better alignment with other cybersecurity and privacy frameworks** such as NIST’s [Cybersecurity Framework (CSF)](https://www.nist.gov/cyberframework) and  [Privacy Framework](https://www.nist.gov/privacy-framework).
- **Increased Emphasis on continuous monitoring and improvement** of security and privacy controls, aligning with modern cybersecurity practices.

## [](#tetrate-istio-is-the-fastest-way-to-fedramp-ato-including-rev-5)Tetrate Istio Is the Fastest Way to FedRAMP ATO (Including Rev. 5)

FedRAMP Rev. 5 requires FIPS-validated encryption for data in transit. While Istio is the de facto standard [security kernel for microservices applications](/blog/nist-standards-for-zero-trust-the-sp-800-204-series/), only Tetrate offers [a FIPS-validated distribution of Istio suitable for FedRAMP environments](/blog/how-tetrate-istio-distro-became-the-first-fips-compliant-istio-distribution/). New in FedRAMP Rev. 5 is a requirement to document cryptographic modules in use to protect data in transit and at rest. Tetrate’s Istio distribution is built into the documentation  template ([SSP Appendix Q](https://www.fedramp.gov/assets/resources/templates/SSP-Appendix-Q-Cryptographic-Modules-Table.docx)) required for all System Security Plans (SSPs)—so, you can be sure when it’s time to pass the Full Security Assessment in the FedRAMP Authorization phase , Tetrate has you covered. Tetrate Istio  is also available via approved software factories like the AWS Marketplace for GovCloud and [Platform One](https://p1.dso.mil/).

## [](#what-is-fips)What Is FIPS?

FIPS is a set of standards for information processing systems that all U.S. federal agencies, contractors, and vendors must adhere to. FIPS is also widely regarded as a set of robust and trustworthy security standards that is often adopted by private sector organizations.

A key part of FIPS governs cryptographic modules, the specialized [hardware, software, and/or firmware](https://csrc.nist.gov/glossary/term/Cryptographicmodule) that encrypt data to ensure privacy and authenticity. NIST offers a validation program for cryptographic modules to ensure that validated modules are safe and approved for use in federal information systems.

**FIPS.** [Federal Information Processing Standards](https://www.nist.gov/standardsgov/compliance-faqs-federal-information-processing-standards-fips) are the information security standards for the federal government defined by the National Institute of Standards and Technology (NIST) in accordance with the Federal Information Security Management Act (FISMA). As part of FIPS, the standards for cryptography are evolving, with the [FIPS 140-2](https://csrc.nist.gov/pubs/fips/140-2/upd2/final) document currently in effect and [FIPS 140-3](https://csrc.nist.gov/pubs/fips/140-3/final) published but not yet required by [authorizing officials (AOs)](https://csrc.nist.gov/glossary/term/ao), the officials who grant [authorization to operate (ATO)](https://csrc.nist.gov/glossary/term/authorization_to_operate), which is required to run any software for government use.

**CMVP.** The [Cryptographic Module Validation Program (CMVP)](https://csrc.nist.gov/projects/cryptographic-module-validation-program), a joint effort between NIST and the Canadian Centre for Cyber Security, promotes the use of validated cryptographic modules. CMVP tracks crypto implementations that have been validated by auditors to conform to FIPS 140-2 and/or 140-3.

**FedRAMP.** [FedRAMP](https://www.fedramp.gov/), the most common ATO in the U.S. government, requires the use of FIPS 140-2 validated modules for encrypting data in transit and at rest.

## [](#what-is-fips-validated-vs-verified-vs-certified)What Is FIPS _Validated_ vs _Verified_ vs _Certified_?

**FIPS validation**. As part of CMVP, NIST authorizes independent labs to audit cryptographic modules submitted for review. Modules that pass this review are said to be **_FIPS validated_**. The validation status of all modules submitted to CMVP is published via a [publicly searchable database](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules/search).

**FIPS verification.** Software that uses FIPS-validated cryptographic modules may need additional verification from an accredited testing lab that those cryptographic modules are used correctly in order to be authorized by a program like FedRAMP. Such software is said to be **_FIPS verified_**.

This approach to achieving federal authorization is a safer alternative to forking a module for independent FIPS validation. The forking approach has the sole advantage of listing the vendor of the forked module in the CMVP database. In contrast, the verification approach (what Tetrate does for Tetrate Istio Distro) offers the **smallest possible footprint of sensitive code** that must be FIPS validated and avoids the inevitable risk that a fork will drift from the more well-maintained upstream version of the module.

**Applicability of validated modules.** Currently validated modules under FIPS 140-2 are [acceptable for use in new systems](https://csrc.nist.gov/projects/cryptographic-module-validation-program) until Sept. 21, 2026, after which they will be placed on the “Historical” list. At that point, their use will be allowed only for existing systems. Agencies should continue to use FIPS 140-2 validated modules until a FIPS 140-3 validated module becomes available.**FIPS certification.**_Certification_ is an industry term used to apply more generally to programs like CMVP that seek to provide some kind of provable compliance with a standard. In the context of FIPS 140, _certified_ essentially means _validated_.

## [](#tetrate-istio-distro-tid-and-fips-validation)Tetrate Istio Distro (TID) and FIPS Validation

[Tetrate Istio Distro](https://docs.tetrate.io/istio-distro/) is Tetrate’s hardened, performant, and fully upstream Istio distribution. It is also the first distribution of Istio to be FIPS verified for use in FedRAMP environments.

The Istio and Envoy binaries published by their respective project sites ([istio.io](https://istio.io/latest/docs/setup/getting-started/#download) and [envoyproxy.io](https://www.envoyproxy.io/docs/envoy/latest/start/install))  are not built using FIPS-validated crypto libraries. Those binaries are not approved for use by federal authorization programs such as FedRAMP.

Tetrate solves this problem by offering Istio and Envoy binaries that _are_ built with FIPS-validated crypto modules and independently verified by an accredited third-party testing laboratory.

**Boring Crypto**. Istio—and its data plane of Envoy proxies—use [BoringSSL](https://boringssl.googlesource.com/boringssl/) which, in turn, [uses a core module called Boring Crypto](https://boringssl.googlesource.com/boringssl/+/master/crypto/fipsmodule/FIPS.md). Boring Crypto is FIPS 140-2 validated ([Certificate #3678](https://csrc.nist.gov/projects/cryptographic-module-validation-program/certificate/3678)). Boring Crypto’s FIPS 140-2 validation status will be active until Sept. 21, 2026, and the Boring Crypto team is actively working towards FIPS 140-3 validation.

**Tetrate Istio Distro FIPS builds.** When pursuing FIPS validation for Istio and Envoy in TID, we used an existing crypto module that has already been validated (BoringSSL’s Boring Crypto). We then engaged an [NVLAP-accredited testing lab](https://www.nist.gov/nvlap) to verify that our distribution uses the CMVP-validated crypto module correctly. This lets us deliver **100% upstream Istio and Envoy** in TID, with no need for proprietary forks. And, when Boring Crypto achieves FIPS 140-3, we will update TID FIPS build certification accordingly.

A less desirable option would have been to fork a crypto library, independently maintain it, and get it validated and listed in the CMVP database, then validate that the resulting distribution uses the CMVP validated crypto module correctly.

Although our approach to getting FIPS validation for Istio and Envoy means Tetrate and TID do not have a unique entry in the CMVP database, we believe it is obviously better for users of TID and the Istio and Envoy communities since it does not require forking the highly sensitive functionality in cryptographic libraries.

## [](#tetrate-istio-distro-is-the-fastest-way-to-get-to-production-with-istio)Tetrate Istio Distro Is the Fastest Way to Get to Production with Istio

When you want to deploy Istio in production, the first question is where to get your Istio distribution. Tetrate Istio Distro is Tetrate’s hardened, performant, and fully upstream Istio distribution. Teams often choose to run TID because it’s simple to use and is built and supported by Tetrate’s Istio experts (in addition to being co-creators of Istio, we also [built the official CNCF course on Istio](https://tetr8.io/3UkuTyN)).

TID support and FIPS-validated builds are available as a paid subscription service, [Tetrate Istio Subscription](/tetrate-istio-subscription/). It’s a great way to get started with Istio knowing you have a trusted distribution to begin with, have an expert team supporting you, and also have the option to get to FIPS compliance quickly if you need to. [Reach out to us](/contact-us/) to start a conversation.
