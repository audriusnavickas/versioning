import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		resolve(),
		babel({
			exclude: 'node_modules/**',
		}),
		commonjs(),
		uglify(),
	],
	external: ['react', 'react-dom'],
	output: {
        file: 'dist/bundle.js',
		format: 'cjs',
	},
};