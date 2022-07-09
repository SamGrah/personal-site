import preprocess from "svelte-preprocess"
import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import copy from 'rollup-plugin-copy'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig)
  ],
	kit: {
		adapter: adapter()
	},
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  client: {
    plugins: [
      copy({
        targets: [
          { src: 'src/content/images/**/*.*', dest: 'static/images' }
        ]
      })
    ]
  }
};

export default config;
