import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react';

dotenv.config();

export default defineConfig({
	plugins: [react()],
	base: '/',
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	server: {
		proxy: {
			'/api': {
				target: 'https://api.openweathermap.org',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
});
