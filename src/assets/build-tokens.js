const fs = require("fs");
const path = require("path");

const INPUT_FILE = "tokens.json";
const OUTPUT_FILE = "variables.css";

// colorFaceitOrange500 -> --color-faceit-orange-500
const toCssVar = (str) => {
  return (
    "--" +
    str
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2") // вставляет дефис перед заглавными
      .toLowerCase()
      .replace(/(?<!\-)\d+/g, "-$&")
  );
};

const firstKey = (str) => {
  return toCssVar(str.replace(/^.*?[a-z]([A-Z].*)$/g, "$1"));
};

try {
  // 1. Читаем JSON
  const rawData = fs.readFileSync(path.join(__dirname, INPUT_FILE), "utf-8");
  let filteredData = rawData
    .replace(/\\n/g, "") // Убираем символы переноса
    .replace(/\\t/g, "") // Убираем символы табуляции
    .replace(/\\"/g, '"') // Заменяем экранированные кавычки на обычные
    .trim();
  filteredData = filteredData.substring(1, filteredData.length - 1);

  const tokens = JSON.parse(filteredData);

  let cssContent = "/* Auto-generated from faceit-tokens.json */\n:root {\n";
  let cssDark = "body.dark {\n";
  let cssLight = "body.light {\n";

  // 2. Обрабатываем BRAND (Примитивы)
  if (tokens.brand && tokens.brand.default) {
    cssContent += "\n  /* --- Brand Primitives --- */\n";
    for (const [key, value] of Object.entries(tokens.brand.default)) {
      cssContent += `  ${toCssVar(key)}: ${value};\n`;
    }
  }

  // 3. Обрабатываем THEME (Семантика/Алиасы)
  if (tokens.theme && tokens.theme.default) {
    for (const [key, value] of Object.entries(tokens.theme.default)) {
      if (key.match(/^[a-z]+(?=[A-Z])/g)[0] === "light") {
        cssLight += ` ${firstKey(key)}: ${value};\n`;
      } else {
        cssDark += ` ${firstKey(key)}: ${value};\n`;
      }
    }
  }

  cssContent += `}\n ${cssDark} \n } ${cssLight} \n }`;

  // 4. Записываем файл
  fs.writeFileSync(path.join(__dirname, OUTPUT_FILE), cssContent);

  console.log(`✅ Успешно! Файл ${OUTPUT_FILE} создан.`);
  console.log(`   Найдено токенов Brand: ${Object.keys(tokens.brand?.default || {}).length}`);
  console.log(`   Найдено токенов Theme: ${Object.keys(tokens.theme?.default || {}).length}`);
} catch (error) {
  console.error("❌ Ошибка:", error.message);
}
