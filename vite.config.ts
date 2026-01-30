import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const repo = process.env.REPO_NAME || 'chinese-fox-ui';
const isPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isPages ? `/${repo}/` : '/',
  plugins: [vue()],
  server: {
    port: 5173
  }
});

