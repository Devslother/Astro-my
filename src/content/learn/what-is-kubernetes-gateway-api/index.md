---
title: What Is the Kubernetes Gateway API?
slug: what-is-the-kubernetes-gateway-api
date: 2025-01-01T00:00:00.000Z
categories:
  - Kubernetes
featuredImage: /wp-content/uploads/2023/03/tetrate-logo-light.svg
excerpt: >-
  The Kubernetes Gateway API(/learn/what-is-the-kubernetes-gateway-api/), aka
  “Gateway.
---
# What Is the Kubernetes Gateway API?

### Article content

## Overview

The [Kubernetes Gateway API](/learn/what-is-the-kubernetes-gateway-api/), aka “[Gateway API,](https:

Conceived as a successor to the earlier Ingress API, Gateway API aims to enhance the configuration and management of Kubernetes ingress, service discovery, load balancing, and traffic routing by providing a unified and extensible API that integrates with Kubernetes’ native resources such as Services, Endpoints, and Ingresses. While there is no default implementation of the Gateway API out of the box in Kubernetes, there is [a wide range of commercial and open-source implementations available](https:

> Tetrate offers an enterprise-ready, 100% upstream distribution of Envoy Gateway, [Tetrate Enterprise Gateway for Envoy (TEG)](/tetrate-enterprise-gateway-for-envoy/). TEG is the easiest way to get started with Envoy for production use cases. [Get access now ›](https:

.wp-block-quote { padding: 1rem; background-color: #F5F5F5; }

## Benefits of the Gateway API

Gateway API represents a superset of Ingress functionality, enabling more advanced use cases. It offers the following benefits over earlier ingress implementations:

*   A comprehensive, unified, and standardized API for managing traffic into and out of a Kubernetes cluster.

*   More powerful and granular control, including expanded protocol support and routing options.
*   More flexible configuration that can be extended to address specific use cases.

### Design Goals

The Gateway API is designed to be role-oriented, portable, expressive, and extensible:

**Role-oriented:** Since [Kubernetes infrastructure](/faq/how-can-i-implement-mtls-across-my-entire-infrastructure-including-between-kubernetes-and-vms/) is typically a shared resource, multiple people with different roles and responsibilities must jointly participate in various aspects of the configuration and management of those resources. The Gateway API seeks to strike a balance between distributed flexibility and centralized control, allowing shared infrastructure to be used effectively by multiple, potentially non-coordinated teams.

**Expressive:** As an advancement over Kubernetes Ingress, [the Gateway API](/api-gateway/) is meant to provide built-in core capabilities, such as header-based matching, traffic weighting, and other features that were previously only available through custom annotations that were not portable across implementations.

**Portable:** The Gateway API is designed to be a universal specification supported by multiple implementations.

**Flexible Conformance:** To accommodate a broad feature set and wide range of implementations, Gateway API offers three support levels: _core features_ that must be implemented; _extended features_ that are expected to be portable across implementations, but not universally supported; and _implementation-specific_ features that are not expected to be portable and are vendor-specific.

**Extensible:** Users can add new features and functionality by defining their own custom resources that can be used alongside the existing resources defined in the specification. This extensibility allows the Gateway API to evolve over time and adapt to new use cases and requirements.

## Gateway API vs Kubernetes Ingress

Both the Gateway API and Ingress are used for managing inbound traffic to Kubernetes clusters, but they differ in their approach and functionality.

### Ingress

Ingress is an earlier API originally introduced to route incoming HTTP traffic to services using a straightforward, declarative syntax. It offered more control than the more limited options available at the time for exposing services in Kubernetes to the outside world. 

Ingress controllers, such as [NGINX](/learn/kubernetes/nginx/), [Traefik](/blog/traefik-with-istio/), or Istio, may be used to implement the Ingress resource and provide additional features like SSL termination, load balancing algorithms, and traffic shaping. More advanced features have been added by vendors, typically in the form of custom annotations that aren’t always portable across implementations. 

### Ingress Limitations

While effective for basic use cases, Ingress has significant limitations for advanced uses, including:

*   **Limited power and flexibility:** Ingress is often not powerful or flexible enough for most real-world use and it only supports HTTP protocol routing.
*   **Limited expressiveness:** It only supports host and path matching, and there is no standard configuration for advanced routing features, which can only be achieved through non-portable annotations.
*   **Proliferation of non-portable, vendor-specific annotations:** The lack of advanced capabilities has driven a proliferation of implementation-specific annotations. For example,  URL redirection using the NGINX Ingress Controller requires configuration of the nginx.ingress.kubernetes.io/rewrite-target annotation, which makes it incompatible with a programmable proxy like Envoy.
*   **Lack of cross-namespace support.** Since Ingress can only route traffic to a single namespace, it can’t be used as a unified gateway across multiple namespaces.
*   **Lack of role-based configuration and management responsibilities.** Since there is no built-in delineation of responsibilities, operational tasks like creating and managing gateways that more properly belong to platform engineering are often shouldered by app developers.

### Gateway API vs Ingress

Gateway API is more general-purpose than Ingress and can be used to configure a variety of traffic management features such as load balancing, TLS passthrough, traffic routing based on request headers, and integration with external services in a more consistent, portable way.

Like Ingress, Gateway API is an official [Kubernetes API](/learn/what-is-the-kubernetes-gateway-api/) and represents a superset of Ingress functionality, enabling more advanced use cases. Similar to Ingress, there is no default implementation of Gateway API built into Kubernetes. Instead, there are [many different implementations available](https:

For a deep dive on the history of Kubernetes Ingress and Gateway API, read our article, [Why the Gateway API Is the Unified Future of Ingress for Kubernetes and Service Mesh](/blog/why-the-gateway-api-is-the-unified-future-of-ingress-for-kubernetes-and-service-mesh/).

## Gateway API vs API Gateway

The Gateway API is a built-in Kubernetes API that provides a standardized way to manage and configure inbound traffic in Kubernetes environments. 

An API Gateway provides a single entry point for incoming requests and outgoing responses in front of the backend services that implement an API’s functionality. It typically provides a range of advanced features such as traffic routing, rate limiting, authentication, and authorization, among others, to help manage and secure the [API endpoints of an application](/faq/what-is-an-api/).

Implementations of Gateway API, such as the Istio service mesh, and more advanced commercial offerings like Tetrate Service Bridge, can be used to implement API Gateway capabilities.

## How Does the Gateway API Work?

The Gateway API is a collection of API resources: GatewayClass, Gateway, HTTPRoute, TCPRoute, ReferenceGrant, etc. The Gateway API exposes a more generic proxy API that can be used for multiple protocols in addition to HTTP. It models more infrastructure components, providing better deployment and management options for cluster operations.

In addition, the Gateway API achieves configuration decoupling by separating resource objects that people can manage in different roles. The following diagram shows the roles and objects in the Gateway API:

The following is an example of using the Gateway API in Istio:

```
apiVersion: gateway.networking.k8s.io/v1alpha2
 kind: Gateway
 metadata:
  name: gateway
  namespace: istio-ingress
  spec:
  gatewayClassName: istio
  listeners:

    hostname: "*.example.com"
    port: 80
    protocol: HTTP
    allowedRoutes:
      namespaces:
        from: All
 ---
 apiVersion: gateway.networking.k8s.io/v1alpha2
 kind: HTTPRoute
 metadata:
  name: http
  namespace: default
  spec:
  parentRefs:

    namespace: istio-ingress
  hostnames: ["httpbin.example.com"]
  rules:

        type: PathPrefix
        value: /
    backendRefs:

      port: 8000
```

Similar to Ingress, Gateway uses `gatewayClassName` to declare the controller it uses, which needs to be created by the platform administrator and allows client requests for the `*.example.com` domain. Application developers can create routing rules in the namespace where their service resides, in this case, default, and bind to the Gateway via parentRefs, but only if the Gateway explicitly allows them to do so (via the rules set in the `allowRoutes` field).

When you apply the above configuration, Istio will automatically create a load-balancing gateway for you. The following diagram shows the workflow of the Gateway API:

The detailed process is as follows:

1.  The infrastructure provider provides GatewayClass and Gateway Controller.
2.  Platform operator deploy Gateway (multiple Gateways possible, or using different GatewayClasses).
3.  Gateway Controller continuously monitors changes to the GatewayClass and Gateway objects in the Kubernetes API Server.
4.  Gateway controller will create the corresponding gateway based on cluster operations and maintenance configuration.
5.  Application developers apply xRoutes and bind them to the service.
6.  If in the cloud, the client accesses the load balancer for that ingress gateway.
7.  The gateway will route to the corresponding back-end service based on the matching criteria in the traffic request.

From the above steps, we can see that the Gateway API has a clear division of roles compared to Ingress and that routing rules can be decoupled from the gateway configuration, significantly increasing management flexibility.

The following diagram shows the route flow after it is accessed at the gateway and processed:

From this figure, we can see that the route is bound to the gateway. The route is generally deployed in the same namespace as its backend services. Suppose the route is in a different namespace, and you need to explicitly give the route cross-namespace reference rights in ReferenceGrant, for example. In that case, the following HTTPRoute `foo` in the `foo` namespace can refer to the `bar` service in the `bar` namespace:

```
kind: HTTPRoute
 metadata:
  name: foo
  namespace: foo
 spec:
  rules:

    forwardTo:
      backend:

        namespace: bar
 ---
 kind: ReferenceGrant
 metadata:
  name: bar
  namespace: bar
 spec:
  from:

    kind: HTTPRoute
    namespace: foo
  to:

    kind: Service
```

## Get Started with Gateway API Using Envoy Gateway

Envoy Gateway is an implementation of the Gateway API that uses [Envoy Proxy](/what-is-envoy-proxy/) as an API gateway to deliver a simplified deployment model and an API layer aimed at lighter use cases.

Getting started with Gateway API and Envoy Gateway is easy. Go to the documentation on [the Envoy Gateway project site](https:

*   [Quick start ›](https:
*   [User guides ›](https:

## Get Enterprise Support for Your Envoy Gateway Deployment

[Tetrate Enterprise Gateway for Envoy](/tetrate-enterprise-gateway-for-envoy/) provides available 24/7 enterprise support and enablement plus FIPS-verified and CVE-protected builds of Envoy Gateway suitable for mission critical applications and regulated environments like FedRAMP.

Tetrate is a leading contributor to open source Envoy and Envoy Gateway. Tetrate Enterprise Gateway for Envoy brings them to the enterprise, with the scale, reliability, performance and security necessary for large and mission-critical apps. Whatever your Kubernetes platforms of choice, rely on Tetrate’s expertise to deliver your services without missing a beat.

### [Envoy Proxy](/learn/envoy-proxy/)

### [Istio Service Mesh](/learn/istio-service-mesh/)

### [Service Mesh Handbook: Tetrate’s Guide to Service Mesh for the Enterprise](/resource/service-mesh-handbook/)

### [ServiceMeshCon: Service Mesh Everywhere](/resource/service-mesh-everywhere/)

### [Future of Cloud Native Security](/resource/future-of-cloud-native-security/)
