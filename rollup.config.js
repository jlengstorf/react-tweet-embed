import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'index.js',
    format: 'cjs',
    esModule: false,
  },
  plugins: [resolve(), babel({ exclude: 'node_modules/**' }), uglify()],
  external: ['react'],
};
