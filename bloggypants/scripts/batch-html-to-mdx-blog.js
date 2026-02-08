import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import { JSDOM } from "jsdom";
import TurndownService from "turndown";

// Конфигурация только для blog
const config = {
  sourceRoot: path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "..",
    "build",
    "blog",
    "blog"
  ),
  targetRoot: "/Users/svetaco/Documents/Astro-my/src/content/blog/dirty",
  categories: ["blog"],
  defaultCategory: "blog",
};

const turndownService = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
});

// --- helpers ---
const SITE_ORIGIN = "https://tetrate.io";

function isBadOg(url = "") {
  const u = url.toLowerCase();
  return (
    !u ||
    u.endsWith(".svg") ||
    u.includes("logo") ||
    u.includes("placeholder") ||
    u.includes("og_image") ||
    u.includes("tetrate.io-og_image")
  );
}

// оставляем только абсолютные http/https и отбрасываем «плохие»
function isGoodUrl(url = "") {
  const s = url.toLowerCase().trim();
  if (!/^https?:\/\//.test(s)) return false;
  return !(
    s.endsWith(".svg") ||
    s.includes("logo") ||
    s.includes("placeholder") ||
    s.includes("og_image") ||
    s.includes("tetrate.io-og_image")
  );
}

// приводим к абсолютному url, если возможно; возвращаем только http/https
function absolutize(url = "") {
  if (!url) return "";
  try {
    const abs = new URL(url, SITE_ORIGIN).href;
    return /^https?:\/\//i.test(abs) ? abs : "";
  } catch {
    return "";
  }
}

// Новая функция для проверки относительных путей к изображениям
function isGoodImageUrl(url = "") {
  if (!url) return false;
  const s = url.toLowerCase().trim();

  // Принимаем относительные пути к изображениям
  if (s.startsWith("/wp-content/uploads/")) return true;
  if (s.startsWith("/wp-content/")) return true;

  // Принимаем абсолютные URL
  if (/^https?:\/\//.test(s)) {
    return !(
      s.endsWith(".svg") ||
      s.includes("logo") ||
      s.includes("placeholder") ||
      s.includes("og_image") ||
      s.includes("tetrate.io-og_image")
    );
  }

  return false;
}

// проверяем доступность URL (HEAD → fallback GET)
async function urlOk(url = "") {
  if (!url) return false;
  try {
    let res = await fetch(url, { method: "HEAD" });
    if (!res.ok || res.status >= 400) {
      res = await fetch(url, { method: "GET" });
      return res.ok && res.status < 400;
    }
    return true;
  } catch {
    return false;
  }
}

// извлекаем og:image из HTML
function extractOgImage(document) {
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (!ogImage) return "";

  const content = ogImage.getAttribute("content");
  if (!content) return "";

  // Проверяем, что это хороший URL для изображения
  if (isGoodImageUrl(content)) {
    return content;
  }

  return "";
}

// извлекаем title из HTML
function extractTitle(document) {
  const title = document.querySelector("title");
  if (!title) return "";

  return title.textContent.trim();
}

// извлекаем description из HTML и обрезаем до одного предложения
function extractDescription(document) {
  const description = document.querySelector('meta[name="description"]');
  if (!description) return "";

  const content = description.getAttribute("content")?.trim() || "";
  if (!content) return "";

  // Обрезаем до первого предложения (до точки, восклицательного или вопросительного знака)
  const sentenceEnd = content.search(/[.!?]/);
  if (sentenceEnd !== -1) {
    return content.substring(0, sentenceEnd + 1);
  }

  // Если нет знаков препинания, обрезаем до 150 символов
  if (content.length > 150) {
    return content.substring(0, 150) + "...";
  }

  return content;
}

// извлекаем дату из HTML
function extractDate(document) {
  const date = document.querySelector(
    'meta[property="article:published_time"]'
  );
  if (!date) return "";

  return date.getAttribute("content")?.trim() || "";
}

// извлекаем автора из HTML
function extractAuthor(document) {
  const author = document.querySelector('meta[name="author"]');
  if (!author) return "";

  return author.getAttribute("content")?.trim() || "";
}

// извлекаем категории из URL, заголовков и метатегов
function extractCategories(document, url, title) {
  const categories = new Set();

  // 1. Извлекаем из метатегов
  const categoryMeta = document.querySelector('meta[name="category"]');
  if (categoryMeta) {
    const metaCategories = categoryMeta
      .getAttribute("content")
      ?.split(",")
      .map((c) => c.trim());
    if (metaCategories) {
      metaCategories.forEach((cat) => categories.add(cat.toLowerCase()));
    }
  }

  // 2. Анализируем URL на ключевые слова
  const urlKeywords = [
    "kubernetes",
    "k8s",
    "kube",
    "istio",
    "service-mesh",
    "mesh",
    "envoy",
    "gateway",
    "proxy",
    "security",
    "zero-trust",
    "mtls",
    "observability",
    "monitoring",
    "tracing",
    "wasm",
    "webassembly",
    "ambient",
    "sidecar",
    "ingress",
    "egress",
    "skywalking",
    "jaeger",
    "prometheus",
  ];

  const urlLower = url.toLowerCase();
  urlKeywords.forEach((keyword) => {
    if (urlLower.includes(keyword)) {
      categories.add(keyword);
    }
  });

  // 3. Анализируем заголовок на ключевые слова
  const titleLower = title.toLowerCase();
  const titleKeywords = [
    "kubernetes",
    "k8s",
    "kube",
    "istio",
    "service mesh",
    "mesh",
    "envoy",
    "gateway",
    "proxy",
    "security",
    "zero trust",
    "mtls",
    "observability",
    "monitoring",
    "tracing",
    "wasm",
    "webassembly",
    "ambient",
    "sidecar",
    "ingress",
    "egress",
    "skywalking",
    "jaeger",
    "prometheus",
    "tutorial",
    "guide",
    "best practices",
    "deployment",
    "configuration",
  ];

  titleKeywords.forEach((keyword) => {
    if (titleLower.includes(keyword)) {
      // Нормализуем ключевые слова
      const normalizedKeyword = keyword.replace(/\s+/g, "-");
      categories.add(normalizedKeyword);
    }
  });

  // 4. Специальные правила для определения категорий
  if (titleLower.includes("kubernetes") || urlLower.includes("kubernetes")) {
    categories.add("kubernetes");
  }

  if (titleLower.includes("istio") || urlLower.includes("istio")) {
    categories.add("istio");
  }

  if (titleLower.includes("envoy") || urlLower.includes("envoy")) {
    categories.add("envoy");
  }

  if (
    titleLower.includes("security") ||
    titleLower.includes("zero trust") ||
    titleLower.includes("mtls")
  ) {
    categories.add("security");
  }

  if (
    titleLower.includes("observability") ||
    titleLower.includes("monitoring") ||
    titleLower.includes("tracing")
  ) {
    categories.add("observability");
  }

  if (
    titleLower.includes("tutorial") ||
    titleLower.includes("guide") ||
    titleLower.includes("how to")
  ) {
    categories.add("tutorial");
  }

  // 5. Если категории не найдены, используем базовую категорию
  if (categories.size === 0) {
    categories.add("blog");
  }

  return Array.from(categories);
}

// извлекаем контент из HTML
function extractContent(document) {
  const content = document.querySelector(".post__content");
  if (!content) return "";

  return content.innerHTML;
}

// создаем slug из URL
function createSlug(url) {
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;

  // Убираем /blog/ из начала пути
  const cleanPath = pathname.replace(/^\/blog\//, "");

  // Убираем trailing slash
  const finalPath = cleanPath.replace(/\/$/, "");

  // Заменяем / на - для создания slug
  return finalPath.replace(/\//g, "-");
}

// основная функция обработки
async function processFile(filePath) {
  console.log(`Processing: ${filePath}`);

  const content = fs.readFileSync(filePath, "utf8");
  const dom = new JSDOM(content);
  const document = dom.window.document;

  // Создаем URL из пути к файлу
  const relativePath = path.relative(config.sourceRoot, filePath);
  const url = `https://tetrate.io/blog/${relativePath.replace(
    /\/index\.html$/,
    ""
  )}`;
  const slug = createSlug(url);

  // Извлекаем метаданные
  const title = extractTitle(document);
  const description = extractDescription(document);
  const date = extractDate(document);
  const author = extractAuthor(document);
  const featuredImage = extractOgImage(document);
  const htmlContent = extractContent(document);
  const categories = extractCategories(document, url, title);

  // Логируем извлеченные категории для отладки
  console.log(`📂 Categories for "${title}": [${categories.join(", ")}]`);

  if (!htmlContent) {
    console.log(`⚠️  No content found in ${filePath}`);
    return;
  }

  // Конвертируем HTML в Markdown
  const markdownContent = turndownService.turndown(htmlContent);

  // Создаем frontmatter
  const frontmatter = {
    title: title || "",
    description: description || "",
    date: date || null,
    author: author || "Tetrate Team", // По умолчанию Tetrate Team
    featuredImage: featuredImage || null,
    categories: categories, // Используем извлеченные категории
    excerpt: description || "",
  };

  // Убираем пустые поля
  Object.keys(frontmatter).forEach((key) => {
    if (
      frontmatter[key] === null ||
      frontmatter[key] === "" ||
      frontmatter[key] === ">"
    ) {
      delete frontmatter[key];
    }
  });

  // Создаем MDX контент
  const mdxContent = `---
${Object.entries(frontmatter)
  .map(([key, value]) => {
    if (typeof value === "string" && value.includes("\n")) {
      return `${key}: >-\n  ${value}`;
    }
    return `${key}: ${JSON.stringify(value)}`;
  })
  .join("\n")}
---

${markdownContent}`;

  // Создаем директорию если нужно
  const targetDir = path.join(config.targetRoot, slug);
  fs.mkdirSync(targetDir, { recursive: true });

  // Сохраняем файл
  const targetPath = path.join(targetDir, "index.mdx");
  fs.writeFileSync(targetPath, mdxContent);

  console.log(`✅ Created: ${targetPath}`);
}

// основная функция
async function main() {
  console.log("🚀 Starting blog HTML to MDX conversion...");

  // Проверяем, что source директория существует
  if (!fs.existsSync(config.sourceRoot)) {
    console.error(`❌ Source directory not found: ${config.sourceRoot}`);
    console.log("Please run 'npm run snarf' first to download content");
    process.exit(1);
  }

  // Создаем target директорию если нужно
  fs.mkdirSync(config.targetRoot, { recursive: true });

  // Находим все HTML файлы
  const files = glob.sync(path.join(config.sourceRoot, "**/*.html"));

  if (files.length === 0) {
    console.log("No HTML files found to process");
    return;
  }

  console.log(`Found ${files.length} files to process`);

  // Обрабатываем каждый файл
  for (const file of files) {
    await processFile(file);
  }

  console.log("\n🎉 Blog HTML to MDX conversion completed!");
  console.log(`\nNext steps:`);
  console.log(`1. Review the generated files in: ${config.targetRoot}`);
  console.log(`2. Run: node src/content/clean-blog.mjs`);
  console.log(
    `3. The cleaned files will be saved to: ${config.targetRoot.replace(
      "/dirty",
      ""
    )}`
  );
}

main().catch(console.error);
