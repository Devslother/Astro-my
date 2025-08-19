import fs from "fs/promises";
import path from "path";
import { glob } from "glob";
import matter from "gray-matter";
import slugify from "@sindresorhus/slugify";

// === helpers ===
function absolutizeWp(url = "") {
  if (!url) return url;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("/wp-content/")) return `https://tetrate.io${url}`;
  return url;
}

function isProbablyValidImage(url = "") {
  if (!url) return false;
  const u = url.toLowerCase();

  // отбрасываем логотипы / svg / плейсхолдеры / общие OG-постеры
  if (u.endsWith(".svg")) return false;
  if (u.includes("logo") || u.includes("placeholder")) return false;
  if (u.includes("og_image") || u.includes("tetrate.io-og_image")) return false;

  // допустимы абсолютные http(s) или относительный wp-content
  return /^https?:\/\//.test(url) || u.startsWith("/wp-content/");
}

// Очистка и нормализация одного MDX-файла
export function cleanMdxContent(raw) {
  const { content, data } = matter(raw);

  let cleaned = content
    // Удалить HTML и JS
    .replace(/\/\/.*$/gm, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/var\s+_hsq\s*=\s*.*?;/g, "")
    .replace(/window\._hsq[\s\S]*?\];?/g, "")
    .replace(/hbspt\.forms\.create\([\s\S]*?\);?/g, "")
    .replace(/_NBSettings\s*=\s*{[\s\S]*?};?/g, "")

    // Markdown
    .replace(/\!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\*\s*\[\]\(https:[^)]+\)/g, "")
    .replace(/\[\s*\]\((.*?)\)/g, "")
    .replace(/\[[^\]]*?\]\((https?:\/\/[^\s)]*)\)/g, "")
    .replace(/^\s*\[.*?\]\(\s*\/?\s*\)\s*$/gm, "")

    // Служебное и меню
    .replace(
      /^#+\s*(Products|Solutions|Learn|Company|Footer|Events|About|Blog|Resources|Legal|Sitemap|Terms.*|Subscribe.*|Follow us.*)$/gim,
      ""
    )
    .replace(/^[_|\-]{2,}$/gm, "")
    .replace(/^\*\s+\[[^\]]+]\([^)]+\)$/gm, "")
    .replace(/^ {2,6}[*-] [^\n]+$/gm, "")
    .replace(/^\s*[|]+\s*$/gm, "")
    .replace(/^(.+)\n\1$/gm, "$1")
    .replace(/^Copyright.+$/gim, "")
    .replace(/^\*\s*$/gm, "")
    .replace(/^### Other resources\s*$/gm, "")

    // До первого # (удалить хлам)
    .replace(/^[\s\S]*?(?=^# )/m, "")
    .replace(/^\s+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  // h1 → title
  const h1Match = cleaned.match(/^#\s+(.*)/m);
  const title = h1Match ? h1Match[1].trim() : "Untitled";

  // slug
  const slug = slugify(title);

  // excerpt — первый «осмысленный» абзац, без "undefined."
  const p = cleaned
    .replace(/^#.*$/gm, "")
    .split("\n\n")
    .map((x) => x.trim())
    .find((x) => x.length >= 40);

  const excerpt = p
    ? (() => {
        const e = p
          .replace(/[*_`[\]]+/g, "")
          .replace(/\s+/g, " ")
          .trim();
        return /[.!?…]$/.test(e) ? e : `${e}.`;
      })()
    : undefined;

  // featuredImage: валидируем + делаем абсолютный URL
  let featuredImage = isProbablyValidImage(data.featuredImage)
    ? data.featuredImage
    : undefined;
  if (featuredImage) {
    featuredImage = absolutizeWp(featuredImage);
  }

  // categories → массив
  let categories = data.categories;
  if (typeof categories === "string") categories = [categories];
  if (
    !Array.isArray(categories) ||
    categories.length === 0 ||
    categories[0] === "TODO"
  ) {
    categories = ["Kubernetes"];
  }

  // дата — оставляем, если была; иначе сегодняшняя YYYY-MM-DD
  const date = data.date || new Date().toISOString().slice(0, 10);

  const updated = {
    ...data,
    title,
    slug,
    ...(excerpt ? { excerpt } : {}),
    hubspotFormId: data.hubspotFormId || undefined,
    featuredImage, // <- уже отфильтровано и нормализовано
    categories,
    date,
    author: data.author,
    authorImage: data.authorImage,
  };

  // удалить undefined-ключи
  for (const k of Object.keys(updated)) {
    if (updated[k] === undefined) delete updated[k];
  }

  // чистим строки от мусорных скриптов
  const cleanedLines = cleaned
    .split("\n")
    .filter(
      (line) =>
        !/CDATA|\bleadin_wordpress\b|\blocalizedArray\b|window\._hsq|EnlighterJS|_hsq|leadinPluginVersion|var\s+\w+\s*=|!function/.test(
          line
        )
    )
    .join("\n");

  return matter.stringify(cleanedLines.trim(), updated);
}

// === Пути ===
const dirtyRoot = "src/content/learn/dirty";
const cleanRoot = "src/content/learn";

// Удалить все .mdx файлы из папки clean/
const allCleanMdx = await glob("**/*.mdx", {
  cwd: cleanRoot,
  absolute: true,
});

const oldCleanMdx = allCleanMdx.filter((file) => !file.includes("/dirty/"));
for (const file of oldCleanMdx) {
  await fs.unlink(file);
}

// === Поиск файлов ===
const files = await glob("**/*.mdx", {
  cwd: dirtyRoot,
  absolute: true,
  dot: true,
  nodir: true,
});

if (files.length === 0) {
  console.log("Нет .mdx файлов в папке dirty/");
  process.exit(0);
}

console.log(`Найдено ${files.length} файлов. Начинаем очистку...\n`);

let counter = 0;

for (const filePath of files) {
  const relativePath = path.relative(dirtyRoot, filePath);
  const outputPath = path.join(
    cleanRoot,
    relativePath.replace(/\.mdx$/, ".md").replace(/index\.mdx$/, "index.md")
  );
  const outputDir = path.dirname(outputPath);

  try {
    const raw = await fs.readFile(filePath, "utf8");
    const output = cleanMdxContent(raw);

    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(outputPath, output, "utf8");

    counter++;
    console.log(`${counter}/${files.length} → ${relativePath}`);
  } catch (err) {
    console.error(`Ошибка при обработке: ${relativePath}`, err.message);
  }
}

console.log(`Очистка завершена. Готово ${counter} файлов.`);
