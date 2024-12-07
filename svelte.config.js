import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';
import { optimizeImports } from 'carbon-preprocess-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [sveltePreprocess(), optimizeImports()],

	kit: {
		// default is _app, but gh pages don't support special chars like _
		appDir: 'application',
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			fallback: '/200.html'
		}),
		paths: {},

		prerender: {
			handleHttpError: 'warn'
			// error triggered when I changed mainfest /favicon to /head.svg
			// https://kit.svelte.dev/docs/configuration#prerender
		}
	}
};

export default config;
