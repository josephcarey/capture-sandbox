import js from "@eslint/js";
import html from "eslint-plugin-html";
import globals from "globals";

// Lints the inline <script> in index.html. Forge runs this after every change it makes.
export default [
  { ignores: ["node_modules/"] },
  js.configs.recommended,
  {
    files: ["**/*.html", "**/*.js", "**/*.mjs"],
    plugins: { html },
    languageOptions: { globals: globals.browser },
  },
];
