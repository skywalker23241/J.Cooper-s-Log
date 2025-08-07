// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://jcooper-s-log.netlify.app/',
	integrations: [
		mdx(),
		sitemap(),
		tailwind({
			// Disable default base styles to use our custom global.css
			applyBaseStyles: false,
		})
	],
	// Optimize build output
	build: {
		inlineStylesheets: 'auto',
	},
	// Improve development experience
	vite: {
		css: {
			devSourcemap: true,
		},
	},
});
