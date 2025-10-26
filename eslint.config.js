import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import tailwind from 'eslint-plugin-tailwindcss';

export default defineConfig([
  globalIgnores(['dist']),
  js.configs.recommended, // ESLint 기본 권장
  ...tailwind.configs['flat/recommended'], // Tailwind 플러그인 권장(배열)
  ...tseslint.configs.recommended, // TypeScript 권장(배열)
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactHooks.configs['recommended-latest'], // React Hooks 권장
      reactRefresh.configs.vite, // Vite 환경에서 React Refresh
    ],
    rules: {
      'tailwindcss/classnames-order': 'off', // 정렬은 Prettier가 담당하므로 충돌 방지
       "@typescript-eslint/no-unused-vars": 'warn',  // 사용되지 않은 변수가 있다면 경고
       "@typescript-eslint/no-explicit-any": 'warn' // 명시적으로 any를 사용하면 경고 
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
