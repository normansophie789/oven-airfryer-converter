import js from '@eslint/js'
import globals from 'globals'
import eslintReact from "@eslint-react/eslint-plugin";
import eslintJs from "@eslint/js"
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],

    extends: [
      eslintJs.configs.recommended,
      eslintReact.configs.recommended,
      js.configs.recommended
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    settings: { react: { version: '18.3' } },
    
    rules: {
    },
  },
]);
