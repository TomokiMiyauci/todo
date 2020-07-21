const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
        postcss: {
          plugins: [require('autoprefixer')()]
        },
        defaults: {
          script: 'typescript',
          style: 'scss'
        }
    // ...svelte-preprocess options
  }),
  // ...other svelte options
};
