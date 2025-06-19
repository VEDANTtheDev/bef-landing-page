import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/bef-landing-page/', // 👈 Replace with your GitHub repo name if it's different
  plugins: [
    react(),
    tailwindcss(),
  ],
});
