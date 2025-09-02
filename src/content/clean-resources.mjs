import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, "resources", "dirty");
const targetDir = path.join(__dirname, "resources");

// Функция для очистки frontmatter
function cleanFrontmatter(content) {
  // Убираем лишние пробелы и переносы строк
  let cleaned = content.replace(/\n\s*\n/g, "\n\n");

  // Убираем пустые строки в начале и конце
  cleaned = cleaned.trim();

  // Убираем лишние пробелы в начале строк
  cleaned = cleaned
    .split("\n")
    .map((line) => line.trimStart())
    .join("\n");

  return cleaned;
}

// Функция для обработки одного файла
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const cleanedContent = cleanFrontmatter(content);

    // Создаем относительный путь от sourceDir
    const relativePath = path.relative(sourceDir, filePath);
    const targetPath = path.join(targetDir, relativePath);

    // Создаем директорию если нужно
    const targetDirPath = path.dirname(targetPath);
    fs.mkdirSync(targetDirPath, { recursive: true });

    // Сохраняем очищенный файл
    fs.writeFileSync(targetPath, cleanedContent);

    console.log(`✅ Processed: ${relativePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Основная функция
function main() {
  console.log("🚀 Starting resources files cleanup...");

  if (!fs.existsSync(sourceDir)) {
    console.error(`❌ Source directory not found: ${sourceDir}`);
    return;
  }

  // Создаем target директорию если нужно
  fs.mkdirSync(targetDir, { recursive: true });

  // Находим все .mdx файлы
  const files = [];

  function findFiles(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findFiles(fullPath);
      } else if (item.endsWith(".mdx")) {
        files.push(fullPath);
      }
    }
  }

  findFiles(sourceDir);

  if (files.length === 0) {
    console.log("No .mdx files found to process");
    return;
  }

  console.log(`Found ${files.length} files to process`);

  let successCount = 0;
  let totalCount = files.length;

  // Обрабатываем каждый файл
  for (const file of files) {
    if (processFile(file)) {
      successCount++;
    }
  }

  console.log(`\n🎉 Cleanup completed!`);
  console.log(`✅ Successfully processed: ${successCount}/${totalCount} files`);
  console.log(`📁 Clean files saved to: ${targetDir}`);
}

main();
