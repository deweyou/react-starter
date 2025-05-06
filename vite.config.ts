import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import UnoCSS from 'unocss/vite';
import path from 'path';
import Font from 'vite-plugin-font';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
    Font.vite({
      scanFiles: {
        default: ['public/locales/**/*.json}'],
      },
    }),
  ],
  resolve: {
    alias: {
      '##': path.resolve(__dirname, './src'),
    },
  },
});
