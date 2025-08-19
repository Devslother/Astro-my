// src/content/clean.mjs
import fs from "fs/promises";
import path from "path";
import { glob } from "glob";
import matter from "gray-matter";
import slugify from "@sindresorhus/slugify";

// -------------------- helpers --------------------

function isGoodFeatured(url = "") {
  const s = String(url).trim().toLowerCase();
  if (!/^https?:\/\//.test(s)) return false; // только http/https
  if (s.endsWith(".svg")) return false; // svg выкидываем
  if (s.includes("logo") || s.includes("placeholder")) return false;
  return true;
}

function makeDescription(txt = "") {
  const s = String(txt)
    .replace(/[*_`[\]]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!s) return undefined;
  const max = 170;
  return s.length <= max ? s : s.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

function findFirstHttpImage(md = "") {
  const m = md.match(/!\[[^\]]*]\((https?:\/\/[^\s)]+)\)/);
  return m ? m[1] : undefined;
}

// -------------------- core cleaner --------------------

export function cleanMdxContent(raw) {
  const { content, data } = matter(raw);

  // 1) description — СРАЗУ из "сырого" контента (до чистки)
  const rawExcerptCandidate = content
    .replace(/^#.*$/gm, "") // убрать заголовки
    .split("\n\n")
    .map((p) => p.trim())
    .find((p) => p.length > 40);

  const description =
    makeDescription(data.description) || makeDescription(rawExcerptCandidate);

  // 2) если нет нормального featuredImage — возьмём первую http(s) картинку из контента
  if (!isGoodFeatured(data.featuredImage)) {
    const firstImg = findFirstHttpImage(content);
    if (firstImg && isGoodFeatured(firstImg)) {
      data.featuredImage = firstImg;
    } else {
      delete data.featuredImage;
    }
  }

  // 3) чистка контента
  let cleaned = content
    // убрать JS/HTML‑скриптовый мусор
    .replace(/\/\/.*$/gm, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/var\s+_hsq\s*=.*?;?$/gim, "")
    .replace(/window\._hsq[\s\S]*?\];?/gim, "")
    .replace(/hbspt\.forms\.create[\s\S]*?\);?/gim, "")
    .replace(/_NBSettings\s*=\s*{[\s\S]*?};?/gim, "")

    // картинки: оставить только http/https, остальные вырезать
    .replace(/!\[[^\]]*]\((?!https?:\/\/)[^)]+\)/g, "")

    // вырезать "плохие" картинки даже с http/https (svg/logo/placeholder)
    .replace(/!\[[^\]]*]\((https?:\/\/[^\s)]+)\)/g, (m, url) => {
      const u = url.toLowerCase();
      if (u.endsWith(".svg")) return "";
      if (u.includes("logo") || u.includes("placeholder")) return "";
      return m;
    })

    // мусорные пустые ссылки / пункты
    .replace(/^\*\s*\[\s*]\(https?:\/\/[^\s)]+\)\s*$/gm, "") // "* [](https:...)"
    .replace(/^\s*\[\s*]\(\s*\/?\s*\)\s*$/gm, "") // "[]()" или "[](/)"

    // заголовки‑меню, футер и пр.
    .replace(
      /^#+\s*(Products|Solutions|Learn|Company|Footer|Events|About|Blog|Resources|Legal|Sitemap|Terms.*|Subscribe.*|Follow us.*)\s*$/gim,
      ""
    )
    .replace(/^[_|-]{2,}$/gm, "")
    .replace(/^ {2,6}[*-] [^\n]+$/gm, "")
    .replace(/^\s*[|]+\s*$/gm, "")
    .replace(/^(.+)\n\1$/gm, "$1")
    .replace(/^Copyright.+$/gim, "")
    .replace(/^\*\s*$/gm, "")
    .replace(/^###\s+Other resources\s*$/gim, "")

    // убрать всё до первого H1, если он есть
    .replace(/^[\s\S]*?(?=^# )/m, "")

    // косметика
    .replace(/^\s+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  // 4) заголовок/slug/excerpt
  const h1Match = cleaned.match(/^#\s+(.*)/m);
  const title =
    (data.title && String(data.title).trim()) ||
    (h1Match ? h1Match[1].trim() : "Untitled");

  const slug = (data.slug && String(data.slug).trim()) || slugify(title);

  const excerptCandidate = cleaned
    .replace(/^#.*$/gm, "")
    .split("\n\n")
    .map((p) => p.trim())
    .find((p) => p.length > 40);

  const excerpt = excerptCandidate
    ? excerptCandidate
        .replace(/[*_`[\]]+/g, "")
        .trim()
        .replace(/\s+\S*$/, "") + "."
    : data.excerpt || undefined;

  // 5) финальный фронтматтер
  const updated = {
    ...data,
    title,
    slug,
    excerpt,
    description, // теперь всегда заполняется из сырого контента
    featuredImage: isGoodFeatured(data.featuredImage)
      ? data.featuredImage
      : undefined,
    categories:
      Array.isArray(data.categories) &&
      data.categories.length > 0 &&
      data.categories[0] !== "TODO"
        ? data.categories
        : ["Kubernetes"],
    date: data.date || new Date().toISOString().slice(0, 10),
    author: data.author,
    authorImage: data.authorImage,
  };

  // убрать undefined
  for (const k of Object.keys(updated)) {
    if (updated[k] === undefined) delete updated[k];
  }

  return matter.stringify(cleaned, updated);
}

// -------------------- IO: dirty -> clean --------------------

const dirtyRoot = "src/content/learn/dirty";
const cleanRoot = "src/content/learn";

// подчистим прошлые .mdx из clean/ (кроме dirty/)
const allCleanMdx = await glob("**/*.mdx", { cwd: cleanRoot, absolute: true });
const oldCleanMdx = allCleanMdx.filter((f) => !f.includes("/dirty/"));
for (const f of oldCleanMdx) {
  await fs.unlink(f);
}

// собрать все .mdx из dirty/
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
    console.error(`Ошибка при обработке: ${relativePath} — ${err.message}`);
  }
}

console.log(`Очистка завершена. Готово ${counter} файлов.`);

// Очищаем папку dirty/ после обработки
console.log("\n🧹 Очищаем папку dirty/...");
const dirtyFiles = await glob("**/*", { cwd: dirtyRoot, absolute: true });
for (const f of dirtyFiles) {
  try {
    const stat = await fs.stat(f);
    if (stat.isFile()) {
      await fs.unlink(f);
    }
  } catch (err) {
    // Игнорируем ошибки при удалении
  }
}

// Удаляем пустые папки
const dirtyDirs = await glob("**/", { cwd: dirtyRoot, absolute: true });
for (const d of dirtyDirs.reverse()) {
  // reverse() чтобы удалять вложенные папки сначала
  try {
    await fs.rmdir(d);
  } catch (err) {
    // Игнорируем ошибки при удалении
  }
}

console.log("✅ Папка dirty/ очищена.");
