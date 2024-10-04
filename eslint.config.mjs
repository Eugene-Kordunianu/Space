import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier"; // Додаємо конфігурацію Prettier
import importPlugin from "eslint-plugin-import"; // Додаємо плагін Import
import prettierPlugin from "eslint-plugin-prettier"; // Додаємо плагін Prettier
import pluginReact from "eslint-plugin-react";
import globals from "globals";

const res = [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier, // Включаємо конфігурацію Prettier як частину масиву
  {
    settings: {
      react: {
        version: "detect", // Визначає версію React автоматично
      },
    },
  },
  {
    plugins: {
      import: importPlugin, // Додаємо плагін Import у форматі об'єкта
      prettier: prettierPlugin, // Додаємо плагін Prettier
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "prettier/prettier": "error", // Використовуємо правила Prettier для перевірки
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];

//console.log(res);
export default res;
