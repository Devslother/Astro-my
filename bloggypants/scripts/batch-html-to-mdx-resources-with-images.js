import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import { JSDOM } from "jsdom";
import TurndownService from "turndown";

// Конфигурация только для resources
const config = {
  sourceRoot: path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "..",
    "build",
    "resources",
    "resources"
  ),
  targetRoot: "/Users/svetaco/Documents/Astro-my/src/content/resources/dirty",
  imagesTargetRoot: "/Users/svetaco/Documents/Astro-my/public/images/resources",
  categories: ["resources"],
  defaultCategory: "resources",
};

const turndownService = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
});

// --- helpers ---
const SITE_ORIGIN = "https://tetrate.io";

// Функция для загрузки изображения
async function downloadImage(url, targetPath) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`⚠️  Failed to download image: ${url}`);
      return false;
    }

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(targetPath, Buffer.from(buffer));
    console.log(`✅ Downloaded image: ${path.basename(targetPath)}`);
    return true;
  } catch (error) {
    console.log(`❌ Error downloading image ${url}:`, error.message);
    return false;
  }
}

// Функция для обработки изображений из HTML
async function processImages(document, slug) {
  const images = [];

  // Ищем все img теги
  const imgElements = document.querySelectorAll('img[src*="/_astro/"]');

  for (const img of imgElements) {
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt") || "";

    if (src && src.includes("/_astro/")) {
      // Создаем имя файла из src
      const fileName = path.basename(src);
      const imagePath = path.join(config.imagesTargetRoot, fileName);

      // Создаем директорию если нужно
      fs.mkdirSync(path.dirname(imagePath), { recursive: true });

      // Загружаем изображение
      const success = await downloadImage(
        `https://tetrate.io${src}`,
        imagePath
      );

      if (success) {
        images.push({
          originalSrc: src,
          localPath: `/images/resources/${fileName}`,
          alt: alt,
          fileName: fileName,
        });
      }
    }
  }

  return images;
}

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

// извлекаем изображения из resource__image div
function extractResourceImage(document) {
  const resourceImage = document.querySelector(".resource__image img");
  if (!resourceImage) return "";

  const src = resourceImage.getAttribute("src");
  const alt = resourceImage.getAttribute("alt") || "";

  if (src && src.includes("/_astro/")) {
    return { src, alt };
  }

  return "";
}

// извлекаем title из HTML
function extractTitle(document) {
  const title = document.querySelector("title");
  if (!title) return "";

  return title.textContent.trim();
}

// извлекаем description из HTML
function extractDescription(document) {
  const description = document.querySelector('meta[name="description"]');
  if (!description) return "";

  return description.getAttribute("content")?.trim() || "";
}

// извлекаем дату из HTML
function extractDate(document, slug, dateMap) {
  // Сначала пробуем найти в dateMap (из index.html)
  if (dateMap && dateMap[slug]) {
    return dateMap[slug];
  }

  // Затем пробуем найти в meta тегах
  const metaDate = document.querySelector(
    'meta[property="article:published_time"]'
  );
  if (metaDate) {
    return metaDate.getAttribute("content")?.trim() || "";
  }

  // Ищем в элементах time
  const timeElement = document.querySelector("time[datetime]");
  if (timeElement) {
    return timeElement.getAttribute("datetime")?.trim() || "";
  }

  return "";
}

// извлекаем автора из HTML
function extractAuthor(document) {
  const author = document.querySelector('meta[name="author"]');
  if (!author) return "";

  return author.getAttribute("content")?.trim() || "";
}

// извлекаем категории, даты и информацию о формах из главного файла index.html
function extractCategoriesFromIndex() {
  const indexPath = path.join(config.sourceRoot, "index.html");
  if (!fs.existsSync(indexPath)) return { categories: {}, dates: {}, forms: {} };

  const content = fs.readFileSync(indexPath, "utf8");
  const dom = new JSDOM(content);
  const document = dom.window.document;

  const categoryMap = {};
  const dateMap = {};
  const formMap = {};

  // Находим все элементы с data-categories и data-slug
  const elements = document.querySelectorAll("[data-categories]");

  elements.forEach((element) => {
    const slug = element.getAttribute("data-slug");
    const categoriesString = element.getAttribute("data-categories");

    if (slug && categoriesString) {
      // Разделяем категории по запятым и очищаем от HTML entities
      const categories = categoriesString
        .split(",")
        .map((cat) => cat.trim())
        .map((cat) => cat.replace(/&amp;/g, "&"))
        .filter((cat) => cat.length > 0);

      categoryMap[slug] = categories;

      // Ищем дату в элементе time
      const timeElement = element.querySelector("time[datetime]");
      if (timeElement) {
        const datetime = timeElement.getAttribute("datetime");
        if (datetime) {
          dateMap[slug] = datetime;
        }
      }
    }
  });

  return { categories: categoryMap, dates: dateMap, forms: formMap };
}

// извлекаем категории для конкретного ресурса
function extractCategories(document, slug, categoryMap) {
  return categoryMap[slug] || ["resources"];
}

// извлекаем информацию о формах из HTML
function extractFormData(document, slug) {
  const formData = {
    hubspotFormId: "",
    modalFormId: "",
    modalFormLinkText: "",
    downloadLink: "",
    useHubspotEmbed: false
  };

  // Ищем HubSpot форму
  const hubspotForm = document.querySelector('[data-portal-id][data-form-id]');
  if (hubspotForm) {
    formData.hubspotFormId = hubspotForm.getAttribute('data-form-id') || "";
    formData.useHubspotEmbed = true;
  }

  // Ищем ссылку для скачивания
  const downloadButton = document.querySelector('[data-download]');
  if (downloadButton) {
    formData.downloadLink = downloadButton.getAttribute('data-download') || "";
  }

  // Ищем модальную форму в конце статьи
  const modalLink = document.querySelector('.resource__download-link, .js-open-download');
  if (modalLink) {
    formData.modalFormLinkText = modalLink.textContent?.trim() || "Get more information";
    formData.modalFormId = formData.hubspotFormId; // Используем тот же ID формы
  }

  return formData;
}

// извлекаем контент из HTML
function extractContent(document) {
  const content = document.querySelector(".resource__content");
  if (!content) return "";

  return content.innerHTML;
}

// создаем slug из URL
function createSlug(url) {
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;

  // Убираем /resources/ из начала пути
  const cleanPath = pathname.replace(/^\/resources\//, "");

  // Убираем trailing slash
  const finalPath = cleanPath.replace(/\/$/, "");

  // Заменяем / на - для создания slug
  return finalPath.replace(/\//g, "-");
}

// основная функция обработки
async function processFile(filePath, categoryMap, dateMap, formMap) {
  console.log(`Processing: ${filePath}`);

  const content = fs.readFileSync(filePath, "utf8");
  const dom = new JSDOM(content);
  const document = dom.window.document;

  // Создаем URL из пути к файлу
  const relativePath = path.relative(config.sourceRoot, filePath);
  const url = `https://tetrate.io/resources/${relativePath.replace(
    /\/index\.html$/,
    ""
  )}`;
  const slug = createSlug(url);

  // Извлекаем метаданные
  const title = extractTitle(document);
  const description = extractDescription(document);
  const date = extractDate(document, slug, dateMap);
  const author = extractAuthor(document);
  const categories = extractCategories(document, slug, categoryMap);
  const ogImage = extractOgImage(document);
  const resourceImage = extractResourceImage(document);
  const formData = extractFormData(document, slug);
  const htmlContent = extractContent(document);

  if (!htmlContent) {
    console.log(`⚠️  No content found in ${filePath}`);
    return;
  }

  // Обрабатываем изображения
  let featuredImage = null;
  if (resourceImage && resourceImage.src) {
    const fileName = path.basename(resourceImage.src);
    const imagePath = path.join(config.imagesTargetRoot, fileName);

    // Создаем директорию если нужно
    fs.mkdirSync(path.dirname(imagePath), { recursive: true });

    // Загружаем изображение
    const success = await downloadImage(
      `https://tetrate.io${resourceImage.src}`,
      imagePath
    );

    if (success) {
      featuredImage = `/images/resources/${fileName}`;
    }
  }

  // Конвертируем HTML в Markdown
  const markdownContent = turndownService.turndown(htmlContent);

  // Создаем frontmatter
  const frontmatter = {
    title: title || "",
    description: description || "",
    date: date || null,
    author: author || null,
    featuredImage: featuredImage || null,
    categories: categories,
    excerpt: description || "",
    hubspotFormId: formData.hubspotFormId || null,
    modalFormId: formData.modalFormId || null,
    modalFormLinkText: formData.modalFormLinkText || null,
    downloadLink: formData.downloadLink || null,
    useHubspotEmbed: formData.useHubspotEmbed || false,
  };

  // Убираем пустые поля
  Object.keys(frontmatter).forEach((key) => {
    if (
      frontmatter[key] === null ||
      frontmatter[key] === "" ||
      frontmatter[key] === ">" ||
      (key === "useHubspotEmbed" && frontmatter[key] === false)
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
  const targetPath = path.join(targetDir, "index.md");
  fs.writeFileSync(targetPath, mdxContent);

  console.log(`✅ Created: ${targetPath}`);
}

// основная функция
async function main() {
  console.log("🚀 Starting resources HTML to MDX conversion with images...");

  // Проверяем, что source директория существует
  if (!fs.existsSync(config.sourceRoot)) {
    console.error(`❌ Source directory not found: ${config.sourceRoot}`);
    console.log("Please run 'npm run snarf' first to download content");
    process.exit(1);
  }

  // Создаем target директории если нужно
  fs.mkdirSync(config.targetRoot, { recursive: true });
  fs.mkdirSync(config.imagesTargetRoot, { recursive: true });

  // Извлекаем карты категорий, дат и форм из главного файла
  console.log("📋 Extracting categories, dates and form data from index.html...");
  const { categories: categoryMap, dates: dateMap, forms: formMap } =
    extractCategoriesFromIndex();
  console.log(
    `Found categories for ${Object.keys(categoryMap).length} resources`
  );
  console.log(`Found dates for ${Object.keys(dateMap).length} resources`);
  console.log(`Found form data for ${Object.keys(formMap).length} resources`);

  // Находим все HTML файлы
  const files = glob.sync(path.join(config.sourceRoot, "**/*.html"));

  if (files.length === 0) {
    console.log("No HTML files found to process");
    return;
  }

  console.log(`Found ${files.length} files to process`);

  // Обрабатываем каждый файл
  for (const file of files) {
    await processFile(file, categoryMap, dateMap, formMap);
  }

  console.log("\n🎉 Resources HTML to MDX conversion with images completed!");
  console.log(`\nNext steps:`);
  console.log(`1. Review the generated files in: ${config.targetRoot}`);
  console.log(`2. Run: node src/content/clean-resources.mjs`);
  console.log(
    `3. The cleaned files will be saved to: ${config.targetRoot.replace(
      "/dirty",
      ""
    )}`
  );
}

main().catch(console.error);
