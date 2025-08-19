import fs from "fs";
import path from "path";
import { glob } from "glob";

// Правила замены ссылок
const linkReplacements = [
  // Убираем слеши в конце
  { pattern: /\[([^\]]+)\]\(\/([^)]+)\/\)/g, replacement: "[$1](/$2)" },

  // Заменяем неправильные пути
  { pattern: /\/faq\//g, replacement: "/learn/" },
  { pattern: /\/api-gateway\//g, replacement: "/learn/what-is-an-api-gateway" },

  // Исправляем незавершенные ссылки
  {
    pattern: /\[Get access now ›\]\(https:/g,
    replacement: "[Get access now ›](/demo-request/)",
  },
  {
    pattern: /\[Quick start ›\]\(https:/g,
    replacement: "[Quick start ›](/quick-start/)",
  },
  {
    pattern: /\[User guides ›\]\(https:/g,
    replacement: "[User guides ›](/user-guides/)",
  },

  // Общее правило для всех незавершенных ссылок https:
  {
    pattern: /\[([^\]]+)\]\(https:$/gm,
    replacement: "[$1](/external-link/)",
  },

  // Убираем CSS код
  {
    pattern:
      /\.wp-block-quote \{ padding: 1rem; background-color: #F5F5F5; \}/g,
    replacement: "",
  },

  // Можно добавить больше правил
];

function fixLinksInFile(filePath) {
  console.log(`Processing: ${filePath}`);

  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  linkReplacements.forEach(({ pattern, replacement }) => {
    const newContent = content.replace(pattern, replacement);
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Fixed: ${filePath}`);
  } else {
    console.log(`⏭️  No changes: ${filePath}`);
  }
}

// Находим все MD файлы
const mdFiles = glob.sync("src/content/learn/**/*.md");

console.log(`Found ${mdFiles.length} MD files to process...\n`);

mdFiles.forEach(fixLinksInFile);

console.log("\n✅ Link fixing completed!");
