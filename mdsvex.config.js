import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import relativeImages from "mdsvex-relative-images";
import copy from 'rollup-plugin-copy'

import { fileURLToPath } from 'url';
import * as path from 'path';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineConfig({
  extensions: ['.md', '.svx'],
  smartypants: {
    dashes: 'oldschool'
  },
  layout: { blog: path.join(dirname, './src/routes/blog/__layout.svelte') },
  remarkPlugins: [relativeImages],
  plugins: [
    copy({
      targets: [
        { src: 'src/content/images/*.*', dest: 'static/images' }
      ]
    })
  ]
});

export default config;