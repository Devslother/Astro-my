import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Конфигурация
const config = {
  baseUrl: "https://tetrate.io",
  outputDir: path.join(__dirname, "build"),
  learn: [
    "/learn/",
    "/learn/container-ingress-traffic-management-capabilities/",
    "/learn/difference-between-ingress-and-service-in-kubernetes/",
    "/learn/envoy-proxy/",
    "/learn/how-to-secure-kubernetes/",
    "/learn/ingress-and-egress-architecture/",
    "/learn/ingress-controller-vs-load-balancer/",
    "/learn/istio-service-mesh/",
    "/learn/kubernetes-security-architecture/",
    "/learn/kubernetes-security-best-practices/",
    "/learn/kubernetes-traffic-routing-and-control/",
    "/learn/use-case-kubernetes-architecture/",
    "/learn/what-are-microservices/",
    "/learn/what-does-kubernetes-do/",
    "/learn/what-is-an-api-gateway/",
    "/learn/what-is-envoy-gateway/",
    "/learn/what-is-kubernetes-gateway-api/",
    "/learn/what-is-kubernetes-service-mesh/",
    "/learn/what-is-mtls/",
    "/learn/what-is-observability/",
    "/learn/what-is-platform-team/",
    "/learn/what-is-wasm/",
    "/learn/what-is-zero-trust-architecture/",
    "/learn/why-do-i-we-need-kubernetes/",
  ],
  resources: [
    "/resources/",
    "/resources/zero-trust-architecture-white-paper/",
    "/resources/essential-service-mesh-adoption-checklist/",
    "/resources/five-essential-amazon-eks-security-and-availability-strategies-with-a-service-mesh/",
    "/resources/future-of-cloud-native-security/",
    "/resources/envoy-gateway-1-0-modernizes-ingress-for-kubernetes-users/",
    "/resources/defense-unicorns-istio-to-tetrate-with-zack-butcher/",
    "/resources/current-state-and-future-of-istio-service-mesh/",
    "/resources/common-vulnerabilities-and-exposures-cve-explained/",
    "/resources/meeting-the-need-for-modern-application-networking/",
    "/resources/introducing-tetrate-service-express/",
    "/resources/informatica-gains-enterprise-level-support-with-tetrate-and-hardens-security/",
    "/resources/implementing-zero-trust-environment-with-tetrate-service-mesh/",
    "/resources/hipaa-compliance-with-tetrate-service-bridge/",
    "/resources/documentary-inside-envoy/",
    "/resources/service-mesh-handbook/",
    "/resources/service-mesh-everywhere/",
    "/resources/simplify-kubernetes-and-multi-cloud-complexity-with-the-service-mesh/",
    "/resources/istio-production-success/",
    "/resources/identity-based-segmentation-for-a-zero-trust-architecture/",
    "/resources/tetrate-service-bridge-a-large-scale-service-mesh/",
    "/resources/tetrate-service-bridge-application-security-architecture/",
    "/resources/tetrate-service-bridge-data-sheet/",
    "/resources/tetrate-pci-dss-40-guide/",
    "/resources/tetrate-guide-to-federal-security-requirements-for-microservices/",
    "/resources/tis-data-sheet/",
    "/resources/teg-data-sheet/",
    "/resources/zero-trust-fips-and-fedramp-for-cloud-native-applications/",
    "/resources/zero-trust-solutions-for-federal-agencies/",
    "/resources/nist-zero-trust-architecture/",
  ],
  blog: [
    "/blog/",
    "/blog/announcing-tetrate-config-analyzer-github-action-streamline-your-istio-configuration-validation/",
    "/blog/ambient-mesh-what-you-need-to-know-about-this-experimental-new-deployment-model-for-istio/",
    "/blog/aws-tis/",
    "/blog/istio-gateway-upgrade-challenges-how-we-solved-tls-issues-and-ensured-seamless-service-delivery/",
    "/blog/gartner-casce-proposal-for-securing-composite-applications/",
    "/blog/kubernetes-envoy-gateway-extensions/",
    "/blog/announcing-vanilla-kubernetes-with-ebpf-support-for-tetrate-istio-subscription-plus/",
    "/blog/istio-trust/",
    "/blog/tsb-deployment-in-aws-joining-eks-anywhere-and-eks-cloud/",
    "/blog/is-less-more-for-api-gateways-the-80-case-for-envoy-proxy/",
    "/blog/watch-now-tetrate-at-jfokus-2024-webassembly-from-the-inside-out/",
    "/blog/lateral-movement-and-the-service-mesh/",
    "/blog/secure-ingress/",
    "/blog/the-beginning-of-a-scalable-genai-future-the-first-release-of-envoy-ai-gateway/",
    "/blog/announcing-teg-1-0/",
    "/blog/envoy-101-file-based-dynamic-configurations/",
    "/blog/cloud-native-service-mesh/",
    "/blog/implementing-gitops-and-canary-deployment-with-argo-project-and-istio/",
    "/blog/istio-1-8-a-smart-dns-proxy-takes-support-for-virtual-machines-a-step-further/",
    "/blog/envoy-proxy-1-15-release/",
    "/blog/envoy-gateways-latest-v0-3-release-extends-the-kubernetes-gateway-api/",
    "/blog/how-to-get-started-with-envoy-extensions-wasm-and-getenvoy/",
    "/blog/introducing-tetrate-service-express/",
    "/blog/rbac-vs-abac-vs-ngac/",
    "/blog/defense-unicorns-and-tetrate-shorten-compliance-timeline-and-boost-developer-productivity/",
    "/blog/using-istio-with-other-ingress-proxies/",
    "/blog/implementing-zero-trust-for-applications-with-the-tanzu-application-platform-and-tetrate-service-bridge-tsb/",
    "/blog/how-to-use-graphql-to-query-observability-data-from-skywalking-with-postman/",
    "/blog/client-side-availability-and-resiliency-with-envoy-gateway/",
    "/blog/fedramp-fips-ready/",
    "/blog/leveraging-envoypatchpolicy-to-extend-the-capabilities-of-envoy-gateway/",
    "/blog/istio-challenges/",
    "/blog/creating-strong-sticky-sessions-with-istio/",
    "/blog/uncover-hidden-vulnerabilities-with-tetrates-free-advanced-cve-scanner-for-istio-and-envoy/",
    "/blog/top-industries-using-istio-service-mesh/",
    "/blog/istio-based-traffic-management-use-case-of-ebay/",
    "/blog/how-istios-mtls-traffic-encryption-works-as-part-of-a-zero-trust-security-posture/",
    "/blog/wasm-outside-the-browser/",
    "/blog/istio-telemetry/",
    "/blog/nist-conference/",
    "/blog/istio-service-mesh-10-takeaways-from-tetrates-09-2020-ama-session/",
    "/blog/trying-out-istios-dns-proxy-2/",
    "/blog/kubernetes-edge-platform/",
    "/blog/how-tetrate-istio-distro-became-the-first-fips-compliant-istio-distribution/",
    "/blog/introducing-istio-advisor-plus-gpt/",
    "/blog/istio-eks-hybrid-auto-mode-support/",
    "/blog/vm-onboarding-with-tsb-service-mesh-and-customer-experience/",
    "/blog/whats-new-in-envoy-gateways-latest-05-release-enhanced-usability-and-observability/",
    "/blog/kubernetes-ingress-and-envoy-gateway/",
    "/blog/devsecops-istio-nicolas-dod/",
    "/blog/istio-service-mesh-service-registry/",
    "/blog/envoy-miroservice-architecture/",
    "/blog/istio-visibility-and-troubleshooting-key-metrics-for-monitoring-the-control-plane/",
    "/blog/envoy-istio-security-advisory/",
    "/blog/the-future-of-istio-the-path-to-zero-trust-security/",
    "/blog/apache-skywalking-v6-is-service-mesh-ready/",
    "/blog/pinpoint-service-mesh-critical-performance-impact-by-using-ebpf/",
    "/blog/zero-trust-network-for-microservices/",
    "/blog/top-blog-kubernetes-istio-service-mesh-cloud/",
    "/blog/kubecon-eu-2024-tetrates-insights-and-highlights-from-paris/",
    "/blog/client-source-ip-in-kubernetes-ingress/",
    "/blog/nist-sp-800-207a-explained-zero-trust-architecture-model-for-access-control/",
    "/blog/using-geneve-tunnels-to-implement-istio-ambient-mesh-traffic-interception/",
    "/blog/tetrate-2021/",
    "/blog/skywalkings-new-storage-feature-based-on-shardingsphere-proxy-mysql-sharding/",
    "/blog/securing-istio-addressing-critical-security-gaps-and-best-practices/",
    "/blog/introducing-getenvoy-extension-toolkit-for-webassembly-based-envoy-extensions/",
    "/blog/exploring-envoy-proxys-latest-release-version-127/",
    "/blog/how-to-debug-microservices-in-kubernetes-with-proxy-sidecar-or-service-mesh-2/",
    "/blog/trulia-mongodb-usage/",
    "/blog/top-5-kubernetes-security-best-practices-for-authentication-and-authorization/",
    "/blog/implementing-http-2-connect-tunnels-with-envoy-concepts-and-practical-guide/",
    "/blog/observability-at-scale-skywalking-it-is/",
    "/blog/building-highly-available-ha-and-resilient-microservices-using-istio-service-mesh/",
    "/blog/skywalking8-1-release/",
    "/blog/how-to-use-skywalking-for-distributed-tracing-in-istio/",
    "/blog/service-mesh-day-2019-the-first-ever-service-mesh-industry-conference/",
    "/blog/introducing-slime-and-aeraki-in-the-evolution-of-istio-open-source-ecosystem/",
    "/blog/spa-api-call-with-kubernetes/",
    "/blog/envoy-101-configuring-envoy-as-a-gateway/",
    "/blog/understanding-istio-and-tcp-services/",
    "/blog/istio-service-mesh-delta-xds/",
    "/blog/envoy-gateway-0-4-0-extending-the-api-for-customization/",
    "/blog/istio-service-mesh-new-features-v1-22/",
    "/blog/transparent-traffic-intercepting-and-routing-in-the-l4-network-of-istio-ambient-mesh/",
    "/blog/envoy-cve-security/",
  ],
};

// Функция для скачивания страницы
async function downloadPage(url, outputPath) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`❌ Failed to download ${url}: ${response.status}`);
      return false;
    }

    const html = await response.text();

    // Создаем директорию если нужно
    const dir = path.dirname(outputPath);
    fs.mkdirSync(dir, { recursive: true });

    // Сохраняем HTML
    fs.writeFileSync(outputPath, html);
    console.log(`✅ Downloaded: ${url}`);
    return true;
  } catch (error) {
    console.log(`❌ Error downloading ${url}: ${error.message}`);
    return false;
  }
}

// Основная функция
async function main() {
  console.log("🚀 Starting content download...");

  // Создаем output директорию
  fs.mkdirSync(config.outputDir, { recursive: true });

  let successCount = 0;
  let totalCount = 0;

  // Скачиваем learn
  console.log("\n📖 Downloading learn articles...");
  for (const learn of config.learn) {
    const url = `${config.baseUrl}${learn}`;
    const outputPath = path.join(
      config.outputDir,
      "learn",
      learn.replace(/^\//, ""),
      "index.html"
    );

    totalCount++;
    if (await downloadPage(url, outputPath)) {
      successCount++;
    }

    // Небольшая задержка между запросами
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  // Скачиваем resources
  console.log("\n📚 Downloading resources...");
  for (const resource of config.resources) {
    const url = `${config.baseUrl}${resource}`;
    const outputPath = path.join(
      config.outputDir,
      "resources",
      resource.replace(/^\//, ""),
      "index.html"
    );

    totalCount++;
    if (await downloadPage(url, outputPath)) {
      successCount++;
    }

    // Небольшая задержка между запросами
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  // Скачиваем blog
  console.log("\n📝 Downloading blog posts...");
  for (const blog of config.blog) {
    const url = `${config.baseUrl}${blog}`;
    const outputPath = path.join(
      config.outputDir,
      "blog",
      blog.replace(/^\//, ""),
      "index.html"
    );

    totalCount++;
    if (await downloadPage(url, outputPath)) {
      successCount++;
    }

    // Небольшая задержка между запросами
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  console.log(`\n🎉 Download completed!`);
  console.log(
    `✅ Successfully downloaded: ${successCount}/${totalCount} pages`
  );
  console.log(`📁 Output directory: ${config.outputDir}`);
}

main().catch(console.error);
