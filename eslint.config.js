import js from '@eslint/js' // ESLint의 기본 JavaScript 규칙들을 가져옴
import globals from 'globals' // 브라우저 전역 변수(예: window, document)를 허용
import reactHooks from 'eslint-plugin-react-hooks' // React Hooks 관련 ESLint 규칙 플러그인
import reactRefresh from 'eslint-plugin-react-refresh' // React Fast Refresh 규칙 플러그인 (개발 중 핫 리로드 지원)
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended' // 임포트

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      eslintPluginPrettierRecommended // 맨 끝에.
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    }
  }
])
