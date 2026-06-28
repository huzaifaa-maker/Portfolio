import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  js.configs.recommended,
  {
    ignores: ["dist", "node_modules"],
  },
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: undefined,
      },
    },
    plugins: {
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // Project-specific: allow anchors used for scroll (no href-to-id enforcement)
      "jsx-a11y/anchor-is-valid": "off",

      // Prefer explicit types only where necessary
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
