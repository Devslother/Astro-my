export type TMenuItem = {
  icon?: string;
  name: string;
  description?: string;
  url: string;
  external?: boolean;
};

export type THeaderMenu = {
  title: string;
  url: string;
  categories?: {
    title?: string;
    url?: string;
    items?: TMenuItem[];
  }[];
};

export const headerNavigation: THeaderMenu[] = [
  {
    title: "Products",
    url: "/",
    categories: [
      {
        title: "Enterprise Solutions for Regulated Workloads",
        items: [
          {
            icon: "products-agent-operations-director",
            name: "Agent Operations Director",
            description:
              "Runtime visibility and governance for ML infrastructure teams to maximize GenAI ROI",
            url: "/products/agent-operations-director",
          },
          {
            icon: "products-app-gateway",
            name: "Tetrate Application Gateway",
            description:
              "Intent-driven ingress traffic orchestration across clouds, on-prem environments, K8s, and VMs",
            url: "/products/tetrate-application-gateway",
          },
        ],
      },
      {
        title: "Open Source Solutions for Kubernetes Networking",
        items: [
          {
            icon: "products-tetrate-istio-subscription",
            name: "Tetrate Istio Subscription",
            description:
              "Stable releases, production support, CVE scanner, and configuration analysis in one package",
            url: "/products/tetrate-istio-subscription",
          },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    url: "/solutions/financial-services",
    categories: [
      {
        items: [
          {
            icon: "solutions-financial-services",
            name: "Financial Services",
            description:
              "Build secure, scalable cloud-native applications and innovate faster with the service mesh",
            url: "/solutions/financial-services",
          },
        ],
      },
    ],
  },
  {
    title: "Learn",
    url: "/learn",
    categories: [
      {
        title: "Resources",
        url: "/resources",
      },
      {
        title: "Learning Center",
        url: "/learn",
        items: [
          {
            name: "Envoy Proxy",
            description:
              "Get started with the standard data plane for cloud-native applications.",
            url: "/learn/envoy-proxy",
          },
          {
            name: "Envoy Gateway",
            description:
              "Build scalable and resilient apps using Envoy as an application gateway.",
            url: "/learn/what-is-envoy-gateway",
          },
          {
            name: "Istio Service Mesh",
            description:
              "Connect, manage and secure apps with the industry standard service mesh.",
            url: "/learn/istio-service-mesh",
          },
          {
            name: "Mutual TLS (mTLS)",
            description:
              "Ensure secure communication between components of a Zero Trust architecture.",
            url: "/learn/what-is-mtls",
          },
          {
            name: "Observability",
            description:
              "Observe app behavior with telemetry from logs, metrics, traces and events.",
            url: "/learn/what-is-observability",
          },
        ],
      },
      {
        title: " ",
        url: "",
        items: [
          {
            name: "API Gateway",
            description:
              "Simplify app traffic management and improve security with a single point of entry.",
            url: "/learn/what-is-an-api-gateway",
          },
          {
            name: "Kubernetes Gateway API",
            description:
              "Manage K8s ingress with more power than the old Ingress API.",
            url: "/learn/what-is-kubernetes-gateway-api",
          },
          {
            name: "Microservices",
            description:
              "Gain agility with services that are separately developed, deployed and scaled.",
            url: "/learn/what-are-microservices",
          },
          {
            name: "Platform Team",
            description:
              "Improve application infrastructure with a dedicated team.",
            url: "/learn/what-is-platform-team",
          },
          {
            name: "Wasm",
            description:
              "Write portable code in multiple languages compiled to a common bytecode format.",
            url: "/learn/what-is-wasm",
          },
          {
            name: "Zero Trust Architecture",
            description:
              "Improve security for all communication, regardless of network location.",
            url: "/learn/what-is-zero-trust-architecture",
          },
        ],
      },
    ],
  },
];
