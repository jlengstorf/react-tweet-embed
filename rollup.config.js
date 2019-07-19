import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    name: 'ReactTweetEmbed',
    file: 'index.js',
    format: 'iife',
    globals: { react: 'React' },
  },
  plugins: [resolve(), babel({ exclude: 'node_modules/**' })],
  external: ['react'],
};
