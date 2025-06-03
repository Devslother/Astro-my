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
    items: TMenuItem[];
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
            icon: "agentoperationsdirector",
            name: "Agent Operations Director",
            description:
              "Runtime visibility and governance for ML infrastructure teams to maximize GenAI ROI",
            url: "/agent",
          },
          {
            icon: "tetrateappgateway",
            name: "Tetrate Application Gateway",
            description:
              "Intent-driven ingress traffic orchestration across clouds, on-prem environments, K8s, and VMs",
            url: "/app",
          },
          {
            icon: "tetrateservicebridge",
            name: "Tetrate Service Bridge",
            description:
              "Service mesh management for multi-cluster, multi-tenant developer platforms at massive scale",
            url: "/products/tetrate-service-bridge/",
          },
        ],
      },
      {
        title: "Open Source Solutions for Kubernetes Networking",
        items: [
          {
            icon: "tetrateistiosubscription",
            name: "Tetrate Istio Subscription",
            description:
              "Stable releases, production support, CVE scanner, and configuration analysis in one package",
            url: "/products/tetrate-istio-subscription/",
          },
          {
            icon: "tetrateistiosubscriptionplus",
            name: "Tetrate Istio Subscription+",
            description:
              "Powerful multi-cluster Istio troubleshooting for platform teams, safe self-service diagnostics for app",
            url: "/products/tetrate-istio-subscription-plus/",
          },
          {
            icon: "tetrateenterpriseenvoygateway",
            name: "Tetrate Enterprise Gateway",
            description:
              "Stable releases, expert migration guidance, and production support for Envoy Gateway adopters",
            url: "/products/tetrate-enterprise-gateway-for-envoy/",
          },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    url: "/about",
    categories: [
      {
        items: [
          {
            icon: "financialservices",
            name: "Financial Services",
            description:
              "Build secure, scalable cloud-native applications and innovate faster with the service mesh",
            url: "/solutions/financial-services/",
          },
          {
            icon: "fips",
            name: "FIPS",
            description:
              "FIPS-compliant Istio for compliance, faster FedRAMP approval, and security",
            url: "/solutions/fips-140-2-validated-service-mesh/",
          },
          {
            icon: "government",
            name: "Government",
            description:
              "Tetrate’s FIPS-validated mesh ensures modernization, risk mitigation, and compliance",
            url: "/solutions/government/",
          },
          {
            icon: "kubernetes",
            name: "Kubernetes",
            description:
              "Seamlessly implement policies for security, identity, traffic management",
            url: "/solutions/manage-kubernetes-complexity/",
          },
          {
            icon: "kubernetes",
            name: "Kubernetes Ingress",
            description:
              "HTTP/S traffic routing mechanism for exposing servises within a Kubernetes cluster",
            url: "/solutions/manage-kubernetes-ingress-complexity/",
          },
          {
            icon: "zerotrust",
            name: "Zero Trust Security",
            description:
              "Secure multi-cloud microservices with Zero Trust to protect apps, users, and business",
            url: "/solutions/zero-trust-security/",
          },
        ],
      },
    ],
  },
  {
    title: "Learn",
    url: "/blog",
    categories: [
      {
        title: "Resources",
        url: "/resources/",
        items: [
          {
            icon: "blog",
            name: "Blog",
            url: "/blog/",
          },
          {
            icon: "zerotrustcenter",
            name: "Zero Trust Center",
            url: "/resources/",
          },
          {
            icon: "documentation",
            name: "Documentation",
            url: "https://docs.tetrate.io/",
          },
          {
            icon: "faq",
            name: "FAQ",
            url: "/faq/whats-the-difference-between-tetrate-products-and-istio",
          },
          {
            icon: "ebooksandreports",
            name: "Ebooks & Reports",
            url: "/resources/?fwp_resource_categories=ebooks-reports",
          },
          {
            icon: "whitepapers",
            name: "White papers",
            url: "/resources/?fwp_resource_categories=whitepapers",
          },
          {
            icon: "video",
            name: "Video",
            url: "/resources/?fwp_resource_categories=video",
          },
          {
            icon: "all",
            name: "All Resources",
            url: "/resources/",
          },
          {
            icon: "button",
            name: "Tetrate Academy",
            url: "https://academy.tetrate.io/",
          },
        ],
      },
      {
        title: "Learning Center",
        url: "/learning-center/",
        items: [
          {
            name: "Envoy Proxy",
            description:
              "Get started with the standard data plane for cloud-native applications.",
            url: "/learn/envoy-proxy/",
          },
          {
            name: "Envoy Gateway",
            description:
              "Build scalable and resilient apps using Envoy as an application gateway.",
            url: "/envoy-gateway/",
          },
          {
            name: "Istio Service Mesh",
            description:
              "Connect, manage and secure apps with the industry standard service mesh.",
            url: "/learn/istio-service-mesh/",
          },
          {
            name: "FIPS",
            description:
              "Learn about the security standards for apps runnng in FedRAMP environments.",
            url: "/learn/what-is-fips/",
          },
          {
            name: "Mutual TLS (mTLS)",
            description:
              "Ensure secure communication between components of a Zero Trust architecture.",
            url: "/learn/what-is-mtls/",
          },
          {
            name: "Observability",
            description:
              "Observe app behavior with telemetry from logs, metrics, traces and events.",
            url: "/learn/what-is-observability/",
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
            url: "/api-gateway/",
          },
          {
            name: "Kubernetes Gateway API",
            description:
              "Manage K8s ingress with more power than the old Ingress API.",
            url: "/learn/what-is-kubernetes-gateway-api/",
          },
          {
            name: "Microservices",
            description:
              "Gain agility with services that are separately developed, deployed and scaled.",
            url: "/learn/what-are-microservices/",
          },
          {
            name: "Platform Team",
            description:
              "Improve application infrastructure with a dedicated team.",
            url: "/learn/what-is-platform-team/",
          },
          {
            name: "Wasm",
            description:
              "Write portable code in multiple languages compiled to a common bytecode format.",
            url: "/learn/what-is-wasm/",
          },
          {
            name: "Zero Trust Architecture",
            description:
              "Improve security for all communication, regardless of network location.",
            url: "/learn/what-is-zero-trust-architecture/",
          },
        ],
      },
    ],
  },
  {
    title: "Events",
    url: "/events",
  },
  {
    title: "Company",
    url: "/company",
    categories: [
      {
        items: [
          {
            icon: "aboutus",
            name: "About Us",
            url: "/about",
          },
          {
            icon: "leadership",
            name: "Leadership",
            url: "/about#leadership",
          },
          {
            icon: "investors",
            name: "Investors",
            url: "/about#investors",
          },
          {
            icon: "partners",
            name: "Partners",
            url: "/partners-and-integrations",
          },
          {
            icon: "newsroom",
            name: "Newsroom",
            url: "/press",
          },
          {
            icon: "careers",
            name: "Careers",
            url: "/about#careers",
          },
          {
            icon: "getsupport",
            name: "Get Support",
            url: "/about#support",
          },
          {
            icon: "contactus",
            name: "Contact Us",
            url: "/about#support",
          },
        ],
      },
    ],
  },
];
