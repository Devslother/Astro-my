---
title: "Five Essential Strategies for Deploying Service Mesh on Amazon EKS"
featuredImage: "/images/resources/amazon-eks-service-mesh-cover.webp"
description: "Tetrate provides trusted connectivity and control for AI. Empower developers while safeguarding the business. Built atop the proven Envoy proxy & Envoy AI Gateway."
categories: ["resources"]
excerpt: "Tetrate provides trusted connectivity and control for AI. Empower developers while safeguarding the business. Built atop the proven Envoy proxy & Envoy AI Gateway."
hubspotFormId: "30e70f6a-7027-4727-a27c-2c5798b226c5"
modalFormId: "30e70f6a-7027-4727-a27c-2c5798b226c5"
modalFormLinkText: "Get CVE Alerts and Patches"
downloadLink: "https://7637559.fs1.hubspotusercontent-na1.net/hubfs/7637559/Resources%20and%20PDFs/White%20Papers/Five%20Essential%20Amazon%20EKS%20Security%20and%20Availability%20Strategies%20with%20a%20Service%20Mesh.pdf"
useHubspotEmbed: true
---

![Post Image](/images/resources/amazon-eks-service-mesh-cover.webp)

Virtually all organizations are adopting cloud infrastructure, either augmenting their on- prem footprint or wholesale migrating away from on-prem in favor of more flexibility. Indeed many organizations are creating their entire infrastructure in the cloud from day 1! As of the time of this writing, Amazon Web Services (AWS) holds the largest market share amongst cloud providers. When running workloads in the cloud, many organizations

are also adopting cloud-native infrastructure, which starts with running workloads in containers and adopting a container orchestration platform. Kubernetes is the most popular open source container orchestration engine for automating deployment, scaling, and management of containerized applications. Amazon Elastic Kubernetes Service (EKS) is a managed Kubernetes service to run Kubernetes. Amazon EKS automatically manages the availability and scalability of the Kubernetes control plane nodes responsible for scheduling containers, managing application availability, storing cluster data, and other key tasks.

EKS is undoubtedly one of the most popular ways to run Kubernetes, but are you getting the most out of it? Specifically, how do you translate small-scale success in limited-scale deployments into at-sale production infrastructure? Not only does running Kubernetes  
at scale create new security and availability challenges for its operators. Crucially, Kubernetes teams rarely have the luxury of adding new headcount and budget as they scale out. In search for operational leverage is when Kubernetes operators find service mesh as the solution to achieve their security and availability requirements.

Service mesh is a proven architecture popularized recently that gives operators control and observability over Kubernetes traffic. [Istio](/) and Envoy have emerged as the de facto standard for implementing a service mesh, including Amazon EKS. With the right service mesh implementation on Amazon EKS, you can take advantage of all the performance, scale, reliability, and availability of AWS infrastructure, as well as integrations with AWS networking and security services. In this whitepaper, we present six service mesh strategies to help you enhance security and availability for your EKS workloads.
