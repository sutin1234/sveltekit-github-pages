import preprocess from 'svelte-preprocess';
import githubAdapter from 'svelte-adapter-github';
import staticAdapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

const config = {
	preprocess: preprocess(),

	kit: {
		paths: {
			base: dev ? '' : '/sveltekit-github-pages',
		},
		adapter: githubAdapter({
			fallback: 'index.html',
			pages: 'build',
			domain: null
		}),
		// adapter: staticAdapter({
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null
		// }),
		target: '#svelte',
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
