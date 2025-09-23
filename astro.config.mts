import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://gwenananaelle.github.io/curiousarttherapy-template/',
	base: '/curiousarttherapy-template/',
	vite: {
		plugins: [tailwindcss()],
	},
});
