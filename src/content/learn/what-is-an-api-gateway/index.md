---
title: What Is an API Gateway?
slug: what-is-an-api-gateway
date: 2024-07-19T01:05:00.000Z
description: >-
  Overview Application Programming Interfaces (APIs) are essential building
  blocks of modern software applications. APIs provide a standard way for
  different applications…
featuredImage: >-
  https://lh5.googleusercontent.com/WSns3Ifou8w8ifxl3PTBGIvSP6UevjPdQW0PoT0zZdbwyouY1JFvYRB2Pm6Zx0eHygBK8IkkyKr6gtc4c_K56HJfMhACIWOFF4t20WpuJOof8fB7Zr4d9xeYEBQvefKRvTBfFLSOFUC05-maH_fpNTc
categories:
  - What
excerpt: >-
  Application Programming Interfaces (APIs) are essential building blocks of
  modern software applications. APIs provide a standard way for different
  applications to communicate and exchange data with each other. However,
  managing APIs can be challenging, especially when dealing with multiple
  microservices, legacy systems, and different.
---

## Overview

Application Programming Interfaces (APIs) are essential building blocks of modern software applications. APIs provide a standard way for different applications to communicate and exchange data with each other. However, managing APIs can be challenging, especially when dealing with multiple microservices, legacy systems, and different protocols.

[An API gateway](/learn/what-is-an-api-gateway) is a software layer that sits between API clients and the services implementing the APIs they consume. It acts as a unified entry point for all API requests and provides several functionalities, such as request routing, security, rate limiting, and API versioning. It can also perform additional functions such as protocol translation and message transformation.

In addition, API gateways provide a layer of abstraction between client applications and backend services. This means client applications do not need to know the internal workings of the backend services, or even the API itself. Instead, they can rely on the API gateway to handle requests and responses.

> Tetrate offers enterprise-ready, 100% upstream distributions of Istio and Envoy Gateway, the de facto standard connectivity platform for cloud-native applications. [Get access now ›](/demo-request)

Simplifying the management of complex microservice-based architectures by providing a single point of entry for clients and allowing for the addition or removal of services without affecting clients is also a key benefit of API gateways . They can also improve security by handling authentication and access control for all services in a consistent and centralized way.

allows single-IP-port to access all services running in k8s through ingress rules. The Ingress Controller service is set to load balancer to be accessible from the public internet.

An Ingress Controller is a Layer 4 and Layer 7 proxy that routes traffic from clients to the services deployed into Kubernetes. Like an API gateway, an Ingress Controller can manage traffic and provide visibility, troubleshooting, security, and identity. An Ingress Controller is limited to only Kubernetes services, while an API gateway can manage traffic for both Kubernetes and VM workloads. Envoy proxy is used by some popular Ingress Controllers such as Ambassador and Contour. Other tools that are widely used as Ingress controllers include Kong Ingress, HAProxy Ingress, NGINX Ingress, etc.

## API Gateway vs the Kubernetes Gateway API

The Gateway API is a built-in Kubernetes API that represents a superset of Kubernetes Ingress and  provides a standardized way to manage and configure inbound traffic in Kubernetes environments.

An API gateway is an API management component that provides a single entry point for incoming requests and outgoing responses in front of the backend services that implement an API’s functionality. It typically provides a range of advanced features such as traffic routing, rate limiting, authentication, and authorization, among others, to help manage and secure the API endpoints of an application.

Implementations of Gateway API, such as [Envoy Gateway](/learn/what-is-an-api-gateway), the  Istio service mesh, and more advanced commercial offerings like Tetrate Service Bridge, can be used to implement API gateway capabilities.

## API Gateway vs Service Mesh

API gateway and service mesh are two different architectural patterns that can be used in modern application architectures that use microservices.

An API gateway is a software layer that sits between API clients and the APIs they consume. Its primary function is to act as an entry point for all API requests and provide several functionalities, such as request routing, security, rate limiting, and API versioning. Its focus is on managing the traffic between the API clients and the backend services that provide the APIs.

Service mesh, on the other hand, is a dedicated infrastructure layer that provides several functionalities, such as service discovery, load balancing, traffic management, security, and observability. Its focus is on managing the communication between the microservices within an application architecture, providing a reliable and scalable infrastructure layer for microservices.

While API gateway and service mesh are different architectural patterns, they can complement each other in modern application architectures. An API gateway can be used as an entry point for external API requests, while a service mesh can be used to manage the communication between microservices within an application architecture.

API gateway and service mesh can also share some functionalities, such as traffic management and security. For example, a service mesh can be used to manage the traffic between microservices within an application architecture, while an API gateway can be used to manage the traffic between the external API clients and the backend services that provide the APIs.

A service mesh handles traffic flowing from external clients into an application and communication between services. A service mesh can drive both north-south traffic (i.e., among services in a data center) and east-west traffic (services between various data centers).

Istio is the most widely-deployed service mesh. The figure below highlights how Istio handles the communication flow among various microservices (including Kubernetes and VMs):

is an open source project that can be easily used as an API gateway. It is based on the Gateway API—a resource used for service networking in Kubernetes. This means when users create Gateway API resources in Kubernetes cluster, they will be translated into native Envoy API calls, so Envoy and xDS, its native API, will not need to be changed to add this new support.

### Operational Benefits of Envoy Gateway

- **App developers** can use Envoy Gateway to route external traffic to their application easily, without needing to build or extend control planes to manage traffic.
- **Infrastructure teams** can get basic gateway functionality quickly with Envoy Gateway. They can provide Envoy-native experience to the application team without purchasing a vendor solution.

Envoy Gateway makes it easy for platform architects, infrastructure administrators, and developers to quickly adopt an Envoy-based API gateway. [Learn more about getting started with Envoy Gateway ›](/learn/what-is-envoy-gateway)
