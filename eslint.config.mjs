import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    ignores: [
      ".codex-tmp/**",
      "dist/**",
      "node_modules/**",
      "Portfolio-main/**",
      "public/**",
      "scripts/**",
      "src/app/components/figma/**",
      "src/app/components/ui/**",
      "src/imports/**",
    ],
  },
  js.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}", "vite.config.ts"],
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        document: "readonly",
        fetch: "readonly",
        HTMLButtonElement: "readonly",
        HTMLFormElement: "readonly",
        HTMLElement: "readonly",
        KeyboardEvent: "readonly",
        React: "readonly",
        window: "readonly",
        __dirname: "readonly",
      },
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
