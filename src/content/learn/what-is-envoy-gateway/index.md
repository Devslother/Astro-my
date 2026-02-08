---
title: What Is Envoy Gateway?
slug: what-is-envoy-gateway
date: 2024-10-08T07:50:50.000Z
description: >-
  Overview Envoy Gateway is an open source project that aims to make it simple
  to use Envoy Proxy as an API gateway by delivering a simplified deployment
  model and API…
categories:
  - What
excerpt: "> Tetrate offers an enterprise-ready, 100% upstream distribution of Envoy Gateway,\_Tetrate Enterprise Gateway for Envoy (TEG)(/tetrate-enterprise-gateway-for-envoy/). TEG is the easiest way to get started with Envoy for production use cases.\_Get access now."
---

## Overview

Envoy Gateway

> Tetrate offers an enterprise-ready, 100% upstream distribution of Envoy Gateway, Tetrate Enterprise Gateway for Envoy (TEG). TEG is the easiest way to get started with Envoy for production use cases.



Envoy Proxy is a high-performance open-source proxy server designed for cloud-native applications. It was initially created by Lyft in 2016, where it was used as an API gateway and edge proxy, offering observability insights that aided Lyft’s transition

While Envoy Proxy is typically used in conjunction with other technologies like the Istio service mesh, Envoy Gateway is a great way to get started with Envoy on its own as a cloud-native application gateway—especially for those coming from traditional API gateway technologies looking to adopt a more modern approach.

Envoy Gateway provides a suite of services and features including:

- An xDS
- An expressive API based on the Kubernetes Gateway API, with reasonable settings to simplify the Envoy user experience.
- Support for heterogeneous environments (although, early versions focus on deployment in Kubernetes).
- Extensibility to support a multitude of application gateway use cases.
- Envoy infrastructure provisioning and management.
- High-quality documentation, tooling, and a diverse group of project maintainers for support.

Envoy Gateway makes it easy for organizations to leverage the power of Envoy for “north-south” traffic. With its support for multiple user personas, organizations can leave their existing operational models unchanged. For example, **infrastructure admins** can use Envoy Gateway to provision and manage fleets of Envoys while **application developers** can simply route application traffic to their backend services. In addition, Envoy Gateway implements the Kubernetes Gateway API which aims to standardize and improve all the Kubernetes APIs that are currently used for ingress.

## Benefits of Envoy Gateway

Using Envoy Gateway provides several benefits for microservices and cloud-native applications, including:

**High performance.** Envoy Gateway is built on top of the high-performance Envoy proxy, which can handle millions of requests per second. This makes it an ideal choice for high-traffic APIs.

**Extensibility.** Envoy has a flexible architecture and supports custom filters, allowing developers to extend its functionality according to their specific needs.

**Dynamic configuration.** Envoy supports dynamic service discovery and configuration updates, which allows it to adapt to changes in the system without the need for manual intervention or downtime.

**Security.** Envoy Gateway supports a variety of security features, such as Transport Layer Security (TLS), TLS pass-through, and secure gRPC. It also provides features for authentication and rate-limiting to protect backend services from unauthorized access and potential attacks.

**Protocol support.** Envoy Gateway supports a wide range of protocols, including HTTP/1.x, HTTP/2, gRPC, and TCP. This makes it suitable for various types of applications and services.

**Seamless integration.** Envoy Gateway can be easily integrated into existing infrastructure, including Kubernetes, service meshes, and other orchestration platforms. This seamless integration ensures a smoother transition and reduced operational overhead when adopting Envoy.

Envoy Gateway makes it easy to get started using a modern application gateway and a great stepping stone towards adopting cloud-native architectures like service mesh.

## Envoy Gateway Project Goals

The core of Envoy Proxy is inherently low-level, designed to be fast, flexible, capable, and extensible, but not necessarily easy to use by itself. Envoy Gateway was born to “bring Envoy to the masses”

**A streamlined API tailored for gateway use cases.** Envoy Gateway uses the Kubernetes Gateway API with Envoy-specific extensions. This decision is based on the project’s initial focus on deployment within Kubernetes as an ingress controller plus the broad buy-in of the Gateway API.

**A comprehensive, ready-to-use experience.** This approach enables users to quickly set up and start using Envoy Gateway. It encompasses lifecycle management functionalities that handle controller resources, control plane resources, proxy instances, and more.

**A flexible and expandable API surface.** While the project aims to provide out-of-the-box functionality for common API gateway features (e.g., rate limiting, authentication, Let’s Encrypt integration), vendors can offer SaaS versions of all APIs, introduce additional APIs, and incorporate value-added features such as Web Application Firewall (WAF), enhanced observability, chaos engineering, etc.

**High-quality documentation and beginner-friendly guides.** The primary goal of Envoy Gateway is to simplify the process of setting up and using the most prevalent gateway use cases for the average user. This is achieved by providing comprehensive documentation and easy-to-follow getting started guides.

## Envoy Gateway vs Traditional API Gateway

The main difference between Envoy Gateway and a traditional API Gateway is the architecture and the way they handle API traffic.

Traditional API Gateways are often monolithic systems that handle all API traffic in a centralized manner. They are responsible for managing API routing, authentication, authorization, rate limiting, and other functions. Traditional API Gateways can become a bottleneck in high-traffic scenarios, and they can be difficult to scale.

On the other hand, Envoy Gateway is designed to be a lightweight, modular component that can be easily deployed in front of microservices. It leverages the power of Envoy to provide API Gateway capabilities such as routing, authentication, and rate limiting, but it can also be extended with custom filters to build additional functionality.

Envoy Gateway is a more flexible and scalable alternative to traditional API Gateways, designed to handle API traffic in a distributed, microservices-based architecture.

## Get Enterprise Support for Your Envoy Gateway Deployment

Tetrate Enterprise Gateway for Envoy provides available 24/7 enterprise support and enablement plus FIPS-verified and CVE-protected builds of Envoy Gateway suitable for mission critical applications and regulated environments like FedRAMP.

Tetrate is a leading contributor to open source Envoy and Envoy Gateway. Tetrate Enterprise Gateway for Envoy brings them to the enterprise, with the scale, reliability, performance and security necessary for large and mission-critical apps. Whatever your Kubernetes platforms of choice, rely on Tetrate’s expertise to deliver your services without missing a beat.

