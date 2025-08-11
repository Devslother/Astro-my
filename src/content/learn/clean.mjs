import fs from "fs/promises";
import path from "path";
import { glob } from "glob";
import matter from "gray-matter";
import slugify from "@sindresorhus/slugify";

// Очистка и нормализация одного MDX-файла
export function cleanMdxContent(raw) {
  const { content, data } = matter(raw);

  // Найти первое изображение
  const imgMatch = raw.match(/!\[.*?\]\(([^)]+)\)/);
  if (imgMatch && !data.featuredImage) {
    data.featuredImage = imgMatch[1];
  }

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
    .replace(/\*\s*\[\]\(https:[^)]+\)/g, "") // `* [](https:)`
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

  // h1-заголовок → title
  const h1Match = cleaned.match(/^#\s+(.*)/m);
  const title = h1Match ? h1Match[1].trim() : "Untitled";

  // slug
  const slug = slugify(title);

  // excerpt — первый абзац
  const excerpt =
    cleaned
      .replace(/^#.*$/gm, "")
      .split("\n\n")
      .find((p) => p.trim().length > 40)
      ?.replace(/[*_`[\]]+/g, "")
      .trim()
      .replace(/\s+\S*$/, "") + ".";

  // Финальный frontmatter
  const updated = {
    ...data,
    title,
    slug,
    excerpt,
    hubspotFormId: data.hubspotFormId || undefined,
    featuredImage: data.featuredImage || undefined,
    categories: data.categories,
    date: data.date || new Date().toISOString().slice(0, 10),
    author: data.author,
    authorImage: data.authorImage,
  };

  if (!updated.categories || updated.categories[0] === "TODO") {
    updated.categories = ["Kubernetes"];
  }

  // Удалить undefined
  for (const key in updated) {
    if (updated[key] === undefined) delete updated[key];
  }

  // Удалить скрипты и CDATA после markdown-а
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
  dot: true, // учитывать скрытые файлы
  nodir: true, // только файлы
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
