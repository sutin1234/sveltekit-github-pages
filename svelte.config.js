import preprocess from 'svelte-preprocess';
import githubAdapter from 'svelte-adapter-github';

const config = {
	preprocess: preprocess(),

	kit: {
		adapter: githubAdapter({
			fallback: 'index.html',
			pages: 'public'
		}),
		target: '#svelte',
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
