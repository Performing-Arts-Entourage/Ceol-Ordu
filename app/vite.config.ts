import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
// import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // mkcert(),
        react()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    server: {
        // https: true
    }
});
