import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import eslint  from '@rollup/plugin-eslint';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import _ from 'lodash';

import pkg from './package.json';

const rollupConfig = {
  input: './src/index.ts',
  output: [
    { file: `dist/${pkg.name}.esm.js`, format: 'es' },
    { file: `dist/${pkg.name}.umd.js`, format: 'umd', name: _.camelCase(pkg.name) },
  ],
  plugins: [
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**/*.ts', 'src/**/*.js'],
      exclude: ['node_modules/**', 'dist/**', 'test/**', 'docs/**'],
    }),
    typescript({
      // 默认tslib是peerDependencies
      tslib: require.resolve('tslib')
    }),
    commonjs({ extensions: ['.js', '.ts'] }),
    resolve({
      moduleDirectories: ['node_modules']
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions: [ ...DEFAULT_EXTENSIONS, '.ts' ],
    }),
  ],
}

export default rollupConfig