import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import tailwind from 'eslint-plugin-tailwindcss';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended, // ESLint 기본 권장
      ...tseslint.configs.recommended, // TypeScript 권장(배열)
      ...tailwind.configs['flat/recommended'], // Tailwind 플러그인 권장(배열)
      reactHooks.configs['recommended-latest'], // React Hooks 권장
      reactRefresh.configs.vite, // Vite 환경에서 React Refresh
    ],
    rules: {
      'tailwindcss/classnames-order': 'off', // 정렬은 Prettier가 담당하므로 충돌 방지
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  eslintConfigPrettier,
]);
