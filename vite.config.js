import { defineConfig } from 'vite';
import { million } from 'million/vite-plugin-million';

// https://vitejs.dev/config/
export default defineConfig({
  debug: 'source-map',
  plugins: [million({ react: true })],
});
