import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    watch: {
      ignored: ['**/server/**'], // vite가 server폴더 아래 모든 파일을 감지하지 않는다. 그래서 변경되어도 리렌더링이 발생하지 않는다.
    },
  },
});
